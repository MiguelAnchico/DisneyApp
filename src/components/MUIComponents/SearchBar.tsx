import { useState, useEffect, useMemo } from 'react';
import { TextField, Box } from '@mui/material';
import debounce from 'lodash/debounce';

interface SearchBarProps {
	searchValue: string;
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({
	searchValue,
	setSearchValue,
}) => {
	const [inputValue, setInputValue] = useState(searchValue);

	const performSearch = (value: string) => {
		setSearchValue(value);
		console.log(`Buscando: ${value}`);
	};

	const debouncedSearch = useMemo(() => {
		const performSearch = (value: string) => {
			setSearchValue(value);
			console.log(`Buscando: ${value}`);
		};

		return debounce(performSearch, 500);
	}, [setSearchValue]);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setInputValue(value);

		if (
			value.endsWith(' ') ||
			value.endsWith('.') ||
			value.endsWith(',') ||
			value.endsWith(';')
		) {
			performSearch(value.trim());
		} else {
			debouncedSearch(value);
		}
	};

	// Limpia el debouncedSearch al desmontar el componente
	useEffect(() => {
		return () => {
			debouncedSearch.cancel();
		};
	}, [debouncedSearch]);

	return (
		<Box>
			<TextField
				label='Buscar'
				variant='filled'
				fullWidth
				sx={{
					'& .MuiInputLabel-root': { color: 'white' },
				}}
				value={inputValue}
				onChange={handleInputChange}
			/>
		</Box>
	);
};

export default SearchBar;
