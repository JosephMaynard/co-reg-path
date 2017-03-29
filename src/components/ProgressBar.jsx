import './ProgressBar.css';

function ProgressBar(props) {
    return (
        <div className="ProgressBar">
            <p>Progress:</p>
            
            <div className="ProgressBarContainer">
                <div
                    className="ProgressBarInner"
                    style={{width: this.props.progress * 100 + '%'}}
                 />
            </div>
        </div>
    );
}

export default ProgressBar;