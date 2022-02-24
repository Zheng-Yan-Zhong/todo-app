import styled from "styled-components";

export const NavContainer = styled.nav`
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: space-around;
    background-color: ${({theme}) => theme.bgc };
    color: ${({theme}) => theme.color};
`
export const Logo = styled.div`
    color: lightblue;
    font-size: 2rem;

`
export const Buttons = styled.div`
    >button {
        outline: none;
        border: none;
        border-radius: 5px;
        padding: 0.5rem;
        margin-right: 5px;
        transition: 0.3s;

        cursor: pointer;
        &:hover {
            background-color: lightgray;
        }
    }
`


