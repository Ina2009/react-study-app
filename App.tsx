import * as React from 'react';

type Person = {
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



const SelectedPerson = ({ selectedPersonList }) => (
  <div style={personStyle}>
    {selectedPersonList.map((person)=><div>{person.name} {person.surname}</div>
  )}
  </div>
);

export const App = () => {
  const [selectedPersonList, setSelectedPersonList] = React.useState<Person[]>(
    []
  );

  const persons: Person[] = [
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
    <div style={containerStyle}>
      <PersonList
        persons={persons}
        setSelectedPersonList={setSelectedPersonList}
      />
      <SelectedPerson selectedPersonList={selectedPersonList} />
    </div>
  );
};
