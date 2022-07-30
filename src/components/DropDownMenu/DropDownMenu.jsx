import './DropDownMenu.css'
import Select from 'react-select'
import Angular from './img/image-138.png'
import React from './img/image-140.png'
import VueJs from './img/image-141.png'
import { width } from '@mui/system'

const DropDownMenu = ({ setTech, tech }) => {

    const options = [
        { value: 'angular', label: 'Angular', image: Angular },
        { value: 'reactjs', label: 'React', image: React },
        { value: 'vuejs', label: 'VueJs', image: VueJs }
    ];

    const customStyles = {
        control: base => ({
            ...base,
            minHeight: 35,
            width: 300
        })
    };


    return (
        <Select
            styles={customStyles}
            onChange={setTech}
            options={options}
            defaultValue={tech}
            formatOptionLabel={item => (
                <div className='item'>
                    <img src={item.image} alt="country-image" />
                    <span style={{ marginLeft: '5px' }}>{item.label}</span>
                </div>
            )}
        />
    )


}

export default DropDownMenu