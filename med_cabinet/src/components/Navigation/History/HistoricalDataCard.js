import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';

// import Context API 
import { useContext } from 'react';
import { LoginContext } from '../../../contexts/LoginContext.js';

import "./HistoricalDataCard.css";

const useStyles = makeStyles(theme => ({
	card: {
		minWidth: 275,
		maxWidth: 300,
		padding: '10px',
		marginBottom: '15px',
		marginRight: '15px',
	},
	review: {
		fontSize: 13,
		color: 'black',
	},
	media: {
		height: 140,
	},
	title: {
		fontSize: 20,
	},
	pos: {
		fontSize: 13,
		marginBottom: 12,
	},
	button: {
		fontSize: 13,
		paddingTop: 2,
	},
	flavor: {
		color: '#574841',
	},
	desc: {
		fontSize: 13,
		width: '80%',
		margin: 'auto',
		marginBottom: '15px',
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
		},
		expandOpen: {
			transform: 'rotate(360deg)',
		},
})); 

const HistoryCard = (props) => {

	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	const { userD, setUserD } = useContext(LoginContext);
	const { strainSaved, setStrainSaved } = useContext(LoginContext);

	function handleExpandClick() {
		setExpanded(!expanded);
	  }

	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={props.savedData.imgUrl}
					title={props.savedData.name}
				/>
				<CardContent>
					<Typography className={classes.title} variant="h5" component="h2">
						{props.savedData.name}
					</Typography>
					<Typography className={classes.pos} color="textSecondary">
						<em>{props.savedData.type}</em>
					</Typography>
					<Typography className={classes.review} variant="body2" component="p">
						<p className={classes.flavor}>
							<strong>flavors: </strong>{props.savedData.flavors}
						</p>
						<p className={classes.flavor}>
							<strong>parents: </strong>{props.savedData.parents}
						</p>
						<p className={classes.flavor}>
							<strong>rating: </strong>{props.savedData.rating}/5
						</p>
					</Typography>
				</CardContent>
			</CardActionArea>

			<CardActions>
				<Button className={clsx(classes.expand, classes.button, {[classes.expandOpen]: expanded})}
						onClick={handleExpandClick}
						aria-expanded={expanded}				
						size="small">View Description
				</Button>
			</CardActions>

			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<h5 className={classes.desc}>{props.savedData.description}</h5>
			</Collapse>

		</Card>
	);
}

export default HistoryCard;