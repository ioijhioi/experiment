
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
            {/* <MenuItem id="/UsageWithReactRouter" onClick={props.onClickMenu}> */}
                {/* UsageWithReactRouter */}
            {/* </MenuItem> */}
        </Wrapper>
    )
 }