const modal = document.getElementById("modal")
const closeModal = document.getElementById("close")
const joinWaitlist = document.querySelectorAll(".join-waitlist")

joinWaitlist.forEach(btn =>
  btn.addEventListener("click", () => {
    modal.showModal()
  }))

closeModal.addEventListener("click", () => {
  modal.close()
})

// Netlify Forms
const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};

document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);


// This prevents iOS zoom on focused form elements with font size smaller than 16px.
// iOS 10+ allows pinch-zoom even if viewport is unscalaeable.
// We feature detect those browsers and apply additional rules.
if (
  window.CSS?.supports?.(
    '(font:-apple-system-body) and (-webkit-touch-callout:none) and (-webkit-tap-highlight-color:hotpink)'
  )
) {
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport !== null) {
    viewport.content = `${viewport.content},user-scalable=no`;
  }
}

// notification message
window.handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const url = myForm.action;
  const formData = new FormData(myForm);
  
  const successElement = document.querySelector('#success');
  const errorElement = document.querySelector('#error');
  successElement.classList.add('dnone');
  errorElement.classList.add('dnone');

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => successElement.classList.remove('dnone'))
    .catch(() => errorElement.classList.remove('dnone'));
};