import './BackgroundImage.css';

function BackgroundImage(props) {
    return (
        <div className="BackgroundImageContainer">
            <div
                className={!props.blur ? 'BackgroundImage' : 'BackgroundImage BackgroundImageBlurred'}
            />
        </div>
    );
}

export default BackgroundImage;
