
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const DisplayStudents = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  const students = useSelector(state => state.students)
  //display the current students
  return (
    <>
      <h1>Display Students</h1>
      <h2>{count}</h2>
      <ul>
        {students.map(student => {
          return <li key={student.id}>{student.fName} , {student.city}</li>
        })}
      </ul>
    </>
  )
}

export default DisplayStudents
