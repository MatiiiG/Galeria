document.addEventListener('DOMContentLoaded', async function(){

    // Pobiera diva galerii z HTML oraz definiuje URL do API Unsplash
    const Galeria = document.querySelector('.image-container')
    const UNSPLASH_URL = `https://api.unsplash.com/photos/random?count=9&client_id=${UNSPLASH_API_KEY}`;

    try{
        const response = await fetch(UNSPLASH_URL); // Wysyła zapytanie do API Unsplash
        const data = await response.json(); //Zamiana zdjęcia na JSON

        Galeria.innerHTML = ""; //Usuwa wszystkie istniejące zdjęcia z galerii

        let MainImage = document.createElement('img');  //Tworzy główny obraz i dodaje go do galerii
        MainImage.src = data[0].urls.regular;
        MainImage.classList.add('MainImage')
        Galeria.appendChild(MainImage);

        data.slice(1).forEach(photo => {    //Tworzy 8 obrazków, prypisuje im linki z unsplash a następnie dodaje klasę hover-shadow 
            const img = document.createElement('img');
            img.src = photo.urls.regular;
            img.classList.add('hover-shadow')

            img.addEventListener('click', function(){
                let temp = MainImage.src;   //przetrzymuje główny obrazek
                MainImage.src = img.src;    //Zamienia src Obrazka na Obrazek główny 
                img.src = temp;     //kliknięty obrazek przejmuje src głównego obrazka
            })

            Galeria.appendChild(img);   //dodaje obrazki do galerii
        });


    }catch(error){
        console.error("Błąd podczas pobierania zdjęć:", error)
    }
});