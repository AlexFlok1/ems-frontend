import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import HomeComponent from './Components/HomeComponent/HomeComponent'
import LoginComponent from './Components/LoginComponent/LoginComponent'

function App() {
  return (
      <Router>
          <Switch>
              <Route path='/' exact>
                  <LoginComponent />
              </Route>
              <Route path='/main' exact>
                  <HomeComponent />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
