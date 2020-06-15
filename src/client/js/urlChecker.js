// ckeck if url is correct
function checkForUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);
    var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (pattern.test(inputText)) {
        /*  alert("Url is valid"); */
        const error = document.getElementById("error");
        error.setAttribute('style', 'display:none;');
        const success = document.getElementById("success");
        success.innerHTML = "success the url is valid";
        success.setAttribute('style', 'border:solid 1px black ;height:70px;width:500px;color:black;box-shadow: 10px 5px 5px green;font-family:italic;font-wieght:bold;font-size:20px;padding:10px;border-radius:15%;')
        return true;
    }
    /* alert("Url is not valid!"); */
    const error = document.getElementById("error");
    error.innerHTML = "error the url non valid";
    error.setAttribute('style', 'border:solid 1px black ;height:70px;width:500px;color:black;box-shadow: 10px 5px 5px red;font-family:italic;font-wieght:bold;font-size:20px;padding:10px;border-radius:15%;')
    const success = document.getElementById("success");
    success.setAttribute('style', 'display:none;');
    return false;
}

export { checkForUrl }