
import {
    Wrapper,MenuItem
} from "./Navigation.styles"

export default function NavigationUI( props){

    return (
        <Wrapper>
            <MenuItem id="/Home" onClick={props.onClickMenu}>
                Home
            </MenuItem>
            <MenuItem id="/About" onClick={props.onClickMenu}>
                About
            </MenuItem>
            <MenuItem id="/Home" onClick={props.onClickMenu}>
                Contact
            </MenuItem>
     
      
     
     
        </Wrapper>
    )
 }