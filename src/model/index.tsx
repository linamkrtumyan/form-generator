import { SetStateAction, Dispatch } from "react";

export interface ICustomProps {
  label: string;
  fieldType: string;
}

export interface IContext {
  errorMessage: string;
  jsonConfig: string;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  setJsonConfig: Dispatch<SetStateAction<string>>;
}

export interface ITabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

export type Label = {
  label: string;
};

export type JsonConfigItem = {
  type: string;
  title: string;
  label: string;
};
