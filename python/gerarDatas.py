import pandas as pd
import csv

dRan = pd.date_range(start ='2022-07-01 00:00:00', 
       end ='2022-09-30 23:59:59', periods = 1170)   

res = dRan.strftime('%Y-%m-%d %H:%M:%S')

with open('datas.csv', 'w') as file:
    writer = csv.writer(file)
    writer.writerows(res)

file.close()

print(res)