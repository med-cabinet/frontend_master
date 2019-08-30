import React, { useState, useEffect } from 'react';

import HistoricalDataCard from './HistoricalDataCard.js';
import "./HistoricalData.css";

// import Context API 
import { useContext } from 'react';
import { LoginContext } from '../../../contexts/LoginContext.js';

const History = () => {

	// Saved Strain Data
	const { strainSaved } = useContext(LoginContext);
	console.log('strain saved', strainSaved);

	return (
		<div className='history-list'>
			<h3>Historical Data</h3>
			<div className="history-card">
				{strainSaved.map(saved => (
					<HistoricalDataCard key={saved.id} savedData={saved} />
				))}
			</div>
		</div>
	);
}

export default History;