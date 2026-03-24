import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Profile = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            Profile: {user.email}
        </div>
    );
};

export default Profile;