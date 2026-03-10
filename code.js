const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const btn = document.querySelector("#searchButton");
const input = document.querySelector("#wordInput");
const result = document.querySelector("#result");

function getword()
{
    return input.value;
}

console.log(getword());


async function getData(temp) {
    const response = await fetch(URL + temp);
    const data = await response.json();
      if (!response.ok) {
        result.textContent = "Word not found";
        return;
    }

        console.log(data);

  const meaning = data[0].meanings[0];

    //   const audio = data[0].phonetics[0]?.audio || "No audio available";

result.textContent =
    "Definition: " + meaning.definitions[0].definition +
    "\nPart: " + meaning.partOfSpeech ;
    // + "\nAudio: " + audio;
}

btn.addEventListener("click", () => {
    const word = getword();
    getData(word);
} );