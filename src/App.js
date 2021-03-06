import Component from 'inferno-component';

import BackgroundImage from './components/BackgroundImage';
import ProgressBar from './components/ProgressBar';
import Loading from './components/Loading';
import Step from './components/Step';

// import pathData from './data/current_path_data';

import { getUrlParameters, uniqueID, preloadImages, getAge, decodePrepopulateString } from './helpers';
import './App.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stepExit: false,
            currentStep: 0,
            loadingData: true,
            URLParameters: getUrlParameters(),
            collectedData: {
                sessionID: uniqueID(),
            },
        };

        this.filterPath = this.filterPath.bind(this);
        this.validateStep = this.validateStep.bind(this);
        this.addAdditionalSteps = this.addAdditionalSteps.bind(this);
        this.removeAdditionalSteps = this.removeAdditionalSteps.bind(this);
        this.cancelAdditionalSteps = this.cancelAdditionalSteps.bind(this);
        this.collectData = this.collectData.bind(this);
        this.sendData = this.sendData.bind(this);
        this.importPath = this.importPath.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.lookUpStateAndSuburb = this.lookUpStateAndSuburb.bind(this);
    }

    componentDidMount() {

        //Import pre-populate values from URL
        if(this.state.URLParameters.prepopulate) {
            const URLPrepopulateData = decodePrepopulateString(this.state.URLParameters.prepopulate);
            let collectedData = this.state.collectedData;
            Object.keys(URLPrepopulateData).map(key => {
                if (URLPrepopulateData[key] !== '') {
                    collectedData[key] = URLPrepopulateData[key];
                }
                return null;
            });
            this.setState({
                collectedData,
            });
        }

        //Create global object with JSONP Call Back
        window.globalObject = {
            loadPathData: (data) => this.importPath(data),
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
                if (result.length === 1) {
                    let collectedData = this.state.collectedData;
                    collectedData.suburb = result[0].value;
                    this.setState({
                        collectedData
                    });
                } else if (result.length > 1) {
                    this.setState({
                        suburbList: result
                    });
                }
            },
            nextStep: () => this.nextStep(),
            collectData: (key, value) => this.collectData(key, value),
        };

        

        //Simulate loading JSON data
        // setTimeout(() => {
        //     this.setState({
        //         loadingData: false
        //     });
        // }, 2000);
    }

    importPath (data) {
        const pathData = JSON.parse(data);

        //Create array of all images from path data to pre-load on componentDidMount
        const offerImages = pathData.path.filter(item => item.image || item.offerImage).map(item => item.image || item.offerImage);
        this.setState({
            survey: pathData.survey,
            index: pathData.index,
            group: pathData.group,
            source: pathData.source,
            prepopulate: decodePrepopulateString(pathData.prepopulate),
            uuid: pathData.uuid,
            callback: pathData.callback,
            latency: pathData.latency,
            process: pathData.process,
            pathData: pathData.path.map(step => {
                step.key = uniqueID();
                return step;
            }).filter(step => this.validateStep(step)),
            loadingData: false,
        });
        if(this.state.prepopulate) {
            let collectedData = this.state.collectedData;
            Object.keys(this.state.prepopulate).map(item => {
                if (this.state.prepopulate[item] !== '') {
                    collectedData[item] = this.state.prepopulate[item];
                }
                return null;
            });

            this.setState({
                collectedData
            });

            this.setState({
                pathData: this.filterPath(this.state.pathData)
            });

        }
        //preload images form steps
        preloadImages('', offerImages);
    }

    validateStep (step) {
        if(this.state.collectedData[step.name]) return false;

        if(step.type === 'name'
        || step.type ==='email'
        || step.type ==='postcode'
        || step.type ==='dob'
        || step.type ==='suburb'
        || step.type ==='gender'
        || step.type ==='phone'
        || step.type ==='input'
        || step.type ==='select'
        || step.type ==='radio'
        || step.type ==='checkbox'
        || step.type ==='yesNo') {
            if(!step.name){
                console.warn(`Step type ${step.type} requires name.`);
                return false;
            }
        }
        if(step.type === 'select'
            || step.type ==='radio'
            || step.type ==='checkbox') {
            if(!step.options){
                console.warn(`Step type ${step.type} requires options.`);
                return false;
            }
        }
        return true;
    }

    filterPath (pathData) {
        const completedSteps = this.state.pathData.slice(0, this.state.currentStep + 1);
        const stepsToDo = this.state.pathData.slice(this.state.currentStep + 1).filter(step => {
            if (this.state.collectedData[step.name]) return false;
            let result = true;
            if (step.rules) {
                step.rules.map(rule => {
                    if (rule.min 
                        && this.state.collectedData[rule.field] 
                        && parseFloat(this.state.collectedData[rule.field]) < rule.min) result = false;
                    if (rule.max 
                        && this.state.collectedData[rule.field] 
                        && parseFloat(this.state.collectedData[rule.field]) > rule.max) result = false;
                    if (rule.minLength 
                        && this.state.collectedData[rule.field] 
                        && this.state.collectedData[rule.field].length < rule.minLength) result = false;
                    if (rule.maxLength 
                        && this.state.collectedData[rule.field] 
                        && this.state.collectedData[rule.field].length > rule.maxLength) result = false;
                    if (rule.equal 
                        && this.state.collectedData[rule.field]
                        && this.state.collectedData[rule.field].trim().toLowerCase() !== rule.equal.toString().trim().toLowerCase()) result = false;
                    if (rule.notEqual
                        && this.state.collectedData[rule.field]
                        && this.state.collectedData[rule.field].trim().toLowerCase() === rule.notEqual.toString().trim().toLowerCase()) result = false;
                    if (rule.inList && Array.isArray(rule.inList)) {
                        let searchResult = false;
                        rule.inList.map(listItem => {
                            if (this.state.collectedData[rule.field].trim().toLowerCase() === listItem.toString().trim().toLowerCase()) searchResult = true;
                            return null;
                        });
                        result = searchResult;
                    }
                    if (rule.notInList && Array.isArray(rule.notInList)) {
                        rule.notInList.map(listItem => {
                            if (this.state.collectedData[rule.field].trim().toLowerCase() === listItem.toString().trim().toLowerCase()) result = false;
                            return null;
                        });
                    }
                    return null;
                });
            }
            return result;
        });
        return completedSteps.concat(stepsToDo);
    }

    addAdditionalSteps(pathData, additionalSteps) {
        const completedSteps = pathData.slice(0, this.state.currentStep + 1);
        const stepsToDo = pathData.slice(this.state.currentStep + 1);
        return completedSteps.concat(additionalSteps, stepsToDo);
    }

    removeAdditionalSteps(pathData, additionalStepID) {
        const completedSteps = pathData.slice(0, this.state.currentStep + 1);
        const stepsToDo = pathData.slice(this.state.currentStep + 1)
            .filter(step => step.additionalStepID !== additionalStepID);
        return completedSteps.concat(stepsToDo);
    }

    cancelAdditionalSteps(offerID, additionalStepID) {
        let collectedData = this.state.collectedData;
        collectedData[offerID] = false;
        this.setState({
            collectedData,
            pathData: this.removeAdditionalSteps(this.state.pathData, additionalStepID),
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

        this.setState({
            pathData: this.filterPath(this.state.pathData)
        });

        if(value && this.state.pathData[this.state.currentStep].requiredInfo) {
            const additionalStepID = uniqueID();
            const additionalSteps = this.state.pathData[this.state.currentStep].requiredInfo
                .filter(step => !this.state.collectedData[step.name] && this.validateStep(step))
                .map(step => {
                    return Object.assign(step, {
                        additionalStepID: additionalStepID,
                        key: uniqueID(),
                        offerID: this.state.pathData[this.state.currentStep].name,
                    });
                });           

            this.setState({
                pathData: this.addAdditionalSteps(this.state.pathData, additionalSteps)
            });
        } else if(!this.state.pathData[this.state.currentStep].additionalStepID) {
            this.sendData();
        }

        //Scroll back to top of page
        document.querySelector('.StepArea').scrollTop = 0;
        window.scrollTo(0,0);

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

        document.querySelector('.StepArea').scrollTop = 0;

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
        liLookUpState.src = `https://leadinterface.vizmondmedia.com/ajax/getstatebypostcodeajax?callback=globalObject.lookUpState&country=13&postcode=${postcode}`;
        document.body.appendChild(liLookUpState);
        const liLookUpSuburbs = document.createElement('script');
        liLookUpSuburbs.src = `https://leadinterface.vizmondmedia.com/ajax/getsuburbsbypostcodeajax?callback=globalObject.lookUpSuburb&country=13&postcode=${postcode}`;
        document.body.appendChild(liLookUpSuburbs);
    }

    sendData(){
        const liString = `https://leadinterface.vizmondmedia.com/generator/preliminary`
            + `?survey=${this.state.survey}`
            + `&index=${this.state.index}`
            + `&group=${this.state.group}`
            + `&source=${this.state.source}`
            + `&prepopulate=${this.state.prepopulate}`
            + `&uuid=${this.state.uuid}`
            + `&callback=${this.state.callback}`
            + `&latency=${this.state.latency}`
            + `&process=${this.state.process}`
            + `${Object.keys(this.state.collectedData).map(key => `${key}=${encodeURIComponent(this.state.collectedData[key])}`).join('&')}`;
        console.log(liString);
        console.log(this.state.collectedData);
    }

    render() {
        return (
      <div className="App">
        <BackgroundImage blur={!this.state.loadingData} />
        {this.state.loadingData
            ? null
            : <ProgressBar
              currentStep={this.state.currentStep}
              totalSteps={this.state.pathData.length}
            />
        }
        <div className="StepArea">
            {this.state.loadingData

                ?<Loading />
                :<Step
                    {...this.state.pathData[this.state.currentStep]}
                    nextStep={this.nextStep}
                    key={this.state.pathData[this.state.currentStep].key}
                    stepExit={this.state.stepExit}
                    collectData={this.collectData}
                    details={this.state.collectedData}
                    suburbList={this.state.suburbList || false}
                    cancelAdditionalSteps={this.cancelAdditionalSteps}
                />
            }
        </div>
      </div>
        );
    }
}

export default App;
