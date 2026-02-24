'use strict'
function adicionarProduto(){

    if(produto.value === '' || codigo.value === ''|| quantidade.value === ''){
        alert ('Elemento digitado é incorreto')
    }else if(isNaN(quantidade.value) ){
        alert ('Elemento digitado é incorreto')
    }
    else{
    const lista = document.getElementById('lista')
    const produto = document.getElementById('produto')
    const codigo = document.getElementById('codigo')
    const quantidade = document.getElementById('quantidade')
    
    const spanCodigo = document.createElement('span')
    const spanQtd = document.createElement('span')
    const spanProduto = document.createElement('span')

    const div = document.createElement('div')
    div.className = 'flex gap-2'
    spanProduto.textContent = produto.value 
    spanProduto.className = 'bg-yellow-200 px-8 py-2 rounded'
    produto.value = ''
    
    div.appendChild(spanProduto)
    
    

    spanCodigo.textContent = codigo.value
    spanCodigo.className = 'bg-blue-200 px-8 py-2 rounded'
    codigo.value = ''

    div.appendChild(spanCodigo)
    

    spanQtd.textContent = quantidade.value
    spanQtd.className = 'bg-red-200 px-8 py-2 rounded'
    quantidade.value = ''

    div.appendChild(spanQtd)



    lista.appendChild(div)
    

    }
    
}