export type Constraint = { value?: number; name: string };
export type Item = { id: number; name: string };

export type TemplateField = {
  constraints: Constraint[];
  fieldName: string;
  dataType: Item;
};

export type Template = {
  id?: string;
  name: string;
  fields: TemplateField[];
  createdAt?: string;
};

export type TemplateForm = {
  isOpen: boolean;
  templateName: string;
  fieldList: TemplateField[];
};
