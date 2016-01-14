from bs4 import BeautifulSoup
import requests

textFile = "flights.txt"
with open(textFile) as f:
	urlArray = f.readlines()

flights = [] # Array for the flights. Same length as the number of URLs

for j in range(0,len(urlArray),1):
	pageURL = urlArray[j]
	icaoAirline = 'POE'
	page = requests.get(pageURL)
	data = page.text
	soup = BeautifulSoup(data, "lxml")

	table1 = soup.find('table', class_="prettyTable")
	tableData = table1.find_all('td')
	del tableData[0:5]

	latLongArray = []
	count = 0
	counter = 0

	while(count < len(tableData)+9):
		if(counter == 10):
			latLongArray.append(tableData[count-10].get_text())
			latLongArray.append(tableData[count-9].get_text())
			counter = 0
		count += 1
		counter += 1

	del latLongArray[len(latLongArray)-2:len(latLongArray)]

	variableString = "var " + pageURL[pageURL.find(icaoAirline):pageURL.find(icaoAirline)+7]
	if(variableString[len(variableString)-1]=="/"):
		variableString = variableString[0:len(variableString)-1]

	for i in range(0,len(latLongArray),2):
		if i == 0:
			# if i == 0
			variableString = variableString + "Coords = " + "[{lat:" + latLongArray[i] + "," + "lng:" + latLongArray[i+1]
		elif i+2 >= len(latLongArray):
			# if i+2 > len(array)
			variableString = variableString + "},{lat:" + latLongArray[i] + "," + "lng:" + latLongArray[i+1] + "}];\n"
		else:
			# Middle
			variableString = variableString + "},{lat:" + latLongArray[i] + "," + "lng:" + latLongArray[i+1]

	flights.append(variableString)

jsFile = open('data.js', 'w')
for k in range(0,len(flights),1):
	jsFile.write(flights[k])
jsFile.close()