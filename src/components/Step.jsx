import Component from 'inferno-component';
import { checkEmailAddress, checkPhoneNumber, uniqueID, replaceTemplateStrings, checkPostcode, checkName } from '../helpers';
import StepTitle from './StepTitle';
import Input from './Input';
import Select from './Select';
import CTAButton from './CTAButton';
import Gender from './Gender';
import DoB from './DoB';
import YesNo from './YesNo';
import RadioButtons from './RadioButtons';
import Checkboxes from './Checkboxes';
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
        this.limitLength = this.limitLength.bind(this);
    }

    validateInput(input) {
        if (this.props.regex) {
            const regex = new RegExp(this.props.regex, this.props.regexFlags || '');
            return regex.test(input);
        } else if (this.props.type === 'name') {
            return checkName(input);
        } else if (this.props.type === 'email') {
            return checkEmailAddress(input);
        } else if (this.props.type === 'postcode') {
            return checkPostcode(input);
        } else if (this.props.type === 'phone') {
            return checkPhoneNumber(input);
        } else if (this.props.type === 'suburb') {
            return (input !== '' && input !== 'Other');
        } 
        return true; 
    }

    createStep() {
        if (this.props.type === 'redirect') {
            setTimeout(() => window.location = this.props.redirectURL, this.props.redirectDelay || 0);
            return null;
        } else if (this.props.type === 'name') {
            return (
                <div>
                    <StepTitle text={replaceTemplateStrings(this.props.title, this.props.details)} />
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
                <div>
                    <StepTitle text={replaceTemplateStrings(this.props.title, this.props.details)} />
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
                <div>
                    <StepTitle text={replaceTemplateStrings(this.props.title, this.props.details)} />
                    <Input
                        value={this.state.value}
                        onInput={this.handleChange}
                        id={uniqueID()}
                        type="number"
                        label={this.props.label}
                        min='100'
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
                <div>
                    <StepTitle text={replaceTemplateStrings(this.props.title, this.props.details)} />
                    <Gender
                        nextstep={this.props.collectData}
                        name={this.props.name}
                    />
                </div>
            );
        } else if (this.props.type === 'dob') {
            return (
                <div>
                    <StepTitle text={replaceTemplateStrings(this.props.title, this.props.details)} />
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
                <div>
                    <StepTitle text={replaceTemplateStrings(this.props.title, this.props.details)} />
                    {this.props.suburbList 
                        ? <Select
                            label={this.props.label}
                            id={uniqueID()}
                            options={this.props.suburbList}
                            optionSelected={this.updateValue}
                            value={this.state.value}
                        />
                        : <Input
                            value={this.state.value}
                            onInput={this.handleChange}
                            id={uniqueID()}
                            type="text"
                            label={this.props.label}
                            handleChange={this.handleChange}
                            handleKeyPress={this.handleKeyPress}
                        /> 
                    }
                    <CTAButton
                        text="next"
                        disabled={this.state.inputValid}
                        nextstep={() => this.props.collectData(this.props.name, this.state.value)}
                    />
                </div>
            );
        } else if (this.props.type === 'select') {
            return (
                <div>
                    <StepTitle text={replaceTemplateStrings(this.props.title, this.props.details)} />
                    <Select
                        label={this.props.label}
                        id={uniqueID()}
                        options={this.props.options}
                        optionSelected={this.updateValue}
                        value={this.state.value}
                    />
                    <CTAButton
                        text="next"
                        disabled={this.state.inputValid}
                        nextstep={() => this.props.collectData(this.props.name, this.state.value)}
                    />
                </div>
            );
        } else if (this.props.type === 'phone') {
            return (
                <div>
                <StepTitle text={replaceTemplateStrings(this.props.title, this.props.details)} />
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
                <div>
                    <img src={this.props.image} alt="Bonus Offer" className="offerImg" />
                    <StepTitle text={replaceTemplateStrings(this.props.title, this.props.details)} />
                    <YesNo
                        nextstep={this.props.collectData}
                        name={this.props.name}
                    />
                </div>
            );
        } else if (this.props.type === 'offerMultiChoice') {
            return (
                <div>
                    <img src={this.props.image} alt="Bonus Offer" className="offerImg" />
                    <StepTitle text={replaceTemplateStrings(this.props.title, this.props.details)} />
                    <RadioButtons
                        options={this.props.options}
                        id={uniqueID()}
                        optionSelected={this.handleChange}
                        name={this.props.name}
                     />
                    <CTAButton
                        text="next"
                        disabled={this.state.inputValid}
                        nextstep={() => this.props.collectData(this.props.name, this.state.value)}
                    />
                </div>
            );
        } else if (this.props.type === 'offerMultiCheckboxes') {
            return (
                <div>
                    <img src={this.props.image} alt="Bonus Offer" className="offerImg" />
                    <StepTitle text={replaceTemplateStrings(this.props.title, this.props.details)} />
                    <Checkboxes
                        options={this.props.options}
                        id={uniqueID()}
                        updateValue={this.updateValue}
                        name={this.props.name}
                     />
                    <CTAButton
                        text="next"
                        disabled={this.state.inputValid}
                        nextstep={() => this.props.collectData(this.props.name, this.state.value)}
                    />
                </div>
            );
        } else if (this.props.type === 'additionalInfo') {
            return (
                <div>
                    <StepTitle text={replaceTemplateStrings(this.props.title || 'Additional information required:', this.props.details)} />
                    
                    <CTAButton
                        text="next"
                        disabled={this.state.inputValid}
                        nextstep={() => this.props.collectData(this.props.name, this.state.value)}
                    />
                </div>
            );
        } else if (this.props.type === 'endCard') {
            if(this.props.redirectURL) {
                setTimeout(() => window.location = this.props.redirectURL, this.props.redirectDelay || 0);
            }
            return (
                <div>
                    <img src={this.props.image} alt="Congratulations" className="endCardImg" />
                    <StepTitle text={replaceTemplateStrings(this.props.title, this.props.details)} />
                </div>
            );
        }
        return null;
    }

    limitLength(input) {
        if(this.props.maxLength) {
            return input.substring(0, this.props.maxLength);
        }
        return input;
    }

    handleChange(event) {
        const input = event.target.value;
        this.setState({
            value: this.limitLength(input),
            inputValid: !this.validateInput(this.limitLength(input)),
        });
    }

    updateValue(value) {
        this.setState({
            value: this.limitLength(value),
            inputValid: !this.validateInput(this.limitLength(value)),
        });
    }

    handleKeyPress(e) {
        if (e.key === 'Enter' && !this.state.inputValid) {
            this.props.collectData(this.props.name, this.state.value);
        }
    }

    render() {
        return (
            <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                { this.createStep() }
                {
                    this.props.additionalStepID
                    ? <CTAButton
                        text="cancel"
                        cancelButton
                        nextstep={() => this.props.cancelAdditionalSteps(this.props.offerID, this.props.additionalStepID)}
                    />
                    : null
                }
            </div>
        );
    }
}

export default Step;
