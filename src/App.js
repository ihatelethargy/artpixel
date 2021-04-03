import './App.scss'
import {
  HashRouter as Router,
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
import IntroContainer from './containers/IntroContainer'

function App() {
  return (
    <div className="mainWrapper">
      {/* 이부분은 모바일 작업할때 바꾸기 */}
      <Router>
        <Route exact path="/" component={Main} />
        <Route exact path="/intro" component={Intro} />
        <Route exact path="/origintech" component={OriginTech} />
        <Route exact path="/businessarea" component={BusinessArea} />
        <Route exact path="/techinfo" component={TechInfoPage} />
        <Route exact path="/community" component={Community} />
      </Router>
    </div>
  )
}

export default App
