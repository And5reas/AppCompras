class ClassItem{

    static valorTotal = 0;

    constructor( id, nome, img, valorVarejo, valorAtacado, qtd ){
        ClassItem.valorTotal += valorVarejo
        this.id = id;
        this.nome = nome;
        this.img = img;
        this.valorVarejo = valorVarejo;
        this.valorAtacado = valorAtacado;
        this.qtd = qtd;
        //this.qtdToAtacado = 3;
    }

    uptadeValorTotal(state){
        // console.log(`uptadeValorTotal antes ${ClassItem.valorTotal}`)
        if (state == 'increment')
            ClassItem.valorTotal += this.valorVarejo;
        if (state == 'decrement')
            ClassItem.valorTotal -= this.valorVarejo;
            // console.log(`uptadeValorTotal depois ${ClassItem.valorTotal}`)
    }

    getValorTotal(state){
        // console.log(`getValorTotal antes ${ClassItem.valorTotal}`)
        this.uptadeValorTotal(state);
        // console.log(`getValorTotal depois ${ClassItem.valorTotal}`)
        return ClassItem.valorTotal
    }

    delete(setValorTotal){
        // console.log(`delete antes ${ClassItem.valorTotal}`)
        ClassItem.valorTotal -= this.valorVarejo*this.qtd
        // console.log(`delete depois ${ClassItem.valorTotal}`)
        setValorTotal(ClassItem.valorTotal)
    }

    static getValorTotalStatic(){
        // console.log(`getValorTotalStatic ${ClassItem.valorTotal}`)
        return ClassItem.valorTotal
    }

    

}

listTest = [{id: 1, nome: 'leite', img: 'https://i.imgur.com/oU77k16.jpg', valorVarejo: 4.35, valorAtacado: 4.10, qtd: 1},
{id: 2, nome: 'leite', img: 'https://i.imgur.com/oU77k16.jpg', valorVarejo: 4.35, valorAtacado: 4.10, qtd: 1},
{id: 3, nome: 'leite', img: 'https://i.imgur.com/oU77k16.jpg', valorVarejo: 4.35, valorAtacado: 4.10, qtd: 1},
{id: 4, nome: 'leite', img: 'https://i.imgur.com/oU77k16.jpg', valorVarejo: 4.35, valorAtacado: 4.10, qtd: 1},
{id: 5, nome: 'Refri taubacana 2L Guarana', img: 'https://i.imgur.com/tp0X2NO.jpg', valorVarejo: 3.39, valorAtacado: 3.29, qtd: 1},
{id: 6, nome: 'Refri taubacana 2L Guarana', img: 'https://i.imgur.com/tp0X2NO.jpg', valorVarejo: 3.39, valorAtacado: 3.29, qtd: 1},
]

let newList = []

listTest.forEach(item => {
    try{
        instance = new ClassItem(item['id'], item['nome'], item['img'], item['valorVarejo'], item['valorAtacado'], item['qtd'])
        newList.push(instance)
    } catch (error) {
        console.log(`src/screens/HomeScreen: ${error}`);
    }
});

const test = JSON.stringify(newList);
sla = require('fs');
sla.writeFile('compra.json', test, (err) => err && console.error(err));

class User {
    static currentNUM = 0;
    constructor(sla) {
        this.num = sla
        this.increment()
    }
    increment(){
        User.currentNUM += this.num
    }

    static getCurrentUser() {
        return User.currentNUM;   
    }
}

// const oi = new User(10)
// const rt = new User(10)
const we = new User(10)
// const qw = new User(10)
// const oii = new User(10)

// console.log(oi.num)

// console.log(User.getCurrentUser());

// creating a json file

// console.log(we)
// const test = JSON.stringify(we);
// console.log(test)
// sla = require('fs');
// sla.writeFile('myFileJson.json', test, (err) => err && console.error(err));