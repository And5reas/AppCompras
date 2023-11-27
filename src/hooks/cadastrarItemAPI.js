import config from '../config/config.json'

class cadastrarItemAPI {
    constructor(){
        this.status = null;
        this.isLoading = null;
    }

    cadastrarItemAPI = async(nomeItem, valorVarejo, valorAtacado) => {
        try {
            const response = await fetch(config.ApiPython + `/cadastrarItem?nomeItem=${nomeItem}&valorVarejo=${valorVarejo}&valorAtacado=${valorAtacado}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then(
                res => res.json()
            );
            
            this.status = response['status']
        } catch (error) {
            console.log(`src/hooks/cadastrarItemAPI: ${error}`);
        } finally {
            this.isLoading = false;
        }
    }
}

export default cadastrarItemAPI;