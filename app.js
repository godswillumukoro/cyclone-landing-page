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
