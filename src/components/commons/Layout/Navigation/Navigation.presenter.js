
import LoginPage from '../../../../../pages/Login'
import {
    Wrapper,MenuItem
} from "./Navigation.styles"

export default function NavigationUI( props){

    return (
        <Wrapper>
            <MenuItem id="/Home" onClick={props.onClickMenu}>
                Double_Shine
            </MenuItem>
            <MenuItem id="/Home" onClick={props.onClickMenu}>
                Home
            </MenuItem>
            <MenuItem id="/About" onClick={props.onClickMenu}>
                About
            </MenuItem>
            <MenuItem id="/Login" onClick={props.onClickMenu}>
                Login
            </MenuItem>
           
        </Wrapper>
    )
 }