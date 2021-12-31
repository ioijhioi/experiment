import styled from "@emotion/styled"
import Navigation from './Navigation/Navigation.container'

const Body = styled.div`

`
export default function Layout (props) {
    return (
        <>
            <Navigation />
            <Body>{props.children}</Body>
            
        </>    
    )
}