import loadImage from 'async-image';

const get_image_dimensions = async (path) => {
    const img = await loadImage(path);
    return img;
};

get_image_dimensions('img/test.jpg')
    .then(img => {
        const{width, height} = img
        const filename = img.src.substring(img.src.lastIndexOf('/')+1);
        document.getElementById("card-text").innerHTML = `La taille de l'image <code>${filename}</code> est de <span class="px-1 text-white font-monospace bg-dark">${width}x${height}px</span>`;
        img.classList.add("card-img-top");
        document.getElementById("card-holder").insertBefore(img, document.getElementById("card-body"));
    })
    .catch(err => {
        // Deal with the fact the chain failed
        console.error("Erreur de chargement de l'image", err.message);
    });
