function aFunction() {
  var photo = document.getElementById('pic').value;
  var newPhoto = document.getElementById("holder");
  newPhoto.src=photo;
  localStorage.setItem('key', 'photo');
  newPhoto.src=localStorage.getItem('key');
}
