import Inferno from 'inferno';
import './Input.css';

function Input(props) {

    const id = (new Date()).getTime().toString(36) + Math.round(Math.random() * 1e8).toString(36);

    let value = '';

    return (
        <div className="Input">
            <label className="Input-label" for={id}>
                <input
                    className="Input-input"
                    type="text"
                    id={id}
                    minlength="4"
                    ref={(input) => { value = input.value}}
                    onBlur={() => console.log(value) }
                    required
                />        
                <div className={ value === '' ? "Input-label-span" : "Input-label-span Input-label-span-not-empty"} >Name</div>
                <svg class="Input-line" viewBox="0 0 40 2" preserveAspectRatio="none">
                    <path d="M0 1 L40 1"/>
                    <path d="M0 1 L40 1" className="focus"/>
                    <path d="M0 1 L40 1" className="invalid"/>
                    <path d="M0 1 L40 1" className="valid"/>
                </svg>
            </label>
        </div>
      );
}

export default Input;
