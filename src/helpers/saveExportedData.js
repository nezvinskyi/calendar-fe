export const saveExportedData = data => {
  const fileName = 'myData.json';

  const fileToSave = new Blob([JSON.stringify(data, undefined, 2)], {
    type: 'application/json',
  });

  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(fileToSave, fileName);
  } else {
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(fileToSave);
    elem.download = fileName;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
};
