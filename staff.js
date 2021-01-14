

        var currentSelection = document.getElementById('henri-carousel');
        var url = "";
        var funVersion = '<img class="img-fluid " src="assets/staff/Peter-clown.jpg">';
        var boringVersion = '<img class="img-fluid " src="assets/staff/Peter.jpg">';
        var pictureToggled = false ;
        var buttonContent = '<button id="toggle-button" class="btn-primary btn-lg" onclick=funBoring()>Make Me Boring!</button>';
        var headingContent = "";
        var textContent = "";
        var jobDescription = "";

        var peterCarousel = document.getElementById("peter-carousel").addEventListener("click", e => {
            url = '<img class="img-fluid clownify-henri" src="assets/staff/Peter-clown.jpg">';
            headingContent = "Peter VanHaussen";
            jobDescription = "Artistic-Director and Founder";
            textContent = 'PETER Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'+
            ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
            'aliquip ex ea commodo consequat consectetur tempor.'
            pictureToggled= true;
            buttonContent = '<button id="toggle-button" class="btn-primary btn-lg" onclick=funBoring()>Make Me Boring!</button>';
            funVersion = '<img class="img-fluid " src="assets/staff/Peter-clown.jpg">';
            boringVersion = '<img class="img-fluid " src="assets/staff/peter.jpg">';
            changePicture();
        });

        var henriCarousel = document.getElementById("henri-carousel").addEventListener("click", e => {
            url = '<img class="img-fluid clownify-henri" src="assets/staff/Henri-clown.png">';
            headingContent = "Henry Cocolata";
            jobDescription = "Co-Artistic-Director";
            textContent = 'HENRY Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'+
            ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
            'aliquip ex ea commodo consequat consectetur tempor.'
            pictureToggled= true;
            buttonContent = '<button id="toggle-button" class="btn-primary btn-lg" onclick=funBoring()>Make Me Boring!</button>';
            funVersion = '<img class="img-fluid " src="assets/staff/Henri-clown.png">';
            boringVersion = '<img class="img-fluid " src="assets/staff/Henri.jpg">';
            changePicture();
        });

        var simonCarousel = document.getElementById("simon-carousel").addEventListener("click", e => {
            url = '<img class="img-fluid clownify-henri" src="assets/staff/Simon-clown.jpg">';
            headingContent = "Simon McMallet";
            jobDescription = "Set Coordinator";
            textContent = 'SIMON Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'+
            ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
            'aliquip ex ea commodo consequat consectetur tempor.'
            pictureToggled= true;
            buttonContent = '<button id="toggle-button" class="btn-primary btn-lg" onclick=funBoring()>Make Me Boring!</button>';
            funVersion = '<img class="img-fluid " src="assets/staff/Simon-clown.jpg">';
            boringVersion = '<img class="img-fluid " src="assets/staff/Simon.jpg">';
            changePicture();
        });

        var shawnaCarousel = document.getElementById("shawna-carousel").addEventListener("click", e => {
            url = '<img class="img-fluid clownify-henri" src="assets/staff/Shawna-clown.jpg">';
            headingContent = "Shawna Smith";
            jobDescription = "Administrator";
            textContent = 'SHAWNA Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'+
            ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
            'aliquip ex ea commodo consequat consectetur tempor.'
            pictureToggled= true;
            buttonContent = '<button id="toggle-button" class="btn-primary btn-lg" onclick=funBoring()>Make Me Boring!</button>';
            funVersion = '<img class="img-fluid " src="assets/staff/Shawna-clown.jpg">';
            boringVersion = '<img class="img-fluid " src="assets/staff/Shawna.jpg">';
            changePicture();
        });

        var julieCarousel = document.getElementById("julie-carousel").addEventListener('click', e => {
            url = '<img class="img-fluid " src="assets/staff/Julie-clown.jpg">';
            headingContent = "Julie Hanes";
            jobDescription = "Staff Coordinator";
            textContent = 'JULIE Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'+
            ' et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ' +
            'aliquip ex ea commodo consequat consectetur tempor.'
            buttonContent = '<button id="toggle-button" class="btn-primary btn-lg" onclick=funBoring()>Make Me Boring!</button>';
            pictureToggled= true;
            funVersion = '<img class="img-fluid " src="assets/staff/Julie-clown.jpg">';
            boringVersion = '<img class="img-fluid " src="assets/staff/Julie.jpg">';
            changePicture();
        });

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
            text.className = ("left-justified");
            var button = document.createElement("button");
            var jobTitle = document.createElement("h4");
            const textDisplay = document.getElementById("textDisplay");
            const pictureDisplay = document.getElementById("pictureDisplay");
            pictureDisplay.innerHTML="";
            textDisplay.innerHTML="";
            pictureDisplay.appendChild(picture);
            textDisplay.appendChild(heading);
            textDisplay.appendChild(jobTitle);
            textDisplay.appendChild(text);
            textDisplay.appendChild(button);
            heading.innerHTML = headingContent;
            jobTitle.innerHTML = jobDescription;
            text.innerHTML = textContent;
            picture.outerHTML= url;
            button.outerHTML = buttonContent;
        }