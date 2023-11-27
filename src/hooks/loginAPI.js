import config from '../config/config.json'

class loginAPI {

    constructor(){
        this.isLoading = null;
        this.status = null;
        this.msg = "";
    }

    loginAPI = async(user, senha) => {
        try {
            const response = await fetch(`${config.ApiPython}/login?User=${user}&Senha=${senha}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then(
                res => res.json()
            )
            this.status = response['Status'];
            if (this.status) 
                this.msg = "Bem vindo"
            else
                this.msg = "Login incorreto"
        } catch (error) {
            console.log(`src/hooks/loginAPI: ${error}`);
            this.msg = "Ops ocorreu um erro inesperado :("
        } finally {
            this.isLoading = false;
        }
    }
}

export default loginAPI;