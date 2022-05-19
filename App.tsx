import * as React from 'react';
import './style.css';

const PersonList = ({ persons, setSelectedPerson }) => (
  <div>
    {persons.map((person) => (
      <div onClick={() => setSelectedPerson(person)}>
        {person.name} {person.surname}
      </div>
    ))}
  </div>
);

const SelectedPerson = ({ selectedPerson }) => (
  <div>{selectedPerson?.name || 'no person selected'}</div>
);

export const App = () => {
  const [selectedPerson, setSelectedPerson] = React.useState(null);

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
      <SelectedPerson selectedPerson={selectedPerson} />
      <PersonList persons={persons} setSelectedPerson={setSelectedPerson} />
    </div>
  );
};
