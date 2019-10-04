# Armstrong

## Client

### Installation

    cd client
    npm install

### Usage

    npm run start

The client will be available on `http://localhost:8080/`.

## Server

### Installation

    cd server
    python -m venv env
    source env/bin/activate
    pip install -r requirements.txt

### Usage

    ./server

## Troubleshooting

### Permission denied on `/dev/ttyACM0`

Add your login user to the group that owns the device or make it readable and writeable to all users:

    sudo chmod a+rw /dev/ttyACM0
