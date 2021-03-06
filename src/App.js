import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';

import AddLink from './pages/AddLink';
import Links from './pages/Links';

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path='/add-link'>
            <AddLink />
          </Route>
          <Route path='/'>
            <Links />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
