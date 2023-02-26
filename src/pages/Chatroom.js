import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'
import '../assets/styles/chatroom.scss';
import micIcon from '../assets/images/microphone.png';
import micIconGreen from '../assets/images/microphone-green.png';
import micIconRed from '../assets/images/microphone-red.png';
import rightArrow from '../assets/images/right-arrow.png';

const socket = io();

function Chatroom() {
    const [image, setImage] = useState(micIcon);
    const [micStatus, setMicStatus] = useState(false);
  
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [lastPong, setLastPong] = useState(null);

    useEffect(() => {
        socket.on('connect', () => {
          setIsConnected(true);
        });
    
        socket.on('disconnect', () => {
          setIsConnected(false);
        });
    
        socket.on('pong', () => {
          setLastPong(new Date().toISOString());
        });
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
          socket.off('pong');
        };
      }, []);

      const sendPing = () => {
        socket.emit('ping');
        alert("test");
      }

    function test() {
        alert("test");
    }

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
                <div id="en-msg-container" className="translation-content">
                    <p>Connected: { '' + isConnected }</p>
                    <p>Last Pong: { lastPong || '-' }</p>
                </div>
            </div>
            <div className="config-pane">
                <div className="pane-header opp-text">Translate</div>
                <div className="mic-icon-container">
                    <img alt="Toggle Mic Button" id="mic-icon" className="mic-icon" src={image} border="0" onClick={toggleMic} />
                </div>
                <div className="text-input-container" valign="bottom">
                    <input type="text" id="text-input-msg" placeholder="Write text to speech here..." />
                    <img alt="Send Text Button" id="go-arrow" src={rightArrow} onClick={ sendPing }  />
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
