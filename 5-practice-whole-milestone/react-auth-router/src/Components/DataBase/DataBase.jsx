import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const DataBase = () => {
    const user = use(AuthContext);
    console.log(user);

    return (
        <div>
            DataBase : It should be private route
        </div>
    );
};

export default DataBase;