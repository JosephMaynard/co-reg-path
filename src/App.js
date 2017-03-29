import Component from 'inferno-component';

import BackgroundImage from './components/BackgroundImage';
import ProgressBar from './components/ProgressBar';
import Step from './components/Step';

import pathData from './data/sample_path_data';
import { getUrlParameters, uniqueID, preloadImages } from './helpers'
import './App.css';

const offerImages = pathData.filter(item => item.image).map(item => item.image);

console.log(offerImages);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stepExit: false,
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

  componentDidMount() {
    preloadImages('', offerImages);
  }

  collectData(key, value) {
    let collectedData = this.state.collectedData;
    collectedData[key] = value;
    
    this.setState({
      collectedData,
    });
  }

  nextStep(){
    this.setState({
      stepExit: true
    });
    setTimeout(() => {    
      const nextStep = this.state.currentStep + 1;
      this.setState({
        currentStep: nextStep,
        stepExit: false
      });
    }, 300);
  }

  render() {
    return (
      <div className="App">
        <BackgroundImage blur />
        <ProgressBar
          currentStep={this.state.currentStep}
          totalSteps={this.state.pathData.length}
        />
        <div className="StepArea">
          <Step
            {...this.state.pathData[this.state.currentStep]}
            nextStep={this.nextStep}
            key={this.state.currentStep}
            stepExit={this.state.stepExit}
          />
        </div>
      </div>
    );
  }
}

export default App;
