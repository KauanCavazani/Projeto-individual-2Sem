def main():
    import pandas as pd

    # bdsql, cursor = conectar()

    with open("dadosCPU.csv", "r") as file:
        file_csv = pd.read_csv(file, delimiter=";")
        for i, row in enumerate(file_csv):
            print(file_csv.loc[i])
            # query = ("INSERT INTO leitura (fkMetrica, horario, valorLido, fkComponente_idComponente, fkComponente_fkSevidor) VALUES (%s, %s, %s, %s, %s);")
            # val = ()                

def conectar():
    import mysql.connector

    bdsql = mysql.connector.connect(host="localhost", user="airdata_client", password="sptech", database="airData")
    mycursor = bdsql.cursor()

    return (bdsql, mycursor)

main()