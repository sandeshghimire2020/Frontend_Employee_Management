import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import createEmployee from './components/createEmployee';
import viewEmployee from './components/viewEmployee';






function App() {
  return (
    <div>
      <Router>
        <div className='container'>
           <HeaderComponent />

           <div className="container">
              <Switch>
                <Route exact path = "/" component={ListEmployeeComponent} />
                <Route path = "/employees" component={ListEmployeeComponent} />
                <Route path = "/createEmployee/:id" component={createEmployee} />
                <Route path = "/viewEmployee/:id" component={viewEmployee} />
                {/* <Route path = "/updateEmployee/:id" component={UpdateEmployeeComponent} /> */}
                {/* <ListEmployeeComponent /> */}
              </Switch>
           </div>

           <FooterComponent />
         </div>

      </Router>
    </div>
  );
}

export default App;
