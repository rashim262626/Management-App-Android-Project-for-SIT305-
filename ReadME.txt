We are creating a Management Application specifically targeted to the managers of any organisation. 
The Manager will be able to manage all the shifts, rosters, tasks, add a new employee or fire an existing one. 
The manager will also be able to send an email to inform his employee about any changes in roster, etc.
We will use database in it. There will also be server side coding in it to store data and fetch data of employees.
We will also add Facebook/ Google connectivity for sign in and sign up purpose. 
We will further add more features as the works goes on. 

GitHub Link to our repository is :-
https://github.com/rashim262626/Management-App-Android-Project-for-SIT305-.git

Our (Developers) details are as follow:-
Rashim Kumar (215282423)
Thavin (213401504)

API Reference:
-------------------------------------------------
Class: SignInScreen

Method: onLoginButtonPress()
This method is called from from renderButton() which presents the user with a button to sign in after typing in their username and password.
onLoginButtonPress() will take a username and password and pass these variables to the firebase method signInWithEmailAndPassword. If it is accepted the user will be navigated to the home page of the app if not then login will fail.

function onLoginButtonPress() {
	email = user input in email field;
	password = user input from password field;
	Begin loading database
	Send email and password for authentication to firebase
	If the email and password are accepted then navigate to home page and load relevent data from database and 	clear email and password variables
	else login fails

	end
}

Method: onLoginFail()
This method presents an error if the user inputs incorrect email and or password.
This method is called from onLoginButtonPress()

function onLoginFail() {
	Save error message and stop loading database

	end
}

Method: onLoginSuccess()
This method will clear stored variables regarding email, password and error messages and then navigate to the home page.
This method is called from onLoginButtonPress()

function onLoginSuccess() {
	email  = null
	password = null
	Navigate user to app home page

	end
}
-------------------------------------------------
Class: SignUpScreen

Method: onSignUpButtonPress()
This method will take the user input fields email and password then send them to firebase function createUserWithEmailandPassword()
This method is called when the user presses the sign up button.

function onSignUpButtonPress() {
	email = user input from email field
	password = user input from password field
	Send email and password to firebase server for creation. If accepted then clear variables and send user to home 	screen loading in related data from database.
	If account creation fails then stop loading and display error.

	end
}
-------------------------------------------------
Class Loading

Method: componentWillMount()
This method will trigger when the class is called similar to a constructor.
This method will connect the user to the database.

function componentWillMount() {
	Fill in required fields with database data
	navigate user to home screen if error then user is sent back to sign in screen.
	
	end
}
-------------------------------------------------
Class: Home

Method: EmployeesFetch()
This method will connect the signed in user with the database entries regarding employees.
This method is called upon launch of the home screen.

function EmplyoeesFetch() {
	Authenticate logged in user
	Access app database and take user ID to match up with data variables related to user logged in
	Set employee data into friends array
	end
}