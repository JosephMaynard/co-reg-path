import Component from 'inferno-component';

import BackgroundImage from './components/BackgroundImage';
import ProgressBar from './components/ProgressBar';
import Step from './components/Step';

import pathData from './data/sample_path_data';
import { getUrlParameters, uniqueID, preloadImages, getAge } from './helpers';
import './App.css';

//Create array of all images from path data to pre-load on componentDidMount
const offerImages = pathData.path.filter(item => item.image).map(item => item.image);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stepExit: false,
            currentStep: 0,
            pathData: pathData.path,
            collectedData: {
                sessionID: uniqueID(),
                parameters: getUrlParameters(),
            },
        };

        this.collectData = this.collectData.bind(this);
        this.sendData = this.sendData.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.lookUpStateAndSuburb = this.lookUpStateAndSuburb.bind(this);
    }

    componentDidMount() {
        window.jsonpLoader = {
            lookUpState: (data) => {
                const result = JSON.parse(data);
                let collectedData = this.state.collectedData;
                collectedData['state'] = result.value;
                collectedData['stateName'] = result.text;
                this.setState({
                    collectedData
                });
            },
            lookUpSuburb: (data) => {
                const result = JSON.parse(data);
                let collectedData = this.state.collectedData;
                if (result.length === 1) {
                    collectedData.suburb = result[0].value;
                } else if (result.length > 1) {
                    collectedData.suburbList = result;
                }
                this.setState({
                    collectedData
                });
            },
        };
        preloadImages('', offerImages);
    }

    collectData(key, value) {
        let collectedData = this.state.collectedData;
        collectedData[key] = value;

        if(key === 'dob') {
            collectedData.age = getAge(value);
        }
        if(key === 'postcode') {
            this.lookUpStateAndSuburb(value);
        }

        this.setState({
            collectedData,
            stepExit: true
        });

        this.sendData();

        setTimeout(() => {    
            const nextStep = this.state.currentStep + 1;
            this.setState({
                currentStep: nextStep,
                stepExit: false
            });
        }, 300);
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

    lookUpStateAndSuburb(postcode) {
        const liLookUpState = document.createElement('script');
        liLookUpState.src = `https://leadinterface.vizmondmedia.com/ajax/getstatebypostcodeajax?callback=jsonpLoader.lookUpState&country=13&postcode=${postcode}`;
        document.body.appendChild(liLookUpState);
        const liLookUpSuburbs = document.createElement('script');
        liLookUpSuburbs.src = `https://leadinterface.vizmondmedia.com/ajax/getsuburbsbypostcodeajax?callback=jsonpLoader.lookUpSuburb&country=13&postcode=${postcode}`;
        document.body.appendChild(liLookUpSuburbs);
    }

    sendData(){
        console.log('SEND DATA', this.state.collectedData);
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
            collectData={this.collectData}
            details={this.state.collectedData}
          />
        </div>
      </div>
        );
    }
}

export default App;
