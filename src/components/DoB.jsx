import Component from 'inferno-component';
import Select from './Select';
import { populateDays, populateYears } from '../helpers';
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

        this.selectDay = this.selectDay.bind(this);
        this.selectMonth = this.selectMonth.bind(this);
        this.selectYear = this.selectYear.bind(this);
   
    }

    selectDay(day) {
        this.setState({day});
    }
    selectMonth(month) {
        this.setState({month});
    }
    selectYear(year) {
        this.setState({year});
    }


    render() {
        return (
            <div className="DoB">
                <div>
              <Select
                label="Day"
                placeholder='Select...'
                options={ this.state.days }
                id={`${this.props.id}days`}
                optionSelected={this.selectDay}
                value={this.state.day}
              />
                </div>
                <div>
              <Select
                label="Month"
                placeholder='Select...'
                options={ this.state.months }
                id={`${this.props.id}months`}
                optionSelected={this.selectMonth}
                value={this.state.month}
              />
                </div>
                <div>
              <Select
                label="Year"
                placeholder='Select...'
                options={ this.state.years }
                id={`${this.props.id}years`}
                optionSelected={this.selectYear}
                value={this.state.year}
              />
                </div>
            </div>
        );
    }
}

export default DoB;
