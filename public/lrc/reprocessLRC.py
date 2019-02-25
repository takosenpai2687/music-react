import json
import math

filename = 'rain.json'

with open(filename, 'r') as f:
    data = json.load(f)

lrc = []
for item in data:
    time = float(item['time'])
    # if time <12:
    #     time = 0
    # else:
    time = round(time, 2)
    lrc.append({'time': time, 'content': item['content']})

with open(filename, 'w') as outfile:
    json.dump(lrc, outfile)
