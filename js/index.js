/**************************** Variables y demas estof ai nid ********************************/
const elementFormRadios = document.querySelector("#formBoxRadios");
const elementFormData = document.querySelector("#formBoxData");
const DivCentral = document.querySelector("#divCenter")
let techniques = [];
let contactData =[];

/************************** acceso a JSON ********************************/
const main = () => {    
        fetch('/api/techniques.json')
        .then(response => response.json())
        .then(data => organizedData (data))
        .then(techniques => techniques.forEach(renderDivCentral))
};

/******************************** forms ***************************************/
/* Acceso a los datos del form de radios*/
elementFormRadios.addEventListener("submit",(event)=>{
    event.preventDefault();
    /* const hiTextInput = event.target.hiText.value
    console.log(hiTextInput);*/
    console.log(event) 
    const niuShit = document.querySelector("input[type='radio'][name=beltRadio]:checked").value;
    console.log("este es el querySelector del radio",niuShit);
    console.log("este es mi techniques", techniques)
    renderDivCentral(techniques);

})
//acceso a los datos del form de contacto
elementFormData.addEventListener("submit",(event)=>{
    event.preventDefault();
    const yourNameInput = event.target.yourName.value
    const yourEmailInput = event.target.yourEmail.value
    const yourInterest = event.target.interest.value
    console.log(yourNameInput);
    console.log(yourEmailInput);
    console.log(yourInterest);
})

/*********************** functions ***********************/
//function renderDivCentral para insertar en el HMTL los divs con las propiedades del array
const renderDivCentral = (element) => {
    /* const {belt} = techniques;
    belt.forEach(belt, index) => { */
    const techDiv = document.createElement('div');
    const imgkDiv= document.createElement('img');
    console.log("este es mi element",element);
    /* img.setAttribute("src", image); */                        //DESCOMENTAR

    DivCentral.appendChild(techDiv);
    techDiv.appendChild(imgkDiv);
};
//function organizedData para seleccionar los datos del json
const organizedData = (data) => {
    data.forEach(element => {
        const {belt, image} = element;
        console.log(belt);
        const techniquesSelected ={
            belt: belt,
            image: image
        };
        console.log("este es mi techniquesSelected", techniquesSelected);
        techniques.push(techniquesSelected);
    });
return techniques;
};