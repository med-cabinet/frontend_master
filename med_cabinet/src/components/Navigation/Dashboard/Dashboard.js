import React from 'react';
import './Dashboard.css';

// import { Grid, Image, Menu } from 'semantic-ui-react'
// import DashGrid from './DashGrid'
// import DashVertMenu from './DashVertMenu'
// import DashGrid from './DashGrid'
// import DashBoardCards from './DashBoardCards';

// Import Context API 
import { useContext } from 'react';
import { LoginContext } from '../../../contexts/LoginContext.js';
import AdviceCard from '../../AdviceCard';

const Dashboards = () => {

   const { strainRec, setStrainRec } = useContext(LoginContext);

   return (
        <div>
            {strainRec.map(recs => (
                <AdviceCard key={recs.id} strainData={recs} />
            ))}
            
            {/* <DashGrid/> */}
            {/* <DashBoardCards/> */}
            {/* <DashGrid/> */}
        </div>
   );
};

export default Dashboards;