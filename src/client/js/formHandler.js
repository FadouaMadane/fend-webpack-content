function handleSubmitArticle(event) {
    event.preventDefault()
        // https://api.aylien.com/api/v1 + endpoint
        // https://subjectguides.uwaterloo.ca/AMA
        // check what text was put into the form field
    const formUrl = document.getElementById("test-url").value;
    Client.checkForUrl(formUrl);
    /* if (!formUrl) return; */
    console.log(formUrl);
    console.log("::: Form Submitted :::")
        /*  fetch("http://localhost:8081/https://api.aylien.com/api/v1/sentiment", {
                 method: "POST",
                 mode: "cors",
                 headers: {
                     "Content-Type": "application/json"
                 },
                 body: JSON.stringify({ text: url })
             })
             .then(res => res.json())
             .then(data => {
                 document.getElementById("polarity").innerHTML = data.polarity;
                 document.getElementById("subjectivity").innerHTML = data.subjectivity;
                 document.getElementById("polarity_confidence").innerHTML =
                     data.polarity_confidence;
                 document.getElementById("subjectivity_confidence").innerHTML =
                     data.subjectivity_confidence;
                 document.getElementById("excerpt").innerHTML = data.text;
             }); */
        /* fetch('http://localhost:8081/test')
            .then(res => res.json())
            .then(function(res) {
                document.getElementById('results').innerHTML = res.message
            }) */
    fetch("https://api.aylien.com/api/v1/sentiment", {
            method: "POST",
            mode: "cors",
            headers: {
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": "http://localhost:8080",
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept-Charset3": "ISO-8859-1,utf-8;q=0.7,*;q=0.7",
                "Accept": " application/json,text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Content-Type": "application/x-www-form-urlencoded"

            },
            body: JSON.stringify({ text: formUrl })
        }).catch(() => console.log("Can’t access " + formUrl + " response. Blocked by browser?"))
        .then(res => res.json())
        .then(data => {
            document.getElementById("polarity").innerHTML = data.polarity;
            document.getElementById("subjectivity").innerHTML = data.subjectivity;
            document.getElementById("polarity_confidence").innerHTML =
                data.polarity_confidence;
            document.getElementById("subjectivity_confidence").innerHTML =
                data.subjectivity_confidence;
            document.getElementById("excerpt").innerHTML = data.text;
        });
}
export { handleSubmitArticle }