const elementForm = document.querySelector("#formBoxData");

elementForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const hiTextInput = event.target.hiText.value
    console.log(hiTextInput);
    console.log(event)
    const niuShit = document.querySelector("input[type='radio'][name=beltRadio]:checked").value;
    console.log(niuShit);
})

