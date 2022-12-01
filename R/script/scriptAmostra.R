cpuPercent <- sample(c(dadosCPU$valorLido), size = 200, replace = TRUE)
cpuPercent <- sample(c(cpuPercent), size = 394, replace = TRUE)

cpuTemp <- sample(c(dadosTemp$valorLido), size = 200, replace = TRUE)
cpuTemp <- sample(c(cpuTemp), size = 394, replace = TRUE)

horario <- datas$V1

dadosCPU2 <- data.frame("idServidor"="16:a6:95:10:ef:9f",
                        "horario"=c(horario),
                        "valorLido"=c(cpuPercent))

dadosTemp2 <- data.frame("idServidor"="16:a6:95:10:ef:9f",
                       "horario"=c(horario),
                       "valorLido"=c(cpuTemp))

write.csv(dadosCPU2,"~/Kauan/Github/Projeto-individual-2Sem/python/dadosCPU2.csv", row.names = FALSE)
write.csv(dadosTemp2,"~/Kauan/Github/Projeto-individual-2Sem/python/dadosTemp2.csv", row.names = FALSE)
