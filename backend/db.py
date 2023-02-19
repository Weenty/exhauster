import sqlite3
from functools import wraps

def sqlite_session(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        conn = sqlite3.connect('db.db')
        cursor = conn.cursor()
        
        try:
            result = func(cursor, *args, **kwargs)
            conn.commit()
            return result
        except Exception as e:
            conn.rollback()
            raise e
        finally:
            cursor.close()
            conn.close()
    return wrapper

@sqlite_session
def create_db(cursor):
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS json_data
    (id INTEGER PRIMARY KEY,
    date DATE,
    data TEXT)
    ''')
    
@sqlite_session
def add_data(cursor, data):
    date = data[0]['time']
    cursor.execute("INSERT INTO json_data (date, data) VALUES (?, ?)", (date, str(data)))

@sqlite_session
def get_data(cursor, first_date, last_date):

    cursor.execute("SELECT data FROM json_data WHERE date >= ? AND date <= ?", (first_date, last_date))
    rows = cursor.fetchall() # получаем результаты запроса
    result = []
    for row in rows:
        result.append((row[0]))
    return result 