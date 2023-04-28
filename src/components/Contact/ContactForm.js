/* eslint-disable eqeqeq */
import React, { Component } from 'react'
import '../Contact/ContactForm.css'
import axios from 'axios';



class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            message: '',
            emailStatus: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit (event){
        // alert('Votre message a bien été envoyé');

        //contrôle de saisie
        // if (this.state.username == '' || this.state.email == '' || this.state.message == '') {
        //     alert('Veuillez remplir tous les champs');
        //     return false;
        // }

        // console.log(this.state);
        
        event.preventDefault();
        axios({
            method: "POST",
            url:"http://localhost/server_aegt/sendMail",
            data: this.state
        }).then((response)=>{
            if (response.data.status === 'success'){
                alert("Votre message a été bien envoyé");

                //fonction pour effacer les champs après validation
                this.setState({username:"", email:"", message:""})
                
            }else if (response.data.status === 'fail'){
                alert("Votre message n'a pas pu être envoyé");
            }
        });
       
    }

    
render (){
    
    return (
        <div className='container'>
        <div className='text'>
            Pour toutes informations sur la foi chrétienne, sur notre église ou sur le programme,
            vous pouvez nous contacter :
    
        </div>
            <form 
                onSubmit={this.handleSubmit}
                // method="POST"
            >
                <label>Votre nom</label>
                <input  type="text" id="name" name="username" 
                    value={this.state.username} 
                    onChange={this.handleChange}
                />
                
    
                <label>Votre email</label>
                <input  type="email" id="email" name="email" 
                    value={this.state.email}
                     onChange={this.handleChange}
                 />
                
                <label>Votre message</label>
                <textarea  id="message" name="message" 
                    value={this.state.message} 
                    onChange={this.handleChange}
                ></textarea>
                
                <input type="submit" value="Envoyer" />
            </form>
        </div>
      )
}
 
}

export default ContactForm