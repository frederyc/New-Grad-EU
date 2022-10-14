import {useContext} from "react";
import AppContext from "../../contexts/AppContext";
import {TextField} from "@mui/material";

const RegisterTextField = ({id, label, type}) => {
  const theme = useContext(AppContext);

  return (
      <TextField id={id} label={label} variant={'outlined'} type={type ? type : 'text'} required fullWidth sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: theme.palette.text.secondary,
          }
      }}} />
  );
}

export default RegisterTextField;