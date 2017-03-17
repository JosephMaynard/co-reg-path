import Component from 'inferno-component';

import Input from './components/Input';
import Select from './components/Select';
import CTAButton from './components/CTAButton';
import Gender from './components/Gender';

import pathData from './data/sample_path_data';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      pathData 
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Leading Competitions Australia</h1>
        </div>
        <div className="container">
          <p className="title">Please enter your name:</p>
          <Input
            type="text"
            label="First Name"
           />
          <Input
            type="number"
            label="Phone Number"
           />
          <Input
            type="email"
            label="Email"
           />
          <Select
            label="Select Suburb"
            options={[
              {value:'Marrickville', text:'Marrickville'},
              {value:'DulwichHill', text:'Dulwich Hill'},
              {value:'Newtown', text:'Newtown'},
            ]}
          />
          <Gender />
          <br/>
          <CTAButton
            text="next"
            disabled={false}
          />
          <br/>
          <br/>
          <CTAButton
            text="next"
            disabled={true}
          />
        </div>
      </div>
    );
  }
}

export default App;
