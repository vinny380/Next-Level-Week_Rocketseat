//Look for the button
document.querySelector("#add-time").addEventListener('click', cloneField)

//when u click the button

//calls an action
function cloneField() {
    //duplicate the fields. 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //get the fields
    const fields = newFieldContainer.querySelectorAll('input')

    //clean the fields value when adding a new one
    fields.forEach(function(field){
        //get the actual field e set is value to none
        field.value = ""
    })

    //put the new one on the screen
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}