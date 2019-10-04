// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import * as three from 'three';
import TWEEN from '@tweenjs/tween.js';

import '../../scss/components/MainPanel.scss';

const rotateCube = (cube, z) => {
  TWEEN.removeAll();
  new TWEEN.Tween(cube.rotation)
    .to({ z }, 400)
    .start();
};

const MainPanel = () => {
  const ref = useRef(null);
  const [socket, setSocket] = useState(null);
  const [servo1, setServo1] = useState(0);
  const [servo2, setServo2] = useState(0);

  useEffect(() => {
    if (socket != null) {
      socket.send(JSON.stringify({
        servo: 1,
        arc: servo1,
      }));
    }
  }, [servo1]);

  useEffect(() => {
    if (socket != null) {
      socket.send(JSON.stringify({
        servo: 2,
        arc: servo2,
      }));
    }
  }, [servo2]);

  useEffect(() => {
    const { current: el } = ref;
    const { width, height } = el.getBoundingClientRect();

    const scene = new three.Scene();
    const camera = new three.PerspectiveCamera(70, width / height, 1, 10);
    const renderer = new three.WebGLRenderer({
      antialias: true,
    });

    camera.position.set(0, 1, 7);

    const geometry = new three.CubeGeometry(4, 4, 0.3);
    const material = new three.MeshNormalMaterial();

    const cube1 = new three.Mesh(geometry, material);
    cube1.position.set(0, 1, 0);
    cube1.rotation.x = 1.8;

    const cube2 = new three.Mesh(geometry, material);
    cube2.position.set(0, -1, 0);
    cube2.rotation.x = 1.8;

    scene.add(cube1);
    scene.add(cube2);

    el.appendChild(renderer.domElement);

    window.addEventListener('resize', () => {
      const { width: newWidth, height: newHeight } = el.getBoundingClientRect();

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    });

    renderer.setSize(width, height);
    renderer.render(scene, camera);

    const render = () => {
      TWEEN.update();
      renderer.render(scene, camera);
    };

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    animate();

    const ws = new WebSocket('ws://localhost:8181/');
    ws.addEventListener('open', () => {
      console.log('Connected.');
      ws.send(JSON.stringify({
        servo: 1,
        arc: 0,
      }));
      setSocket(ws);
    });

    ws.addEventListener('message', (event) => {
      const { servo, arc } = JSON.parse(event.data);

      const targetRotation = three.Math.degToRad(arc);

      if (servo === 1) {
        rotateCube(cube1, targetRotation, () => {
          renderer.render(scene, camera);
        });
      } else if (servo === 2) {
        rotateCube(cube2, targetRotation, () => {
          renderer.render(scene, camera);
        });
      }
      console.log('From server ', servo, arc);
    });

    ws.addEventListener('close', () => {
      console.log('Closed.');
      setSocket(null);
    });
  }, []);

  return <section className="main-panel-component" style={{ width: '100vw', height: '100vh' }}>
      <div className="gl-wrapper" ref={ref} />
      {socket === null
        ? <div className="disconnected">Not connected</div>
        : <div className="tools">
          <input
            type="range"
            min="0"
            max="180"
            step="1"
            value={servo1}
            onChange={event => setServo1(parseInt(event.target.value, 10))}
          />
          <input
            type="range"
            min="0"
            max="180"
            step="1"
            value={servo2}
            onChange={event => setServo2(parseInt(event.target.value, 10))}
          />
        </div>
      }
  </section>;
};

export default MainPanel;
