import Component from 'inferno-component';

import BackgroundImage from './components/BackgroundImage';
import Step from './components/Step';

import pathData from './data/sample_path_data';
import { getUrlParameters, uniqueID } from './helpers'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      pathData,
      collectedData: {
        sessionID: uniqueID(),
        parameters: getUrlParameters(),
      },
    }

   this.collectData = this.collectData.bind(this);
   this.nextStep = this.nextStep.bind(this);
  }

  collectData(key, value) {
    let collectedData = this.state.collectedData;
    collectedData[key] = value;
    
    this.setState({
      collectedData,
    });
  }

  nextStep(){
    const nextStep = this.state.currentStep + 1;
    this.setState({
      currentStep: nextStep,
    });
  }

  render() {
    return (
      <div className="App">
        <BackgroundImage blur />
        <div className="App-header">
          <h1>Leading Competitions Australia</h1>
        </div>
        <div className="StepArea">
          <Step {...this.state.pathData[this.state.currentStep]} nextStep={this.nextStep} />
        </div>
      </div>
    );
  }
}

export default App;
