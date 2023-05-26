import React, { useState } from "react";

import BasicTabs from "./components/TabPanel";
import { IContext } from "./model";

export const FormContext = React.createContext<IContext>({
  setJsonConfig: () => {},
  jsonConfig: "",
  errorMessage: "",
  setErrorMessage: () => {},
});

function App() {
  const jsonchik = {
    form: {
      items: [
        {
          label: "Test",
          type: "number",
        },
      ],
      buttons: [{ title: "Submit" }],
    },
  };

  const [jsonConfig, setJsonConfig] = React.useState<string>(JSON.stringify(jsonchik));
  const [errorMessage, setErrorMessage] = useState<string>("");

  return (
    <div className="App">
      <FormContext.Provider
        value={{ setJsonConfig, jsonConfig, errorMessage, setErrorMessage }}
      >
        <BasicTabs />
      </FormContext.Provider>
    </div>
  );
}

export default App;
