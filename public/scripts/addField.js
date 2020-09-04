// Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // limpar os campos antes de duplicar
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        // pegar o fild do momento e limpa
        field.value = ""
    }
        
        )
    

    // Colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}

    