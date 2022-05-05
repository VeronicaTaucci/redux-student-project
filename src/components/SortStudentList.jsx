
import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


const SortStudentList = () => {

  //sort studentlist in alphabetical order
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  const students = useSelector(state => state.students);
  const [sortCity, setSortCity] = useState([]);
  const [sortName, setSortName] = useState([]);



  const handleSortByName = () => {
    const mapFirstName = students.map(student => {
      return `${student.fName} , ${student.city}`
    })
    const sortedStudents = mapFirstName.sort(function (a, b) {
      const sortedNames = a.toLowerCase().localeCompare(b.toLowerCase());
    });
    setSortCity([])
    setSortName(sortedStudents);
    
  }

  const handleSortByCity = () => {
    const mapCity = students.map(student => {
      return `${student.city} , ${student.fName}`
    })
    console.log(mapCity);
    const sortedCities = mapCity.sort(function (a, b) {
      const sortedCities1 = a.toLowerCase().localeCompare(b.toLowerCase());
      return sortedCities1
    });
    setSortName([])
    setSortCity(sortedCities)
  }
  return (
    <>
      <h1>Sort students</h1>
      <button onClick={handleSortByName} >sort by name</button>
      <button onClick={handleSortByCity} >sort by city</button>
      <ul  > {sortCity.map(city => {
        return <li>{city}</li>
      })}</ul>
      <ul > {sortName.map(name => {
        return <li>{name}</li>
      })}</ul>
    </>
  )
}

export default SortStudentList
