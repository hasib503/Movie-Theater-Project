import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const { user } = useContext(AuthContext)

    const [userInfo, setUserInfo] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/specificUser?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [user])

    // console.log(userInfo._id);

    const handleUpdateUser = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const mobile = form.mobile.value;
        const gender = form.gender.value;
        console.log(name, mobile, gender);

        const updateUser = { name: name, mobile: mobile, gender: gender }

        console.log(userInfo._id);
        // TODO: don't fetch
        fetch(`http://localhost:5000/users/${userInfo?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    navigate('/userDashboard/profile')
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: 'User Information Updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div>
            <h2 className='font-semibold text-2xl lg:text-4xl text-slate-400 my-3'>Edit Information</h2>
            <hr className='border-2 mt-2 border-slate-500' />
            <form onSubmit={handleUpdateUser} className='mt-6 flex flex-col gap-4'>
                <div className='flex items-center'>
                    <p className='w-[150px]'>Name:</p>
                    <input name='name' defaultValue={userInfo?.name} type="text" className="input input-bordered w-full max-w-xs bg-[#26577C]" />
                </div>
                <div className='flex items-center'>
                    <p className='w-[150px]'>Mobile Number:</p>
                    <input defaultValue={userInfo?.mobile} name='mobile' type="text" placeholder="Enter your mobile number..." className="input input-bordered w-full max-w-xs bg-[#26577C]" />
                </div>
                <div className='flex items-center'>
                    <p className='w-[150px]'>Email Address:</p>
                    <p>{userInfo?.email}</p>
                </div>
                <div className='flex items-center'>
                    <p className='w-[150px]'>Gender:</p>
                    <select name='gender' className="select select-bordered bg-[#26577C] w-full max-w-xs">
                        <option selected={(userInfo?.gender && userInfo?.gender === 'male') && true} value='male'>Male</option>
                        <option selected={(userInfo?.gender && userInfo?.gender === 'female') && true} value='female'>Female</option>
                    </select>
                </div>
                <input className='btn bg-red-600 text-white max-w-[250px] mt-2' type="submit" value="Update Info" />
            </form>
        </div>
    );
};

export default EditProfile;