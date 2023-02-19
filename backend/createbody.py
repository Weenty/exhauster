import json

#рекурсивное установление значений из словаря в форму (то есть, создание тела запроса)
def create_body(data, values_dict):
    if data==None:
        data = json.load(open("setup.json", encoding='utf-8'))

    def set_signal(current, max_alarm, min_alarm, max_warning, min_warning):
        try:
            if current > max_alarm or current < min_alarm:
                return 'Alarm'
            if current > max_warning or current < min_warning:
                return 'Warning'
            return 'Normal'
        except:
            return 'None'

    def replace_values(obj, dict_to_replace):
        if isinstance(obj, dict):
            for key, value in obj.items():
                obj[key] = replace_values(value, dict_to_replace)
        elif isinstance(obj, list):
            for i in range(len(obj)):
                obj[i] = replace_values(obj[i], dict_to_replace)
        elif isinstance(obj, str) and obj in dict_to_replace:
            obj = dict_to_replace[obj]
        return obj

    data = replace_values(data, values_dict)

# Вызываем функцию set_signal
    def process_signals(obj):
        if isinstance(obj, dict):
            for key, value in obj.items():
                obj[key] = process_signals(value)
        elif isinstance(obj, list):
            for i in range(len(obj)):
                obj[i] = process_signals(obj[i])
        elif isinstance(obj, str) and obj.startswith("set_signal"):
        # Извлекаем аргументы из строки и преобразуем их в числовые значения
            parts = obj.split("(")[1].split(")")[0].split(",")
            args = [values_dict[p.strip()] for p in parts]
            obj = set_signal(*args)
        return obj

    data = process_signals(data)

    
    return data
    # with open('result.json', 'w') as f:
    #     json.dump(data, f, indent=2, ensure_ascii=False)




