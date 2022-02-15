const fs = require('fs').promises;

const main = async () => {

  // fs.readFile('./simpsons.json', 'utf-8')
  //   .then((fileContent) => {
  //     return JSON.parse(fileContent);
  //   })
  //   .then((simpsons) => {
  //     return simpsons.map(({ id, name }) => `${id} - ${name}`);
  //   })
  //   .then((strings) => {
  //     strings.forEach((string) => console.log(string));
  //   })

  // const simpsonJson = require('./simpsons.json');

  // const readSimpson = () => {
  //   try {
  //     if (!Array.isArray(simpsonJson)) throw new Error('Vazio');
  //     simpsonJson.map((e) => {
  //       console.log(`${e.id} - ${e.name}`);
  //     })
  //   } catch (err) {
  //     console.error(`Erro: ${err.message}`);
  //   }
  // }
  // readSimpson();

  // const simpsonById = async (id) => {
  //   const simpsons = await fs
  //     .readFile('./simpsons.json', 'utf-8')
  //     .then((fileContent) => JSON.parse(fileContent));

  //     const character = simpsons.find((e) => parseInt(e.id) === id);

  //     if (!character) {
  //       throw new Error('id não encontrado');
  //     }
  //     return character;
  // }

  // await simpsonById(id);

  // const filterSimpsons = async () => {
  //   const simpsons = await fs
  //     .readFile('./simpsons.json', 'utf-8')
  //     .then((fileContent) => JSON.parse(fileContent));

  //   const filteredSimpsons = simpsons.filter((e) => parseInt(e.id) !== 10 && parseInt(e.id) !== 6);

  //   await fs.writeFile('./simpsons.json', JSON.stringify(filteredSimpsons));
  // }

  //  await filterSimpsons();

  // const createFamilySimpson = async () => {
  //   const simpsons = await fs
  //     .readFile('./simpsons.json', 'utf-8')
  //     .then((fileContent) => JSON.parse(fileContent));

  //   const family = simpsons.filter((e) => [1, 2, 3, 4].includes(parseInt(e.id)));

  //   await fs.writeFile('./simpsonsFamily.json', JSON.stringify(family));
  // }

  // await createFamilySimpson();

  // const addNelson = async () => {
  //   const simpsonsFamily = await fs
  //     .readFile('./simpsonsFamily.json', 'utf-8')
  //     .then((fileContent) => JSON.parse(fileContent));

  //   const nelson = { id: '11', name: 'Nelson Muntz' }

  //   simpsonsFamily.push(nelson);

  //   await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsons));
  // }

  // await addNelson();

  // const changeNelsonToMaggie = async () => {
  //   const simpsonsFamily = await fs
  //     .readFile('./simpsonsFamily.json', 'utf-8')
  //     .then((fileContent) => JSON.parse(fileContent));

  //   const maggie = { id: '5', name: 'Maggie Simpson' }

  //   const newFamily = simpsonsFamily.filter((e) => e.name !== 'Nelson Muntz');

  //   newFamily.push(maggie);

  //   await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newFamily));
  // }

  // await changeNelsonToMaggie();
}

main();