import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface SelectorProps {
  label: string;
  options: string[];
  selectedValue: string;
  handleChange: (value: string) => void;
}

const Selector: React.FC<SelectorProps> = ({ label, options, selectedValue, handleChange }) => {
  return (
    <FormControl sx={{bgcolor: 'background.paper'}} variant="filled" fullWidth>
      <InputLabel sx={{color: 'white'}}>{label}</InputLabel>
      <Select
        value={selectedValue}
        onChange={(e) => handleChange(e.target.value as string)}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Selector;