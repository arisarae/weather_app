import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { Toogle } from '../../components'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
    classHome: string;
    classClocks: string;
}

const Navbar: React.FC<Props> = ({ classHome, classClocks, ...props }) => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [accountLabel, setAccountLabel] = useState('');

    useEffect(() => {
        if (token) {
            setAccountLabel('Log Out');
        } else {
            setAccountLabel('Log In');
        }
    }, []);
        

    const handleAccount = () => {
        if (token) {
            localStorage.removeItem('token');
        }
        
        navigate('/login')
    };

    return (
        <nav className='inline-flex flex-row justify-between w-full text-2xl px-20 mt-16'>
            <Toogle className='z-10'></Toogle>
            <div className='absolute inline-flex flex-row w-full self-center justify-center space-x-7 pr-40'>
                <p onClick={() => navigate('/')} {...props} className={`${classHome} border-b-2 p-2`}>{'Home'}</p>
                <p onClick={() => navigate('/myClocks')} {...props} className={`${classClocks} border-b-2 p-2`}>{'My Clocks'}</p>
            </div>
            <button onClick={handleAccount} className='z-10'>{accountLabel}</button>
        </nav>
    )
}

export default Navbar