import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ListView, 
    TouchableOpacity,
    FlatList 
} from 'react-native';
//import ListItem from '../components/ListItem';
import _ from 'lodash';
import { CardSection } from "../components/common/CardSection";
import firebase from 'firebase';
import Header from '../components/Header';
import Button from '../components/CustomButton';

/*
    Home screen class. It will render when user sign in to app or create new
    email and then sign in to app.
*/

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
        totalEmployees: 1,
        name: '',
        phone: '',
        shift: '',
        loading: false,
        friends: [],
        // dataSource: new ListView.DataSource({
        //     rowHasChanged: (row1, row2) => row1 !== row2,
        // })
    };
  }

    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        this.EmployeesFetch();
    }

    EmployeesFetch = () => {

        const { currentUser } = firebase.auth();
        var db = firebase.database();
        var ref = db.ref(`/users/${currentUser.uid}/employees/`);

        ref.on('value', snapshot => {
            const friends = _.map(snapshot.val(), (val, uid) => {
              return {...val, uid}
            });
            this.setState({friends, loading: false})
        });
    }

    //Logout user method
    onLogoutButtonPress = async () => {
        try {
            await firebase.auth().signOut();
            this.props.navigation.navigate('SignInScreen');
        } catch (e) {
            console.log(e);
        }
    }

    renderItem({item}) {
        
        const { name } = item;
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('CreateEmployee')}
            >
                <CardSection>
                    <Text style={styles.employeeNameStyle} >{name}</Text>  
                </CardSection>

            </TouchableOpacity>
        );
    }

    //----------Rendering list of employees added
    // renderEmployees() {
    //       return (
    //         <View style={styles.employeeContainerStyle}>
    //           <FlatList
    //             data={this.state.friends}
    //             renderItem={this.renderItem}
    //             keyExtractor={item => item.uid}
    //           />
    //         </View>
    //       );
    // }
    //------Render method of home screen

    cb = () => {
        this.props.navigation.navigate('EmployeeCreate');
    }

  render() {

    return (

        <View style={styles.viewStyle}>

            <View >
                <Header
                    onPress={() => this.props.navigation.navigate('EmployeeCreate')}
                />
            </View>
            
            {/* {this.renderEmployees()} */}

            <View style={styles.employeeContainerStyle}>
              <FlatList
                data={this.state.friends}
                renderItem={({item}) => 
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('EmployeeEditForm', {item})}
                    >
                        <CardSection>
                            <Text style={styles.employeeNameStyle} >{item.name}</Text>  
                        </CardSection>

                    </TouchableOpacity>
                }
                keyExtractor={item => item.uid}
              />
            </View>

            <View style={{alignItems: 'center', marginBottom: 20}} >
                <Button 
                    text="Log Out"
                    onPress={() => this.onLogoutButtonPress()}
                />
            </View>
            
        </View>
    );
  }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    instructionViewStyle: {
        marginHorizontal: 35,
        width: '80%',
        height: 700,
        justifyContent: 'center',
        alignItems: 'center'
    },
    instructionTextStyle: {
        fontSize: 20,
        textAlign: 'center'
    },
    employeeContainerStyle: {
        flex: 1,
        width: '95%',
        //marginTop: 20,
        marginVertical: '5%',
    },
    employeeTextStyle: {
        fontSize: 20,
        paddingLeft: 22,
    },
    //------Listem item code is merging here now.
    containerStyle: {
        marginHorizontal: 10,
        borderColor: 'black',
        borderWidth: 2,
        width: '95%',
        //height: 700,
        justifyContent: 'center',
        alignItems: 'center'
      },
      employeeNameStyle: {
        fontSize: 25,
        paddingLeft: 20,
        //textAlign: 'center'
      }
});

export default Home;







// import React, { Component } from 'react';
// import { View, Text, StyleSheet, ListView } from 'react-native';
// import ListItem from '../components/ListItem';
// import _ from 'lodash';
// import firebase from 'firebase';
// import Header from '../components/Header';
// import Button from '../components/CustomButton';

// /*
//     Home screen class. It will render when user sign in to app or create new
//     email and then sign in to app.
// */

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         totalEmployees: 1,
//         name: '',
//         phone: '',
//         shift: '',
//         dataSource: new ListView.DataSource({
//             rowHasChanged: (row1, row2) => row1 !== row2,
//         })
//     };
//   }

//     static navigationOptions = {
//         header: null
//     };

//     componentWillMount() {

//         this.EmployeesFetch();
//     }

//     EmployeesFetch = () => {

//         const { currentUser } = firebase.auth();
//         var db = firebase.database();
//         var ref = db.ref(`/users/${currentUser.uid}/employees/`);

//         ref.on('value', snapshot => {
//             this.ConvertToArray(snapshot.val());
//         });
//     }

//     ConvertToArray = (dataEmployee) => {

//         const employees = _.map(dataEmployee, (val, uid) => {
//             return { ...val, uid };
//         });

//         this.createDataSource({employees});
//     }

//     createDataSource({ employees }) {
//         this.setState({dataSource: this.state.dataSource.cloneWithRows(employees)});
//         //alert(this.state.dataSource.getRowCount());
//     }

//     //Logout user method
//     onLogoutButtonPress = async () => {
//         try {
//             await firebase.auth().signOut();
//             this.props.navigation.navigate('SignInScreen');
//         } catch (e) {
//             console.log(e);
//         }
//     }

//     renderRow(employee) {
//         return <ListItem 
//             employee={employee} 
//             //onPress={this.props.navigation.navigate("EmployeeEditForm")}
//             //navigation={this.props.navigation}
//         />
//     }

//     //Rendering list of employees added
//     renderEmployees() {
//         if(this.state.totalEmployees > 0) {
//             return(
//                 <View style={styles.employeeContainerStyle} >
//                    <ListView 
//                     enableEmptySections
//                     dataSource={this.state.dataSource}
//                     renderRow={this.renderRow}
//                     //navigation={this.props.navigation}
//                    />
//                 </View>
//             );
//         }

//         return (
//             <View style={styles.instructionViewStyle} >
//                 <Text style={styles.instructionTextStyle} >
//                     Add employees by pressing Add button
//                 </Text>
//             </View>
//         );
//     }

//     //Render method of home screen
//   render() {

//     return (

//         <View style={styles.viewStyle}>

//             <View >
//                 <Header 
//                     //onPress={() => this.props.navigation.navigate("EmployeeEditForm", {val:this.state.totalEmployees})}
//                     onPress={() => this.props.navigation.navigate('CreateEmployee')}
//                 />
//             </View>
            
//             {this.renderEmployees()}

//             <View style={{alignItems: 'center', marginBottom: 20}} >
//                 <Button 
//                     text="Log Out"
//                     onPress={() => this.onLogoutButtonPress()}
//                 />
//             </View>
            
//         </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     viewStyle: {
//         flex: 1,
//         backgroundColor: 'white',
//     },
//     instructionViewStyle: {
//         marginHorizontal: 35,
//         width: '80%',
//         height: 700,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     instructionTextStyle: {
//         fontSize: 20,
//         textAlign: 'center'
//     },
//     employeeContainerStyle: {
//         flex: 1,
//         width: '95%',
//         //marginTop: 20,
//         marginVertical: '5%',
//     },
//     employeeTextStyle: {
//         fontSize: 20,
//         paddingLeft: 22,
//     },
// });

// export default Home;
