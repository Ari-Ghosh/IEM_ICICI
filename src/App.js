import React from "react"
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import Impdt from "./component/Impdt"
import Speaker from "./component/Speaker"
import Contact from "./component/Contact"
import Call from "./component/Call"
import Committee from "./component/Committee"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "./component/Footer"
import Registration from "./component/Registration"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} exact>
            <Home />
          </Route>
          <Route path='/impdt' component={Impdt} exact>
            <Impdt />
          </Route>
          <Route path='/speaker' component={Speaker} exact>
            <Speaker />
          </Route>
          <Route path='/committee' component={Committee} exact>
            <Committee />
          </Route>
          <Route path='/contact' component={Contact} exact>
            <Contact />
          </Route>
          <Route path='/call' component={Call} exact>
            <Call />
          </Route>
          <Route path='/registration' component={Registration} exact>
            <Registration />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
