import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import {useHistory} from 'react-router-dom'

const StyledButton = styled.button`
padding:8px 16px;
border-radius:4px;
border:none;
cursor:pointer;
`


function WelcomePage() {
    const history = useHistory()
    return (
        <div>
            <NavBar>
                <div style={{ display: "flex" }}>
                    <div style={{ paddingRight: 24 }}>
                        <StyledButton onClick={() => {
                            history.push('/login')
                        }}>
                            Login
                        </StyledButton>
                    </div>
                    <div>
                        <StyledButton onClick={() => {
                            history.push('/login')
                        }}>
                            Register
                        </StyledButton>
                    </div>
                </div>

            </NavBar>
            <div style={{ textAlign: "center", fontSize: 24, paddingTop: '20vh' }}>
                Welcome to KINFTECH
            </div>
        </div>
    )
}

export default WelcomePage