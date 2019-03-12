import React, { Component } from "react";

import { Image, Button} from 'react-bootstrap';
// style={{ textDecoration: 'none', paddingRight:'220px', color:'black'}}>
import firebase from 'firebase'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
export default class SignInEmail extends Component {
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  render(){
    return(
      <div className='inline'>
      <StyledFirebaseAuth className='reduce-width'
        uiConfig={this.uiConfig}
        firebaseAuth={firebase.auth()}
      />
    </div>
    )}
}


