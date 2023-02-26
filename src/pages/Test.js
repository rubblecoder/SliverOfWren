import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import '../assets/styles/chatroom.scss';
import Messages from '../components/messages';
import MessageInput from '../components/messageinput';

function Test() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="chatroom">React Chat
      { socket ? (
          <div className="chat-container">
            <Messages socket={socket} />
            <MessageInput socket={socket} />
          </div>
        ) : (
          <div>Not Connected</div>
        )}
    </div>
  );
}

export default Test;
