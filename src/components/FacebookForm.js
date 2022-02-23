import React from 'react';

export default function ProfileForm(props) {

    return (
        <form>
            <div class='formInputs'>
                <label>First Name
                    <input
                        name='firstname'
                        type='text'
                        placeholder='Your First Name'
                        value
                        onChanges
                    />
                </label>

                <label>Last Name
                    <input 
                        name='lastname'
                        type='text'
                        placeholder='Your Last Name'
                        value
                        onChanges
                    />
                </label>

                <label>Email
                    <input 
                        name='email'
                        type='email'
                        placeholder='Your Email'
                        value
                        onChanges
                    />
                </label>

                <label>Favorite Food
                    <input 
                        name='favfood'
                        type='text'
                        placeholder='Your Favorite Food'
                        value
                        onChanges
                    />
                </label>

                
            </div>
        </form>
    )
}