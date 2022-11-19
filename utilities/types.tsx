export type dropDownList = { id: number; name: string };

export type Constrain = { value?: number; name: string };

export type TemplateField = {
  constrains: Constrain[];
  fieldName: string;
  dataType: number;
};
