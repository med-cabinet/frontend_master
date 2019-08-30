import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth.js';

// import { Link } from 'react-router-dom';

import StrainCard from './StrainCard';

class StrainLibrary extends React.Component {
	state = {
		strain: [],
	};

	componentDidMount() {
		axiosWithAuth()
			.get('https://med-cabinet-temp.herokuapp.com/api/strains')
			.then(res => {
				console.log('Strain Data', res.data)
				this.setState({strain: res.data})
			})
			.catch(err => {
				console.log('Strain Error', err.response)
			})
	};

	render() {
		return (
			<div>
				<h2>Strains</h2>
				<div className='advice-list'>
					{this.state.strain.map(str => (
						<StrainCard key={ str.id } strain={ str } />
					))}
				</div>
			</div>
		);
	}
}

export default StrainLibrary;