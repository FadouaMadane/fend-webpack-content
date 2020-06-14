// ckeck if url is correct
function checkForUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);
    var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (pattern.test(inputText)) {
        alert("Url is valid");
        return true;
    }
    alert("Url is not valid!");
    return false;
}

export { checkForUrl }