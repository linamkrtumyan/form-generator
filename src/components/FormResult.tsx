import React from "react";

import Button from "@mui/material/Button";

import CustomInput from "./CustomInput";
import { FormContext } from "../App";
import { IContext, JsonConfigItem } from "../model";

function FormResult() {
  const form: IContext = React.useContext(FormContext);
  const config = JSON.parse(form.jsonConfig);

  return (
    <div>
      {config.form.items.map((conf: JsonConfigItem, idx: number) => {
        return <CustomInput key={idx} fieldType={conf.type} label={conf.label} />;
      })}

      {config.form.buttons.map((conf: JsonConfigItem, idx: number) => {
        return (
          <Button key={idx} variant="contained" sx={{ m: 2 }}>
            {conf.title}
          </Button>
        );
      })}
    </div>
  );
}

export default FormResult;
