import React, {useState, useEffect} from 'react';
import io from 'socket.io-client'
import '../assets/styles/chatroom.scss';
import micIcon from '../assets/images/microphone.png';
import micIconGreen from '../assets/images/microphone-green.png';
import micIconRed from '../assets/images/microphone-red.png';
import Messages from '../components/messages';
import MessageInput from '../components/messageinput';

//const socket = io();

function Chatroom() {
    const [image, setImage] = useState(micIcon);
    const [micStatus, setMicStatus] = useState(false);
    const [socket, setSocket] = useState(null);
  
    useEffect(() => {
      const newSocket = io(`http://${window.location.hostname}:3000`);
      setSocket(newSocket);
      return () => newSocket.close();
    }, [setSocket]);
  
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
                    { socket ? (
                        <div className="chat-container">
                            <Messages socket={socket} />
                        </div>
                        ) : (
                        <div>Not Connected</div>
                    )}
                </div>
            </div>
            <div className="config-pane">
                <div className="pane-header opp-text">Translate</div>
                <div className="mic-icon-container">
                    <img alt="Toggle Mic Button" id="mic-icon" className="mic-icon" src={image} border="0" onClick={toggleMic} />
                </div>
                <div className="text-input-container" valign="bottom">
                    <MessageInput socket={socket} />
                </div>
            </div>
            <div className="translation-pane">
                <div className="pane-header">Spanish (but not yet... WIP)</div>
                <div id="sp-msg-container" className="translation-content">
                    { socket ? (
                        <div className="chat-container">
                            <Messages socket={socket} />
                        </div>
                        ) : (
                        <div>Not Connected</div>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
}

export default Chatroom;
