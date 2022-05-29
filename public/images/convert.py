import csv
import json


prefs = []

# Open a csv reader called DictReader
with open("info.csv", encoding='utf-8') as csvf:
    reader = csv.DictReader(csvf)
    for row in reader:
        data ={}
        data["code"] = row["code"]
        data["latitude"] = float(row["lat"])
        data["longitude"] = float(row["long"]
        data["name"] = row["name"]
        prefs.append(data)

    # Open a json writer, and use the json.dumps()
    # function to dump data
    with open("output.json", 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(prefs, indent=4))
