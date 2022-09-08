import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
console.log(createGalleryMarkup(galleryItems));

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ description, original, preview }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
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

