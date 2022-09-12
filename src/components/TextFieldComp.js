import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../redux/actions";

const TextFieldComp = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(handleAmountChange(e.target.value));
  };

  return (
    <Box mt={2} width="100%">
      <FormControl fullWidth size="small" >
        <TextField
          onChange={handleChange}
          label="Amount of Questions"
          type="number"
          size="small"
          sx={{bgcolor: 'white', borderRadius: 2}}
          margin="none" variant="filled" />
      </FormControl>
    </Box>
  );
};

export default TextFieldComp;
