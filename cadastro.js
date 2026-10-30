function funcaoCadastrarCliente() {
    // identifica os campos do no HTML e pega os valores.
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    // verifica se os campos estão vazios.
    //mostra mensagem de alerta no navegador.
    if (!nome || !email || !telefone) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // cria uma variável coms dados do novo cliente.
    const novoCliente = {nome, email, telefone}

    // pega a lista de clientes já existente ou cria uma nova lista vazia.
    let clientes = JSON.parse(localStorage.getItem("clientes")) || []
    
    // adiciona o novo cliente à lista de clientes.
    listaClientes.push(novoCliente);

    //salva no localStorage (aramazenamento local do navegador) a lista de clientes atualizada.
    localStorage.setItem("clientes", JSON.stringify(listaClientes));

    //mensagem do navegador informando que o cliente foi cadastrado com sucesso.
    alert("Cliente cadastrado com sucesso!");

    //limpa o formulário de cadastro.
    document.getElementById("formulario-cadastro").reset();
}