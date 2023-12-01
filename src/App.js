import React, { useState } from "react";
import GoogleLogin from "react-google-login"; 
 
function App ()
{
	const [name, setName] = useState(); 
	const [email, setEmail] = useState(); 
	const [profilePic, setProfilePic] = useState(); 
	const [isLoggedIn, setIsLoggedIn] = useState(false); 

	const responseGoogle = (response) => 
	{ 
		const { profileObj: { name, email, imageUrl }, 
	 } = response; 
		setName(name); 
		setEmail(email);  
		setProfilePic(imageUrl); 
		setIsLoggedIn(true); 
	}


	return (
    <div className="container">
      <GoogleLogin 
				clientId="51327336967-h5kl3utpnjlf4v6am3q399t3rfb9qagp.apps.googleusercontent.com"   
				buttonText="Continuar com o Google" 
				onSuccess={responseGoogle}  
				onFailure={responseGoogle}  
			/>
			{ isLoggedIn ? <div> 

			<h1>User Information</h1>  
			<img className="profile" src={profilePic} alt="Profile"/> 
			<p>Name: { name }</p> 
			<p>Email: { email }</p>
 
			</div> : ' '} 
    </div> 
  ); 
}

export default App;