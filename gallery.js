function menu(){
    var wrapper = document.getElementById('navflex');

    if (wrapper.style.display === 'block'){
        wrapper.style.display = 'none';
    } else {
        wrapper.style.display = 'block';
    }
}

// modal func//
var modal = document.getElementById('Modal');
var modalImage = document.getElementById('modalImage');

// Function to open the modal and set the image source
function openModal(imageSrc) {
  modal.style.display = 'block';
  modalImage.src = imageSrc;
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Event listener to close the modal when clicking outside the image
modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeModal();
  }
});
//modl func close//