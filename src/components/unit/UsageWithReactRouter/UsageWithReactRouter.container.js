import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import { CSSTransition} from 'react-transition-group'
import { Container, Navbar, Nav } from 'react-bootstrap'
import Music from "../../../../pages/UsageWithReactRouter/Music/index"
import Movie from "../../../../pages/UsageWithReactRouter/Movie/index"
import { useEffect } from 'react'

const routes = [
    { path: '/', name: 'Music', Component: Music},
    { path: '/Movie', name: 'Movie', Component: Movie},
]

function UsageWithReactRouter() {
    return (
      <Router>
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
          <Container className="container">
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
          </Container>
        </>
      </Router>
    )
  }
  
  useEffect (() => {
    const rootElement = document.getElementById('root')

    return () => {
        console.log("페이지이동!")
    }
  }, [])
    
  ReactDOM.render(<UsageWithReactRouter />, rootElement)
  