const produtos = [
    {
        nome: "Arroz",
        valor: "R$ 28,00",
        quantidade: 100,
        peso: 10,
        marca: "Parati",
        codigo: 1876
    },
    
    {
        nome: "Feijão",
        valor: "R$ 20,00",
        quantidade: 100,
        peso: 10,
        marca: "Pantarolo",
        codigo: 1976
    },

    {
        nome: "Macarrão",
        valor: "R$ 15,00",
        quantidade: 65,
        peso: 5,
        marca: "mariana",
        codigo:3874,
    },

    {
        nome: "Nescau",
        valor: "R$ 10,00",
        quantidade: 87,
        peso: 5,
        marca: "Nescau",
        codigo: 5346,
    },

    {
        nome: "Massa de bolo",
        valor: "R$ 8,00",
        quantidade: 130,
        peso: 1,
        marca: "Apti",
        codigo: 8097
    },

    {
        nome: "Leite",
        valor: "R$ 10,00",
        quantidade: 70,
        peso: 1,
        marca: "lider",
        codigo: 7685,
    },

    {
        nome: "Bala Fini",
        valor: "R$ 11,00",
        quantidade: 73,
        peso: 10,
        marca: "Fini",
        codigo: 4657
    },

    {
        nome: "Açaí",
        valor: "R$ 30,00",
        quantidade: 555,
        peso: 10,
        marca: "Açaí da barra",
        codigo: 2785
    },

    {
        nome: "Coca cola",
        valor: "R$ 10,00",
        quantidade: 209,
        peso: 2,
        marca: "Coca cola",
        codigo:7583,
    },        

    {
        nome: "açucar",
        valor: "R$ 15,00",
        quantidade: 94,
        peso: 5,
        marca: "Holandês",
        codigo: 6473,
    },
    
///sistemas

    // 1. mostrar tudo
function mostrarTudo() {
    console.log("\n--- MEUS PRODUTOS ---");
    let dados = JSON.parse(fs.readFileSync("produtos.json"));
    for(let i = 0; i < dados.length; i++) {
        console.log(dados[i].nome + " - " + dados[i].valor + " - tem " + dados[i].quantidade);
    }
    console.log("----------------------\n");
}

// 2. adicionar produto
function adicionar(nome, valor, qtd, peso, marca, codigo) {
    let dados = JSON.parse(fs.readFileSync("produtos.json"));
    let novo = {
        nome: nome,
        valor: valor,
        quantidade: qtd,
        peso: peso,
        marca: marca,
        codigo: codigo
    };
    dados.push(novo);
    fs.writeFileSync("produtos.json", JSON.stringify(dados, null, 2));
    console.log("produto " + nome + " adicionado!");
}
