import Component from 'inferno-component';
import { checkEmailAddress, checkPhoneNumber, uniqueID, replaceTemplateStrings } from '../helpers';
import Input from './Input';
import Select from './Select';
import CTAButton from './CTAButton';
import Gender from './Gender';
import DoB from './DoB';
import YesNo from './YesNo';
import './Step.css';

class Step extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            inputValid: true,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress  = this.handleKeyPress.bind(this);
        this.createStep = this.createStep.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }

    validateInput(input) {
        if (this.props.type === 'name') {
            return (input !== '');
        } else if (this.props.type === 'email') {
            return checkEmailAddress(input);
        } else if (this.props.type === 'postcode') {
            return true;
        } else if (this.props.type === 'gender') {
            return true;
        } else if (this.props.type === 'dob') {
            return true;
        } else if (this.props.type === 'suburb') {
            return true;
        } else if (this.props.type === 'phone') {
            return checkPhoneNumber(input);
        } else if (this.props.type === 'offerBool') {
            return true;
        } else if (this.props.type === 'offerMultiChoice') {
            return true;
        } else if (this.props.type === 'endCard') {
            return true;
        } 
    }

    createStep() {
        if (this.props.type === 'redirect') {
            window.location = this.props.url;
            return null;
        } else if (this.props.type === 'name') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <p className="title">{replaceTemplateStrings(this.props.title, this.props.details)}</p>
                    <Input
                        value={this.state.value}
                        onInput={this.handleChange}
                        id={uniqueID()}
                        type="text"
                        label={this.props.label}
                        handleChange={this.handleChange}
                        handleKeyPress={this.handleKeyPress}
                    /> 
                    <CTAButton
                        text="next"
                        disabled={this.state.inputValid}
                        nextstep={() => this.props.collectData(this.props.name, this.state.value)}
                    />
                </div>
            );
        } else if (this.props.type === 'email') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <p className="title">{replaceTemplateStrings(this.props.title, this.props.details)}</p>
                    <Input
                        value={this.state.value}
                        onInput={this.handleChange}
                        id={uniqueID()}
                        type="email"
                        label={this.props.label}
                        handleChange={this.handleChange}
                        handleKeyPress={this.handleKeyPress}
                    />
                    <CTAButton
                        text="next"
                        disabled={this.state.inputValid}
                        nextstep={() => this.props.collectData(this.props.name, this.state.value)}
                    />
                </div>
            );
        } else if (this.props.type === 'postcode') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <p className="title">{replaceTemplateStrings(this.props.title, this.props.details)}</p>
                    <Input
                        value={this.state.value}
                        onInput={this.handleChange}
                        id={uniqueID()}
                        type="number"
                        label={this.props.label}
                        min='100'
                        max='9999'
                        handleChange={this.handleChange}
                        handleKeyPress={this.handleKeyPress}
                    />
                    <CTAButton
                        text="next"
                        disabled={this.state.inputValid}
                        nextstep={() => this.props.collectData(this.props.name, this.state.value)}
                    />
                </div>
            );
        } else if (this.props.type === 'gender') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <p className="title">{replaceTemplateStrings(this.props.title, this.props.details)}</p>
                    <Gender
                        nextstep={this.props.collectData}
                        name={this.props.name}
                    />
                </div>
            );
        } else if (this.props.type === 'dob') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <p className="title">{replaceTemplateStrings(this.props.title, this.props.details)}</p>
                    <DoB
                        id={uniqueID()}
                        updateValue={this.updateValue}
                     />
                    <CTAButton
                        text="next"
                        disabled={this.state.inputValid}
                        nextstep={() => this.props.collectData(this.props.name, this.state.value)}
                    />
                </div>
            );
        } else if (this.props.type === 'suburb') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <p className="title">{replaceTemplateStrings(this.props.title, this.props.details)}</p>
                    <Select />
                </div>
            );
        } else if (this.props.type === 'phone') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                <p className="title">{replaceTemplateStrings(this.props.title, this.props.details)}</p>
                <Input
                    value={this.state.value}
                    onInput={this.handleChange}
                    id={uniqueID()}
                    type="text"
                    label={this.props.label}
                    handleChange={this.handleChange}
                    handleKeyPress={this.handleKeyPress}
                />
                <CTAButton
                    text="next"
                    disabled={this.state.inputValid}
                    nextstep={() => this.props.collectData(this.props.name, this.state.value)}
                />
                </div>
            );
        } else if (this.props.type === 'offerBool') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <img src={this.props.image} alt="Bonus Offer" className="offerImg" />
                    <p className="offerText">{replaceTemplateStrings(this.props.title, this.props.details)}</p>
                    <YesNo
                        nextstep={this.props.collectData}
                        name={this.props.name}
                    />
                </div>
            );
        } else if (this.props.type === 'offerMultiChoice') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <img src={this.props.image} alt="Bonus Offer" className="offerImg" />
                    <p className="offerText">{replaceTemplateStrings(this.props.title, this.props.details)}</p>
                </div>
            );
        } else if (this.props.type === 'endCard') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <img src={this.props.image} alt="Congratulations" className="endCardImg" />
                    <p className="offerText">{replaceTemplateStrings(this.props.title, this.props.details)}</p>
                </div>
            );
        } 
        return null;
    }

    handleChange(event) {
        const input = event.target.value;
        this.setState({
            value: input,
            inputValid: !this.validateInput(input),
        });
    }

    updateValue(value) {
        this.setState({
            value,
            inputValid: !this.validateInput(value),
        });
    }

    handleKeyPress(e) {
        if (e.key === 'Enter' && !this.state.inputValid) {
            // this.props.nextStep();
            this.props.collectData(this.props.name, this.state.value);
        }
    }

    render() {
        return this.createStep();
    }
}

export default Step;
