'use strict'

const criarListaNumeros = function (quantidade) {
    let listaNumeros = []

    for (let i = 1; i <= quantidade; i++)
        listaNumeros.push(i)

    return listaNumeros
}

const criarListaPares = function (quantidade) {
    let listaPares = []

    for (let par = 2; par <= quantidade * 2; par += 2)
        listaPares.push(par)

    return listaPares
}

const criarListaImpar = function (quantidade) {
    let listaImpar = []

    for (let impar = 1; impar <= quantidade * 2; impar += 2)
        listaImpar.push(impar)

    return listaImpar
}

const criarListaMulti5 = function (quantidade) {
    let listaMultis5 = []

    for (let multi5 = 5; multi5 <= quantidade * 5; multi5 += 5)
        listaMultis5.push(multi5)

    return listaMultis5
}

const criarListaPotencia2 = function (quantidade) {
    let listaPotencia2 = []

    for (let pot2 = 0; pot2 < quantidade; pot2++)
        listaPotencia2.push(2 ** pot2)

    return listaPotencia2
}

const criarLinha = function (num, par, impar, multi5, pot2) {
    const tbody = document.getElementById('tbody')
    const tr = document.createElement('tr')
    
    const tdNum = document.createElement('td')
    tdNum.textContent = num

    const tdPar = document.createElement('td')
    tdPar.textContent = par

    const tdImpar = document.createElement('td')
    tdImpar.textContent = impar

    const tdMulti5 = document.createElement('td')
    tdMulti5.textContent = multi5

    const tdPot2 = document.createElement('td')
    tdPot2.textContent = pot2

    tr.replaceChildren(tdNum, tdPar, tdImpar, tdMulti5, tdPot2)

    tbody.appendChild(tr)
}

const handleClick = function () {
    const quantidade = Number(document.getElementById('quantidade').value)

    const listaNum = criarListaNumeros(quantidade)
    const listaPares = criarListaPares(quantidade)
    const listaImpar = criarListaImpar(quantidade)
    const listaMulti5 = criarListaMulti5(quantidade)
    const listaPot2 = criarListaPotencia2(quantidade)

    document.getElementById('tbody').replaceChildren()

    for (let i = 0; i < quantidade; i++)
        criarLinha(listaNum[i], listaPares[i], listaImpar[i], listaMulti5[i], listaPot2[i])
}