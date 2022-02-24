import styled from "styled-components";

export const ListContainer = styled.div`
    background-color: ${({theme}) => theme.bgc};
    color: ${({theme}) => theme.color};
    text-align: center;
`
export const Input = styled.div`
    padding: 1rem 0;
    border-bottom: 1px solid ${({theme}) => theme.color};
    > input {
        border: none;
        outline: none;
        border-radius: 5px;
        padding: 0.5rem;
    }
    > button {
        outline: none;
        margin-left: 0.5rem;
        border: none;
        border-radius: 5px;
        padding: 0.5rem;
        color: ${({text}) => text ? 'black' : 'lightgray'};
        transition: 300ms;
        cursor: pointer;
    }
`
export const ListStore = styled.ul`
    > li {
        padding: 0.5rem;
        border: 1px solid lightgray;
    }
`