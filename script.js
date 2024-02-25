
let cep = document.querySelector('#cep')
let endereco = document.querySelector('#endereco')
let botao = document.querySelector('#botao')
let p = document.createElement('p')
let container = document.getElementById('container')

botao.addEventListener('click', procurar)

function procurar() {
    let url = 'https://cep.awesomeapi.com.br/json/' + cep.value
    fetch(url)
        .then(response => response.json())
        .then(data => {

            function removerAspasDuplas(string) {
                return string.replace(/"/g, '')
            }

            let codigoPostal = removerAspasDuplas(JSON.stringify(data.cep))
            let rua = removerAspasDuplas(JSON.stringify(data.address_name))
            let cidade = removerAspasDuplas(JSON.stringify(data.city))
            let estado = removerAspasDuplas(JSON.stringify(data.state))
            let bairro = removerAspasDuplas(JSON.stringify(data.district))

            p.innerHTML = `Cep: ${codigoPostal}<br>
            Rua: ${rua}<br>
            Cidade: ${cidade}<br>
            Estado: ${estado}<br>
            Bairro: ${bairro}`

            container.appendChild(p)

            console.log(JSON.stringify(data))
        })
}