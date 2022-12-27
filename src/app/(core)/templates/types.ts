export type Item = { id: number; name: string };

export type Constraint = { value?: number; name: Item | null };

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
  createdBy: string;
};

export type TemplateForm = {
  isOpen: boolean;
  templateName: string;
  fieldList: TemplateField[];
};
