
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const SortStudentList = () => {

    //sort studentlist in alphabetical order
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  const students = useSelector(state => state.students)

  const mapFirstName = students.map(student => {
    return `${student.fName} , ${student.city}`




  })
  const sortedStudents = mapFirstName.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });
  console.log(sortedStudents);
  return (
    <>
      <h1>Display Students</h1>
      <h2>{count}</h2>
      <ul>
        {sortedStudents.map(student => {
          return <li key={student.id}>{student}</li>
        })}
      </ul>
    </>
  )
}

export default SortStudentList
