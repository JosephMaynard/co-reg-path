import Component from 'inferno-component';
import { uniqueID } from '../helpers';
import './Select.css';

class Select extends Component {

  constructor(props) {
    super(props);
    this.state = {
        value: '',
        id: uniqueID(),
    };

   this.handleChange = this.handleChange.bind(this);
   
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

    render() {
        return (
            <div className="Select">
                <label className="Select-label" for={this.state.id}>
                    <select className="Select-input" required>
                        <option value="" disabled selected hidden>{this.props.placeholder || 'Please select...'}</option>
                        {this.props.options.map(option => <option value={option.value}>{option.text}</option>)}
                    </select>      
                    <div className={ this.state.value === '' 
                        ? "Select-label-span"   
                        : "Select-label-span Select-label-span-not-empty"
                    } >{this.props.label}</div>
                    <svg className="Select-line" viewBox="0 0 40 2" preserveAspectRatio="none">
                        <path d="M0 1 L40 1"/>
                        <path d="M0 1 L40 1" className="focus"/>
                        <path d="M0 1 L40 1" className="invalid"/>
                        <path d="M0 1 L40 1" className="valid"/>
                    </svg>
                </label>
            </div>
          )
    };
}

export default Select;
