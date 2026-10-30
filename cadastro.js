function funcaoCadastrarCliente() {
    // Identifica os campos no HTML e pega os valores.
    const nome = document.getElementById('nome').value.trim()
    const email = document.getElementById('email').value.trim()
    const telefone = document.getElementById('telefone').value.trim()

    // Verifica se os campos estão vazios.
    // Mostra mensagem de alerta no navegador.
    if (!nome || !email || !telefone) {
        alert('Por favor, preencha todos os campos.')
        return
    }

    // Cria uma variável com os dados do cliente.
    const novoCliente = { nome, email, telefone }

    // Pega a lista de clientes já existente ou cria uma vazia.
    let listaClientes = []

    try {
        listaClientes = JSON.parse(localStorage.getItem('clientes') || '[]')
    } catch (error) {
        console.error('Erro ao ler clientes salvos:', error)
    }

    if (!Array.isArray(listaClientes)) {
        listaClientes = []
    }

    // Adiciona um novo cliente na lista.
    listaClientes.push(novoCliente)

    // Salva no localStorage (Armazenamento local no navegador)
    localStorage.setItem('clientes', JSON.stringify(listaClientes))

    // Mensagem do navegador confirmando salvamento.
    alert('Cliente cadastrado com sucesso!')

    const formularioCadastro = document.getElementById('formulario-cadastro')
    if (formularioCadastro) {
        formularioCadastro.classList.remove('sucesso')
        void formularioCadastro.offsetWidth
        formularioCadastro.classList.add('sucesso')
        formularioCadastro.reset()
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const formularioCadastro = document.getElementById('formulario-cadastro')

    if (!formularioCadastro) {
        return
    }

    formularioCadastro.addEventListener('submit', (event) => {
        event.preventDefault()
        funcaoCadastrarCliente()
    })
})