const person = { name: 'Jack William', age: 17, job: 'facebooker', gfName: 'Emma Watson', address: 'Kochu Khet', phone: '01717112211', friends: ['Tom hancks', 'Tom Cruise', 'Tom Yarn']};

const { phone, gfName, address, salary} = person;

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}

const {leader} = complexObject.info;

// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);


const friends = ['Sakib Khan', 'Amir Khan', 'Arman Khan', 'Salman Khan', 'Sharukh Khan'];
const [chotoFriends, ...olderF] = friends;
console.log(olderF);