Установка и запуск:

1) `git clone https://github.com/Weenty/exhauster.git`
2) `cd backend`
3) `pip install -r requirements.txt`
4) `python app.py`

Также отдельно можно запустить:

`python ParseEx.py` 
Данный скрипт парсит файл "Маппинг сигналов.xlsx" в его корневой каталоге и формирует "шаблон" в "setup.json"

`python kaf.py` 
Данный скрипт начнет полное чтение топика Kafka с самого его начала, а также начнет его запись в базу данных. 

5) Создаем новую консоль
6) `cd frontend`
7) `npm install`
8) `npm start`
