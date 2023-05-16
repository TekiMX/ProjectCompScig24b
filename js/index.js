//Variables y demas estof ai nid
const elementFormRadios = document.querySelector("#formBoxRadios");
const elementFormData = document.querySelector("#formBoxData");
let techniques = [];
let contactData =[];

/************************** acceso a viernes13 ********************************/
const main = () => {
    fetch("./api/techniques.json")
        .then(response => response.json())
        .then(data => normalizeData(data))
        .then(techniques => techniques.forEach(renderDivCentral))
    };
    
    const organizedData = (data) => {
        data.forEach(element => {
            const {belt, type, nameK, nameMX} = element;
            const techniquesSelected ={
                belt: belt,
                type: type, 
                nameK: nameK,
                nameMX: nameMX
            };
            tecniques.push(techniquesSelected);
        });
    return techniques;
    };

/******************************** forms ***************************************/
/* Acceso a los datos del form de radios*/
elementFormRadios.addEventListener("submit",(event)=>{
    event.preventDefault();
    /* const hiTextInput = event.target.hiText.value
    console.log(hiTextInput);*/
    console.log(event) 
    const niuShit = document.querySelector("input[type='radio'][name=beltRadio]:checked").value;
    console.log(niuShit);
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

