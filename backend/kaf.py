import json
from kafka import KafkaConsumer
from datetime import datetime
import time
from createbody import create_body
from db import add_data, create_db

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
    auto_offset_reset="earliest",
    enable_auto_commit=False,
)

def start_stream():
    create_db()
    while True:
        messages = consumer.poll(timeout_ms=15000)
        if not messages:  # если нет новых сообщений
            break
        for message in messages.values():
            for msg in message:
                data = json.loads(msg.value.decode('utf-8'))
                time_sec = datetime.fromtimestamp(msg.timestamp / 1000)  
                formatted_date = time_sec.strftime('%Y-%m-%d %H:%M:%S')
                print(formatted_date)
                
                data = create_body(data=None, values_dict=data)
                
                try:
                    add_data(data)
                except:
                    time.sleep(0.1)
                    add_data(data)

if __name__ == '__main__':
    start_stream()