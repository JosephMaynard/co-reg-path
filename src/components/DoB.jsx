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
              {value:'01', text:'Jan'},
              {value:'02', text:'Feb'},
              {value:'03', text:'Mar'},
              {value:'04', text:'Apr'},
              {value:'05', text:'May'},
              {value:'06', text:'Jun'},
              {value:'07', text:'Jul'},
              {value:'08', text:'Aug'},
              {value:'09', text:'Sep'},
              {value:'10', text:'Oct'},
              {value:'11', text:'Nov'},
              {value:'12', text:'Dec'},
            ],
            years: populateYears(),
            day: '',
            month: '',
            year: '',
        };

        this.selectDay = this.selectDay.bind(this);
        this.selectMonth = this.selectMonth.bind(this);
        this.selectYear = this.selectYear.bind(this);
        this.sendDoB = this.sendDoB.bind(this);
   
    }

    selectDay(day) {
        this.setState({day});
        this.sendDoB();
    }
    selectMonth(month) {
        this.setState({month});
        this.sendDoB();
    }
    selectYear(year) {
        this.setState({year});
        this.sendDoB();
    }

    sendDoB() {
        if(this.state.day !== '' && this.state.month !== '' && this.state.year !== '') {
            this.props.updateValue(`${this.state.year}-${this.state.month}-${this.state.day}`);
        }
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
