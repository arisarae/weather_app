
import { Clear, FewCloud, FewCloudNight, ScatteredClouds, BrokenClouds, ShowerRain, Rain, Thunderstorm, Snow, Mist } from '../assets';
import { useState } from 'react';

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

export const search = async (
    apiKey: string,
    humidity: HTMLElement,
    wind: HTMLElement,
    temperature: HTMLElement,
    location: HTMLElement,
    feels: HTMLElement) => {

    const [cityInput, setCityInput] = useState('');
    const [icon, setIcon] = useState<string>('');

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

    humidity.innerHTML = `${data.main.humidity} %`;
    wind.innerHTML = `${Math.floor(data.wind.speed)} km/h`;
    if (celciusCheck === 'celcius') {
        temperature.innerHTML = `${Math.floor(data.main.temp)}°C`;
    } else {
        temperature.innerHTML = `${Math.floor(data.main.temp)} K`;
    }
    location.innerHTML = `${data.name}`;
    if (celciusCheck === 'celcius') {
        feels.innerHTML = `${Math.floor(data.main.feels_like)}°C`;
    } else {
        feels.innerHTML = `${Math.floor(data.main.feels_like)} K`;
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