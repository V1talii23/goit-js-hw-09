import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { images } from './images';

const ul = document.querySelector('.gallery');

const markup = images
  .map(
    ({ preview, original, description }) =>
      `
  <li class="gallery-item">
 <a class="gallery-link" href="${original}" >
 <img
  class="gallery-image" 
  src="${preview}" 
  alt="${description}"
  />
 </a>
</li>
  `
  )
  .join('');

ul.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
