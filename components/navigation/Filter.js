import {useState} from 'react';
import PropTypes from 'prop-types';
import Select from '../form/Select';

export default function Filter({data, onFilter}) {
    const [state, setState] = useState('Filter');
    const categories = data.map(data => {
        return {
            value: data.category,
            text : data.category
        }
    });
    const onFilterApply = (value) => {
        setState(value);
        const jobs = data.filter((e) => e.category === value);
        onFilter(jobs);
    }
    return (
        <div className="mb-4">
            <Select options={categories} 
            onChange={onFilterApply} selected={state}
            className='w-56 max-w-sm'
             />
        </div>
    )
}

Filter.propTypes = {
    data: PropTypes.array.isRequired,
    onFilter: PropTypes.func.isRequired,
}
