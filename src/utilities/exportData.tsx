export const exportJson = (data: any[], name: string) => {
  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
    JSON.stringify(data)
  )}`;
  const link = document.createElement("a");
  link.href = jsonString;
  link.download = `${name}.json`;

  link.click();
};

export const exportCSV = (data: any[]) => {
  const _data = JSON.stringify(data);
  const csvContent = `data:text/csv;charset=utf-8,${_data}`;
  const encodedURI = encodeURI(csvContent);
  window.open(encodedURI);
};
