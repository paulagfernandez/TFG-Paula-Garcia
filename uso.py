
import threading
def setInterval(func,time):
	e = threading.Event()
	while not e.wait(time):
		func()
def busca():

	f = open("datos.txt","r")
	for line in f:
		if "person" in line:
			print('PERSONA ENCONTRADA')
		
	else:
		print('sigo buscando')

setInterval(busca,2)
