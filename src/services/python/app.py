from flask import Flask, request
from flask_ngrok import run_with_ngrok
from connDB import ConnDB

import base64

app = Flask(__name__)
dataBase = ConnDB()

app.secret_key = '2XwiT9cZrEzVyavIO3q2TBGuISx_3fegqbsuH7SgEzZscCrZG'
run_with_ngrok(app)

# Api Route
@app.route("/teste")
def teste():

    receber = request.args.get('batata')

    return {
        "teste": "deu bom",
        "texto": ";)",
        "batata": receber,
        }

@app.route("/login")
def login():
    status = False
    
    user = request.args.get('User')
    senha = request.args.get('Senha')

    if dataBase.verifLogin(user, senha):
        status = True
        
    return {
        "Status": status,
    }

@app.route("/cadastrar")
def cadastrar():
    status = False
    info = "Ops, parece que ocorreu um erro :("

    user = request.args.get('User')
    email = request.args.get('Email') 
    senha = request.args.get('Senha')
    confirmSenha = request.args.get('ConfirSenha')

    if dataBase.cadastrar(user, email, senha, confirmSenha):
        info = "Usuário cadastrado com sucesso!"
        status = True

    return {
        "Info": info,
        "Status": status,
    }

@app.route("/getImage", methods=["POST",])
def getImage():
    imageBase64 = request.args.get('imageUri')
    img = base64.decode(imageBase64)
    print(img)
    return {
        "image": img
    }
    

if __name__ == "__main__":
    app.run()