function handleSubmitArticle(event) {
    event.preventDefault()
        // check what text was put into the form field
    const formUrl = document.getElementById("test-url").value;
    Client.checkForUrl(formUrl);
    /* if (!formUrl) return; */
    console.log(formUrl);
    console.log("::: Form Submitted :::")
        /*  fetch('http://localhost:8080/test')
             .then(res => res.json())
             .then(function(res) {
                 document.getElementById('results').innerHTML = res.message
             }) */
    fetch("/article", {
            method: "POST",
            mode: "cors",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: JSON.stringify({ text: formUrl })
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
        });
}
export { handleSubmitArticle }