import React, { useEffect } from 'react';

const Chat = () => {
  useEffect(() => {
    window.fbAsyncInit = () => {
      window.FB.init({ xfbml: true, version: 'v9.0' });
    };

    (function (d, s, id) {
      let js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  });

  return (
    <>
      <div id="fb-root" />
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        theme_color="#C4A747"
        page_id="1856730567922043"
      ></div>
    </>
  );
};

export default Chat;
