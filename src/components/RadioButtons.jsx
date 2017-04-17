import './RadioButtons.css';

const RadioButtons = (props) => {
    return (
        <div className='RadioButtons'>
            <ul className='RadioButtons-ul'>
                {props.options.map((option, index) => {
                    return (
                        <li className='RadioButtons-li'>
                            <label 
                                htmlFor={`${props.id}-${index}`}
                                className='RadioButtons-label'
                            >
                                <input
                                    className='RadioButtons-input'
                                    type='radio'
                                    name={props.name}
                                    value={option.value.toString()}
                                    id={`${props.id}-${index}`}
                                    onChange={e => props.optionSelected(e)}
                                />
                                <svg viewBox='0 0 30 30' className='RadioButtons-circle'>
                                    <circle cx='15' cy='15' r='13' className='outline' />
                                    <circle cx='15' cy='15' r='8' className='checked' />
                                </svg>
                                <span className='RadioButtons-span'>
                                    {option.text}
                                </span>
                            </label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default RadioButtons;
