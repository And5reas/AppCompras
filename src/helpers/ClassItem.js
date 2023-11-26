export default class ClassItem{

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
        