import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from './../../../provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc'

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                // console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, memberSince: moment().format('LL') }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => navigate('/'))
            })
    }

    return (
        <div className='w-[300px] mx-auto'>
            <div className='divider'>OR</div>
            <div>
                <button onClick={handleGoogleSignIn} className='btn w-full bg-blue-800 hover:bg-blue-500 text-white'><FcGoogle size={26}></FcGoogle> Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;