import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth.js';

// Import Context API
import { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext.js';

// Material UI 
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
	card: {
		minWidth: 70,
		maxWidth: '30%',
		margin: '2%',
	},
	media: {
		height: 140,
	},
	button: {
		margin: theme.spacing(1),
	},
}));
      
const AdviceCard = (props) => {
	
	const classes = useStyles();

	const { userD, setUserD } = useContext(LoginContext);
	const { strainSaved, setStrainSaved } = useContext(LoginContext);

	const handleSave = e => {
		e.preventDefault();
		console.log('button clicked!');
		console.log('user id', userD.id);
		console.log('strain id', props.strainData.id);
		axiosWithAuth()
			.post(`https://med-cabinet-temp.herokuapp.com/api/saved/${userD.id}`, { strain_id: props.strainData.id })
			.then(res => {
				console.log(res);
				setStrainSaved(res.data);
			})
			.catch(err => {
				console.log('Error saving strain', err.response);
			})
	}

	return (
		<Card className={classes.card}>
		  <CardActionArea>
			<CardMedia
		  		className={classes.media}
		  		image={props.strainData.imgUrl}
		  		title={props.strainData.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{props.strainData.name}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{props.strainData.type}
				</Typography>
			</CardContent>
		  </CardActionArea>
		  <Button   variant="contained" 
					color="primary" 
					className={classes.button}
					onClick={handleSave}
			>
        		Save Strain
			</Button>
		</Card>
	  );
}

export default AdviceCard;