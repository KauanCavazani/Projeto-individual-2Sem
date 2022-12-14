def main():
    import csv

    bdsql, cursor = conectar()

    with open("dadosTemp.csv") as file:
        file_csv = csv.reader(file, delimiter=",")
        count = 0
        for row in file_csv:
            if count != 0:
                query = ("INSERT INTO leitura (fkMetrica, horario, valorLido, fkComponente_idComponente, fkComponente_fkServidor) VALUES (%s, %s, %s, %s, %s);")
                val = (4, row[1], row[2], 106, row[0])

                cursor.execute(query, val)
                bdsql.commit()

            count += 1

    with open("dadosCPU.csv") as file:
        file_csv = csv.reader(file, delimiter=",")
        count = 0
        for row in file_csv:
            if count != 0:
                query = ("INSERT INTO leitura (fkMetrica, horario, valorLido, fkComponente_idComponente, fkComponente_fkServidor) VALUES (%s, %s, %s, %s, %s);")
                val = (1, row[1], row[2], 106, row[0])

                cursor.execute(query, val)
                bdsql.commit()

            count += 1

def conectar():
    # import mysql.connector

    # bdsql = mysql.connector.connect(host="localhost", user="airdata_client", password="sptech", database="airData")
    # mycursor = bdsql.cursor()

    import pymssql 

    bdsql = pymssql.connect("airdataserver.database.windows.net", "CloudSA9549f82c", "pi-airdata2022", "airdata")
    mycursor = bdsql.cursor()

    return (bdsql, mycursor)

main()