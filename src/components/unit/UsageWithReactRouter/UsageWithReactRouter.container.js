import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import { CSSTransition} from 'react-transition-group'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Music from "../../../../pages/UsageWithReactRouter/Music/index"
import Movie from "../../../../pages/UsageWithReactRouter/Movie/index"

const routes = [
    { path: '/', name: 'Music', Component: Music},
    { path: '/Movie', name: 'Movie', Component: Movie},
]

export default function UsageWithReactRouter () {

    return(
        <>
            <p>zzzzz</p>
        </>
    )
}