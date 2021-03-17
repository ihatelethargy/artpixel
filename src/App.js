import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom'
import Main from './pages/main/Main'

function App() {
  return (
    <Router>
      <Route component={Main} exact />
    </Router>
  )
}

export default App
