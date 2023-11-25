import config from '../config/config.json'

class cadastrarAPI {
    constructor(){
        this.status = null;
        this.info = "";
        this.isLoading = null;
    }

    cadastrarAPI = async(user, email, senha, confirmSenha) => {
        try {
            const response = await fetch(config.ApiPython + `/cadastrar?User=${user}&Email=${email}&Senha=${senha}&ConfirSenha=${confirmSenha}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then(
                res => res.json()
            );
            
            this.status = response['Status'];
            this.info = response['Info'];
        } catch (error) {
            console.log(error);
        } finally {
            this.isLoading = false;
        }
    }
}

export default cadastrarAPI;

