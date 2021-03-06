import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Card, FormControl, InputPassword, InputText, LayoutOne } from 'upkit';

import { rules } from './validation';
import { login } from '../../api/auth';
import { userLogin } from '../../features/Auth/actions';
import StoreLogo from '../../components/StoreLogo';

const statusList = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error',
}

export default function Login() {

    const { register, handleSubmit, errors, setError } = useForm();
    const [status, setStatus] = React.useState(statusList.idle);
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = async ({email, password}) => {
        setStatus(statusList.process);

        let { data } = await login(email, password);
        if (data.error) {
            setError('password', {type: 'invalidCredential', message: data.message});
            setStatus(statusList.error);
        } else {
            let {user, token} = data;
            dispatch(userLogin(user, token));

            history.push('/');
        }

        setStatus(statusList.success);  
    }

    return (
        <LayoutOne size="small">
            <br/>
            <Card color="white">
                <div className="text-center mb-5">
                    <StoreLogo/>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl errorMessage={errors.email?.message}>
                        <InputText 
                            name="email"
                            placeholder="Email"
                            ref={register(rules.email)}
                            fitContainer />
                    </FormControl>
                    
                    <FormControl errorMessage={errors.password?.message}>
                        <InputPassword 
                            name="password"
                            placeholder="Password"
                            ref={register(rules.password)}
                            fitContainer />
                    </FormControl>

                    <Button fitContainer size="large" disabled={status === 'process'}>
                        Login
                    </Button>
                </form>
                
                <div className="text-center mt-2">
                    Belum punya akun? <Link to="/register"><b>Daftar sekarang.</b></Link>
                </div>
            </Card>
        </LayoutOne>
    )
}
