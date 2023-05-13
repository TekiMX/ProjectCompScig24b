const elementForm = document.querySelector("#formBox");

elementForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const hiTextInput = event.target.hiText
    console.log(hiTextInput);
    console.log(event)
})
