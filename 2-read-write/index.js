const fs = require('fs');
const path = require('path');

const fileData = 'data/2-read-write-users.json';
const folderName = 'output';
const overwriteExistingData = true;
saveData(fileData, folderName, overwriteExistingData);

function saveData(fileData, folderName, overwrite = false) {
  fs.readFile(fileData, 'utf8', (err, data) => {
    if (err) {
      console.error('Błąd podczas odczytu pliku JSON:', err);
      return;
    }

    try {
      const users = JSON.parse(data);
      folderNoExist(folderName);

      users.forEach((user) => {
        const fileName = `${user.id}-${user.name.toLowerCase()}-${user.username.toLowerCase()}.txt`;
        const filePath = path.join(folderName, fileName);
        const fileData = `Imię: ${user.name}\nNazwisko: ${user.username}\nAdres: ${user.address.street}, ${user.address.zipcode}, ${user.address.city}\nTelefon: ${user.phone}\n`;

        fs.writeFile(filePath, fileData, { flag: overwrite ? 'w' : 'wx' }, (err) => {
          if (err) {
            if (err.code === 'EEXIST') {
              console.log(`Plik ${fileName} już istnieje. Pomijanie...`);
            } else {
              console.error(`Błąd podczas zapisywania pliku ${fileName}:`, err);
            }
          } else {
            console.log(`Plik ${fileName} został zapisany w folderze ${folderName}.`);
          }
        });
      });
    } catch (err) {
      console.error('Błąd podczas parsowania pliku JSON:', err);
    }
  });
}

function folderNoExist(folderName) {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
    console.log(`Utworzono folder ${folderName}.`);
  }
}
