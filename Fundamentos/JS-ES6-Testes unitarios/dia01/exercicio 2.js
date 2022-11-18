const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };


  
  const customerInfo = (order) => {
    const nome = order.order.delivery.deliveryPerson;
    const destinatario = order.name;
    const tel = order.phoneNumber;
    const street = order.address.street;
    const numero = order.address.number;
    const ap = order.address.apartment;
    return console.log(`Olá ${nome}, entrega para: ${destinatario}, Telefone: ${tel}, ${street}, Nº: ${numero}, AP: ${ap}`);  
  };  
  customerInfo(order);
  
  const orderModifier = (order) => {
    order.name = 'Luiz Silva';
    order.payment.total = '50,00';
    const destinatario = order.name;
    const coca = order.order.drinks.coke.type;
    const pizzas = Object.keys(order.order.pizza);
    const total = order.payment.total;    
    return console.log(`Olá ${destinatario}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${coca} é R$ ${total}.`);  
  };  
  orderModifier(order);