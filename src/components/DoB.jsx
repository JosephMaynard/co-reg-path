import Component from 'inferno-component';
import Select from './Select';
import { populateDays, populateYears } from '../helpers'
import './DoB.css';

class DoB extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	days: populateDays(),
    	months: [
          {value:'Jan', text:'Jan'},
          {value:'Feb', text:'Feb'},
          {value:'Mar', text:'Mar'},
          {value:'Apr', text:'Apr'},
          {value:'May', text:'May'},
          {value:'Jun', text:'Jun'},
          {value:'Jul', text:'Jul'},
          {value:'Aug', text:'Aug'},
          {value:'Sep', text:'Sep'},
          {value:'Oct', text:'Oct'},
          {value:'Nov', text:'Nov'},
          {value:'Dec', text:'Dec'},
        ],
        years: populateYears(),
        day: '',
        month: '',
        year: '',
    };

   this.handleChange = this.handleChange.bind(this);
   
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


    render() {
        return (
            <div className="DoB">
                <div>
		          <Select
		            label="Day"
		            placeholder='Select...'
		            options={ this.state.days }
		          />
                </div>
                <div>
		          <Select
		            label="Month"
		            placeholder='Select...'
		            options={ this.state.months }
		          />
                </div>
                <div>
		          <Select
		            label="Year"
		            placeholder='Select...'
		            options={ this.state.years }
		          />
                </div>
            </div>
          )
    };
}

export default DoB;
