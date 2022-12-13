import { faker } from "@faker-js/faker";
import type { TemplateField } from "../app/templates/types";

export const getTableData = (len: number, data: TemplateField[]): any[] => {
  return Array.from({ length: len }).map(() => {
    const o: any = {};
    data?.forEach((field: TemplateField) => {
      const min = field.constraints.filter((cons) => cons.name?.id === 1)[0]
        ? field.constraints.filter((cons) => cons.name?.id === 1)[0].value
        : 1;
      const max = field.constraints.filter((cons) => cons.name?.id === 2)[0]
        ? field.constraints.filter((cons) => cons.name?.id === 2)[0].value
        : 20;

      const type = field.dataType.id ? field.dataType.id : field.dataType;
      // console.log(min, max, type);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      o[field.fieldName] =
        type === 2
          ? faker.datatype.number({ min: min, max: max })
          : type === 4
          ? faker.datatype.array(min)
          : type === 5
          ? faker.datatype.boolean()
          : type === 1
          ? field.constraints.length !== 0 &&
            field.constraints[0].name?.id === 1
            ? faker.name.fullName()
            : faker.internet.email()
          : faker.datatype.string(max);
    });

    return o;
  });
};
