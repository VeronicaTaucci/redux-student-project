
import {React, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Provider } from 'react-redux';

const AddNewStudent = () => {
  const [fName, setFName] = useState('');
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  let allStudents = [];
  



  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fName || !city) {
      return alert('please fill in all fields')
    }

    const newStudent = {
      id: uuidv4(),
      fName,
      city
    }
    // console.log(newStudent);

  allStudents=[...students,newStudent]
    console.log("all students",allStudents);


    let allSorted = allStudents.sort((a, b) => a.fName > b.fName ? 1 : -1);

    dispatch({
      type: "ADD_STUDENT",
      payload: newStudent
    });
    setCity('');
    setFName('');
  }
  

  // let student1 = students.sort((a, b) =>
  //   a.fName.toLowerCase() > b.fName.toLowerCase() ? 1 : -1
  // );
  // console.log(student1);
  //add Kanye West to the global state of students
  // show the current student count
  return (
    
    <>
      Add New Student
      <br />
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='first name' value={fName} onChange={e => setFName(e.target.value)} />
        <input type='text' placeholder='city' value={city} onChange={e => setCity(e.target.value)} />
        <button type='submit'>Add New Student</button>
      </form>
     
    </>
  )
}

export default AddNewStudent
