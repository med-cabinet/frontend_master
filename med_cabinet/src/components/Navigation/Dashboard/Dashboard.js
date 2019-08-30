import React from 'react'
// import { Grid, Image, Menu } from 'semantic-ui-react'
// import DashGrid from './DashGrid'
// import DashVertMenu from './DashVertMenu'
import './Dashboard.css'

// import DashGrid from './DashGrid'

// import axiosWithAuth from '../../../utils/axiosWithAuth.js';

// import DashBoardCards from './DashBoardCards';

// import Context API 
import { useContext } from 'react';
import { LoginContext } from '../../../contexts/LoginContext.js';
import AdviceCard from '../../AdviceCard';

const Dashboards = () => {

   const { strainRec, setStrainRec } = useContext(LoginContext);
   console.log('3', strainRec);

   return (
    <div>

        {strainRec.map(recs => (
            <AdviceCard strainData={recs} />
        ))}
        
        {/* <DashGrid/> */}
        {/* <DashBoardCards/> */}
        {/* <DashGrid/> */}
    </div>
   )
}

export default Dashboards;