const elementForm = document.querySelector("#formBox");

elementForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const hiTextInput = event.target.hiText.value
    console.log(hiTextInput);
    console.log(event)
    const niuShit = document.querySelector("input[type='radio'][name=beltRadio]:checked").value;
    console.log(niuShit);
})

const loginForm = document.forms.login; // Or document.forms['login']
    loginForm.elements.  
    loginForm.elements.email.placeholder = "teasasst@example.com";
    loginForm.elements.password.placeholder = "password";