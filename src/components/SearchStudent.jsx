import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SearchStudent = () => {

    // search for a student by name, if nothing found, return empty array

  const students = useSelector(state => state.students)
  const [filteredArr, setFilteredArr] = useState([]) // students searched by user
  const [filteredText, setFilteredText] = useState("")
  
  
  const handleChange = (e) => {
    setFilteredText(e.target.value) //Capti

    let filteredStudents = students.filter(student => {
      return student.fName.toLowerCase().includes(filteredText.toLowerCase())
    })

    setFilteredArr(filteredStudents)
  }
    // save the search results for the last 3 searches
  return (
    <>
      Search Student:
      <input type="text" value={filteredText} onChange={handleChange} />

      <ul>
        {filteredArr.map((student) => {
          return <li >
            <h2>{student.fName}</h2>
          </li>
        })}
      </ul>
    </>
  )
}

export default SearchStudent
