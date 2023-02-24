import {useState} from 'react';
import '../assets/styles/chatroom.scss';
import micIcon from '../assets/images/microphone.png';
import micIconGreen from '../assets/images/microphone-green.png';
import micIconRed from '../assets/images/microphone-red.png';
import rightArrow from '../assets/images/right-arrow.png';

function Chatroom() {
    const [image, setImage] = useState(micIcon);
    const [micStatus, setMicStatus] = useState(false);
  
    function toggleMic() {
        if (micStatus) {
            //stopMic();
            setMicStatus(false);
            setImage(micIconRed);
        } else {
            //startMic();
            setMicStatus(true);
            setImage(micIconGreen);
        }
    }

  return (
    <div className="chatroom">
        <div id="main-chatroom-container">
            <div className="source-pane">
                <div className="pane-header">English</div>
                <div id="en-msg-container" className="translation-content">This is a test</div>
            </div>
            <div className="config-pane">
                <div className="pane-header opp-text">Translate</div>
                <div className="mic-icon-container">
                    <img alt="Toggle Mic Button" id="mic-icon" className="mic-icon" src={image} border="0" onClick={toggleMic} />
                </div>
                <div className="text-input-container" valign="bottom">
                    <input type="text" id="text-input-msg" placeholder="Write text to speech here..." />
                    <img alt="Send Text Button" id="go-arrow" src={rightArrow}  />
                </div>
            </div>
            <div className="translation-pane">
                <div className="pane-header">Spanish</div>
                <div id="sp-msg-container" className="translation-content">This is a test <br/>This is a test</div>
            </div>
        </div>
    </div>
  );
}

export default Chatroom;
