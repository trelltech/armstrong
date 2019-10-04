// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';

import '../../scss/components/MainPanel.scss';

const MainPanel = () => {
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8181/');
    socket.addEventListener('open', () => {
      console.log('Connected.');
      socket.send('Hello world!');
    });

    socket.addEventListener('message', (event) => {
      console.log('From server ', event.data);
    });

    socket.addEventListener('close', () => {
      console.log('Closed.');
    });
  }, []);

  return <section className="main-panel-component">
      Hello world
  </section>;
};

export default MainPanel;
