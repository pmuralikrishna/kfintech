import React from 'react';
import styled from "styled-components";

const StyledNav = styled.div`
    display: flex;
    justify-content:space-between;
    width: 100%;
    box-sizing: border-box;
    flex-shrink: 0;
    align-items:center;
    padding: 8px 16px;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: none;
    backdrop-filter: blur(20px);
    border-style: solid;
    border-color: rgb(231, 235, 240);
    border-width: 0px 0px thin;
    background: rgba(255, 255, 255, 0.7);
    color: rgb(45, 56, 67);
`
export default function NavBar(props) {

    return (
        <StyledNav>
            <img height={52} width={104} src={'https://www.kfintech.com/new-assets/images/logo/kfintech-white-tagline.svg'} />
            <div>
                {props.children}
            </div>
        </StyledNav>
    )
}
