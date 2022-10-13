import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import createEmployee from './components/createEmployee';





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
                <Route path = "/createEmployee" component={createEmployee} />
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
