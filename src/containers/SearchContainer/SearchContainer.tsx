import { useState } from 'react';
import SearchBar from '../../components/MUIComponents/SearchBar';
import Selector from '../../components/MUIComponents/Selector';
import { Grid } from '@mui/material';

const SearchContainer: React.FC = () => {
	const [searchValue, setSearchValue] = useState('');

	const [selectedValue, setSelectedValue] = useState('Movies');

	return (
		<Grid container spacing={3}>
			<Grid item xs={8}>
				<SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
			</Grid>
			<Grid item xs={4}>
				<Selector
					label='Choose an option'
					options={['Movies', 'Characters']}
					selectedValue={selectedValue}
					handleChange={setSelectedValue}
				/>
			</Grid>
		</Grid>
	);
};

export default SearchContainer;
