import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { React, useEffect, useRef } from "react"
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from "./Pages/Contact"
import Footer from './components/Footer'
import Portfolio from './Pages/Portfolio'
import { AnimatePresence } from "framer-motion"
import ErrorPage from './Pages/ErrorPage'
import './app.css'

import { gsap } from "gsap"
function App() {
  const appRef = useRef(null)


  useEffect(() => {
    gsap.from(appRef.current, {
      duration: 2,
      opacity: 0,
      delay: 3
    })
  }, [])


  return (
    <AnimatePresence exitBeforeEnter>

      <div ref={appRef} className="App">
        <Router >
          <Header />
          <Switch>
            <Route path='/' exact component={Home} ></Route>
            <Route path='/apropos' component={About} ></Route>
            <Route path='/portfolio' component={Portfolio} ></Route>
            <Route path='/contact' component={Contact} ></Route>


            <Route component={ErrorPage}></Route>
          </Switch>
          <Footer />

        </Router>
      </div>
    </AnimatePresence>
  );
}

export default App;
