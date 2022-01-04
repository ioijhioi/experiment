import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import { CSSTransition} from 'react-transition-group'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Music from "../../../../pages/UsageWithReactRouter/Music/index"
import Movie from "../../../../pages/UsageWithReactRouter/Movie/index"
import "react-quill/dist/quill.snow.css"
import dynamic from "next/dynamic"
import PropTypes from 'prop-types'
import { Component } from 'react'

const routes = [
    { path: '/', name: 'Music', Component: Music},
    // { path: '../../../../pages/UsageWithReactRouter/Movie', name: 'Movie', Component: Movie},
]

function UsageWithReactRouter() {
    
    return (
      <Router >
        <>
          <Navbar bg="light">
            <Nav className="mx-auto">
              {routes.map(route => (
                <Nav.Link
                  key={route.path}
                  as={NavLink}
                  to={route.path}
                  activeClassName="active"
                  exact
                >
                  {route.name}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar>
          {/* <Container className="container">
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </Container> */}
        </>
      </Router>
    )
  }
  UsageWithReactRouter.propTypes = {
    name: PropTypes.string

}

const rootElement = dynamic (() => import(document.getElementById('root')), {ssr: false}) 

ReactDOM.render(<UsageWithReactRouter />, rootElement)

  