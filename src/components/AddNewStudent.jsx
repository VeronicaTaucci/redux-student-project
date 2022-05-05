
import {React, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Provider } from 'react-redux';

const AddNewStudent = () => {
  const [fName, setFName] = useState('');
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const students = useSelector((state) => state);
  



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
    dispatch({
      type: "ADD_STUDENT",
      payload: newStudent
    });
    setCity('');
    setFName('');
  }
  
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
