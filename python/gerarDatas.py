import pandas as pd
import csv



dRan = pd.date_range(start ='2022-10-01 00:00:00', 
       end ='2022-10-31 23:59:59', periods = 390)   

res = dRan.strftime('%d/%m/%Y %H:%M:%S')

with open('datas.csv', 'w') as file:
    writer = csv.writer(file)
    writer.writerows(res)

file.close()

print(res)