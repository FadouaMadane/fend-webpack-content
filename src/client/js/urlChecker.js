function validURL(url) {
    console.log("::: RUNING URL VALIDATION :::", url);

    var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(url)) {
        const error = document.getElementById("error");
        error.setAttribute('style', 'display:none;');
        const success = document.getElementById("success");
        success.innerHTML = "success the url is valid";
        success.setAttribute('style', 'border:solid 1px black ;height:70px;width:500px;color:black;box-shadow: 10px 5px 5px green;font-family:italic;font-wieght:bold;font-size:20px;padding:10px;border-radius:15%;')
        return true;
    }
    const error = document.getElementById("error");
    error.innerHTML = "error the url non valid";
    error.setAttribute('style', 'border:solid 1px black ;height:70px;width:500px;color:black;box-shadow: 10px 5px 5px red;font-family:italic;font-wieght:bold;font-size:20px;padding:10px;border-radius:15%;')
    const success = document.getElementById("success");
    success.setAttribute('style', 'display:none;');
    return false;

}
export { validURL }