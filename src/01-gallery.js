const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const gallery = document.querySelector('.gallery');

images.forEach(image => {
  const imageLi = document.createElement('li');
  imageLi.classList.add('gallery-item');

  const imageLink = document.createElement('a');
  imageLink.classList.add('gallery-link');
  imageLink.href = image.original;

  const imageImg = document.createElement('img');
  imageImg.classList.add('gallery-image');
  imageImg.src = image.preview;
  imageImg.alt = image.description;
  imageImg.dataset.source = image.original;

  imageLink.appendChild(imageImg);
  imageLi.appendChild(imageLink);
  gallery.appendChild(imageLi);
});

gallery.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    console.log(`Image big: ${event.target.dataset.source}`);

    LightboxModule.openLightbox(event.target.dataset.source);
  }
});

//Moduł bo nie lubie publicznych zmiennych
const LightboxModule = (function () {
  let lightboxInstance = null;

  function openLightbox(source) {
    lightboxInstance = basicLightbox.create(`
            <img src="${source}" width="800" height="600">
        `);
    lightboxInstance.show();

    // Dodaj nasłuchiwanie na klawisz Escape tylko gdy lightbox jest otwarty
    document.addEventListener('keydown', escapeListener);
  }

  function closeLightbox() {
    if (lightboxInstance) {
      lightboxInstance.close();
      lightboxInstance = null;

      // Usuń nasłuchiwanie na klawisz Escape po zamknięciu lightboxa
      document.removeEventListener('keydown', escapeListener);
    }
  }

  function escapeListener(event) {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  }

  // Zwróć publiczne metody
  return {
    openLightbox,
    closeLightbox,
  };
})();
