


const person = {
  firstName: 'João',
  lastName: 'Jr II',
};




const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const getNationality = ({ firstName, nationality = 'brazilian' }) => `${firstName} is ${nationality}`;
console.log(getNationality(otherPerson));
console.log(getNationality(person));

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,
  });
  
  console.log(getPosition(-19.8157, -43.9542));

  const multiply = (number, value = 1) => {
    return number * value
  };
  
  console.log(multiply(16));
