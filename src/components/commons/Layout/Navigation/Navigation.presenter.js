
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
           
        </Wrapper>
    )
 }