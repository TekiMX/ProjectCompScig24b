//Variables y demas estof ai nid
const elementFormRadios = document.querySelector("#formBoxRadios");
const elementFormData = document.querySelector("#formBoxData");
const DivCentral = document.querySelector("#divCenter");
let techniques = []
let contactData = []
let objectsWithColor = []

//main , acceso al json y presentado de datos
const main = () => {
    fetch("./api/techniques.json")
    .then(response => response.json())
    .then(data => organizedData(data))
    .then(techniques => findObjectsByColor(techniques))
    .then(objectsWithColor => objectsWithColor.forEach(renderTechniques))
    .then(console.log("aqui esta el objectsWithColor", objectsWithColor))
};

const organizedData = (data) => {
    data.forEach(element => {
        const {belt, image} = element;
        const technique ={
            belt: belt,
            image: image
        };
        /* console.log("estos son los datos contenidos en technique", technique); */
        techniques.push(technique);
    });
return techniques;
console.log(`y aca estan esta el nuevo array con techniques ${techniques}`);
};

const findObjectsByColor = (color) => {
    const objectsWithColor = techniques.filter(obj => obj.belt === color);
    return objectsWithColor;
  };
  
const renderTechniques = (element) => {
    const divEl = document.createElement("div");
    const imgEl = document.createElement("img");
    img.classList.add("imageClass");

    imageURL = element.image
    img.setAttribute("src", imageURL);

    divEl.appendChild(DivCentral);
    imgEl.appendChild(divEl);

}

//lanza la aplicacion
main();