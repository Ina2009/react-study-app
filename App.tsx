import * as React from 'react';

type Person = {
  id: string;
  name: string;
  surname: string;
  age: string;
};

const personStyle: React.CSSProperties = {
  fontWeight: 'bold',
  fontSize: 15,
  marginBottom: 4,
};
const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: 24,
};

const PersonList = ({
  persons,
  setSelectedPersonList,
}: {
  persons: Person[];
  setSelectedPersonList: React.Dispatch<React.SetStateAction<Person[]>>;
}) => (
  <div>
    {persons.map((person) => (
      <div
        onClick={() =>
          setSelectedPersonList((selectedPersonList) => [
            ...selectedPersonList,
            person,
          ])
        }
      >
        {person.name} {person.surname}
      </div>
    ))}
  </div>
);

type SelectedPersonsProps = {
  selectedPersonList: Person[];
  setSelectedPersonList: React.Dispatch<React.SetStateAction<Person[]>>;
};

const SelectedPersons = ({
  selectedPersonList,
  setSelectedPersonList,
}: SelectedPersonsProps) => (
  <div style={personStyle}>
    {selectedPersonList.map((person) => (
      <div>
        {person.name} {person.surname}
        <button
          onClick={
            () =>
              setSelectedPersonList((selectedPersonList) => {
                // remove the current person from the array
                return selectedPersonList
                
              })
          
          }
        >
          Delete
        </button>
      </div>
    ))}
  </div>
);

export const App = () => {
  const [selectedPersonList, setSelectedPersonList] = React.useState<Person[]>(
    []
  );

  const persons: Person[] = [
    {
      id: 'a',
      name: 'Ina',
      surname: 'Croitoru',
      age: '21',
    },
    {
      id: 'b',
      name: 'Carina',
      surname: 'Malina',
      age: '21',
    },
    {
      id: 'c',
      name: 'Vasile',
      surname: 'Șchiopul',
      age: '20',
    },
    {
      id: 'd',
      name: 'Andrei',
      surname: 'Lumînarul',
      age: '20',
    },
  ];

  return (
    <div style={containerStyle}>
      <PersonList
        persons={persons}
        setSelectedPersonList={setSelectedPersonList}
      />
      <SelectedPersons
        selectedPersonList={selectedPersonList}
        setSelectedPersonList={setSelectedPersonList}
      />
    </div>
  );
};
