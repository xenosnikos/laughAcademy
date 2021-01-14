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

        // var henriCarousel = document.getElementById("henri-carousel").addEventListener("mouseover", e => {
        //     currentSelection = e.target;
        //     url = '<img class="img-fluid clownify-henri" src="Henri-clown.png">';
        //     changePicture();
        // });

        var henriCarousel = document.getElementById("henri-carousel").addEventListener("click", e => {
            currentSelection = e.target;
            url = '<img class="img-fluid clownify-henri" src="Henri-clown.png">';
            headingContent = "Fun Henry";
            textContent = 'HENRY Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'+
            ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
            'aliquip ex ea commodo consequat consectetur tempor.'
            changePicture();
        });

        var julieCarousel = document.getElementById("julie-carousel").addEventListener('click', e => {
            currentSelection = e.target;
            url = '<img class="img-fluid " src="Julie-clown.jpg">';
            headingContent = "Julie";
            textContent = 'JULIE Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'+
            ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
            'aliquip ex ea commodo consequat consectetur tempor.'
            changePicture();
        });

        // julieCarousel = document.getElementById("julie-carousel").addEventListener('mouseover', e => {
        //     currentSelection = e.target;
        //     url = '<img class="img-fluid " src="Julie-clown.jpg">';
        //     changePicture();
        // });


        function changePicture(){
            var picture = document.createElement("img");
            var heading = document.createElement("h3")
            var text = document.createElement("p")
            const textDisplay = document.getElementById("textDisplay");
            const pictureDisplay = document.getElementById("pictureDisplay");
            pictureDisplay.innerHTML="";
            textDisplay.innerHTML="";
            pictureDisplay.appendChild(picture);
            textDisplay.appendChild(heading);
            textDisplay.appendChild(text);
            heading.innerHTML = headingContent;
            text.innerHTML = textContent;
            picture.outerHTML= url;
        }