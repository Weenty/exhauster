from flask import Flask, request
from flask_socketio import SocketIO
import json
from kafka import KafkaConsumer
import time
from db import create_db, add_data, get_data
from createbody import create_body

host = 'rc1a-2ar1hqnl386tvq7k.mdb.yandexcloud.net:9091'
topic = 'zsmk-9433-dev-01'
user = '9433_reader'
password = 'eUIpgWu0PWTJaTrjhjQD3.hoyhntiK'
group_id = 'false promise'
sasl_mechanism = 'SCRAM-SHA-512'

consumer = KafkaConsumer(
    topic,
    bootstrap_servers=[host],
    sasl_plain_username=user,
    sasl_plain_password=password,
    security_protocol='SASL_SSL',
    sasl_mechanism=sasl_mechanism,
    group_id=group_id,
    ssl_cafile='CA.pem',
    auto_offset_reset="latest",
    enable_auto_commit=False,
)

app = Flask(__name__)
flag = False
socketio = SocketIO(app, cors_allowed_origins="*", json_dumps={'ensure_ascii': False})

@app.route('/')
def home():
  return "I'm alive"

@app.route('/get_data', methods=['POST'])
def my_post_endpoint():
    data = request.json 
    first_date = data['first'] 
    last_date = data['last']
    return json.dumps(((get_data(first_date, last_date))))

@socketio.on('connect')
def connect():
    socketio.emit('connect', json.dumps({'message': 'Подключен'}))
    print('Client connected')

@socketio.on('disconnect')
def disconnect():
    print('Client disconnected')

@socketio.on('start_stream')
def start_stream():
    create_db()
    while True:
        for message in consumer:
            data = json.loads(message.value.decode('utf-8'))
            
            data = create_body(data=None, values_dict=data)
            
            socketio.emit('stream', data, json_dumps={'ensure_ascii': False})
            try:
                add_data(data)
            except:
                time.sleep(0.1)
                add_data(data)


if __name__ == '__main__':
  socketio.run(app, host='0.0.0.0', port=80)
