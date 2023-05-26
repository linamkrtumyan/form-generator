import React, { useState } from "react";

import Textarea from "@mui/joy/Textarea";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { FormContext } from "../App";


function JsonEditor() {
  const form: any = React.useContext(FormContext);
  const [value, setValue] = useState(form.jsonConfig);

  const handleChange = (e: any) => {
    //@ts-ignore
    setValue(e.target.value);
  };

  function isJsonString(str: string) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }

  const handleSubmit = () => {
    console.log("mtav");
    if (isJsonString(value)) {
      form.setJsonConfig(value);
      form.setErrorMessage("");
    } else {
      form.setErrorMessage("Please type in valid json format");
    }
  };


  return (
    <div>
      <Textarea
        placeholder="Type in here…"
        minRows={10}
        maxRows={100}
        onChange={handleChange}
        value={value}
      />

      {form.errorMessage && (
        <Typography variant="subtitle1" color="red" mt={2} gutterBottom>
         {form.errorMessage}
        </Typography>
      )}

      <Button variant="contained"  sx={{mt: 2}}onClick={handleSubmit}>
        Apply
      </Button>
    </div>
  );
}

export default React.memo(JsonEditor);
