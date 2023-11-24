from flask import Flask, request
from flask_ngrok import run_with_ngrok
from PIL import Image
from connDB import ConnDB
from ImageProcessing import ImageProcessing

# Setando as instâncias necessárias
app = Flask(__name__)
dataBase = ConnDB()
possImg = ImageProcessing()

app.secret_key = '2XwiT9cZrEzVyavIO3q2TBGuISx_3fegqbsuH7SgEzZscCrZG'  # Setar a chave de acesso da minha conta no ngrok
run_with_ngrok(app)  # Fazer conexão, para ele gerar uma URL Online, ao invés de local.

@app.route("/login")
def login():
    status = False  # Setar o estado de sucesso como default "False"
    
    user = request.args.get('User')  # Pegar o dado com compo usuário chamado assim: "http://API.com/login?User=<algo>"
    senha = request.args.get('Senha')  # Pegar o dado com compo senha chamado assim: "http://API.com/login?User=<algo>&Senha=<algo>"

    if dataBase.verifLogin(user, senha):  # Informações tratadas diretamento pelo banco 
        status = True  # Setar "status" para "True" se der tudo certo
        
    return {
        "Status": status,  # Enviar a Validação do login
    }

@app.route("/cadastrar")
def cadastrar():
    status = False  # Setar por default o status para "False"
    info = "Ops, parece que ocorreu um erro :("  # Setar por default um erro

    # Pegar as informações via API, fornecidas pelo cliente
    user = request.args.get('User')
    email = request.args.get('Email') 
    senha = request.args.get('Senha')
    confirmSenha = request.args.get('ConfirSenha')

    if dataBase.cadastrar(user, email, senha, confirmSenha):  # Verificar internamente pelo banco
        info = "Usuário cadastrado com sucesso!"  # Setar a msg de feedback
        status = True  # Validar o cadastro para o react
    return {
        "Info": info,
        "Status": status,
    }

@app.route("/image", methods=['POST', 'GET'])
def image():
    if request.method == 'POST':
        imagem = request.files['photo']  # Receber o arquivo.jpg fornecido pelo react

        imagem.save("img.jpg")

    if request.method == 'GET':
        pass
    return {
        "sla": "oii"
    }

    # Ainda não faz nada, mas futuramente irá receber essa image e tratar de alguma forma
    
if __name__ == "__main__":
    app.run()  # Iniciar o Servidor