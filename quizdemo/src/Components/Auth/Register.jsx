import React, { useState } from 'react'
import "./Forms.css";
import axios from "axios";

const Register = () => {
  const [user,setUser] = useState({
    username:"",
    email:"",
    password: "",
  });
  const [file,setFile] = useState(null);
  const [isText,setIsText] = useState(false);

  const handleShow = () => {
    setIsText(!isText);
  }

  const handleText = (e) => {
    setUser({
        ...user,
        [e.target.name]:e.target.value
    })
  };

  const handleImage = (e) => {
    setFile(e.target.files[0]);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const newUser = {
        username: user.username,
        email: user.email,
        password: user.password
    };

    if(file){
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name",filename);
        data.append("file",file);
        newUser.avatar = filename;

        try{
            axios.post("http://localhost:8080/api/fileUpload",data)
            .then((res) => {
                console.log(res.data);
            })

        }catch(err) {console.log(err)}
    }

    try{
      axios.post("http://localhost:8080/api/register",newUser)
      .then((res) => {
        console.log(res.data);
      })
    }catch (err) {console.log(err)}

  }
  return (
    <section className='container'>
      <div className='form signup'>
        <div className='form-content'>
            <header>Signup</header>
        </div>
        <form onSubmit={handleFormSubmit}>
            <div className='field input-field'>
                <input type="text" name='username' placeholder='Username' className='input' onChange={handleText} />
            </div>
            <div className='field input-field'>
                <input type="email" name='email' placeholder='Email' className='input' onChange={handleText} />
            </div>
            <div className='field input-field'>
                <input type={isText ? "text" : "password"} name="password" placeholder='Password' className='input' onChange={handleText} />
                <i onClick={handleShow} class={isText ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
            </div>
            <div className='field input-field'>
                <input type="file" accept=".png, .jpg, .jpeg" placeholder='Profile Image' className='input-file' onChange={handleImage} />
            </div>
            <div className='field button-field'>
                <button type="submit">Signup</button>
            </div>
        </form>

        <div className='form-link'>
            <span>Already have an account? <a href='/login' className='link login-link'></a></span>
        </div>

        <div className='line'></div>
        <div className="media-options">
            <a href='#' className="field facebook">
                <img src="images/facebook.png" className='facebook-img' alt="" />
                <span>Login With Facebook</span>
            </a>
        </div>
        <div className="media-options">
            <a href='#' className="field google">
                <img src="images/google.png" className='google-img' alt="" />
                <span>Login With Google</span>
            </a>
        </div>
      </div>
    </section>
  )
}

export default Register