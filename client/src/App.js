import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import Home from './pages/Home'

import './App.css';
import AlertState from './components/AlertContext/AlertState';
import Alert from './components/Alerts'

function App() {
  const { pathname } = useLocation(); 

  return (
      <Router>
        <ScrollToTop>
          <AlertState>
            <Alert />
            <Switch>
              <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
              <Route exact path="/" component={Home} />
              <Redirect from="*" to="/" />
            </Switch>
          </AlertState>
        </ScrollToTop>
      </Router>
  );
}

export default App;
