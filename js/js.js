   const galleryContainer = document.querySelector('.gallery');

   const createGalleryItem = ({ preview, original, description }) => {
     return 
       
   };

   const galleryMarkup = images.map(createGalleryItem).join('');
   galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);