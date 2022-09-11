import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener('click', onGalleryItemClick)

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ description, original, preview }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
    </div>`;
        
    }).join("");
}

let instance = basicLightbox.create(`<img width="1400" height="900" src=src="https://placehold.it/1400x900">`);

function onGalleryItemClick(event) {
    event.preventDefault();
    console.log(instance);
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
    instance = basicLightbox.create(`<img width="1400" height="900" src=${event.target.dataset.source}>`)
    instance.show()

    window.addEventListener('keydown', onEscapeKeyPress)
}

function onEscapeKeyPress() {
    console.log(event);
    if (event.key === 'Escape') {
        instance.close();
        window.removeEventListener('keydown', onEscapeKeyPress)
    }
    
}
