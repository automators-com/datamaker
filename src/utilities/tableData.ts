import { faker } from "@faker-js/faker";
import type { TemplateField } from "../app/templates/types";

export const getTableData = (len: number, data: TemplateField[]): any[] => {
  return Array.from({ length: len }).map(() => {
    const o: any = {};
    data?.forEach((str: TemplateField) => {
      const min = str.constraints.filter((cons) => cons.name?.id === 1)[0]
        ? str.constraints.filter((cons) => cons.name?.id === 1)[0].value
        : 1;
      const max = str.constraints.filter((cons) => cons.name?.id === 2)[0]
        ? str.constraints.filter((cons) => cons.name?.id === 2)[0].value
        : 20;

      // faker.internet.email()
      // faker.name.firstName()
      const type = str.dataType.id ? str.dataType.id : str.dataType;
      // console.log(min, max, type);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      o[str.fieldName] =
        type === 2
          ? faker.datatype.number({ min: min, max: max })
          : type === 4
          ? faker.datatype.array(min)
          : type === 5
          ? faker.datatype.boolean()
          : faker.datatype.string(max);
    });

    return o;
  });
};
