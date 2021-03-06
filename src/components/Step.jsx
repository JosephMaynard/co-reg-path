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
            showCTAButton: (
                   this.props.type === 'name'
                || this.props.type === 'email'
                || this.props.type === 'postcode'
                || this.props.type === 'dob'
                || this.props.type === 'suburb'
                || this.props.type === 'phone'
                || this.props.type === 'input'
                || this.props.type === 'select'
                || this.props.type === 'radio'
                || this.props.type === 'checkbox'
            ),
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
        if(this.props.redirectURL) {
            setTimeout(() => window.location = this.props.redirectURL, this.props.redirectDelay || 0);
        } 
        if (this.props.type === 'name') {
            return (
                <Input
                    value={this.state.value}
                    onInput={this.handleChange}
                    id={uniqueID()}
                    type="text"
                    label={this.props.label}
                    handleChange={this.handleChange}
                    handleKeyPress={this.handleKeyPress}
                />
            );
        } else if (this.props.type === 'email') {
            return (
                <Input
                    value={this.state.value}
                    onInput={this.handleChange}
                    id={uniqueID()}
                    type='email'
                    label={this.props.label}
                    handleChange={this.handleChange}
                    handleKeyPress={this.handleKeyPress}
                />
            );
        } else if (this.props.type === 'postcode') {
            return (
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
            );
        } else if (this.props.type === 'dob') {
            return (
                <DoB
                    id={uniqueID()}
                    updateValue={this.updateValue}
                 />
            );
        } else if (this.props.type === 'suburb') {
            return this.props.suburbList 
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
                />;
        } else if (this.props.type === 'phone') {
            return (
                <Input
                    value={this.state.value}
                    onInput={this.handleChange}
                    id={uniqueID()}
                    type="text"
                    label={this.props.label}
                    handleChange={this.handleChange}
                    handleKeyPress={this.handleKeyPress}
                />
            );
        } else if (this.props.type === 'input') {
            return (
                <Input
                    value={this.state.value}
                    onInput={this.handleChange}
                    id={uniqueID()}
                    type={this.props.inputType || 'text'}
                    label={this.props.label}
                    minLength={this.props.minLength}
                    maxLength={this.props.maxLength}
                    min={this.props.min}
                    max={this.props.max}
                    handleChange={this.handleChange}
                    handleKeyPress={this.handleKeyPress}
                />
            );
        } else if (this.props.type === 'select') {
            return (
                <Select
                    label={this.props.label}
                    id={uniqueID()}
                    options={this.props.options}
                    optionSelected={this.updateValue}
                    value={this.state.value}
                />
            );
        } else if (this.props.type === 'radio') {
            return (
                <RadioButtons
                    label={this.props.label}
                    id={uniqueID()}
                    options={this.props.options}
                    optionSelected={this.handleChange}
                    value={this.state.value}
                    name={this.props.name}
                />
            );
        } else if (this.props.type === 'checkbox') {
            return (
                <Checkboxes
                    options={this.props.options}
                    id={uniqueID()}
                    updateValue={this.updateValue}
                    name={this.props.name}
                 />
            );
        } else if (this.props.type === 'gender') {
            return (
                <Gender
                    nextstep={this.props.collectData}
                    name={this.props.name}
                />
            );
        } else if (this.props.type === 'yesNo') {
            return (
                <YesNo
                    nextstep={this.props.collectData}
                    name={this.props.name}
                />
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
                {
                    this.props.offerImage
                    ? <img
                        src={this.props.offerImage}
                        alt={this.props.offerImageAltText || 'Bonus Offer'}
                        className='offerImage'
                    />
                    : null
                }
                {
                    this.props.image
                    ? <img
                        src={this.props.image}
                        alt={this.props.imageAltText || 'Bonus Offer'}
                        className='image'
                    />
                    : null
                }
                {
                    this.props.title
                    ? <StepTitle text={replaceTemplateStrings(this.props.title, this.props.details)} />
                    : null
                }
                {
                    this.props.rawHTML
                    ? <div dangerouslySetInnerHTML={ { __html: this.props.rawHTML } } />
                    : null
                }
                { this.createStep() }
                {
                    this.state.showCTAButton
                    ? <CTAButton
                        text="next"
                        disabled={this.state.inputValid}
                        nextstep={() => this.props.collectData(this.props.name, this.state.value)}
                    />
                    : null
                }
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
