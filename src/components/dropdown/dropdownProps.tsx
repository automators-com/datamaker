import { Item } from "../../app/(core)/templates/types";

export interface IProps {
  label?: string;
  name: string;
  value: Item;
  list: Item[];
  addClass?: string;
  setValue: any; // function
  formRegister?: any;
}
