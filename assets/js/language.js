


var locale = 'vi';
fetch('assets/i18n/' + locale + '.json')
   .then(response => response.json())
   .then(translation => {
      var elementsToTranslate = document.querySelectorAll('[data-translate]');
      elementsToTranslate.forEach(function (element) {
         var translationKey = element.getAttribute('data-translate');
         if (translation.hasOwnProperty(translationKey)) {
            element.innerHTML = translation[translationKey];
         }
      });
   })
   .catch(error => {
      console.log('Lỗi khi tải file JSON:', error);
   });
