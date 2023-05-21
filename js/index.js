//Variables y demas estof ai nid
const elementFormRadios = document.querySelector("#formBoxRadios");
const elementFormData = document.querySelector("#formBoxData");
const DivCentral = document.querySelector("#divCenter")
let techniques = [];
let contactData =[];

//main , acceso al json y presentado de datos
const main = () => {
    fetch("./api/techniques.json")
    .then(response => response.json())
    .then(data => organizedData(response))
    .then(beltTechs => findObjectsByColor(data))
};

const organizedData = (data) => {
    data.forEach(element => {
        const {belt, image} = element;
        const technique ={
            belt: belt,
            image: image
        };
        console.log("estos son los datos contenidos en technique", technique);
        /* techniques.push(technique); */
    });
/* return techniques; */
};

const findObjectsByColor = (color) => {
    const objectsWithColor = techniques.filter(obj => obj.belt === color);
    return objectsWithColor;
  };
  

//lanza la aplicacion
main();