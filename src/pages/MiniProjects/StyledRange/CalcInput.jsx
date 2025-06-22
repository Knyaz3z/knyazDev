// CalcInput.js
import './CalcInput.scss';

function CalcInput({label, classname, type, isRange, value, onChange, min, max}) {
    const handleChange = (e) => {
        const newValue = type === 'range' ? parseInt(e.target.value) : e.target.value;
        onChange(newValue);
    }

    return (
        <div className="custom__range">
            <div className="custom__range-header">
                <h3>{label}</h3>
                <input
                    onChange={handleChange}
                    value={value}
                    className='inputs__input'
                    type={type === 'range' ? 'text' : type}
                />
            </div>
            {isRange && (
                <div className="custom__range-slider">
                    <input
                        value={value}
                        min={min}
                        max={max}
                        onChange={handleChange}
                        type={type}
                        className={classname}
                    />
                </div>
            )}
        </div>
    )
}

export default CalcInput;