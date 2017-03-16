import Component from 'inferno-component';

import Input from './components/Input';
import CTAButton from './components/CTAButton';

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
          <Input
            type="text"
            label="First Name"
           />
          <Input
            type="number"
            label="Phone Number"
           />
           <CTAButton
            text="next"
            disabled={false}
           />
           <br/>
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
