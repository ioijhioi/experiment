
import {
    Wrapper,MenuItem
} from "./Navigation.styles"

export default function NavigationUI( props){

    return (
        <Wrapper>
            <MenuItem id="/Home" onClick={props.onClickMenu}>
        캠핑지도
      </MenuItem>
     
      
     
     
        </Wrapper>
    )
 }