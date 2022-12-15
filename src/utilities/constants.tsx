import type { Item } from "../app/(core)/templates/types";
import type { dropDownList } from "./types";

export const DataTypes: dropDownList[] = [
  { id: 1, name: "String" },
  { id: 2, name: "Integer" },
  { id: 3, name: "Name" },
  { id: 4, name: "Email" },
  { id: 5, name: "Object" },
  { id: 6, name: "Array" },
  { id: 7, name: "Boolean" },
  { id: 8, name: "Response" },
];

export const Target = [
  { id: 1, name: "CSV/Excel" },
  { id: 2, name: "JSON" },
];

export const _list: Item[] = [
  { id: 1, name: "Min" },
  { id: 2, name: "Max" },
  { id: 3, name: "RegEx (Words)" },
];

// export const string_list: Item[] = [
//   { id: 1, name: "Name" },
//   { id: 2, name: "Email" },
// ];
