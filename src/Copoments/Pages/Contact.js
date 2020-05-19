import React,{Component} from 'react';
import './contact.css';
import {Link} from "react-router-dom";
import {FaMapMarkerAlt } from "react-icons/fa";
 import {FaPhoneAlt} from "react-icons/fa";
 import { FiMail } from "react-icons/fi";
 import { AiFillTwitterCircle } from "react-icons/ai";
 import { FaFacebook } from "react-icons/fa";
 import { FiInstagram } from "react-icons/fi";
 import firebase from '../../firebase SDK/firebase';

class Contact extends Component {
  state={
    Name:null,
    Phone:null,
    Message:null,
    Email:null,
    Company:null
  }

  onSubmit =()=>{
const Data = firebase.database().ref('users/').child('Contact/').push({
        Name:this.state.Name,
        Phone:this.state.Phone,
        Message:this.state.Message,
        Email:this.state.Email,
        Company:this.state.Company

});
  }
  handleChange=({target})=>{
 this.setState({ [target.name]:target.value});
  }


 
  render(){
    return (
        <div className="Contact_body bestContainer">
        
   <div className="container">
  <div className="row">
   
    <div className="column" style={{backgroundColor:"#f9f9f9", width:"35%", height:"65vh",paddingLeft:"1vw"}}>
     
      <h3 className="left"> Send us a Message</h3>
<br />
      <form >
        <div className="fbody">
        
          <label htmlFor="text" className="top-left"><b> Your Name</b></label>
          <input type="text" onChange={this.handleChange} className= "form-control title"  name="Name" required  />
          <br />
          <label htmlFor="pack_age" className="top-left"><b>Phone</b></label>
          <input type="number"  onChange={this.handleChange} className= "form-control title"  name="Phone" required />
         <br />
         <label htmlFor="psw-repeat" className="top-left"><b>Message</b></label>                                       
         <textarea  className="form-control descreption_text" onChange={this.handleChange} rows="3" cols="50"  name="Message" required></textarea>
      
        </div>
      </form>
  <br />
  </div>
    

  <div className="column" style={{backgroundColor:"#f9f9f9", width: "30%", height:"65vh"}}>
    <div className="fbo">
    <label htmlFor="text" className="top-left"><b>Email Address</b></label>
<input type="text" className= "form-control title" onChange={this.handleChange}  name="Email" required />
<br />
<label htmlFor="text" className="top-left"><b>Company</b></label>
<input type="text" className= "form-control title" onChange={this.handleChange} name="Company" required />
<br />
<button type="submit" className="btn btn_class" onClick={this.onSubmit} ><img src={require("../Images/download (1).png")} width="54" height="54" className="fixedbutton position" /></button>
</div>
  </div>


    <div className="column" style={{backgroundColor:"#041945", width:"35%",height:'65vh'}}>
      <br />
      <h3 style={{color:"white"}}>Contact Information </h3>
      <br />
      <p style={{color:"white" ,}}>   <FaMapMarkerAlt size="20"/>  Rashtriya Mahila Kosh, Samaj Kalyan Bhawan, B-12,
               Floor Qutab Institutional Area,
          New Delhi - 110016
                
</p><br />
      <p style={{color:"white"}}> <FaPhoneAlt />  +91-11-26567187 / 26567188</p><br />
      <p style={{color:"white"}} > <FiMail  />  ed_rmk@nic.in</p><br />
      <Link to="https://twitter.com" className="fa fa-twitter "> <AiFillTwitterCircle color="white" size="35"/></Link>
      <Link to="https://www.linkedin.com" className="fa fa-linkedin"> <FaFacebook color="white" size="28" /></Link>
      <Link to="https://www.instagram.com" className="fa fa-instagram"> <FiInstagram  color="white" size="28"/></Link>
    </div>

  </div>
  </div>

</div>  
        
    );
  }
}
export default Contact;
