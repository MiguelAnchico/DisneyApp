import { Card, Typography, Box, CardActionArea } from '@mui/material';
import { styled } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';

interface CardMovieProps {
	image: string;
	title: string;
	genres: string;
	score: number;
	onClick: () => void;
}

// Estilo para la imagen de fondo de la tarjeta
const CardImage = styled('div')({
	width: 240,
	height: 360,
	backgroundSize: 'cover',
	backgroundPosition: 'center',
});

// Estilo para la parte inferior de la tarjeta con opacidad
const CardOverlay = styled('div')({
	position: 'absolute',
	bottom: 0,
	width: '100%',
	height: 80,
	backgroundColor: '#151618',
	opacity: 0.8,
	padding: '10px',
});

const CardMovie: React.FC<CardMovieProps> = ({
	image,
	title,
	genres,
	score,
	onClick,
}) => {
	return (
		<Card
			sx={{
				width: 240,
				height: 360,
				overflow: 'hidden',
				position: 'relative',
				transition: '250ms',
				'&:hover': { transform: 'scale(1.05)' },
			}}
			onClick={onClick}
		>
			<CardActionArea>
				<CardImage style={{ backgroundImage: `url(${image})` }} />

				<CardOverlay>
					<Typography variant='h6' color='white'>
						{title}
					</Typography>
					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<Typography variant='body2' color='text.secondary'>
							{genres}
						</Typography>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<StarIcon color='secondary' />
							<Typography variant='body2' color='white'>
								{score}
							</Typography>
						</Box>
					</Box>
				</CardOverlay>
			</CardActionArea>
		</Card>
	);
};

export default CardMovie;
