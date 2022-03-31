const UserList = [
  {
    id: 1,
    name: "Jhon",
    username: "jhon",
    age: 20,
    nationality: "CANADA",
    friends: [
      {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 21,
        nationality: "BRAZIL",
      },
      {
        id: 4,
        name: "Benito",
        username: "Camelon",
        age: 33,
        nationality: "RUSIA",
      },
    ],
  },
  {
    id: 2,
    name: "Pedro",
    username: "PedroTech",
    age: 21,
    nationality: "BRAZIL",
    friends: [
      {
        id: 3,
        name: "Sarah",
        username: "Cameron",
        age: 28,
        nationality: "USA",
      },
    ],
  },
  {
    id: 3,
    name: "Sarah",
    username: "Cameron",
    age: 28,
    nationality: "USA",
  },
  {
    id: 4,
    name: "Benito",
    username: "Camelon",
    age: 33,
    nationality: "RUSIA",
  },
  {
    id: 5,
    name: "Paco",
    username: "Hello",
    age: 18,
    nationality: "SPAIN",
  },
];

const MovieList = [
  {
    id: 1,
    name: "Avengers EndGame",
    yearOfPublication: 2019,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "Manchester By the Sea",
    yearOfPublication: 2007,
    isInTheaters: false,
  },
  {
    id: 3,
    name: "The Matrix",
    yearOfPublication: 1999,
    isInTheaters: true,
  },
  {
    id: 4,
    name: "The Lion King",
    yearOfPublication: 1994,
    isInTheaters: true,
  },
  {
    id: 5,
    name: "Batman Begins",
    yearOfPublication: 2005,
    isInTheaters: false,
  },
];

module.exports = { UserList, MovieList };
