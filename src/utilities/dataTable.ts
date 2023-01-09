/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { faker } from "@faker-js/faker";
import type { Item, TemplateField } from "../app/(core)/templates/types";

export const getDataTable = (
  len: number,
  data:
    | TemplateField[]
    | {
        fieldName: string;
        dataType: Item;
        arrayLength: number;
        arrayData: any;
      }[]
): any[] => {
  return Array.from({ length: len }).map(() => {
    const o: any = {};
    data?.forEach(
      (
        field:
          | TemplateField
          | {
              fieldName: string;
              dataType: Item;
              arrayLength: number;
              arrayData: any;
            }
      ) => {
        // const min = field?.constraints?.filter((cons) => cons.name?.id === 1)[0]
        //   ? field.constraints.filter((cons) => cons.name?.id === 1)[0].value!
        //   : 1;
        // const max = field?.constraints?.filter((cons) => cons.name?.id === 2)[0]
        //   ? field.constraints.filter((cons) => cons.name?.id === 2)[0].value!
        //   : 20;

        const min = 0;
        const max = 20;

        const type = field.dataType.id;

        const getValue = (type: number) => {
          switch (type) {
            case 2:
              return faker.datatype.number({
                min: min,
                max: max > min ? max : undefined,
              });
              break;
            case 3:
              return faker.name.fullName();
              break;
            case 4:
              return faker.internet.email();
              break;
            case 5:
              return faker.address.streetAddress();
              break;
            case 6:
              return faker.address.city();
              break;
            case 7:
              return faker.address.country();
              break;
            case 8:
              return faker.phone.number();
              break;
            case 9:
              return faker.address.zipCode();
              break;
            case 10:
              return faker.name.gender();
              break;
            case 11:
              return faker.image.avatar();
              break;
            case 12:
              return faker.name.jobTitle();
              break;
            case 13:
              return faker.finance.accountName();
              break;
            case 14:
              return faker.finance.iban();
              break;
            case 15:
              return faker.finance.currencyName();
              break;
            case 16:
              return faker.finance.creditCardNumber();
              break;
            case 17:
              return faker.finance.account();
              break;
            case 18:
              return faker.finance.amount();
              break;
            case 19:
              return faker.internet.password();
              break;
            case 20:
              return faker.internet.domainName();
              break;
            case 21:
              return faker.color.rgb();
              break;
            case 22:
              return faker.internet.emoji();
              break;
            case 23:
              return faker.internet.ipv4();
              break;
            case 24:
              return faker.internet.mac();
              break;
            case 25:
              return faker.internet.url();
              break;
            case 26:
              return faker.commerce.product();
              break;
            case 27:
              return faker.commerce.department();
              break;
            case 28:
              return faker.commerce.price();
              break;
            case 29:
              return faker.commerce.productName();
              break;
            case 30:
              return faker.datatype.boolean();
              break;
            case 31:
              return faker.date.birthdate();
              break;
            // case 32:
            //   return faker.date.between(min, max);
            //   break;
            case 33:
              return faker.date.month();
              break;
            case 34:
              return faker.date.weekday();
              break;
            case 35:
              return faker.address.timeZone();
              break;
            case 36:
              // eslint-disable-next-line no-case-declarations
              const dat = getDataTable(
                field.arrayLength ? field.arrayLength : 2,
                field.arrayData
              );
              return dat;
              break;
            default:
              return faker.datatype.string(max);
          }
        };
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        o[field.fieldName] = getValue(type);
      }
    );

    return o;
  });
};
