document.addEventListener('DOMContentLoaded', () => {

    // Identifica o campo HTML de lista (<ul>).
    const listaClientes = document.getElementById('lista-clientes')

    if (!listaClientes) {
        return
    }

    // Recupera os clientes salvos.
    const clientes = JSON.parse(localStorage.getItem('clientes') || '[]')

    // Se não existir clientes, mostra a mensagem abaixo.
    if (!Array.isArray(clientes) || clientes.length === 0) {
        listaClientes.innerHTML = `<li>Nenhum cliente cadastrado.</li>`
        return
    }

    // Percorre a lista de clientes já cadastrados.
    clientes.forEach(cliente => {
        const li = document.createElement('li')
        li.innerHTML = `
        <strong>Nome:</strong> ${cliente.nome} <br>
        <strong>E-mail:</strong> ${cliente.email} <br>
        <strong>Telefone:</strong> ${cliente.telefone}
        `
        // Cria na página de clientes.html os espaços necessários para exibir os
        // dados de cada cliente.
        listaClientes.appendChild(li)
    })
})
