from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
import os

os.system("rm relatorio.pdf")

cnv = canvas.Canvas("relatorio.pdf", pagesize=A4)
cnv.rect(500,100, 300, 100)
cnv.save()