import type { Item } from "../app/(core)/templates/types";
import type { dropDownList } from "./types";

export const DataTypes: dropDownList[] = [
  { id: 1, name: "String" },
  { id: 2, name: "Integer" },
  { id: 3, name: "String[Name]" },
  { id: 4, name: "String[E-Mail]" },
  { id: 5, name: "String[Address]" },
  { id: 6, name: "String[City]" },
  { id: 7, name: "String[Country]" },
  { id: 8, name: "Phone Number" },
  { id: 9, name: "ZipCode" },
  { id: 10, name: "String[Gender]" },
  { id: 11, name: "Avatar" },
  { id: 12, name: "Job Title" },
  { id: 13, name: "Finance[Account Name]" },
  { id: 14, name: "Finance[IBAN]" },
  { id: 15, name: "Finance[Currency Name]" },
  { id: 16, name: "Finance[CreditCard Number]" },
  { id: 17, name: "Finance[Account]" },
  { id: 18, name: "Finance[Amount]" },
  { id: 19, name: "Password" },
  { id: 20, name: "Domain Name" },
  { id: 21, name: "Color" },
  { id: 22, name: "Emoji" },
  { id: 23, name: "IPv4" },
  { id: 24, name: "MAC Address" },
  { id: 25, name: "URL" },
  { id: 26, name: "Product" },
  { id: 27, name: "Department" },
  { id: 28, name: "Price" },
  { id: 29, name: "Product Name" },
  { id: 30, name: "Boolean" },
  { id: 31, name: "Date[BirthDate]" },
  { id: 32, name: "Date[Between]" },
  { id: 33, name: "Date[Month]" },
  { id: 34, name: "Date[Weekday]" },
  { id: 35, name: "Time Zone" },

  // { id: 5, name: "Object" },
  // { id: 6, name: "Array" },
  // { id: 8, name: "Response" },
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
