/* VARIAVEIS */
var tarefas_campo = document.querySelector('.tarefas')

/* ARRAY */
const tarefas = []

/* FUNCTIONS */

function atualizarTarefa(){

    tarefas_campo.innerHTML = ''
    tarefas.forEach((value, index)=>{
        tarefas_campo.innerHTML += `<li>${value} <span><i class="fas fa-check-circle"></i></span>`
             
    })

    concluirTarefa()

}

function pegarTarefa(){
    
    var tarefa = document.querySelector('input').value
    
    if(tarefa !== null && tarefa !== ""){
        tarefas_campo.innerHTML = ""
        tarefas.push(tarefa)
        
    }
    
    atualizarTarefa()
    

}



function concluirTarefa(){
    
    var btn_concluir = document.querySelectorAll('span i')
    
    btn_concluir.forEach((value,index)=>{
        
        btn_concluir[index].addEventListener('click',()=>{
            tarefas.splice(index, 1)
            atualizarTarefa()
        })
    })

}

function limpar(){
    document.querySelector('input').value = ""
}



    









    









