import Slider from 'react-slick';
import styled from '@emotion/styled';
import CardCharacter from '../../components/CardCharacters/CardCharacters';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';

interface Character {
	imageSrc: string;
	name: string;
	backstory: string;
	color: string;
}

interface CharacterSliderProps {
	characters: Character[];
	onClick: (character: Character) => void;
}

const CharacterContainer = styled.div<{ selected: boolean }>(
	({ selected }) => ({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: selected ? '0px' : '-50px',
		transform: selected ? 'scale(1.2)' : 'scale(1)',
		transition: 'all 250ms',
	}),
);

const CharacterSlider: React.FC<CharacterSliderProps> = ({
	characters,
	onClick,
}) => {
	const [slidesToShow, setSlidesToShow] = useState(2);
	const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(0);

	useEffect(() => {
		const updateSlidesToShow = () => {
			const width = window.innerWidth;
			if (width > 1700) return setSlidesToShow(5);
			if (width > 1200) return setSlidesToShow(3);
			if (width > 600) return setSlidesToShow(1);
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
		infinite: true,
		speed: 500,
		centerMode: true,
		slidesToShow: slidesToShow,
		slidesToScroll: slidesToShow,
		focusOnSelect: true,
		variableWidth: false,
		touchThreshold: 5,
		centerPadding: '0',
	};

	return (
		<Grid container sx={{ maxWidth: '100vw' }}>
			<Grid item sx={{ paddingTop: 4 }} xs={12}>
				<Slider {...settings}>
					{characters.map((character, index) => (
						<div key={index}>
							<CharacterContainer selected={index === selectedCharacterIndex}>
								<CardCharacter
									imageSrc={character.imageSrc}
									name={character.name}
									backstory={character.backstory}
									onClick={() => {
										onClick(character);
										setSelectedCharacterIndex(index);
									}}
									selected={index === selectedCharacterIndex}
									color={character.color}
								/>
							</CharacterContainer>
						</div>
					))}
				</Slider>
			</Grid>
		</Grid>
	);
};

export default CharacterSlider;
