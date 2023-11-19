import config from '../config/config.json'


class sendImageAPI {

    constructor(){
        this.isLoading = null;
        this.status = null;
        this.msg = "";
    }

    sendImageAPI = async( image ) => {
        try {
            const response = await fetch(`${config.ApiPython}/getImage?imageUri=${image}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({image: image})
            }).then(
                res => res.json()
            )
            //this.status = response['Status'];
            // if (this.status) 
            //     this.msg = "Bem vindo"
            // else
            //     this.msg = "Login incorreto"
        } catch (error) {
            console.log(error);
            this.msg = "Ops ocorreu um erro inesperado :("
        } finally {
            this.isLoading = false;
        }
    }
}

export default sendImageAPI;