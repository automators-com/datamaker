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

export type TemplateForm = {
  isOpen: boolean;
  templateName: string;
  fieldList: {
    fieldName: string;
    dataType: number;
    constrains: { value?: number; name: string }[];
  }[];
};
