import Component from 'inferno-component';
import ReactCSSTransitionGroup   from 'inferno-transition-group';

import Input from './Input';
import Select from './Select';
import CTAButton from './CTAButton';
import Gender from './Gender';
import DoB from './DoB';
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
   
  }

  createStep() {
        if (this.props.type === 'name') {
            return (
                <div className="Step">
                    <p className="title">{this.props.title}</p>
                    <Input
                        type="text"
                        label={this.props.label}
                    /> 
                    <CTAButton
                        text="next"
                        disabled={this.state.inputValid}
                        onClick={!this.props.nextStep}
                    />
                </div>
            );
        } else if (this.props.type === 'email') {
            return (
                <div className="Step">
                <p className="title">{this.props.title}</p>
                <Input
                    type="email"
                    label={this.props.label}
                />
                <CTAButton
                    text="next"
                    disabled={this.state.inputValid}
                    onClick={!this.props.nextStep}
                />
                </div>
            );
        } else if (this.props.type === 'postcode') {
            return (
                <div className="Step">
                <p className="title">{this.props.title}</p>
                <Input
                    type="number"
                    label={this.props.label}
                    minlength='3'
                    maxlength='4'
                />
                <CTAButton
                    text="next"
                    disabled={this.state.inputValid}
                    onClick={!this.props.nextStep}
                />
                </div>
            );
        } else if (this.props.type === 'gender') {
            return (
                <div className="Step">
                <p className="title">{this.props.title}</p>
                <Gender />
                </div>
            );
        } else if (this.props.type === 'dob') {
            return (
                <div className="Step">
                    <p className="title">{this.props.title}</p>
                    <DoB />
                </div>
            );
        } else if (this.props.type === 'suburb') {
            return (
                <div className="Step">
                    <p className="title">{this.props.title}</p>
                    <Select />
                </div>
            );
        } else if (this.props.type === 'phone') {
            return (
                <div className="Step">
                <p className="title">{this.props.title}</p>
                <Input
                    type="text"
                    label={this.props.label}
                />
                <CTAButton
                    text="next"
                    disabled={this.state.inputValid}
                    onClick={!this.props.nextStep}
                />
                </div>
            );
        } else if (this.props.type === 'offerMultiChoice') {
            return (
                <div className="Step">
                <p className="title">{this.props.title}</p>
                </div>
            );
        } else if (this.props.type === 'offerBool') {
            return (
                <div className="Step">
                <p className="title">{this.props.title}</p>
                </div>
            );
        }

        return null;
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


    render() {
        return (
            <div>
                { this.createStep() }
            </div>
        )
    };
}

export default Step;