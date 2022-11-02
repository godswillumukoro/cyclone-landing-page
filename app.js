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
