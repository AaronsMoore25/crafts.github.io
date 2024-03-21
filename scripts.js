const getCrafts = async() => {
    const url = "https://portiaportia.github.io/json/crafts.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showCrafts = async() => {
    const crafts = await getCrafts();
    crafts.forEach((craft) => {
        document.getElementById("json-info").append(getCraftSection(craft));
    });
};

const getCraftSection = (craft) => {
    const mainSection = document.createElement("section");
    mainSection.id = "mainSection";
    const interiorSection = document.createElement("section");
    interiorSection.id = "interiorSection";

    /*
    const images = document.createElement("img");
    images.src = carft.image;
    interiorSection.append(images);
    image.id = "jsonImage";
    */

    const names = document.createElement("h2");
    names.innerHTML = craft.name;
    interiorSection.append(names);

    const descriptions = document.createElement("p");
    descriptions.innerHTML = craft.description;
    interiorSection.append(descriptions);

    const craftSupplies = document.createElement("p");
    craftSupplies.innerHTML = craft.supplies;
    interiorSection.append(craftSupplies);

    mainSection.append(interiorSection);

    return mainSection;
}

showCrafts();