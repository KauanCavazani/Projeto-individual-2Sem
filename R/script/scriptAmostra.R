idComponenteCPU <- amostraCPU$idComponente[1:390]
macCPU <- amostraCPU$idServidor[1:390]
horario <- datas$V1
valorCPU <- amostraCPU$valorLido[1:390]
unidadeMedidaCPU <- amostraCPU$unidadeMedida[1:390]

dadosCPU <- data.frame("idComponente"=c(idComponenteCPU),
                       "idServidor"=c(macCPU),
                       "horario"=c(horario),
                       "valorLido"=c(valorCPU),
                       "unidadeMedida"=c(unidadeMedidaCPU))

write.csv(dadosCPU,"~/Downloads/Projeto-individual-2Sem/dadosCPU.csv", row.names = FALSE)
