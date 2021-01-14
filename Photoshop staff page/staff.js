        // const body = document.getElementsByTagName('body');
        // body.addEventListener("click", e =>{
        //     console.log('aaaaa');
        // })

        var currentSelection = document.getElementById('henri-carousel');
        var url = "";
        var funVersion = '<img class="img-fluid " src="Henri-clown.png">';
        var boringVersion = '<img class="img-fluid " src="Henri.jpg">';
        var pictureToggled = false ;
        var buttonContent = '<button id="toggle-button" class="btn-primary btn-lg" onclick=funBoring()>Make Me Boring!</button>';
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
            pictureToggled= true;
            buttonContent = '<button id="toggle-button" class="btn-primary btn-lg" onclick=funBoring()>Make Me Boring!</button>';
            funVersion = '<img class="img-fluid " src="Henri-clown.png">';
            boringVersion = '<img class="img-fluid " src="Henri.jpg">';
            changePicture();
        });

        var julieCarousel = document.getElementById("julie-carousel").addEventListener('click', e => {
            currentSelection = e.target;
            url = '<img class="img-fluid " src="Julie-clown.jpg">';
            headingContent = "Julie";
            textContent = 'JULIE Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'+
            ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
            'aliquip ex ea commodo consequat consectetur tempor.'
            buttonContent = '<button id="toggle-button" class="btn-primary btn-lg" onclick=funBoring()>Make Me Boring!</button>';
            pictureToggled= true;
            funVersion = '<img class="img-fluid " src="Julie-clown.jpg">';
            boringVersion = '<img class="img-fluid " src="Julie.jpg">';
            changePicture();
        });

        // julieCarousel = document.getElementById("julie-carousel").addEventListener('mouseover', e => {
        //     currentSelection = e.target;
        //     url = '<img class="img-fluid " src="Julie-clown.jpg">';
        //     changePicture();
        // });

        function funBoring(){
            var picture = document.createElement("img");
            var button = document.getElementById('toggle-button')
            button.textContent= "Make Me Boring!"
            const pictureDisplay = document.getElementById("pictureDisplay");
            pictureDisplay.innerHTML="";
            pictureDisplay.appendChild(picture);
            if(pictureToggled === true){
                picture.outerHTML= boringVersion;
                pictureToggled = false;
                button.textContent= "Make Me Fun!"
            }else{
                picture.outerHTML= funVersion;
                pictureToggled = true;
                button.textContent= "Make Me Boring!"
            }
        }    

        function changePicture(){
            var picture = document.createElement("img");
            var heading = document.createElement("h3");
            var text = document.createElement("p");
            var button = document.createElement("button");
            const textDisplay = document.getElementById("textDisplay");
            const pictureDisplay = document.getElementById("pictureDisplay");
            pictureDisplay.innerHTML="";
            textDisplay.innerHTML="";
            pictureDisplay.appendChild(picture);
            textDisplay.appendChild(heading);
            textDisplay.appendChild(text);
            textDisplay.appendChild(button);
            heading.innerHTML = headingContent;
            text.innerHTML = textContent;
            picture.outerHTML= url;
            button.outerHTML = buttonContent;
        }