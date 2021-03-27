import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom'
import Main from './pages/main/Main'
import Intro from './pages/intro/Intro'
import Community from './pages/community/Community'
import OriginTech from './pages/origintech/OriginTech'
import BusinessArea from './pages/businessarea/BusinessArea'
import TechInfoPage from './pages/techinfopage/TechInfoPage'
import { useEffect, useState } from 'react'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/intro" component={Intro} />
      <Route exact path="/origintech" component={OriginTech} />
      <Route exact path="/businessarea" component={BusinessArea} />
      <Route exact path="/techinfo" component={TechInfoPage} />
      <Route exact path="/community" component={Community} />
    </Router>
  )
}

export default App
