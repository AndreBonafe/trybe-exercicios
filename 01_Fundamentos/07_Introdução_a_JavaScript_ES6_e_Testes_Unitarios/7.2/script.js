// PARTE 1
// const order = {
//     name: 'Rafael Andrade',
//     phoneNumber: '11-98763-1416',
//     address: {
//       street: 'Rua das Flores',
//       number: '389',
//       apartment: '701',
//     },
//     order: {
//       pizza: {
//         marguerita: {
//           amount: 1,
//           price: 25,
//         },
//         pepperoni: {
//           amount: 1,
//           price: 20,
//         }
//       },
//       drinks: {
//         coke: {
//           type: 'Coca-Cola Zero',
//           price: 10,
//           amount: 1,
//         }
//       },
//       delivery: {
//         deliveryPerson: 'Ana Silveira',
//         price: 5,
//       }
//     },
//     payment: {
//       total: 60,
//     },
//   };
  
//   const customerInfo = (order) => {
//     console.log(`Olá ${order.order.delivery.deliveryPerson} entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`);
  
//   }
  
//   customerInfo(order);
  
//   const orderModifier = (order) => {
//     const newname = order.name = 'Luiz Silva';
//     const newtotal = order.payment.total = 50;
//     console.log(`Olá ${newname}, o total do seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} é R$${newtotal},00.`)
//   }
  
//   orderModifier(order);

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const allLessons = {

};

const addMorning = (obj, key, value) => {
    obj[key] = value;
    console.log(obj);
}

// addMorning(lesson2, 'turno', 'manhã');

const listKeys = obj => {
    console.log(Object.keys(obj));
}

// listKeys(lesson2);

const objSize = obj => {
    console.log(Object.keys(obj).length);
}

// objSize(lesson2);

const objValues = obj => {
    console.log(Object.values(obj));
}

// objValues(lesson3);

Object.assign(allLessons, {lesson1, lesson2 , lesson3});
// console.log(Object.entries(allLessons));

const listStudants = obj => {
  let total = 0;
  const totalOfKeys = Object.keys(obj).length;
  for (let i = 0; i < totalOfKeys; i += 1) {
    total += parseInt(Object.entries(obj)[i][1].numeroEstudantes);
  }
  console.log(total);
}

// listStudants(allLessons);

const getByNumber = (obj,number) => Object.values(obj)[number];

// console.log(getByNumber(lesson3, 0));

const checkKeyAndValue = (obj, key, value) => {
  const array = Object.entries(obj);
  let isEqual = false;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i][0] === key && array[i][1] === value) {
      isEqual= true;
    }
  }
  console.log(isEqual);
};

checkKeyAndValue(lesson3, 'materia', 'Matemática');