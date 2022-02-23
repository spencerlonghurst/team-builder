import '../App.css';
import React, { useState } from 'react';
import ProfileForm from './FacebookForm';









function App() {
  //STEP 1. Use state to hold all the values within the form.
  const [formValues, setFormValues] = useState();





  return (
    <div className="App">
      <h1>The Facebook Profile App</h1>

      <ProfileForm 
        values={formValues}
      />
    </div>
  );
}

export default App;
