import React from 'react'
import {
    NavContainer,
    Buttons,
    Logo
} from './Nav.css'
import { MdOutlineDarkMode, MdLightMode} from 'react-icons/md'
import { IoLogoReact } from 'react-icons/io5'
import { useSelector, useDispatch } from 'react-redux'
import { darkMode, lightMode } from '../../state/themeSlice' 
//引入從themeSlice中的actions
function Navbar() {
    const theme = useSelector((state) => state.theme.value)
    const dispatch = useDispatch()
    const toggleTheme = (mode) => {
        switch(mode) {
            case "dark":
                dispatch(darkMode())
                break;
            case "light":
                dispatch(lightMode())
                break;
        }
        alert('theme changed')
    }
    return (
        <NavContainer theme={theme}>
            <Logo><IoLogoReact /></Logo>
            <Buttons>
                <button onClick={() => toggleTheme("dark")}><MdOutlineDarkMode /></button>
                <button onClick={() => toggleTheme("light")}><MdLightMode /></button>
            </Buttons>
        </NavContainer>
    )
}

export default Navbar