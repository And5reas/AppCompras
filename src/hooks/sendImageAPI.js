import config from '../config/config.json'

class sendImageAPI {

    constructor(){
        this.msg = "";
    }

    sendImageAPI = async( img ) => {

        let localUri = img.uri;
        let fileName = localUri.split('/').pop();
        let match = /\.(\w+)$/.exec(fileName);
        let type = match ? `image/${match[1]}` : `image`;
        const formData = new FormData()

        formData.append('photo', { uri: localUri, name: fileName, type });

        try {
            await fetch(`${config.ApiPython}/getImage`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            this.msg = "Feito :)"
        } catch (error) {
            console.log(error);
            this.msg = "Ops Ocorreu um erro"
        }
        return this.msg
    }
}

export default sendImageAPI;