//main , acceso al json y presentado de datos
const main = () => {
    //Variables y demas estof ai nid
    const elementFormRadios = document.querySelector("#formBoxRadios");
    const elementFormData = document.querySelector("#formBoxData");
    const DivCentral = document.querySelector("#divCenter");
    
    // functions
    const selectTechniques = async event => {
        event.preventDefault();
        const selectedColor = document.querySelector("input[type='radio'][name=beltRadio]:checked").value;
        try {
            // consulta api - json
            const techniques = await getDataFromApiByColor(selectedColor);
            console.log('elementos de color tal', techniques);
            // render
            clearView();
            techniques.forEach(renderTechniques);
            // comentar
            // getDataFromApiByColor(selectedColor)
            //     .then(techniques => {
            //         clearView();
            //         techniques.forEach(renderTechniques);
            //         console.log(techniques)
            //     })
            console.log('hola estoy despues de todo')
        } catch (error) {
            throw new Error(error.stack)
        }
    };

    const getDataFromApiByColor = async (color) => {

        return new Promise((resolve, reject) => {
            // piensao en utilidad y no en concepto
            // que tengo que haces para hacer una consulta a una api?
            fetch("./api/techniques.json")
                .then(response => response.json())
                .then(techniques => {
                    const arr = findObjectsByColor(color, techniques)
                    resolve(arr);
                })
                .catch(err => {
                    reject(err);
                });
        })
        /* async await */
        const response = await fetch("./api/techniques.json");
        const techniques = await response.json();
        return findObjectsByColor(color, techniques);
    };

    const findObjectsByColor = (color, techniquesArr) => {
        const objectsWithColor = techniquesArr.filter(obj => obj.belt === color);
        return objectsWithColor;
    };

    const clearView = () => {
        DivCentral.innerHTML = '';
    };

    const renderTechniques = (element) => {
        // add elements
        const divEl = document.createElement("div");
        const imgEl = document.createElement("img");
        imgEl.classList.add("imageClass");

        imageURL = element.image
        imgEl.setAttribute("src", imageURL);

        DivCentral.appendChild(divEl);
        DivCentral.appendChild(imgEl);
        /* divEl.innerHTML += "div text"; */
    }
    
    
    // listeners
    elementFormRadios.addEventListener("submit", selectTechniques);
    // aqui van todos los listeners
    // aca no pongas mas funciones
};

//lanza la aplicacion
main();