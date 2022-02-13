export default function Modal () {

  const modalWopper = document.querySelector(".modal-wropper")
  const cancelButton = document.querySelector(".button.cancel")
  cancelButton.addEventListener("click", close)

  function open () {
    // abrir modal
    modalWopper.classList.add("active")
  }

  function close () {
    // fechar modal
    modalWopper.classList.remove("active")
  }

  return {
    open,
    close
  }
}