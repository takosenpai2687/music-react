import re
import json
import io

filename = 'rain'

with io.open(filename+'.lrc', 'r', encoding='utf8') as f:
    content = f.readlines()

lrc = []
for line in content:
    line = re.sub(r"<.*>", "", line).strip()
    if not line.endswith(']'):
        time, words = line.replace('[', '').split(']')
        mins, secs = [float(x) for x in time.split(':')]
        lrc.append({"time": 60*mins+secs, "content": words})

with io.open(filename+'.json', 'w', encoding='utf8') as f:
    json.dump(lrc, f)
