import React, { useState } from 'react'
import './ChatBot.css'
import { FaTextHeight } from 'react-icons/fa';
import { VscRobot } from "react-icons/vsc";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import Header from '../../Components/Header/Header';
{/* <style>
@import url('https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap');
</style> */}


const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'Jennifer',
      text: 'Hello there! How can I assist you today?'
    },
    {
      sender: 'User',
      text: 'Suggest me some tourist attractions near Galle.'
    },
    {
      sender: 'Jennifer',
      text: 'Galle, a UNESCO World Heritage Site, offers a captivating blend of history, culture, and natural beauty. Here are some must-visit tourist attractions in Galle: Galle Fort, Galle Fort Lighthouse, Maritime Museum, Weligama Beach, National Museum of Galle, Whale and dolphin watching, Galle Fort Clock Tower, Japanese Peace Pagoda, Jungle Beach, Mirissa Beach. These are just a few of the many attractions that Galle has to offer. With its rich history, stunning beaches, and vibrant culture, there is something for everyone to enjoy in this charming coastal city.'
    }
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { sender: 'User', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <>
    <Header/>
    <div className='chat-page'>
    <div className='jenni'>
      <VscRobot id='jenni-icon' size={40} color='#5FC1E0' className="chatbot-icon" />
      <h2 className='jenni-name'>Jennifer</h2>
    </div>
    <p className='para'>Jennifer is our exclusive chat bot that helps you to find your favourite destinations, travel ideas or any travle relevent suggestions by giving simple request by a text message. Just simply type a message to Jennifer and she'll help you along with your journey</p>
    <div className="chat-screen">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} id='msg' className={`message ${message.sender === 'User' ? 'user-message'   
 : 'chatbot-message'}`}>
            {message.sender === 'Jennifer' ? (
                <VscRobot size={27} color='#5FC1E0' className="chatbot-icon" />
              ) : (
                <FaRegUserCircle size={25} color='#5FC1E0' className="user-icon" />
              )}
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="input-container">
      <textarea
          // rows="1"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}><IoSend size={25} color='white' className="chatbot-icon" /></button>
      </div>
    </div>
    </div>
    </>
  );
}

export default ChatBot
