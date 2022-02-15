const fs = require('fs').promises;
const readline = require('readline');

async function main() {

  const question = (message) => {

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise((resolve) => {
      rl.question(message, (answer) => {
        rl.close();

        resolve(answer);
      });
    });
  }

  const fileName = await question('Digite o caminho do arquivo que deseja ler: ');
  try {
    const fileContent = await fs.readFile(fileName, 'utf-8');
    console.log(fileContent);
    const wordToSubstitute = await question('Qual palavra quer substituir?');
    const newWord = await question('E por qual palavra vai ser?');

    const newFileContent = fileContent.replace(wordToSubstitute, newWord);
    const Destiny = await question('Digite onde e como irá salvar o arquivo(por ex: ./nomeDoArquivo): ');
    await fs.writeFile(Destiny, newFileContent);
  } catch (err) {
    console.error('Arquivo inexistente');
  }
}

main();
