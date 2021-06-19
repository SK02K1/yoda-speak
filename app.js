const inputContainer = document.querySelector(".input-container");
const btnTranslate = document.querySelector(".btn-translate");
const outputContainer = document.querySelector(".output-container");
const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

const constructUrl = text => `${url}?text=${text}`;

const btnClickHandler = () => {
    fetch(constructUrl(inputContainer.value))
    .then(Response => Response.json())
    .then(json => console.log(json.contents.translated))
}

btnTranslate.addEventListener("click", btnClickHandler)