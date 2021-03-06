import React from 'react';
import { useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LayoutOne } from 'upkit';
import BounceLoader from 'react-spinners/BounceLoader';

import { userLogout } from '../../features/Auth/actions';
import { logout } from '../../api/auth';

export default function Logout() {

    let history = useHistory();
    let dispatch = useDispatch();

    React.useEffect(() => {
        logout()
            .then( () => dispatch(userLogout()) )
            .then( () => history.push('/') )
    }, [history, logout])

    return (
        <LayoutOne>
            <div className="text-center flex flex-col justify-center items-center">
                <BounceLoader color="red" />
            </div>
        </LayoutOne>
    )
}
