'use strict'

const criarListaNumeros = function () {
    let lista = []

    for (let i = 1; i <= 10; i++)
        lista.push(i)

    return lista
}

const criarListaAdicao = function (quantidade) {
    let adicao = []

    for (let i = 1; i <= 10; i++)
        adicao.push(quantidade + i)

    return adicao
}

const criarListaMenos = function (quantidade) {
    let menos = []

    for (let i = 1; i <= 10; i++)
        menos.push(quantidade - i)

    return menos
}

const criarListaVezes = function (quantidade) {
    let vezes = []

    for (let i = 1; i <= 10; i++)
        vezes.push(quantidade * i)

    return vezes
}

const criarListaDivisao = function (quantidade) {
    let dividir = []

    for (let i = 1; i <= 10; i++)
        dividir.push(Number((quantidade / i).toFixed(2)))

    return dividir
}

const criarLinha = function (num, adicao, menos, vezes, dividir) {
    const tbody = document.getElementById('tbody')
    const tr = document.createElement('tr')

    const tdNum = document.createElement('td')
    tdNum.textContent = num

    const tdMais = document.createElement('td')
    tdMais.textContent = adicao

    const tdMenos = document.createElement('td')
    tdMenos.textContent = menos

    const tdVezes = document.createElement('td')
    tdVezes.textContent = vezes

    const tdDividir = document.createElement('td')
    tdDividir.textContent = dividir

    tr.replaceChildren(tdNum, tdMais, tdMenos, tdVezes, tdDividir)

    tbody.appendChild(tr)
}

const handleClick = function () {
    const quantidade = Number(document.getElementById('quantidade').value)

    const listaNum = criarListaNumeros(quantidade)
    const listaAdicao = criarListaAdicao(quantidade)
    const listaMenos = criarListaMenos(quantidade)
    const listaVezes = criarListaVezes(quantidade)
    const listaDividir = criarListaDivisao(quantidade)

    document.getElementById('tbody').replaceChildren()

    for (let i = 0; i < 10; i++)
        criarLinha(listaNum[i], listaAdicao[i], listaMenos[i], listaVezes[i], listaDividir[i])
}