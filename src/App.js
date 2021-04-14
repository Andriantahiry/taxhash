import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import { React } from "react"
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from "./Pages/Contact"
import Footer from './components/Footer'
import Portfolio from './Pages/Portfolio'
import { AnimatePresence } from "framer-motion"
import ErrorPage from './Pages/ErrorPage'
import './app.css'
function App() {


  return (
    <AnimatePresence exitBeforeEnter>

      <div className="App">
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
