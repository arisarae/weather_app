import { HTMLAttributes, useState } from 'react';

type InputProps = HTMLAttributes<HTMLDivElement>

const Toggle = (props: InputProps) => {
    const [isChecked, setIsChecked] = useState(() => localStorage.getItem('temperature') === 'celcius');
  
    const handleTemperature = () => {
      setIsChecked(!isChecked);
  
      if (!isChecked) {
        localStorage.setItem('temperature', 'celcius');
      } else {
        localStorage.removeItem('temperature');
      }
    };

    return (
        <>
            <div {...props} className={`${props.className}`}>
                <label className='switch'>
                    <input type='checkbox' checked={isChecked} onChange={handleTemperature}/>
                    <span className='slider round'></span>
                    <span className='text-l'>celcius</span>
                </label>
            </div>
        </>
    )
};

export default Toggle;
