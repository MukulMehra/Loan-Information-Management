import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route,Switch} from "react-router-dom";


import Home from './Copoments/Pages/Home';
import FirebaseTest from './Copoments/Pages/firebaseTest';
import Application from './Copoments/Pages/Application';
import Contact from './Copoments/Pages/Contact';
import Payment from './Copoments/Pages/Payment';
import Basics from './Copoments/Pages/Payment/Basicpayment';
import MainLoan from './Copoments/Pages/ApplyLoan/MainLoan';
import Loan from './Copoments/Pages/ApplyLoan/loan';
import Details from './Copoments/Pages/ApplyLoan/detail';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/firebase" component={FirebaseTest}/>
      <Route path="/application" component={Application}/>
      <Route path="/Contact" component={Contact}/>
      <Route path="/Payment" component={Payment} />
      <Route path="/BasicsPayment" component={Basics} />
      <Route path="/ApplyLoan" component={MainLoan} />
      <Route path="/loan" component={Loan} />
      <Route path="/Details" component={Details} />
     </Switch>
  </Router>
  );
}

export default App;
