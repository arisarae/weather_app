import { useNavigate } from 'react-router-dom';
import { Button, Text } from '../../components'


const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className='inline-flex flex-row justify-between w-full text-2xl'>
            <div>Celcius Kelvin button</div>
            <div className='inline-flex flex-row justify-between w-1/4 self-center'>
                <Text onClick={() => navigate('/')} className='border-hidden border-b-2 p-2'>{'Home'}</Text>
                <Text onClick={() => navigate('/myClocks')} className='border-solid border-b-2 p-2'>{'My Clocks'}</Text>
            </div>
            <Button type='button' label={'Log Out'} onClick={handleLogout} className='flex py-5 px-9 rounded-2xl from-sky-950 to-sky-900' />
        </nav>
    )
}

export default Navbar