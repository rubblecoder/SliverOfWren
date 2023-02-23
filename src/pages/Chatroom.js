import '../assets/styles/chatroom.scss';
import micIcon from '../assets/images/microphone.png';
import rightArrow from '../assets/images/right-arrow.png';

function Chatroom() {
  return (
    <div className="chatroom">
        <div id="main-container">
            <div class="source-pane">
                <div class="pane-header">English</div>
                <div id="en-msg-container" class="translation-content"></div>
            </div>
            <div class="config-pane">
                <div class="pane-header">Translate</div>
                <div class="mic-icon-container">
                    <img id="mic-icon" class="mic-icon" src={micIcon} onclick="toggleMic()" border="0" />
                </div>
                <div class="text-input-container">
                    <input type="text" id="text-input-msg" placeholder="Write text to speech here..." />
                    <img id="go-arrow" src={rightArrow} onclick="sendMessage()" />
                </div>
            </div>
            <div class="translation-pane">
                <div class="pane-header">Spanish</div>
                <div id="sp-msg-container" class="translation-content"></div>
            </div>
        </div>
    </div>
  );
}

export default Chatroom;
