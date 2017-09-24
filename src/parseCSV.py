# program requires two inputs:
# arg 1 = input csv file
# arg 2 = output json file

import sys

def parseCSV():
    inputCSV = open(sys.argv[1])
    outputList = list()
    firstLine = inputCSV.readline()
    firstLineSegments = fixLine(firstLine)
    # data[firstLineSegments[0]] = firstLineSegments[1:]
    # print data
    for line in inputCSV.readlines():
        lineSegments = fixLine(line)
        dictForLine = dict()
        for segmentNumber in range(0,len(lineSegments)):
            dictForLine[firstLineSegments[segmentNumber]] = lineSegments[segmentNumber]
        outputList.append(dictForLine)

    outputJSON = open(sys.argv[2], "w")
    dataToWrite = str(outputList).replace("'", '"')
    outputJSON.write(dataToWrite)
    inputCSV.close()
    outputJSON.close()

def fixLine(line):
    lineWithoutUnwantedChars = line.replace('\r', '').replace('\n', '')
    separated = lineWithoutUnwantedChars.split(',')
    return separated

parseCSV()