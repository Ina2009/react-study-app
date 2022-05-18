import * as React from 'react';
import './style.css';

const PersonList = ({ persons }) => (
  <div>
    {persons.map((person) => (
      <div>
        {person.name} {person.surname}
      </div>
    ))}
  </div>
);

export const App = () => {
  const [selectedPerson, setselectedPerson] = React.useState();
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
    {
      name: 'Andrei',
      surname: 'Lumînarul',
      age: '20',
    },
  ];

  return (
    <div>
      <PersonList persons={persons} />
      <div>
        <h4>Clicked Person</h4>
        <p onClick={selectedPerson} ></p>
      </div>
    </div>
  );
};
