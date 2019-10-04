#!/usr/bin/env python
import argparse
import asyncio
import websockets
import serial

parser = argparse.ArgumentParser(description="Armstrong serial-ws bridge")
parser.add_argument('--serial', help='Serial device', type=str, default='/dev/ttyACM0')
parser.add_argument('--port', help='WebSockets port', type=int, default=8181)

args = parser.parse_args()

arduino = serial.Serial(args.serial, 115200, timeout=.1)
sockets = set()

async def ws_connection_handler(socket, path):
    sockets.add(socket)
    while True:
        message = await socket.recv()
        arduino.write(bytes(message, 'utf8'))
    sockets.remove(websocket)

async def consume(con):
    while True:
        msg = con.readline()
        if msg:
            asyncio.gather(*[socket.send(msg.decode('utf8')) for socket in sockets])
        await asyncio.sleep(0)

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    tasks = asyncio.gather(
        websockets.serve(ws_connection_handler, '0.0.0.0', args.port),
        consume(arduino),
    )

    try:
        loop.run_until_complete(tasks)
    except KeyboardInterrupt:
        pass
    finally:
        loop.close()
