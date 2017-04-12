import './Gender.css';

function Gender(props) {
    return (
        <div className="Gender">
            <button className="Gender-button-male"
                onClick={() => props.nextstep(props.name, 'Male')}>
                <div className="Gender-button-male-icon">
                    <svg viewBox="0 0 21 28">
                        <path className="Gender-male-svg" d="M7207.36,7202.73a1.47,1.47,0,0,1-2.94,0v-5.38h-1v13.94a1.71,1.71,0,0,1-3.43,0v-7.09h-1v7.09a1.71,1.71,0,0,1-3.42,0v-13.94h-1v5.38a1.47,1.47,0,0,1-2.94,0v-6.36a2.94,2.94,0,0,1,2.94-2.94h9.79a2.94,2.94,0,0,1,2.94,2.94Zm-7.83-9.79a3.42,3.42,0,1,1,3.42-3.42A3.42,3.42,0,0,1,7199.53,7192.94Z" transform="translate(-7191.71 -7186.09)"/>
                    </svg>
                </div>
                <p>Male</p>
            </button>

            <button className="Gender-button-female"
                onClick={() => props.nextstep(props.name, 'Female')}>
                <div className="Gender-button-female-icon">
                    <svg viewBox="0 0 21 28">
                        <path className="Gender-female-svg" d="M7207.77,7203.22a1.47,1.47,0,0,1-1.22-.66l-3.47-5.21h-.69v2l3.78,6.28a1,1,0,0,1,.14.5,1,1,0,0,1-1,1h-2.94v4.16a1.71,1.71,0,0,1-1.71,1.71h-2.45a1.72,1.72,0,0,1-1.71-1.71v-4.16h-2.94a1,1,0,0,1-1-1,1,1,0,0,1,.14-.5l3.78-6.28v-2h-.69l-3.47,5.21a1.47,1.47,0,0,1-2.69-.81,1.49,1.49,0,0,1,.24-.81l3.91-5.87a3.37,3.37,0,0,1,2.69-1.64h5.87a3.37,3.37,0,0,1,2.69,1.64l3.91,5.87a1.49,1.49,0,0,1,.25.81A1.47,1.47,0,0,1,7207.77,7203.22Zm-8.32-10.27a3.42,3.42,0,1,1,3.42-3.42A3.42,3.42,0,0,1,7199.45,7192.94Z" transform="translate(-7189.67 -7186.09)"/>
                    </svg>
                </div>
                <p>Female</p>
            </button>
        </div>
    );
}

export default Gender;
