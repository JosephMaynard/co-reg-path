import Component from 'inferno-component';
import { checkEmailAddress, checkPhoneNumber, uniqueID, replaceTemplateStrings, checkPostcode } from '../helpers';
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
            tempValue: '',
            inputValid: true,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress  = this.handleKeyPress.bind(this);
        this.createStep = this.createStep.bind(this);
        this.validateInput = this.validateInput.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.handleChangeTemp = this.handleChangeTemp.bind(this);
        this.updateTempValue = this.updateTempValue.bind(this);
        this.handleKeyPressTemp = this.handleKeyPressTemp.bind(this);
    }

    validateInput(input) {
        if (this.props.type === 'name' || this.props.additionalInfoType === 'name') {
            return (input !== '');
        } else if (this.props.type === 'email' || this.props.additionalInfoType === 'email') {
            return checkEmailAddress(input);
        } else if (this.props.type === 'postcode' || this.props.additionalInfoType === 'postcode') {
            return checkPostcode(input);
        } else if (this.props.type === 'gender' || this.props.additionalInfoType === 'gender') {
            return true;
        } else if (this.props.type === 'dob' || this.props.additionalInfoType === 'dob') {
            return true;
        } else if (this.props.type === 'suburb' || this.props.additionalInfoType === 'suburb') {
            return (input !== '' && input !== 'Other');
        } else if (this.props.type === 'phone' || this.props.additionalInfoType === 'phone') {
            return checkPhoneNumber(input);
        } else if (this.props.type === 'offerBool' || this.props.additionalInfoType === 'offerBool') {
            return true;
        } else if (this.props.type === 'offerMultiChoice' || this.props.additionalInfoType === 'offerMultiChoice') {
            return true;
        } else if (this.props.type === 'offerMultiCheckboxes' || this.props.additionalInfoType === 'offerMultiCheckboxes') {
            return true;
        } else if (this.props.type === 'endCard' || this.props.additionalInfoType === 'endCard') {
            return true;
        } 
    }

    createStep() {
        if (this.props.type === 'redirect') {
            setTimeout(() => window.location = this.props.redirectURL, this.props.redirectDelay || 0);
            return null;
        } else if (this.props.type === 'name') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
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
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
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
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <StepTitle text={replaceTemplateStrings(this.props.title, this.props.details)} />
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
                    <StepTitle text={replaceTemplateStrings(this.props.title, this.props.details)} />
                    <Gender
                        nextstep={this.props.collectData}
                        name={this.props.name}
                    />
                </div>
            );
        } else if (this.props.type === 'dob') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
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
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <StepTitle text={replaceTemplateStrings(this.props.title, this.props.details)} />
                    {this.props.suburbList 
                        ? <Select
                            label={this.props.label}
                            id={uniqueID()}
                            options={ [...this.props.suburbList, {text: 'Other', value: 'Other'}]  }
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
                    {
                      this.state.value === 'Other'
                      ? <Input
                            value={this.state.tempValue}
                            onInput={this.handleChange}
                            id={uniqueID()}
                            type="text"
                            label={this.props.label}
                            handleChange={this.handleChangeTemp}
                            handleKeyPress={this.handleKeyPressTemp}
                        /> 
                      : null  
                    }
                    <CTAButton
                        text="next"
                        disabled={this.state.inputValid}
                        nextstep={
                            this.state.value === 'Other' && this.state.tempValue !== ''
                            ? () => this.props.collectData(this.props.name, this.state.tempValue)
                            : () => this.props.collectData(this.props.name, this.state.value)
                        }
                    />
                </div>
            );
        } else if (this.props.type === 'phone') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
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
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
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
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
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
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <img src={this.props.image} alt="Bonus Offer" className="offerImg" />
                    <StepTitle text={replaceTemplateStrings(this.props.title, this.props.details)} />
                    <Checkboxes
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
        } else if (this.props.type === 'additionalInfo') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <StepTitle text={replaceTemplateStrings(this.props.title || 'Additional information required:', this.props.details)} />
                    
                    <CTAButton
                        text="next"
                        disabled={this.state.inputValid}
                        nextstep={() => this.props.collectData(this.props.name, this.state.value)}
                    />
                    <CTAButton
                        text="cancel"
                        cancelButton
                        nextstep={() => this.props.collectData(this.props.name, this.state.value)}
                    />
                </div>
            );
        } else if (this.props.type === 'endCard') {
            if(this.props.redirectURL) {
                setTimeout(() => window.location = this.props.redirectURL, this.props.redirectDelay || 0);
            }
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <img src={this.props.image} alt="Congratulations" className="endCardImg" />
                    <StepTitle text={replaceTemplateStrings(this.props.title, this.props.details)} />
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

    handleChangeTemp(event) {
        const input = event.target.value;
        this.setState({
            tempValue: input,
            inputValid: !this.validateInput(input),
        });
    }

    updateValue(value) {
        this.setState({
            value,
            inputValid: !this.validateInput(value),
        });
    }

    updateTempValue(value) {
        this.setState({
            tempValue: value,
            inputValid: !this.validateInput(value),
        });
    }

    handleKeyPress(e) {
        if (e.key === 'Enter' && !this.state.inputValid) {
            this.props.collectData(this.props.name, this.state.value);
        }
    }

    handleKeyPressTemp(e) {
        if (e.key === 'Enter' && !this.state.inputValid) {
            this.props.collectData(this.props.name, this.state.tempValue);
        }
    }

    render() {
        return this.createStep();
    }
}

export default Step;
