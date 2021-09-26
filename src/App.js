import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AddLink from './pages/AddLink';
import Links from './pages/Links';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/add-link'>
            <AddLink />
          </Route>
          <Route path='/'>
            <Links />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
