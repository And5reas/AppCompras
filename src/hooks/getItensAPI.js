import config from '../config/config.json'

class getItensAPI {

    constructor(){
        this.isLoading = null;
        this.msg = "";
    }

    getItensAPI = async() => {
        let lista = []
        try {
            const response = await fetch(`${config.ApiPython}/getItens`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then(
                res => res.json()
            )
            for (let i = 0; i < response['QuantidadeItens']; i += 1){
                lista.push(response[`${i}`])
            }
            return lista
        } catch (error) {
            console.log(`src/hooks/getItensAPI: ${error}`);
            this.msg = "Ops ocorreu um erro inesperado :("
        } finally {
            this.isLoading = false;
        }
    }
}

export default getItensAPI;