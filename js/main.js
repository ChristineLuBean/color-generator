
// Fetches data from the specified URL and performs actions based on the response.
function getFetch() {

  const url = "https://colormind.io/api/";
  const data = {
    model : "default",
  }

  const http = new XMLHttpRequest();

  http.onreadystatechange = function() {
    if(http.readyState == 4 && http.status == 200) {
      const palette = JSON.parse(http.responseText).result;
      console.log(palette)
      for (let i = 0; i < palette.length; i++) {
        console.log(`rgb(${palette[i]})`)
        console.log('color-rgb-' + i)
        document.getElementById('color-rgb-'+ i).innerText = `rgb(${palette[i]})`
        document.documentElement.style.setProperty(`--palette-color-${i}`, `rgb(${palette[i]})`);
        // document.documentElement.style.cssText = `--palette-color-${i}: rgb(${palette[i]}`;
      }
    }
  }

  http.open("POST", url, true);
  http.send(JSON.stringify(data));

}

// Event listener for button click
document.querySelector('button').addEventListener('click', getFetch);

//Fetches data from thecocktaildb API and populates the HTML elements with cocktail names and images.
window.onload = function() {
  getFetch()
}
