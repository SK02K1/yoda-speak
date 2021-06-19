const inputContainer = document.querySelector(".input-container");
const btnTranslate = document.querySelector(".btn-translate");
const outputContainer = document.querySelector(".output-container");
const url = "https://api.funtranslations.com/translate/yoda.json";

const constructUrl = text => `${url}?text=${text}`;
const errorHandler = error => alert(`${error} (Please try after some time!)`);

const btnClickHandler = () => {
    fetch(constructUrl(inputContainer.value))
    .then(Response => Response.json())
    .then(json => outputContainer.innerText = json.contents.translated)
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", btnClickHandler)