import React, {useState} from 'react';

export const Signup = (props) => {
    const {email, setEmail} = useState('');
    const {pass, setPass} = useState('');
    const {name, setName} = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (<div className='auth-form-container'>
        <h2>
            Register
        </h2>
        <form className='signup-form'
            onSubmit={handleSubmit}>
            <label htmlFor='name'>
                Full Name</label>
            <input value={name}
                onChange={
                    (e) => setName(e.target.value)
                }
                placeholder="full name"
                id="name"
                name="fname"/>
            <label for="email">Email</label>
            <input value={email}
                onChange={
                    (e) => setEmail(e.target.value)
                }
                type="email"
                placeholder="youremail@gmail.com"
                id="email"
                name="Email"/>
            <label for="password">Password</label>
            <input value={pass}
                onChange={
                    (e) => setPass(e.target.value)
                }
                type="password"
                placeholder="#$%^&@*&%$#"
                id="password"
                name="Password"/>
            <button>Sign Up</button>
        </form>
        <button className="link-button"
            onClick={
                () => props.onFormSwitch('Login')
        }>Already have an account? Login here</button>
    </div>)
}
