import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext)

    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/specificUser?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [user])

    return (
        <div>
            <h2 className='font-semibold text-2xl lg:text-4xl text-slate-400 my-3'>Basic Information</h2>
            <hr className='border-2 mt-2 border-slate-500' />
            <div className="overflow-x-auto mt-6">
                <table className="table">
                    <tbody>
                        <tr className='border-b-2 border-b-red-500 text-lg'>
                            <th>Name</th>
                            <td>{userInfo?.name}</td>
                        </tr>
                        <tr className='border-b-2 border-b-red-500 text-lg'>
                            <th>Mobile Number</th>
                            <td>{userInfo?.mobile || '---not set yet---'}</td>
                        </tr>
                        <tr className='border-b-2 border-b-red-500 text-lg'>
                            <th>Email Address</th>
                            <td>{userInfo?.email}</td>
                        </tr>
                        <tr className='border-b-2 border-b-red-500 text-lg'>
                            <th>Gender</th>
                            <td>{userInfo?.gender || '---not set yet---'}</td>
                        </tr>
                        <tr className='border-b-2 border-b-red-500 text-lg'>
                            <th>Member Since</th>
                            <td>{userInfo?.memberSince || '---not set yet---'}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Profile;