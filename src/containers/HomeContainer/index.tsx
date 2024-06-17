import { Input, Text, Navbar, Card } from '../../components';
import { Clear, FewCloud, FewCloudNight, ScatteredClouds, BrokenClouds, ShowerRain, Rain, Thunderstorm, Snow, Mist, Humidity, Search, Wind, Feels } from '../../assets';
import React, { useState, useEffect } from 'react';

const HomeContainer: React.FC = () => {

    let apiKey = 'be7c02d92680e51eeb2ae62ecede0ba8';

    interface WeatherData {
        main: {
            humidity: number;
            temp: number;
            feels_like: number;
        };
        weather: {
            icon: string;
        }[];
        wind: {
            speed: number;
        };
        name: string;
    }

    const [icon, setIcon] = useState(Clear)
    const [cityInput, setCityInput] = useState('');

    useEffect(() => {
        search();
    }, []);

    const search = async () => {
        const prevCity = localStorage.getItem('home city');
        let defaultCity = 'London';

        if (prevCity) {
            defaultCity = prevCity;
        }

        const selectedCity = cityInput || defaultCity;

        if (!selectedCity) {
            return 0
        } else {
            localStorage.setItem('home city', selectedCity)
        }

        const celciusCheck = localStorage.getItem('temperature');
        let convertCelcius = '';

        if (celciusCheck === 'celcius') {
            convertCelcius = 'units=Metric&';
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&${convertCelcius}appid=${apiKey}`;

        let response = await fetch(url);
        let data: WeatherData = await response.json();

        const humidity = document.getElementsByClassName('humidity') as HTMLCollectionOf<HTMLElement>;
        const wind = document.getElementsByClassName('windRate') as HTMLCollectionOf<HTMLElement>;
        const temperature = document.getElementsByClassName('temperature') as HTMLCollectionOf<HTMLElement>;
        const location = document.getElementsByClassName('location') as HTMLCollectionOf<HTMLElement>;
        const feels = document.getElementsByClassName('feelsLike') as HTMLCollectionOf<HTMLElement>;

        humidity[0].innerHTML = `${data.main.humidity} %`;
        wind[0].innerHTML = `${Math.floor(data.wind.speed)} km/h`;
        if (celciusCheck === 'celcius') {
            temperature[0].innerHTML = `${Math.floor(data.main.temp)}°C`;
        } else {
            temperature[0].innerHTML = `${Math.floor(data.main.temp)} K`;
        }
        location[0].innerHTML = `${data.name}`;
        if (celciusCheck === 'celcius') {
            feels[0].innerHTML = `${Math.floor(data.main.feels_like)}°C`;
        } else {
            feels[0].innerHTML = `${Math.floor(data.main.feels_like)} K`;
        }

        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            setIcon(Clear);
        }
        else if (data.weather[0].icon === "02d") {
            setIcon(FewCloud);
        }
        else if (data.weather[0].icon === "02n") {
            setIcon(FewCloudNight);
        }
        else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
            setIcon(ScatteredClouds);
        }
        else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
            setIcon(BrokenClouds);
        }
        else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
            setIcon(ShowerRain);
        }
        else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
            setIcon(Rain);
        }
        else if (data.weather[0].icon === "11d" || data.weather[0].icon === "11n") {
            setIcon(Thunderstorm);
        }
        else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
            setIcon(Snow);
        }
        else if (data.weather[0].icon === "50d" || data.weather[0].icon === "50n") {
            setIcon(Mist);
        }
        else {
            setIcon(Clear);
        }
    }


    return (
        <>
            <Navbar classHome='border-solid' classClocks='border-hidden'></Navbar>
            <Card border={false} className='flex flex-col items-center'>
                <Card border={false} className='flex flex-row items-center space-x-5 m-9'>
                    <Card border className='rounded-3xl flex items-center bg-slate-300 py-4 px-6'>
                        <Input onChange={(e) => setCityInput(e.target.value)} value={cityInput} className='cityInput bg-inherit w-96 h-6 p-0 outline-none text-gray-600 text-2xl'></Input>
                    </Card>
                    <Card border className='rounded-full flex items-center bg-slate-300 p-4'>
                        <img src={Search} alt='search' onClick={search} className='h-full mx-2' />
                    </Card>
                </Card>
                <Card border className='rounded-3xl bg-gradient-to-tl from-gray-800 to-purple-500 sm:p-8 p-6 m-9 space-y-8'>
                    <h2 className='location text-3xl'>City</h2>
                    <div className='flex justify-center items-center m-5'>
                        <Text className='temperature text-7xl m-3'>00</Text>
                        <img src={icon} className='w-20 m-3' />
                    </div>
                    <div className='flex flex-row justify-center space-x-9 m-5'>
                        <Card border={false} className='flex flex-col items-center'>
                            <Text className='text-l'>{'HUMIDITY'}</Text>
                            <div className='flex flex-row mt-0 justify-center items-center'>
                                <img src={Humidity} className='w-5 h-5 m-1' />
                                <Text className='humidity m-1 text-xl'>00%</Text>
                            </div>
                        </Card>
                        <Card border={false} className='flex flex-col items-center'>
                            <Text className='text-l'>{'WIND SPEED'}</Text>
                            <div className='flex flex-row mt-0 justify-center items-center'>
                                <img src={Wind} className='w-5 h-5 m-1' />
                                <Text className='windRate m-1 text-xl'>0 km/h</Text>
                            </div>
                        </Card>
                        <Card border={false} className='flex flex-col items-center'>
                            <Text className='text-l'>{'FEELS LIKE'}</Text>
                            <div className='flex flex-row mt-0 justify-center items-center'>
                                <img src={Feels} className='w-5 h-5 m-1' />
                                <Text className='feelsLike m-1 text-xl'>00</Text>
                            </div>
                        </Card>
                    </div>
                </Card>
            </Card >
        </>


    )
}

export default HomeContainer