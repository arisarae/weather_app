import { Clear, FewCloud, FewCloudNight, ScatteredClouds, BrokenClouds, ShowerRain, Rain, Thunderstorm, Snow, Mist } from '../assets';

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