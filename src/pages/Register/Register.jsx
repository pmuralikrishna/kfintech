import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import axios from 'axios';
import {useHistory} from 'react-router-dom'



const StyledButton = styled.button`
padding:8px 16px;
border-radius:4px;
border:none;
cursor:pointer;
`

const StyledForm = styled.div`
.loginform{
    max-width: 500px;
    min-width: 300px;
    max-height: 700px;
    width: 30%;
    height: 60%;
    margin: 100px auto;
    background-color: #FFFFFF;
    border-radius: 25px;
  },
  .title{
    text-align: center;
    font-family: 'open sans', sans-serif;
    padding: 2rem 0;
    margin: 0;
    font-size: 2rem;
  },
  .row{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    max-width: 100%;
    
  }
  
  .row input{
    width: 100%;
    box-sizing: border-box;
      border: none;
    font-size: 1.3rem;
    padding-bottom: 1rem;
    box-shadow: inset 0px -3px 0px 0px rgba(187,187,187,0.2);
    transition: box-shadow 0.2s ease-in;
  }
  
  .row input:focus{
     box-shadow: inset 0px -3px 0px 0px rgba(34,193,195,0.7);
     outline: none;
  }
  
  .row input::-webkit-input-placeholder{
    opacity: 1;
    transition: opacity 0.25s ease-out;
  }
  
  .row input:hover::-webkit-input-placeholder,
  .row input:focus::-webkit-input-placeholder{
    opacity: 0;
  }
  
  .row label{
    align-self: start;
    font-size:16px;
    padding-bottom: 0.5rem;
    color: rgba(187,187,187,0.9);
  }
  
`


function Register() {

    const [state, setState] = useState({
        hide: true,
        email: "",
        password: ""
    })
    const history = useHistory()

   function onSubmit() {
       if(!(state.password && state.email)) {
           alert('Please fill all fields')

        return

       }
       let body = {
           email:state.email,
           password:state.password
       }
    axios.post(`${process.env.REACT_APP_API_HOST}/register`, body).then(res => {
        localStorage.setItem('token', res.data.access_token);
        localStorage.setItem('schoolId', '1');
        window.location.reload();
      }).catch(err => {
        console.log(err)
        setState({
          loading: false,
          error: err
        })
      })
   }
    return (

        <div>
            <NavBar>
                <div style={{ display: "flex" }}>
                    <div>
                        <StyledButton onClick={() => {
                            history.push('/login')
                        }}>
                            Login
                        </StyledButton>
                    </div>
                </div>

            </NavBar>
            <StyledForm className='loginForm'>
                <div className='title'>Register</div>
                <div>
                    <FormInput 
                    description="Email" 
                    placeholder="Enter your email" 
                    type="email"
                    value={state.email}
                    onChange={(e) => {
                        setState({...state,email:e.target.value})
                    }} />
                    <FormInput
                        description="Password"
                        placeholder="Enter your password"
                        type={state.hide ? 'password' : 'text'}
                        value={state.password}
                    onChange={(e) => {
                        setState({...state,password:e.target.value})
                    }} />
                    <StyledButton onClick={onSubmit}>
                        Submit
                    </StyledButton>
                </div>

            </StyledForm>
        </div>
    )
}

const FormInput = props => (
    <div className="row">
        <label>{props.description}</label>
        <div style={{ display: "flex" }}>
            <input type={props.type} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
            {/* <div>{props.actions ? props.actions : ''}</div> */}
        </div>
    </div>
);
export default Register