import {useRouter} from 'next/router'

import LandingUI from "./LandingPage.presenter"


export default function Landing () {
    const router = useRouter();

    // function onClickMoveToMainpage () {
    //     router.push("/mainpage")
    // }
    
    return <LandingUI/>
        
}