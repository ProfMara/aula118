from flask import Flask, render_template, request, jsonify
from prever_sentimento import *
app = Flask(__name__)

@app.route("/")

def index():
    entries = show_entry()
    return render_template("index.html", entries=entries)

#ROTA PARA IDENTIFICAR EMOÇÃO NO TEXTO


#ROTA PARA SALVAR AS ANOTAÇÕES DO DIÁRIO


app.run(debug=True)


