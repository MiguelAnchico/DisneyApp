import Slider from 'react-slick';
import CardMovie from '../../components/CardMovie/CardMovie';
import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

interface Movie {
	title: string;
	genres: string;
	score: number;
	imageUrl: string;
	onClick: () => void;
}

interface MovieSliderProps {
	movies: Movie[];
}

const MovieSlider: React.FC<MovieSliderProps> = ({ movies }) => {
	const [slidesToShow, setSlidesToShow] = useState(2);

	useEffect(() => {
		const updateSlidesToShow = () => {
			const width = window.innerWidth;
			if (width > 1500) return setSlidesToShow(5);
			if (width > 1200) return setSlidesToShow(4);
			if (width > 800) return setSlidesToShow(3);
			if (width > 600) return setSlidesToShow(2);
			return setSlidesToShow(1);
		};

		// Ejecuta la función al montar el componente
		updateSlidesToShow();

		// Agrega un listener para el evento 'resize' que actualizará el estado cada vez que cambie el tamaño de la ventana
		window.addEventListener('resize', updateSlidesToShow);

		// Elimina el listener cuando se desmonte el componente
		return () => window.removeEventListener('resize', updateSlidesToShow);
	}, []);

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: slidesToShow,
		slidesToScroll: slidesToShow,
		focusOnSelect: false,
		variableWidth: false,
		swipeToSlide: true,
		touchThreshold: 5,
		style: { paddingLeft: '24px' },
	};

	return (
		<Grid container>
			<Grid item sx={{ mx: 'auto', paddingTop: 4 }} xs={10}>
				<Slider {...settings}>
					{movies.map((movie, index) => (
						<Box key={index} style={{ width: '240px', margin: '24px' }}>
							<CardMovie
								title={movie.title}
								genres={movie.genres}
								score={movie.score}
								image={movie.imageUrl}
								onClick={movie.onClick}
							/>
						</Box>
					))}
				</Slider>
			</Grid>
		</Grid>
	);
};

export default MovieSlider;
