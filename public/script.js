
let copy = document.querySelector(".copy")
async function main() {
  document.querySelector(".button").addEventListener('click', async () => {
    copy.src = 'copy.svg';

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
    copy.style.display = "block" 
    quote.classList.add("quote")
  })

  copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(quote.innerText);
      copy.src = "copied.svg";
      setTimeout(() => {
        copy.src = 'copy.svg';
      }, 2000); // Reset the icon after 2 seconds
    } catch (error) {
      alert("Failed to copy quote to clipboard:", error);
    }
  });
}

main()