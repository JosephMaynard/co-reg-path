import Component from 'inferno-component';
import './Input.css';

class Input extends Component {

  constructor(props) {
    super(props);
    this.state = {
        value: '',
        id: (new Date()).getTime().toString(36) + Math.round(Math.random() * 1e8).toString(36),
    };

   this.handleChange = this.handleChange.bind(this);
   
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


    render() {
        return (
            <div className="Input">
                <label className="Input-label" for={this.state.id}>
                    <input
                        className="Input-input"
                        type={this.props.type}
                        id={this.state.id}
                        minlength={this.props.minlength}
                        maxlength={this.props.maxlength}
                        value={this.state.value}
                        onInput={this.handleChange}
                        required
                    />        
                    <div className={ this.state.value === '' 
                        ? "Input-label-span"   
                        : "Input-label-span Input-label-span-not-empty"
                    } >{this.props.label}</div>
                    <svg class="Input-line" viewBox="0 0 40 2" preserveAspectRatio="none">
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

export default Input;
