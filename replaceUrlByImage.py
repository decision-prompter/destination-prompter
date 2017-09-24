import json
from pprint import pprint
import os

def replaceURLByImage():
    input_json = "./src/fo2.json"
    json_data = open(input_json).read()
    data = json.loads(json_data)

    pprint(data)
    for index in range(len(data)):
        city = str(data[index]["City"]).lower()
        data[index]["Image URL"] = "./images/" + city + ".jpg"

    outputFile = open("output_foo", "w")
    outputFile.write(str(data).replace("'", '"'))

replaceURLByImage()