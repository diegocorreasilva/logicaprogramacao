let INICIO = "Sejam bem vindos!";
let datatual = "15/09/2021";
console.log(INICIO);
let dataevento = console.log ('digite a data do evento')
if (dataevento < datatual) {
    console.log("Data é invalida!");
    
}
else {
let participantes = ["carlos", "Lucas","Maria","Pedro" ,"Paulo"];
let nParticipantes = participantes.length;

if (nParticipantes <= 100) {
    console.log("Digite o nome de usuário");
    console.log("Digite sua idade");
    let idade = 18;
    if (idade >= 18) {
        console.log("Digite a senha");
        console.log("cadastro efetuado com sucesso!!")
    }
    else {
        console.log("Voce nao tem idade para participar!");
    }
}
else {
    console.log("limite de participantes atingido!")
} 
}