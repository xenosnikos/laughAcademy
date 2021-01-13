        // const body = document.getElementsByTagName('body');
        // body.addEventListener("click", e =>{
        //     console.log('aaaaa');
        // })

        var currentSelection = document.getElementById('henri-carousel');
        var url = "";

        // var henriParent = document.getElementById("henri-carousel").addEventListener("mouseover", e => {
        //     currentSelection = e.target;
        //     url = '<img class="img-fluid clownify-henri" src="Henri-clown.png">';
        //     swapCarousel();
        // });

        henriCarousel = document.getElementById("henri-carousel").addEventListener("mouseover", e => {
            currentSelection = e.target;
            url = '<img class="img-fluid clownify-henri" src="Henri-clown.png">';
            changePicture();
        });

        henriCarousel = document.getElementById("henri-carousel").addEventListener("click", e => {
            currentSelection = e.target;
            url = '<img class="img-fluid clownify-henri" src="Henri-clown.png">';
            changePicture();
        });

        var julieCarousel = document.getElementById("julie-carousel").addEventListener('click', e => {
            currentSelection = e.target;
            url = '<img class="img-fluid " src="Julie-clown.jpg">';
            changePicture();
        });

        julieCarousel = document.getElementById("julie-carousel").addEventListener('mouseover', e => {
            currentSelection = e.target;
            url = '<img class="img-fluid " src="Julie-clown.jpg">';
            changePicture();
        });


        function changePicture(){
            var picture = document.createElement("img");
            const pictureDisplay = document.getElementById("pictureDisplay");
            pictureDisplay.innerHTML="";
            pictureDisplay.appendChild(picture);
            picture.outerHTML= url;
        }