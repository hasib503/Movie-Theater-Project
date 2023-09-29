import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { AuthContext } from './../../provider/AuthProvider';
import SocialLogin from './../../components/shared/SocialLogin/SocialLogin';
import '../errorPage/errorPage.css'

const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                updateUserProfile(name, photoURL)
                    .then(() => {
                        const saveUser = { name: name, email: email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire(
                                        'Good job!',
                                        'Log in successful!',
                                        'success'
                                    )
                                    navigate('/')
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <div className='bg-image'>
            <div className='bg-[#001232] bg-opacity-80 h-screen'>
                <Helmet><title>Movie Theater | Sign Up</title></Helmet>
                <h2 className='text-center font-bold py-8 text-3xl lg:text-5xl'>Sign Up</h2>
                <form onSubmit={handleRegister} className='flex justify-center'>
                    <div>
                        <div className='mb-4'>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered w-[300px] max-w-xs bg-[#26577C]" required />
                        </div>
                        <div className='mb-4'>
                            <input type="text" placeholder="PhotoURL" name='photoURL' className="input input-bordered w-[300px] max-w-xs bg-[#26577C]" />
                        </div>
                        <div className='mb-4'>
                            <input type="email" placeholder="Email*" name='email' className="input input-bordered w-[300px] max-w-xs bg-[#26577C]" required />
                        </div>
                        <div className='mb-4'>
                            <input type="password" placeholder="Password*" name='password' className="input input-bordered w-[300px] max-w-xs bg-[#26577C]" required />
                        </div>
                        <div>
                            <input className='btn btn-outline w-full bg-[#001232] hover:bg-[#26577C] text-white' type="submit" value="Sign Up" />
                        </div>
                    </div>
                </form>
                <p className='text-center my-3'><small>Already have an account? <Link to='/login' className='text-xl underline text-blue-600 font-bold'>Login</Link></small></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUp;