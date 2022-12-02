export type Constraint = { value?: number; name: string };

export type TemplateField = {
  constraints: Constraint[];
  fieldName: string;
  dataType: number;
};

export type Template = {
  id?: string;
  name: string;
  fields: TemplateField[];
  createdAt?: string;
};
