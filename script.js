document.addEventListener('DOMContentLoaded', function(){
    const Galeria = document.querySelector('.image-container')//Pobiera całego diva
    const Obrazki = document.querySelectorAll('.image-container img') //Pobiera obrazki które znajdują się w divie

    //Dla każdego obrazka, dodaje zmienną image, która przechowuję funkcję umożliwiającą zmianę obrazka
    Obrazki.forEach(image =>{
        image.addEventListener('click', function(){
            const MainImage = document.querySelector('.MainImage')

            if(MainImage.src === image){
                return;
            };

            let tempimage = MainImage.src; //Przypisuje dany obrazek do zmiennej tymczasowej
            MainImage.src = image.src; //Zamienia źródła obrazków
            image.src = tempimage //przypisuje poprzedni główny obrazek do tymczasowej zmiennej
        });
    });
});