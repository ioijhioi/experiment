import NavigationUI from "./Navigation.presenter"
import { useRouter } from 'next/router'

export default function Navigation ( ){ 
    const router = useRouter();

    function onClickMenu(event) {
        router.push(event.target.id);
    }
    return <NavigationUI onClickMenu={onClickMenu} />
}