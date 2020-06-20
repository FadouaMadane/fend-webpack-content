/* HELLO NICE TO MEET YOU AND THANKS FOR REVIEWING MY CODE */
/* after upload my project I have delete the file node_modules */
function handleSubmitArticle(event) {
    event.preventDefault()
        // https://api.aylien.com/api/v1 + endpoint
        // https://subjectguides.uwaterloo.ca/AMA to test
        // check what text was put into the form field
    const formUrl = document.getElementById("test-url").value;
    Client.validURL(formUrl);
    console.log(formUrl);
    console.log("::: Form Submitted :::")
    fetch("http://localhost:8081/article", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: formUrl })
        })
        .then(res => res.json())
        .then(function(json) {
            // print for debugging
            console.log(json);
            document.getElementById("polarity").innerHTML = json.polarity;
            document.getElementById("subjectivity").innerHTML = json.subjectivity;
            document.getElementById("polarity_confidence").innerHTML =
                json.polarity_confidence;
            document.getElementById("subjectivity_confidence").innerHTML =
                json.subjectivity_confidence;
            document.getElementById("excerpt").innerHTML = json.text;
        }).catch()
}
export { handleSubmitArticle }
/* module.exports = handleSubmitArticle; */