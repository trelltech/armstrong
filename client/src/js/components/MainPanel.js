// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import * as three from 'three';

import '../../scss/components/MainPanel.scss';

const MainPanel = () => {
  const ref = useRef(null);
  const [socket, setSocket] = useState(null);

  const rotate = () => {
    socket.send(JSON.stringify({
      type: 'rotate',
    }));
  };

  useEffect(() => {
    const { current: el } = ref;
    const { width, height } = el.getBoundingClientRect();

    const scene = new three.Scene();
    const camera = new three.PerspectiveCamera(70, width / height, 1, 10);
    const renderer = new three.WebGLRenderer({
      antialias: true,
    });

    camera.position.set(0, 3.5, 5);

    const geometry = new three.CubeGeometry(1, 1, 0.1);
    const material = new three.MeshNormalMaterial();
    const cube = new three.Mesh(geometry, material);
    cube.position.set(0, 2, 0);
    cube.rotation.x = 1.5;

    scene.add(cube);

    el.appendChild(renderer.domElement);

    window.addEventListener('resize', (event) => {
      console.log(event);
      const { width: newWidth, height: newHeight } = el.getBoundingClientRect();

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });

    renderer.setSize(width, height);
    renderer.render(scene, camera);

    const ws = new WebSocket('ws://localhost:8181/');
    ws.addEventListener('open', () => {
      console.log('Connected.');
      setSocket(ws);
    });

    ws.addEventListener('message', (event) => {
      const { type, ...args } = JSON.parse(event.data);

      switch (type) {
        case 'rotate': {
          const { increment = 0.5 } = args;
          cube.rotation.x += increment;
          renderer.render(scene, camera);
          break;
        } default: {
          console.warn(`Unknown action type ${type}.`);
        }
      }

      console.log('From server ', event.data);
    });

    ws.addEventListener('close', () => {
      console.log('Closed.');
      setSocket(null);
    });
  }, []);

  return <section className="main-panel-component">
      <div ref={ref} style={{ width: '100vw', height: '100vh', background: 'red' }} />

      <button className="rotate-button" onClick={rotate}>Rotate</button>
  </section>;
};

export default MainPanel;
