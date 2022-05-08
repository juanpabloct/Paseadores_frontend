import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";

export default function Options({ options, changeOptions }) {
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <Autocomplete
        size="small"
        className="bg-white "
        fullWidth
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          changeOptions(newInputValue);
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        renderInput={(params) => <TextField {...params} label="Use Platform" />}
      />
    </div>
  );
}
