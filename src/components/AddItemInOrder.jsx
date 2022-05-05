
import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const AddItemInOrder = () => {
  //add an item in alphabetical order (not to the end of the list)
  const [fName, setFName] = useState('');
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  let allStudents = []; //will add students from state plus the new student
  let [allSorted, setAllSorted] = useState([]); //[{}] --sorted: these are all students including the new student



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

    allStudents = [...students, newStudent]
    console.log("all students", allStudents);


    let allSorted = allStudents.sort((a, b) => a.fName.toLowerCase() > b.fName.toLowerCase() ? 1 : -1);
    console.log("all sorted", allStudents);
    setAllSorted(allSorted);
    setCity('');
    setFName('');
  }
  //   dispatch({
  //     type: "ADD_STUDENT",
  //     payload: newStudent
  //   });
  //   setCity('');
  //   setFName('');
  // }


  // let student1 = students.sort((a, b) =>
  //   a.fName.toLowerCase() > b.fName.toLowerCase() ? 1 : -1
  // );
  // console.log(student1);
  //add Kanye West to the global state of students
  // show the current student count
  return (

    <>
      Add New Student in Order
      <br />
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='first name' value={fName} onChange={e => setFName(e.target.value)} />
        <input type='text' placeholder='city' value={city} onChange={e => setCity(e.target.value)} />
        <button type='submit'>Add New Student</button>
        <h1>Sorted</h1>
        <ul > {allSorted.map(name => {
          return <li>{name.fName},{name.city}</li>
        })}</ul>
      </form>

    

    </>
  )
}
export default AddItemInOrder
