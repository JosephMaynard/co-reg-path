import Component from 'inferno-component';
import { checkEmailAddress, checkPhoneNumber, uniqueID } from '../helpers';
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
        this.createStep = this.createStep.bind(this);
        this.validateInput = this.validateInput.bind(this);
   
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
        if (this.props.type === 'name') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <p className="title">{this.props.title}</p>
                    <Input
                        value={this.state.value}
                        onInput={this.handleChange}
                        id={uniqueID()}
                        type="text"
                        label={this.props.label}
                        handleChange={this.handleChange}
                    /> 
                    <CTAButton
                        text="next"
                        disabled={this.state.inputValid}
                        nextstep={this.props.nextStep}
                    />
                </div>
            );
        } else if (this.props.type === 'email') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                <p className="title">{this.props.title}</p>
                <Input
                    value={this.state.value}
                    onInput={this.handleChange}
                    id={uniqueID()}
                    type="email"
                    label={this.props.label}
                    handleChange={this.handleChange}
                />
                <CTAButton
                    text="next"
                    disabled={this.state.inputValid}
                    nextstep={this.props.nextStep}
                />
                </div>
            );
        } else if (this.props.type === 'postcode') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                <p className="title">{this.props.title}</p>
                <Input
                    value={this.state.value}
                    onInput={this.handleChange}
                    id={uniqueID()}
                    type="number"
                    label={this.props.label}
                    minLength='3'
                    maxLength='4'
                    handleChange={this.handleChange}
                />
                <CTAButton
                    text="next"
                    disabled={this.state.inputValid}
                    nextstep={this.props.nextStep}
                />
                </div>
            );
        } else if (this.props.type === 'gender') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <p className="title">{this.props.title}</p>
                    <Gender 
                        nextstep={this.props.nextStep}
                    />
                </div>
            );
        } else if (this.props.type === 'dob') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <p className="title">{this.props.title}</p>
                    <DoB
                        id={uniqueID()}
                     />
                    <CTAButton
                        text="next"
                        disabled={this.state.inputValid}
                        nextstep={this.props.nextStep}
                    />
                </div>
            );
        } else if (this.props.type === 'suburb') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <p className="title">{this.props.title}</p>
                    <Select />
                </div>
            );
        } else if (this.props.type === 'phone') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                <p className="title">{this.props.title}</p>
                <Input
                    value={this.state.value}
                    onInput={this.handleChange}
                    id={uniqueID()}
                    type="text"
                    label={this.props.label}
                    handleChange={this.handleChange}
                />
                <CTAButton
                    text="next"
                    disabled={this.state.inputValid}
                    nextstep={this.props.nextStep}
                />
                </div>
            );
        } else if (this.props.type === 'offerBool') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <img src={this.props.image} alt="Bonus Offer" className="offerImg" />
                    <p className="offerText">{this.props.title}</p>
                    <YesNo
                        nextstep={this.props.nextStep}
                    />
                </div>
            );
        } else if (this.props.type === 'offerMultiChoice') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <img src={this.props.image} alt="Bonus Offer" className="offerImg" />
                    <p className="offerText">{this.props.title}</p>
                </div>
            );
        } else if (this.props.type === 'endCard') {
            return (
                <div className={this.props.stepExit ? 'Step StepExit' : 'Step'}>
                    <img src={this.props.image} alt="Congratulations" className="endCardImg" />
                    <p className="offerText">{this.props.title}</p>
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


    render() {
        return this.createStep();
    }
}

export default Step;
