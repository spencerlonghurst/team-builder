import '../App.css';
import React, { useState } from 'react';
import ProfileForm from './FacebookForm';
// import axios from 'axios';
import Profile from './Profile';


const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  favfood: '',
  gender: '',
  color: ''
}

// const newValue = {
//   firstname: 'Joe',
//   lastname: 'Dirt',
//   email: 'Joe@dirt.com',
//   favfood: 'diety dirt',
//   gender: 'Female',
//   color: 'Orange'
// }

function App() {
  const [profiles, setProfiles] = useState([]);

  const [formValues, setFormValues] = useState(initialValues);

  const formUpdate = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const formSubmit = () => {
    const newProfile = {
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      email: formValues.email,
      favfood: formValues.favfood,
      gender: formValues.gender,
      color: formValues.color
    }

  
        setProfiles( profiles.concat(newProfile) );
        setFormValues(initialValues);
    
  }

// useEffect(() => {
//   axios.get('facebooks.com')
//     .then(response => {
//       setProfiles(response.data)
//     })
// }, [])


  return (
    <div className="App">
      <h1>The Facebook Profile App</h1>

      <ProfileForm 
        values={formValues}
        update={formUpdate}
        submit={formSubmit}
      />
      {
        profiles.map((profile, index) => {
          return (
            <Profile key={index} info={profile} />
          )
        })
      }
    </div>
  );
}

export default App;
