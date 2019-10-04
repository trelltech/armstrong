#!/usr/bin/env python

import asyncio
import websockets

async def serve(websocket, path):
    while True:
        message = await websocket.recv()
        print(message)
        await websocket.send(message)

server = websockets.serve(serve, '0.0.0.0', 8181)

event_loop = asyncio.get_event_loop()

event_loop.run_until_complete(server)
event_loop.run_forever()
