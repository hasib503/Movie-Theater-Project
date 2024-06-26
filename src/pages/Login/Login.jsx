import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { AuthContext } from './../../provider/AuthProvider';
import SocialLogin from './../../components/shared/SocialLogin/SocialLogin';
import '../errorPage/errorPage.css'

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                Swal.fire(
                    'Good job!',
                    'Log in successful!',
                    'success'
                )
                navigate(from, { replace: true })
            })
    }

    return (
        <div className='bg-image'>
            <div className='bg-[#001232] bg-opacity-80 h-screen'>
                <Helmet><title>Movie Theater | Login</title></Helmet>
                <h2 className='text-center font-bold pt-12 pb-8 text-3xl lg:text-5xl'>Login</h2>
                <form onSubmit={handleLogin} className='flex justify-center'>
                    <div>
                        <div className='mb-4'>
                            <input type="text" placeholder="Email" name='email' className="input input-bordered w-[300px] max-w-xs bg-[#26577C]" />
                        </div>
                        <div className='mb-4'>
                            <input type="password" placeholder="Password" name='password' className="input input-bordered w-[300px] max-w-xs bg-[#26577C]" />
                        </div>
                        <div>
                            <input className='btn btn-outline w-full bg-[#001232] hover:bg-[#26577C] text-white' type="submit" value="Login" />
                        </div>
                    </div>
                </form>
                <p className='text-center my-3'><small>New Here? <Link to='/signup' className='text-xl text-blue-600 font-bold underline'>Create an account</Link></small></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;