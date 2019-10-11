// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react';
import * as three from 'three';
import TWEEN from '@tweenjs/tween.js';
import Slider from 'rc-slider';

import '../../scss/components/MainPanel.scss';

const rotateCube = (cube, z) => {
  TWEEN.removeAll();
  new TWEEN.Tween(cube.rotation)
    .to({ z }, 400)
    .start();
};

const SERVOS = 6;

// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }

const MainPanel = () => {
  const ref = useRef(null);
  const [socket, setSocket] = useState(null);

  const [servoStates, setServoStates] = useState(Array(SERVOS).fill(0));
  const [commands, setCommands] = useState([]);
  // const prevServoStates = usePrevious(servoStates);

  useEffect(() => {
    if (commands && socket !== null) {
      commands.forEach(([servo, arc]) => {
        socket.send(JSON.stringify({
          servo,
          arc,
        }));
      });
    }
    if (commands.length) {
      setCommands([]);
    }
  }, [commands]);

  useEffect(() => {
    const { current: el } = ref;
    const { width, height } = el.getBoundingClientRect();

    const scene = new three.Scene();
    const camera = new three.PerspectiveCamera(70, width / height, 1, 10);
    const renderer = new three.WebGLRenderer({
      antialias: true,
    });

    camera.position.set(0, 1, 7);

    const geometry = new three.CubeGeometry(1, 1, 0.2);
    const material = new three.MeshNormalMaterial();

    const cubes = [];

    for (let i = 0; i < SERVOS; i += 1) {
      const cube = new three.Mesh(geometry, material);
      cube.position.set(-1 * SERVOS / 2 + (i * 1.2), 1, 0);
      cube.rotation.x = 1.8;
      scene.add(cube);
      cubes.push(cube);
    }

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
      setSocket(ws);
    });

    ws.addEventListener('message', (event) => {
      const { servo, arc } = JSON.parse(event.data);

      const targetRotation = three.Math.degToRad(arc);

      const states = [...servoStates];
      states[servo] = arc;
      setServoStates(states);

      rotateCube(cubes[servo], targetRotation, () => {
        renderer.render(scene, camera);
      });

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
          {Array(SERVOS).fill(null).map((_, i) => (
            <Slider
              className="tfr-timeline-zoom--slider"
              min={0}
              max={180}
              key={`servo-slider-${i}`}
              value={servoStates[i]}
              allowCross={false}
              onChange={(value) => {
                console.log(value);
                const states = [...servoStates];
                states[i] = parseInt(value, 10);
                setServoStates(states);
              }}
              onAfterChange={(value) => {
                setCommands([...commands, [i, value]]);
              }}
            />
          ))}
        </div>
      }
  </section>;
};

export default MainPanel;
