import React from 'react';

export default function ProfileForm(props) {

    const onChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        props.update(name, value);
    }

    const onSubmit = event => {
        event.preventDefault(
        props.submit()
        )
    }



    return (
        <form onSubmit={onSubmit}>
            <div className='formInputs'>
                <label>First Name
                    <input
                        name='firstname'
                        type='text'
                        placeholder='Your First Name'
                        value={props.values.firstname}
                        onChange={onChange}
                    />
                </label>

                <label>Last Name
                    <input 
                        name='lastname'
                        type='text'
                        placeholder='Your Last Name'
                        value={props.values.lastname}
                        onChange={onChange}
                    />
                </label>

                <label>Email
                    <input 
                        name='email'
                        type='email'
                        placeholder='Your Email'
                        value={props.values.email}
                        onChange={onChange}
                    />
                </label>

                <label>Favorite Food
                    <input 
                        name='favfood'
                        type='text'
                        placeholder='Your Favorite Food'
                        value={props.values.favfood}
                        onChange={onChange}
                    />
                </label>

                <label>Gender
                    <select>
                        <option value='' name='gender' onChange={onChange}>-- Select your Gender --</option>
                        <option value='Man'>Male</option>
                        <option value='Woman'>Female</option>
                        <option value='Prefer Not to Say'>Prefer not to Say</option>
                    </select>
                </label>

                <label>Favorite Color
                    <select>
                        <option value='' name='color' onChange={onChange}>-- Favorite Color-- </option>
                        <option value='blue'>Blue</option>
                        <option value='red'>Red</option>
                        <option value='yellow'>Yellow</option>
                        <option value='green'>Green</option>
                        <option value='purple'>Purple</option>
                        <option value='orange'>Orange</option>
                    </select>
                </label>

                <div>
                    <button>Submit</button>
                </div>

                
            </div>
        </form>
    )
}