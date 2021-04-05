import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [filteredData, setFilteredData] = useState(persons);

  //update filter results
  useEffect(() => {
    setFilteredData(filterItems(persons, newFilter));
  }, [persons, newFilter]);

  //filter function

  const filterItems = (arr, query) => {
    return arr.filter(
      (el) => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  };

  //handle form submission

  const addPerson = (event) => {
    event.preventDefault();

    const personsNameList = persons.map((person) => person.name);

    if (personsNameList.includes(newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObj = {
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(personObj));
      setNewName("");
      setNewNumber("");
    }
  };

  //handle person input
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  //handle fliter input
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} handleFilter={handleFilterChange} />

      <h2>add a new</h2>
      <PersonForm
        handleFormSubmit={addPerson}
        value1={newName}
        handleChange1={handleNameChange}
        value2={newNumber}
        handleChange2={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons data={filteredData} />
    </div>
  );
};

export default App;
