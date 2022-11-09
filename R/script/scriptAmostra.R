idComponenteCPU <- amostraTemp$idComponente[1:390]
macCPU <- amostraTemp$idServidor[1:390]
horario <- datas$V1
valorCPU <- amostraTemp$valorLido[1:390]
fkMetrica <- rep(4, 390)

dadosTemp <- data.frame("fkMetrica"=c(fkMetrica),
                      "idComponente"=c(idComponenteCPU),
                       "idServidor"=c(macCPU),
                       "horario"=c(horario),
                       "valorLido"=c(valorCPU))

write.csv(dadosCPU,"~/Downloads/Projeto-individual-2Sem/dadosTemp.csv", row.names = FALSE)
