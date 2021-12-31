import {
    Wrapper,
    LandingPageWrapper,
    GoToWrapper,
    GoToEnter,
    GoToFont,

} from "./landingPage.styles"

export default function LandingUI ( props){ 

    return (
        <Wrapper>
        <LandingPageWrapper src="/images/layout/Landing.jpg"/>
        <GoToWrapper>
            <GoToEnter onClick={props.onClickMoveToMainpage}>
                <GoToFont>
                    캠핑가기
                </GoToFont>
            </GoToEnter>
        </GoToWrapper>
    </Wrapper>
    )
}