import pandas as pd
import json

"""
    При запуске этого файла происходит парсинг
    данных из xlsx файла и создается форма в файле setup.json
"""
all_sheets = pd.read_excel('Маппинг сигналов.xlsx', sheet_name=None)

list_axial_and_temperature =['vibration_axial', 'vibration_horizontal', 'vibration_vertical', 'temperature']

def create_json():
    json_data = []
    with open('setup.json', 'w') as file:
        json.dump(json_data, file, indent=2, ensure_ascii=False)

def add_to_json(json_data):
    data = json.load(open("setup.json", encoding="utf-8"))
    data.append(json_data)
    with open("setup.json", "w", encoding="utf-8") as file:
        json.dump(data, file, indent=2, ensure_ascii=False)


def str_func_signal(df, i):
    return f'set_signal({df.iloc[i, 4]}, {df.iloc[i+1, 4]}, {df.iloc[i+2, 4]}, {df.iloc[i+3, 4]}, {df.iloc[i+4, 4]})'

create_json()
add_to_json({
    "time": "moment"
})
for sheet_name, df in all_sheets.items():
    json_data = {
        "name": sheet_name,
        "values": []
        }
    flag = False
    for i in range(0, df.iloc[:, 0].size):
        if type(df.iloc[i, 0]) is not str:
            continue
        #меняем форму работы цикла
        if df.iloc[i, 0] == "Охладитель":
            flag = True
            
        if not flag:
            param_obj = {}
            for j in range(0, 20):
                number_col = i + j
                if df.iloc[number_col, 3] in list_axial_and_temperature:
                    param_obj[df.iloc[number_col, 3]] = {
                        "value": df.iloc[number_col, 4],
                        "signal": str_func_signal(df, number_col)
                    }
                if df.iloc[number_col+1, 3] == 'temperature':
                    break
            json_data["values"].append(param_obj)
        
        else:
            j = 0
            json_data[df.iloc[i, 0]] = {}
            if df.iloc[i, 0] == 'Охладитель':
                json_data[df.iloc[i, 0]]["Масло"] = {
                    f'{df.iloc[i, 3]}': df.iloc[i, 4],
                    f'{df.iloc[i+1, 3]}': df.iloc[i+1, 4]
                }
                json_data[df.iloc[i, 0]]['Вода'] = {
                    f'{df.iloc[i, 3]}': df.iloc[i+2, 4],
                    f'{df.iloc[i+1, 3]}': df.iloc[i+3, 4]
                }
            else:
                while True:
                    json_data[df.iloc[i, 0]][df.iloc[i+j, 3]] = df.iloc[i+j, 4]
                    
                    j = j + 1
                    try:
                        if type(df.iloc[i+j, 0]) is str:
                            break
                    except Exception as e:
                        break
                
    add_to_json(json_data)