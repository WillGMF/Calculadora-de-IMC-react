import { useState } from "react"


const Formulario = () => {
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    
    
    const renderizaResultado = () => {
        const alturaCalculo = altura * altura;
        const imc = (peso / alturaCalculo).toFixed(2);
        

        if (imc <= 18.5) {
            return (
                <h4>Seu IMC é de: {imc} <br /> 
                E sua classificação na tabela é de: Baixo peso</h4>
            )
        } else if (imc >= 18.5 && imc <= 24.99) {
            return (
                <h4>Seu IMC é de: {imc} <br /> 
                E sua classificação na tabela é de: Médio peso</h4>
            )
        } else if (imc >= 25 && imc <= 29.99) {
            return (
                <h4>Seu IMC é de: {imc} <br /> 
                E sua classificação na tabela é de: Sobrepeso</h4>
            )
        } else if (imc >= 30 && imc <= 34.99) {
            return (
                <h4>Seu IMC é de: {imc} <br /> 
                E sua classificação na tabela é de: Obesidade grau I</h4>
            )
        } else if (imc >= 35 && imc <= 39.99) {
            return (
                <h4>Seu IMC é de: {imc} <br /> 
                E sua classificação na tabela é de: Obesidade grau II</h4>
            )
        } else if (imc >= 40) {
            return (
                <h4>Seu IMC é de: {imc} <br /> 
                E sua classificação na tabela é de: Obesidade grau II</h4>
            )
        }
        
        }
    

    return (
        <div className="container">
            <form>
            <div className="divAltura">
            Sua altura: <input type="number" placeholder="Exemplo : 1.80" onChange={({target}) => setAltura(parseFloat(target.value))}/> Metros
            </div>
            <div>
            Seu peso: <input type="number" placeholder="Exemplo 55" onChange={({target}) => setPeso(parseFloat(target.value))}/> KG
            </div>
            <h3>{renderizaResultado()} </h3>
        </form>
        </div>
    )
}

export default Formulario