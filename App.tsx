import * as React from 'react';
import './style.css';

const PersonList = ({ persons }) => (
  <div>
    {persons.map((person) => (
      <div>{person.name}</div>
    ))}
  </div>
);

export const App = () => {
  const persons = [
    {
      name: 'Ina',
      surname: 'Croitoru',
      age: '21',
    },
    {
      name: 'Carina',
      surname: 'Malina',
      age: '21',
    },
    {
      name: 'Vasile',
      surname: 'Șchiopul',
      age: '20',
    },
  ];

  return (
    <div>
      <PersonList persons={persons} />
    </div>
  );
};
