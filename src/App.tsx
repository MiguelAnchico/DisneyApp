import MovieSlider from './containers/MovieSlider/MovieSlider';
import SearchContainer from './containers/SearchContainer/SearchContainer';

import Anna from './assets/anna.webp';
import Bruno from './assets/bruno.png';
import Luisa from './assets/Luisa.webp';
import Maribel from './assets/Maribel.webp';
import Olaf from './assets/Olaf.webp';
import Kristoff from './assets/kristoff.webp';

import CharacterSlider from './containers/CharacterSlider/CharacterSlider';

const moviesTest = [
	{
		title: 'San Juan',
		score: 4,
		genres: 'Acción, Drama',
		onClick: () => {},
		imageUrl:
			'https://images.unsplash.com/photo-1653103644458-647984f7863e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
	},
	{
		title: 'San Juan',
		score: 4,
		genres: 'Acción, Drama',
		onClick: () => {},
		imageUrl:
			'https://i.pinimg.com/originals/ae/ca/bb/aecabbb80f83af71ad05737e2ae2a483.jpg',
	},
	{
		title: 'San Juan',
		score: 4,
		genres: 'Acción, Drama',
		onClick: () => {},
		imageUrl:
			'https://plus.unsplash.com/premium_photo-1666899940579-6c931e34d52c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGhpY3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
	},
	{
		title: 'San Juan',
		score: 4,
		genres: 'Acción, Drama',
		onClick: () => {},
		imageUrl:
			'https://w.forfun.com/fetch/3b/3b20b52df5bf35b05f321f4c9fddfacf.jpeg',
	},
	{
		title: 'San Juan',
		score: 4,
		genres: 'Acción, Drama',
		onClick: () => {},
		imageUrl:
			'https://i.pinimg.com/originals/ae/ca/bb/aecabbb80f83af71ad05737e2ae2a483.jpg',
	},
	{
		title: 'San Juan',
		score: 4,
		genres: 'Acción, Drama',
		onClick: () => {},
		imageUrl:
			'https://plus.unsplash.com/premium_photo-1666899940579-6c931e34d52c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGhpY3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
	},
	{
		title: 'San Juan',
		score: 4,
		genres: 'Acción, Drama',
		onClick: () => {},
		imageUrl:
			'https://w.forfun.com/fetch/3b/3b20b52df5bf35b05f321f4c9fddfacf.jpeg',
	},
];

const characters = [
	{
		imageSrc: Anna,
		name: 'Anna',
		backstory:
			'Is the daughter of Agnarr and Iduna, the older sister of Anna and princess of',
		onClick: () => {},
		color: 'rgba(97, 0, 255, 0.6)',
		selected: false,
	},
	{
		imageSrc: Bruno,
		name: 'Bruno',
		backstory:
			'Is the daughter of Agnarr and Iduna, the older sister of Anna and princess of',
		onClick: () => {},
		color: 'rgba(97, 0, 255, 0.6)',
		selected: false,
	},
	{
		imageSrc: Luisa,
		name: 'Luisa',
		backstory:
			'Is the daughter of Agnarr and Iduna, the older sister of Anna and princess of',
		onClick: () => {},
		color: 'rgba(97, 0, 255, 0.6)',
		selected: false,
	},
	{
		imageSrc: Maribel,
		name: 'Maribel',
		backstory:
			'Is the daughter of Agnarr and Iduna, the older sister of Anna and princess of',
		onClick: () => {},
		color: 'rgba(97, 0, 255, 0.6)',
		selected: false,
	},
	{
		imageSrc: Olaf,
		name: 'Olaf',
		backstory:
			'Is the daughter of Agnarr and Iduna, the older sister of Anna and princess of',
		onClick: () => {},
		color: 'rgba(97, 0, 255, 0.6)',
		selected: false,
	},
	{
		imageSrc: Kristoff,
		name: 'Kristoff',
		backstory:
			'Is the daughter of Agnarr and Iduna, the older sister of Anna and princess of',
		onClick: () => {},
		color: 'rgba(97, 0, 255, 0.6)',
		selected: false,
	},
];

const App: React.FC = () => {
	return (
		<div className='grid place-items-center h-screen'>
			<h1 className='py-2'>Hola</h1>
			<p>Esto es un parrafo</p>
			<SearchContainer></SearchContainer>
			<MovieSlider movies={moviesTest}></MovieSlider>
			<CharacterSlider characters={characters} onClick={() => {}} />
		</div>
	);
};

export default App;
