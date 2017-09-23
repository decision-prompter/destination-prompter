import sys

def parseCSV():
    inputCSV = open(sys.argv[1])
    data = dict()
    firstLine = inputCSV.readline()
    firstLineSegments = fixLine(firstLine)
    # data[firstLineSegments[0]] = firstLineSegments[1:]
    # print data
    for line in inputCSV.readlines():
        lineSegments = fixLine(line)
        dictForLine = dict()
        for segmentNumber in range(1,len(lineSegments)):
            dictForLine[firstLineSegments[segmentNumber]] = lineSegments[segmentNumber]
        data[lineSegments[0]] = dictForLine

    outputJSON = open("output.json", "w")
    dataToWrite = str(data).replace("'", '"')
    outputJSON.write(dataToWrite)
    inputCSV.close()
    outputJSON.close()

def fixLine(line):
    lineWithoutUnwantedChars = line.replace('\r', '').replace('\n', '')
    separated = lineWithoutUnwantedChars.split(',')
    return separated

parseCSV()
