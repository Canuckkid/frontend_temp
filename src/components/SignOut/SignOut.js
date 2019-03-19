import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './signOut.css'
import { Image, Button} from 'react-bootstrap';
// style={{ textDecoration: 'none', paddingRight:'220px', color:'black'}}>
import firebase from 'firebase'

class SignOut extends Component {
  signOut() {
    firebase.auth().signOut()
  }
  render(){
    //simple session management, pass down the authUser from App.js as a prop
    return(
      <button id='signout-button' className='btn btn-primary' onClick={() => this.signOut()}>Sign out!</button>
    )}
}

export default SignOut
