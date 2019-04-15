import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, Image, ActivityIndicator } from 'react-native';
import Input from './Input';
import Button from './CustomButton';
import firebase from 'firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

class EmployeeCreate extends Component {
     
    constructor(props) {
        super(props);

        this.state = { 
            pickerValue: "Monday",
            name: '',
            phone: '',
            shift: 'Monday',
            loading: false
            //totalEmployees: 0
        };
    }

    createEmployee = () => {  
        
        const { currentUser } = firebase.auth();
        const { name, phone, shift } = this.state;

        this.setState({loading: true});

        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => this.props.navigation.navigate('Home'));
    }

    renderCreateButton() {
        if(this.state.loading)
        {
            return <ActivityIndicator size='large' />;
        }
        return (
            <Button
                text="Create" 
                onPress={this.createEmployee.bind(this)}
            />
        );
    }

    static navigationOptions = {
        header: null
    };


  render() {
    return (
        <View style={{flex: 1}} >
            <View style={styles.headerStyle} >
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Home')}
                >
                    <Image
                        style={{ height: 25, width: 25, marginTop: 25 }}
                        source={require('../resources/backArrow.png')} 
                    />
                </TouchableOpacity>
                <Text style={styles.headerTextStyle} >Create Employee</Text>
                <View />
            </View>
        
            <View style={{alignItems: 'center', marginTop: 50}} >
                <View style={styles.componentViewStyle} >
                    <Text style={styles.textStyle} >Name</Text>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        autoCorrect={false}
                        value={this.state.name}
                        onChangeText={(name) => this.setState({name})}
                    />
                    <Text style={styles.textStyle}>Phone</Text>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.state.phone}
                        autoCorrect={false}
                        onChangeText={(phone) => this.setState({phone})}
                    />
                    <Text style={styles.textStyle}>Day</Text>
                    <Picker
                        selectedValue={this.state.shift}
                        //onValueChange={this.handleChangeDayState.bind(this)}
                        onValueChange={(shift) => this.setState({shift})}
                        style={{marginBottom: 5}}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday"/>
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                    
                    <View>
                        {this.renderCreateButton()}
                    </View>

                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    headerStyle: {
        width: '100%',
        height: 100,
        backgroundColor: '#FB6637',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center' ,
    },
    headerTextStyle: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 25,
        //padding: 10,
    },
    componentViewStyle: {
        height: 550,
        justifyContent: 'space-around',
        //marginBottom: 40,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
    }
});

export default EmployeeCreate;

// import React, { Component } from 'react';
// import { View, Text, StyleSheet, Picker, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
// import Input from './Input';
// import Button from './CustomButton';
// import firebase from 'firebase';
// import EmplyeeForm from './EmployeeForm';
// //import { TouchableOpacity } from 'react-native-gesture-handler';

// class EmployeeCreate extends Component {
     
//     constructor(props) {
//         super(props);

//         this.state = { 
//             pickerValue: "Monday",
//             name: '',
//             phone: '',
//             shift: 'Monday',
//             loading: false
//             //totalEmployees: 0
//         };
//     }

//     createEmployee = () => {  

//         const { currentUser } = firebase.auth();
//         const { name, phone, shift } = this.state;

//         this.setState({loading: true});

//         firebase.database().ref(`/users/${currentUser.uid}/employees`)
//         .push({ name, phone, shift })
//         .then(() => this.props.navigation.navigate('Home'));
//     }

//     renderCreateButton() {
//         if(this.state.loading)
//         {
//             return <ActivityIndicator size='large' />;
//         }
//         return (
//             <Button
//                 text="Create" 
//                 onPress={this.createEmployee.bind(this)}
//             />
//         );
//     }

//     static navigationOptions = {
//         header: null
//     };


//   render() {
//     return (
//         <View style={{flex: 1}} >
//             <View style={styles.headerStyle} >
//                 <TouchableOpacity
//                     onPress={() => this.props.navigation.navigate('Home')}
//                 >
//                     <Image
//                         style={{ height: 25, width: 25, marginTop: 25 }}
//                         source={require('../resources/backArrow.png')} 
//                     />
//                 </TouchableOpacity>
//                 <Text style={styles.headerTextStyle} >Create Employee</Text>
//                 <View />
//             </View>
        
//             <View style={{alignItems: 'center', marginTop: 50}} >

//                 <EmplyeeForm {...this.props} />
                    
//                 <View>
//                     {this.renderCreateButton()}
//                 </View>
//             </View>
//         </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     headerStyle: {
//         width: '100%',
//         height: 100,
//         backgroundColor: '#FB6637',
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center' ,
//     },
//     headerTextStyle: {
//         fontSize: 25,
//         color: 'white',
//         fontWeight: 'bold',
//         marginTop: 25,
//         //padding: 10,
//     },
//     componentViewStyle: {
//         height: 550,
//         justifyContent: 'space-around',
//         //marginBottom: 40,
//     },
//     textStyle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         paddingTop: 10,
//     }
// });

// export default EmployeeCreate;

