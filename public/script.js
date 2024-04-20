
async function main() {
  document.querySelector(".button").addEventListener('click', async () => {

    quote.classList.add("rotatedBefore");
    let q
    let response = await fetch("/getQuotes");
    if (response.ok) {
      q = await response.text()
    }
    else {
      throw new error("There is error in fetching.")
    }
    quote.classList.remove("quote")
    quote.classList.add("hidden");

    await new Promise(resolve => setTimeout(resolve, 100));
    quote.style.display = "block"

    quote.innerHTML = q;
    quote.classList.add("rotated");

    await new Promise(resolve => {
      setTimeout(() => {
        quote.classList.remove("rotated");
        resolve();
      }, 300);
    });
    quote.classList.remove("hidden");

    quote.classList.add("quote")
  })
}

main()