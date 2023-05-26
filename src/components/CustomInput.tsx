import Textarea from "@mui/joy/Textarea";
import {
  InputLabel,
  Input,
  Box,
  FormControlLabel,
  Checkbox,
  Radio,
} from "@mui/material";

import { ICustomProps, Label } from "../model";

const TextAreaField = ({ label }: Label) => {
  return (
    <>
      <InputLabel size="normal" focused>
        {label}
      </InputLabel>
      <Textarea placeholder="Type in here…" minRows={5} maxRows={10} />
    </>
  );
};

const NumberField = ({ label }: Label) => {
  return (
    <>
      <InputLabel size="normal" focused>
        {label}
      </InputLabel>
      <Input id={label} type="number" />
    </>
  );
};

const TextField = ({ label }: Label) => {
  return (
    <>
      <InputLabel size="normal" focused>
        {label}
      </InputLabel>
      <Input id={label} type="text" />
    </>
  );
};

const CheckboxField = ({ label }: Label) => {
  return (
    <>
      <FormControlLabel control={<Checkbox />} label={label} />
    </>
  );
};

const DateField = ({ label }: Label) => {
  return (
    <>
      <InputLabel size="normal" focused>
        {label}
      </InputLabel>
      <input type="date" />
    </>
  );
};

const RadioField = ({ label }: Label) => {
  return (
    <>
      <FormControlLabel value={label} control={<Radio />} label={label} />
    </>
  );
};

function CustomInput({ fieldType, label }: ICustomProps) {
  const types = [
    { type: "number", component: NumberField },
    { type: "text", component: TextField },
    { type: "textarea", component: TextAreaField },
    { type: "checkbox", component: CheckboxField },
    { type: "date", component: DateField },
    { type: "radio", component: RadioField },
  ];

  return (
    <Box mt={2}>
      {types.map((type, idx) => {
        if (type.type === fieldType) {
          return <type.component key={idx} label={label} />;
        }
      })}
    </Box>
  );
}

export default CustomInput;
