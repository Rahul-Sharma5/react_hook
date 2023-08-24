import React, { useState } from 'react'
import useInput from '../hooks/useInput'

const UserForm = () => {
    // const [firstName, setFirstName] = useState('')

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }


    return (
        <div>
            <h2>Custom Hook</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Firat Name </label>
                    <input {...bindFirstName} 
                    type='text'></input>
                </div>

                <div>
                    <label>Last Name </label>
                    <input {...bindLastName} 
                    type='text'></input>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserForm