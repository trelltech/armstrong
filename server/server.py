#!/usr/bin/env python
import asyncio
import websockets
import serial

arduino = serial.Serial('/dev/ttyACM0', 115200, timeout=.1)

sockets = set()

async def ws_connection_handler(socket, path):
    sockets.add(socket)
    while True:
        message = await socket.recv()
        print(message)
        arduino.write(bytes(message, 'utf8'))
    sockets.remove(websocket)

async def consume(con):
    print(con)
    while True:
        msg = con.readline()
        if msg:
            print(msg)
        asyncio.gather(*[socket.send(msg.decode('utf8')) for socket in sockets])
        await asyncio.sleep(2)

loop = asyncio.get_event_loop()

loop.run_until_complete(asyncio.gather(
    websockets.serve(ws_connection_handler, '0.0.0.0', 8181),
    consume(arduino),
))

try:
    loop.run_forever()
except KeyboardInterrupt:
    pass
finally:
    loop.close()
    print("Bye!")
