function handleFiles(files) {
var preview = document.getElementById('holder');
  // for (var i = 0; i < files.length; i++) {
  //   var file = files[i];

  //   if (!file.type.startsWith('image/')){ continue }

    var img = document.createElement("img");
    img.classList.add("obj");
    img.file = files[0];
    preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

    var reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(files[0]);
  // }
}

function aFunction() {
  var photo = document.getElementById('pic').value;
  var newPhoto = document.getElementById("holder");
  newPhoto.src=photo;
  localStorage.setItem('key', photo);
  newPhoto.src=localStorage.getItem('key');
}

// Feature test
var hasStorage = (function() {
	try {
		localStorage.setItem(mod, mod);
		localStorage.removeItem(mod);
		return true;
	} catch (exception) {
		return false;
	}
}());
