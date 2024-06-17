import { Input, Text, Button, Card } from '../../components';
import { useFormik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginContainer: React.FC = () => {
    const navigate = useNavigate();

    interface LoginData {
        email: string;
        password: string;
    }

    const formMik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object().shape({
            email: yup.string().email().required('Email is required'),
            password: yup.string().required('Password is required'),
        }),
        onSubmit: async (values: LoginData) => {
            console.warn(values);

            try {
                let result = await fetch('https://mock-api.arikmpt.com/api/user/login', {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                result = await result.json();
                localStorage.setItem('token', JSON.stringify(result));
                navigate('/myClocks');
                console.warn('result', result);
            } catch (error) {
                console.error(error);
            }
        },
    })

    return (
        <Card border={false} className='flex justify-center items-center h-screen'>
            <Card border className='w-full rounded-lg shadow border md:mt-0 sm:max-w-md p-6 sm:p-8 bg-gray-800 border-gray-700 space-y-5'>
                <Text className='flex justify-center text-xl font-bold leading-tight tracking-tight md:text-2xl'>{'Account Login'}</Text>
                <form onSubmit={formMik.handleSubmit} className='space-y-4 md:space-y-6'>
                    <div>
                        <Text className='block my-2 text-sm font-medium'>{'Email Adress'}</Text>
                        <Input className='block border-neutral-400 bg-gray-700 border border-gray-600 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 placeholder-gray-400'
                            name={'email'}
                            value={formMik.values.email}
                            onChange={formMik.handleChange('email')}
                            placeholder={'email@company.com'}
                        />
                        {
                            formMik.errors.email && (
                                <Text className='block my-2 text-sm text-red-500'>{formMik.errors.email}</Text>
                            )
                        }
                    </div>
                    <div>
                        <Text className='block my-2 text-sm font-medium'>{'Password'}</Text>
                        <Input className='block border-neutral-400 bg-gray-700 border border-gray-600 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 placeholder-gray-400'
                            name={'password'}
                            value={formMik.values.password}
                            onChange={formMik.handleChange('password')}
                            placeholder={'••••••••'}
                        />
                        {
                            formMik.errors.password && (
                                <Text className='block my-2 text-sm text-red-500'>{formMik.errors.password}</Text>
                            )
                        }
                    </div>
                    <Button label={'Login'} type={'submit'} className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center' />
                </form>
                <p className="text-sm font-light text-gray-400">
                    Don’t have an account yet? <a onClick={() => navigate('/register')} className="font-medium text-primary-500 hover:underline">Register now</a> or <a onClick={() => navigate('/')} className="font-medium text-primary-500 hover:underline">continue without account</a>
                </p>
            </Card >
        </Card>
    )
}

export default LoginContainer