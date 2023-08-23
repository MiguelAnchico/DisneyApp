import { Typography, Card } from '@mui/material';
import { styled } from '@mui/system';
import PrimaryButton from '../MUIComponents/PrimaryButton';

interface ImageContainerProps {
	selected: boolean;
	color: string;
}

const ImageContainer = styled('div')<ImageContainerProps>(
	({ selected, color }) => ({
		position: 'relative',
		height: '90px',
		'&::before': {
			content: selected ? '""' : 'none',
			position: 'absolute',
			width: '345px',
			height: '345px',
			borderRadius: '50%',
			background: color,
			filter: 'blur(150px)',
			top: '50%',
			left: '50%',
			zindex: '-1',
			transform: 'translate(-50%, -100%)',
		},
		'&:hover::before': {
			content: '""',
		},
	}),
);

const StyledImage = styled('img')({
	position: 'absolute',
	top: '-380px',
	height: '480px',
});

interface CharacterCardProps {
	imageSrc: string;
	name: string;
	backstory: string;
	onClick: () => void;
	selected?: boolean;
	color: string;
}

const CardCharacter: React.FC<CharacterCardProps> = ({
	imageSrc,
	name,
	backstory,
	onClick,
	selected = false,
	color,
}) => {
	// Cortar la descripción después de 15 palabras y agregar "..."
	const shortDescription = backstory.split(' ').slice(0, 15).join(' ') + '...';

	return (
		<Card
			sx={{
				width: '300px',
				borderRadius: 2,
				padding: 2,
				height: '280px',
				bgcolor: 'background.paper',
				overflow: 'visible',
				cursor: 'pointer',
				transition: 'all 300ms',
				'&:active': {
					transform: 'scale(1.1)',
				},
			}}
			onClick={onClick}
		>
			<ImageContainer
				selected={selected}
				color={color}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '100%',
				}}
			>
				<StyledImage src={imageSrc} alt='Imagen' />

				<Typography
					sx={{ zindex: '10', position: 'relative', paddingTop: '100px' }}
					variant='h5'
					gutterBottom
				>
					{name}
				</Typography>
				<Typography
					sx={{
						zindex: '10',
						position: 'relative',
						textAlign: 'center',
						paddingBottom: 2,
					}}
					variant='body2'
					color='text.secondary'
					gutterBottom
				>
					{shortDescription}
				</Typography>
				<PrimaryButton text='See more' onClick={onClick} />
			</ImageContainer>
		</Card>
	);
};

export default CardCharacter;
