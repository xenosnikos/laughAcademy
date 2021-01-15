const userNameElement = document.getElementById("userName");
const passwordElement = document.getElementById("password");

function reviewForm(){
    let result = false;
    const userName = userNameElement.value;
    console.log(`user name: ${userName}`);
    const password = passwordElement.value;
    console.log(`password 1st: ${password}`);
    if(userName === ""){
        alert(`please input user name`);
        result = false;
        return result;
    }
    else{
        result = true;
    }

    if(password === ""){
        alert(`please input password`);
        result = false;
        return result;
    }
    else{
        result = true;
    }
    
    return result;
}

function signin(){
    let reviewResult = false; 
    reviewResult = reviewForm();
    if(reviewResult === false){
        console.log(`refilling form is needed.`);
        return;
    }
    else{
        //alert(`submit`);
        document.getElementById("signinForm").submit();
    }
}