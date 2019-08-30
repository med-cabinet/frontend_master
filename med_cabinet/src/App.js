// import React from 'react';
// import ReviewForm from './components/ReviewForm.js';
import React, { useState } from 'react';
import './App.css';

import StrainCards2 from './components/StrainCards2'
import StrainCards from './components/StrainCards';
import Footer from './components/Footer/Footer.js';
import MedCabinetLogo from './images/MedCabinetLogo.png';
import NavTab from './components/Navigation/NavTab';
import StrainLibrary from './components/StrainLibrary';
// import ContactUs from './components/Navigation';
import HistoricalData from './components/Navigation/History/HistoricalData.js';
import { Route, Switch } from 'react-router-dom'
import RegistrationForm from './components/Registration/RegistrationForm'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/login/Login.js';
import Dashboard from './components/Navigation/Dashboard/Dashboard'
import MandatoryForm from './components/MandatoryForm.js';
import StrainDetail from './components/StrainDetail.js';

// import Context Object
import { LoginContext } from './contexts/LoginContext.js';

const App = () => {

  // Login Context Data
  const [ creds, setCreds ] = useState({ email: '', password: '' });
  const [ userD, setUserD ] = useState({});
  const [ reviews, setReviews ] = useState([]);
  const [ strainsReviewed, setStrainsReviewed ] = useState([]);
  const [ strainRec, setStrainRec ] = useState([]);
  const [ answers, setAnswers ] = useState({
    goal: '',
    pastUser: false,
    useFreq: '',
    intakeTime: ''
  });

  return (

    <LoginContext.Provider value={{ creds, setCreds,
                                    userD, setUserD,
                                    reviews, setReviews,
                                    strainsReviewed, setStrainsReviewed,
                                    strainRec, setStrainRec,
                                    answers, setAnswers
                                 }}>
      <div className="App">
        <header className="App-header">
          <div className='navigation'>
            <div>
              <NavTab />
            </div>
            <div className='logo-container'>
              <img src={MedCabinetLogo} />
            </div>
          </div>

          <div>
            <Switch>
              <Route path='/register' component={RegistrationForm} />
              <Route path='/login' component={Login} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/history' component={HistoricalData} />
              <PrivateRoute exact path='/mandatory' component={MandatoryForm} />
              <PrivateRoute exact path= '/strains' component= {StrainLibrary}/>
              <PrivateRoute exact path='/strainDetail' component={StrainDetail} />
              {/* <Route exact path= '/learnmore' component= {learnMore}/>  */}
              {/* <Route exact path= '/contact' component= {ContactUs} />  */}
            </Switch>
          </div>

          <div>
            <Footer />
          </div>

        </header>
      </div>
    </LoginContext.Provider>
  );
}

export default App;



