const fs = require('fs').promises;

async function main() {
  const writeIntoFIles = async () => {
    const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

    const createFiles = strings.map((e, i) => {
      fs.writeFile(`./file${i + 1}.txt`, e)
    });

    await Promise.all(createFiles);

    const fileNames = [
      'file1.txt',
      'file2.txt',
      'file3.txt',
      'file4.txt',
      'file5.txt'
    ]

    const fileContents = await Promise.all(
      fileNames.map((e) => fs.readFile(e, 'utf-8'))
    );
    
    const fileContentsConcat = fileContents.join(' ');

    await fs.writeFile('./fileAll.txt', fileContentsConcat);
  }

  writeIntoFIles();
}

main();