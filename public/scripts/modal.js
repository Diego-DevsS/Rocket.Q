export default function Modal () {

  const modalWropper = document.querySelector(".modal-wropper")
  const cancelButton = document.querySelector(".button.cancel")
  cancelButton.addEventListener("click", close)

  function open () {
    // abrir modal
    modalWropper.classList.add("active")
  }

  function close () {
    // fechar modal
    modalWropper.classList.remove("active")
  }

  return {
    open,
    close
  }
}