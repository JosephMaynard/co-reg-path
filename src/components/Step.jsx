import Component from 'inferno-component';
import './Step.css';

class Step extends Component {

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
            <div className="Step">
            </div>
          )
    };
}

export default Step;
