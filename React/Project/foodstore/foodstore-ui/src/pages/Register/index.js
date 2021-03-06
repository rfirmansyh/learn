import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Card, FormControl, InputPassword, InputText, LayoutOne } from 'upkit';

import { rules } from './validation';
import { registerUser } from '../../api/auth';
import StoreLogo from '../../components/StoreLogo';

const statusList = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error',
}

export default function Register() {

    let history = useHistory();
    let { register, handleSubmit, errors, setError } = useForm();
    let [status, setStatus] = React.useState(statusList.idle);

    const onSubmit = async formData => {
        let { password, password_confirmation } = formData;
        if (password !== password_confirmation) {
            return setError('password_confirmation', {type: 'equality', message: 'Konfirmasi Password tidak sesuai!'});
        }
        
        setStatus(statusList.process);

        let { data } = await registerUser(formData);
        if (data.error) {
            let fields = Object.keys(data.fields);
            fields.forEach(field => {
                setError(field, {type: 'server', message: data.fields[field]?.properties?.message});
            });

            setStatus(statusList.error)
        }

        setStatus(statusList.success);

        history.push('/register/berhasil');
    }

    return (
        <LayoutOne size="small">
            <br/>
            <Card color="white">
                <div className="text-center mb-5">
                    <StoreLogo />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl errorMessage={errors.full_name?.message}>
                        <InputText 
                            name="full_name"
                            placeholder="Nama Lengkap"
                            ref={register(rules.full_name)}
                            fitContainer />
                    </FormControl>

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

                    <FormControl errorMessage={errors.password_confirmation?.message}>
                        <InputPassword 
                            name="password_confirmation"
                            placeholder="Konfirmasi Password"
                            ref={register(rules.password_confirmation)}
                            fitContainer />
                    </FormControl>

                    <Button
                        disabled={status === statusList.process}
                        size="large"
                        fitContainer> {status === statusList.process ? 'Sedang Memproses' : 'Mendaftar'} 
                    </Button>
                </form>

                <div className="text-center mt-2">
                    Sudah punya akun ? <Link to="/login"><b>Masuk Sekarang</b></Link>
                </div>
            </Card>
        </LayoutOne>
    )
}
