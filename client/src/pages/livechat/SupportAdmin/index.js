import React from 'react';

import { ChatEngine } from 'react-chat-engine'

const SupportAdmin = () => {
  return (
    <ChatEngine 
      projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
      userName=''
      userSecret=''
      height='calc(100vh - 12px)'
    />
  );
}

export default SupportAdmin;
