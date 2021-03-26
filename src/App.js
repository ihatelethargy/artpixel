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

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route exact path="/intro" component={Intro} />
    </Router>
  )
}

export default App
