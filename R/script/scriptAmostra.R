cpuTemp <- sample(c(amostraTemp2$valorLido), size = 1170, replace = TRUE)


idComponenteCPU <- amostraTemp$idComponente[1:390]
macCPU <- amostraCPU2$idServidor[1:390]
horario <- datas$V1
valorCPU <- amostraTemp$valorLido[1:390]
fkMetrica <- rep(4, 390)

dadosTemp <- data.frame("idServidor"="10:5b:ad:fa:55:af",
                       "horario"=c(horario),
                       "valorLido"=c(cpuTemp))

write.csv(dadosTemp,"~/Kauan/Github/Projeto-individual-2Sem/python/dadosTemp2.csv", row.names = FALSE)
