import React,{ Component } from 'react';
import firebase from '../../firebase SDK/firebase';
class FirebaseTest extends Component{
    constructor(props){
        super(props);
           this.state={
                email:'varshangshrimali@yahoo.com',
                password:'324567',
                data:[],
                image:null,
                url:'',
                progress:0
              }
        this.handleChange=this.handleChange.bind(this);
        this.handleUpload=this.handleUpload.bind(this);
    }
   
 handleChange = e =>{
    if (e.target.files[0]) {
        const image = e.target.files[0];
        this.setState(() => ({ image }));
      }
 }
 handleUpload =()=>{
    console.log(this.state.image);
    const {image} = this.state;
    const uploadTask = firebase.storage().ref().child('images/'+image.name).put(image);
// here code start of retrieving the image
uploadTask.on(
    "state_changed",
    snapshot => {
      // progress function ...
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      this.setState({ progress });
    },
    error => {
      // Error function ...
      console.log(error);
    },
    () => {
      // complete function ...
     firebase.storage()
        .ref("images/")
        .child(image.name)
        .getDownloadURL()
        .then(url => {
          this.setState({ url });
        });
    }
  );
 }
    writeData=()=>{
      const data = firebase.database().ref('users/').push(this.state);
        console.log('Data saved',data);
    }
    readData=()=>{
        const newData = firebase.database().ref('users/');
        newData.on('value',(snapshot)=>{
            let items =[];
            snapshot.forEach((child)=>{
              items.push({
                City_Name:child.val().email,
                Name_value: child.val().password,
            //    Email_value:child.val().Email,
            //    profile_img:child.val().url,
            //    total_item:child.val().Totaldonation
              });
            });
            this.setState({ data:items});
            console.log(this.state.data);      
        })
    }
    displayData =()=>{
        return (<div>
            {this.state.data.map((item, index) => (
                <p key={index}>{item.City_Name}
                {item.Name_value}
                </p>
            ))}
            </div>);
    }
    componentDidMount(){
        // this.writeData();
        this.readData();
    }
    render(){
        return (
            <div >
                <h1>Setting a database</h1>
             {this.displayData()}
            <div style={{textAlign:'center'}}>
            <progress value={this.state.progress} max="100" />
            <br/>
             <input type="file" onChange={this.handleChange}/>
             <button onClick={this.handleUpload}>upload</button>
             <br />
             <img src={this.state.url || 'https://via.placeholder.com/400x300'} alt="Uploaded Image" height="300" width="400"/>
             </div>
            </div>
        )
    }
   
}

export default FirebaseTest;
