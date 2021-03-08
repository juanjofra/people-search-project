
import Content from '../components/Content';
import FormAddPeople from './FormAddPeople';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './App.css';
import ClienteProvider from '../context/ClienteContext';

function App() {
  return (
    <ClienteProvider>
      <Router>
        <div className='conteiner-fluid'>
          <nav className='container-fluid__nav'>
            <ul className='container-fluid__ul'>
              <li className='container-fluid__li'>
              <NavLink className='container-fluid__a' to="/">Home</NavLink>
              </li>
            </ul>
          </nav>

          <section className='content'>
            <Switch>
              <Route exact path='/'>
                <Content />
              </Route>
              <Route exact path='/Form-add-people'>
                <FormAddPeople/>
              </Route>
            </Switch>
          </section>
        </div>
      </Router>
    </ClienteProvider>
   
  );
}

export default App;
