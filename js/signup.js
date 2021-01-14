const firstNameElement = document.getElementById("firstName");
const lastNameElement = document.getElementById("lastName");
const titleElement = document.getElementById("title");
const birthDateElement = document.getElementById("birthDate");
const userNameElement = document.getElementById("userName");
const passwordOElement = document.getElementById("passwordO");
const passwordVElement = document.getElementById("passwordV");
const addressLineOneElement = document.getElementById("addressLineOne");
const addressLineTwoElement = document.getElementById("addressLineTwo");
const emailElement = document.getElementById("email");
const mobileElement = document.getElementById("mobile");
const coursesElement = document.getElementById("courses");
const commentsElement = document.getElementById("comments");

function reviewForm(){
    let result = false;
    const firstName = firstNameElement.value;
    console.log(`first name: ${firstName}`);
    const lastName = lastNameElement.value;
    console.log(`last name: ${lastName}`);
    const title = titleElement.options[titleElement.selectedIndex].value;
    console.log(`title: ${title}`);
    const birthDate = birthDateElement.value;
    console.log(`birth date: ${birthDate}`);
    const userName = userNameElement.value;
    console.log(`user name: ${userName}`);
    const pswdOne = passwordOElement.value;
    console.log(`password 1st: ${pswdOne}`);
    const pswdTwo = passwordVElement.value;
    console.log(`password 2nd: ${pswdTwo}`);
    const addrOne = addressLineOneElement.value;
    console.log(`addrress 1st: ${addrOne}`);
    const addrTwo = addressLineTwoElement.value;
    console.log(`address 2nd: ${addrTwo}`);
    const email = emailElement.value;
    console.log(`email: ${email}`);
    const mobile = mobileElement.value;
    console.log(`mobile: ${mobile}`);
    const course = coursesElement.options[coursesElement.selectedIndex].value;
    console.log(`course: ${course}`);
    const comments = commentsElement.value;
    console.log(`comments: ${comments}`);

    const mandatoryElements = document.getElementsByClassName("input-mandatory");
    const missingElements = document.getElementsByClassName("input-missing");
    //reset the previous checking mark of mandatory field
    if(missingElements.length>0){
        for(let element of mandatoryElements){
            element.classList.remove("input-missing");
        }
    }
    //console.log(`1. review result: ${result}`);
    //check whether mandatory fields are filled
    for(let element of mandatoryElements){
        if(element.value === ""){
            //console.log(`Please enter value of ${element.name}`);
            element.classList.add("input-missing");
            result = false;
            return result;
        }
        else{
            element.classList.remove("input-missing");
            result = true;
        }
    }
    //verify whether passwaords are same
    console.log(`password: ${pswdOne}`);
    console.log(`password again: ${pswdTwo}`);
    if(pswdOne !== pswdTwo){
        alert("password is wrong");
        passwordOElement.classList.add("input-missing");
        passwordVElement.classList.add("input-missing");
        result = false;
        return result;
    }
    //check email format
    let emailPattern = /^.+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let emailSearchMatches = email.match(emailPattern);
    //alert(`email is matched? ${emailSearchMatches}`);
    if(emailSearchMatches == null){
        emailElement.classList.add("input-missing");
        result = false;
        return result;
    }
    //check mobile phone number format
    let mobilePattern = /^[0-9]{10}$/;
    let mobileSearchMatches = mobile.match(mobilePattern);
    //alert(`mobile is matched? ${mobileSearchMatches}`);
    if(mobileSearchMatches == null){
        mobileElement.classList.add("input-missing");
        result = false;
        return result;
    }
    //set default title as Mx. if not selected
    if(titleElement.selectedIndex === 0){
        titleElement.selectedIndex = titleElement.length-1;
    }
    console.log(`review result: ${result}`);
    return result;
}

function signup(){
    let reviewResult = false; 
    reviewResult = reviewForm();
    if(reviewResult === false){
        console.log(`refilling form is needed.`);
        return;
    }
    else{
        //alert(`submit`);
        document.getElementById("signupForm").submit();
    }
}