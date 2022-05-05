
import React,{useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

const UpdateStudent = () => {
  const students = useSelector(state => state.students)
  const dispatch = useDispatch();
  // const id = useSelector(state => state.students.id);
  // const currentStudent = students.find(student => student.id === id);
  const [fName, setFName] = useState('');
  const [city, setCity] = useState('');
  

  //   // Update James' city information to Atlanta 
  
  // // useEffect(() => {
  // //   setFName(currentStudent.fName)
  // //   setCity(currentStudent.city)
  // // }, [currentStudent])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateStudent = {
      fName,
      city
    }
  }
  //   // console.log(newStudent);
  //   dispatch({
  //     type: "UPDATE_STUDENT",
  //     payload: updateStudent
  //   });
  //   setCity('');
  //   setFName('');
  // }  

  const handleUpdateLink = () => {
    const updateBtn = document.querySelector(".updateBtn");
    const mainForm = document.querySelector(".mainForm");
  }
    
  
  return (
    <>
      <h1>Update student</h1>
      <ul>
        {students.map(student => {
          return <li key={student.id}>{student.fName} , {student.city} <a className="update" href="#" onClick={handleUpdateLink}
          >Update</a>
            {/* onClick={() => dispatch(removeContact(student.id))} */}
            
          </li>
          
        })}
       
      </ul>
      <form className="mainForm" onSubmit={handleSubmit} >
        <input type='text' placeholder='first name' value={fName} onChange={e => setFName(e.target.value)} />
        <input type='text' placeholder='city' value={city} onChange={e => setCity(e.target.value)} />
        <button type='submit'>Update</button>
      </form>
    </>
  )
}

export default UpdateStudent
