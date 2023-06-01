 // how to make a shop now button function?
$("._2AkmmA, ._2Npkh4, ._2kuvG8, _7UHT_c").click()


$("._2AkmmA").click()


// how to make a add to cart button function?
cartContent.addEventListener("click", (e) => {
  const tgt = e.target;
  if (tgt.classList.contains("remove-item")) {
     tgt.closest("whatever container").remove();
     tgt.closest("whatever container has button").querySelector(".bag-btn").textContent="Add to cart";
  }
  else if (e.target.classList.contains("bag-btn")) addToCart(tgt)
 })


function addToCart(button) {
  // const button = e.target;
}


