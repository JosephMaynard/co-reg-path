import './ProgressBar.css';

function ProgressBar(props) {
    const progress = ((props.currentStep + 1) / (props.totalSteps)) * 100;
    return (
        <div className="ProgressBar">
            <div className="ProgressBarBackround">
                <p>Progress:</p>
                
                <div className="ProgressBarContainer">
                    <div
                        className="ProgressBarInner"
                        style={{width: progress + '%'}}
                     />
                </div>
            </div>
            <div className="ProgressBarBottom" />
        </div>
    );
}

export default ProgressBar;