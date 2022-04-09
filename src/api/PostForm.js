import React, { Component} from "react";
import axios from "axios";

export default class PostForm extends Component{

   constructor(props) {
       super(props);

       this.state ={
           userId: '',
           title: '',
           body: '',
       }
   }

   handleChange =(e) =>{
       this.setState({
           [e.target.name]: e.target.value
       })
   }

   handleSubmit = (e) =>{
       e.preventDefault()
       // creating the POST request with {this} - class independent state changes & endpoint as the parameter
       axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
           // returned data is saved into this.state which is defined as an array
           // status 201 - created
           .then(response =>{
               console.log(response)
           })

   }
    render(){
        const {userId, title, body} = this.state
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label> User Id </label>
                        <input
                            type='text'
                            name='userId'
                            value={userId}
                            onChange={this.handleChange}>
                        </input>
                        <label> Title </label>
                        <input
                            type='text'
                            name='title'
                            value={title}
                            onChange={this.handleChange}>
                        </input>
                        <label> Body </label>
                        <input
                            type='text'
                            name='body'
                            value={body}
                            onChange={this.handleChange}>
                        </input>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }

}