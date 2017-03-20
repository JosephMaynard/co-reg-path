import Component from 'inferno-component';
import Select from './Select';
import './DoB.css';

class DoB extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
		            options={[
		              {value:'1', text:'1'},
		              {value:'2', text:'2'},
		              {value:'3', text:'3'},
		            ]}
		          />
                </div>
                <div>
		          <Select
		            label="Month"
		            placeholder='Select...'
		            options={[
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
		            ]}
		          />
                </div>
                <div>
		          <Select
		            label="Year"
		            placeholder='Select...'
		            options={[
		              {value:'1991', text:'1991'},
		              {value:'1992', text:'1992'},
		            ]}
		          />
                </div>
            </div>
          )
    };
}

export default DoB;
