import Content from '../components/Content';
import FormAddPeople from './FormAddPeople';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className='conteiner-fluid'>

        <nav className='container-fluid__nav'>
          <ul className='container-fluid__ul'>
            <li>
            <NavLink className='container-fluid__li' to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className='container-fluid__li' to="/Form-add-people">Form-add-people</NavLink>
          </li>
          <li>
            <NavLink className='container-fluid__li' to="/dashboard">Dashboard</NavLink>
          </li>
          </ul>
        </nav>

        <section className='content'>
          <Switch>
            <Route exact path='/'>
              <Content />
            </Route>
            <Route path='/Form-add-people'>
              <FormAddPeople/>
            </Route>
          </Switch>
        </section>
      </div>
    </Router>

  );
}

export default App;
