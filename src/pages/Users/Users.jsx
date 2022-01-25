import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../../redux/slices/usersSlice';
import { StyledButton } from '../Login/Login';


const StyledCard = styled.div`
width:25%;
@media only screen and (max-width: 1024px) {
    width:25%;
    padding:8px;
  },

  @media only screen and (max-width: 786px) {
    width:50%;
    padding:8px;
  }
  @media only screen and (max-width: 600px) {
    width:100%;
    padding:8px;
  }
`

function Users() {
    const state = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        dispatch(fetchUsers({}))
    }, [])
    return (

        <div>
            <NavBar>
                <div style={{ display: "flex" }}>
                    <div>
                        <StyledButton onClick={() => {
                            localStorage.clear()
                            window.location.replace('/')
                        }}>
                            Log out
                        </StyledButton>
                    </div>
                </div>

            </NavBar>
            <div style={{display:"flex",flexWrap:"wrap",paddingTop:24}}>
                {
                    state.data.map((item, index) => (
                        <StyledCard key={index}>
                            <div style={{paddingBottom:8}}>{item.first_name}</div>
                            <div style={{paddingBottom:8}}>{item.email}</div>
                            <div style={{paddingBottom:8}}>
                            <img src={item.avatar} />
                            </div>
                        </StyledCard>
                    ))
                }
            </div>
        </div>
    )
}

export default Users