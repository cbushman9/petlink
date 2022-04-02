// this file includes the function for the form that allows users to add posts that include a title, content, and an image
// async function allows us to use fetch 
async function newFormHandler(event) {
  event.preventDefault();
// declare constants for title, content, and images_url
  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('input[name="content"]').value;
  const image_url = document.querySelector('img[name="image-url"]').getAttribute("src");
// use await syntax so that the function is paused until the request to api/posts is made 
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content,
      image_url
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    console.log(image_url + "----------------------");
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

// cloudinary code start

var CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/hkawyxjzq/upload';
var CLOUDINARY_UPLOAD_PRESET = 'mfsfx0l0';

var imageUrl = document.getElementById('image-url');
var fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change', function () {
  // console.log(event);
  var file = event.target.files[0];
  // console.log(file);
  var formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  // sending data to cloudinary
  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData
  }).then(function (res) {
    console.log(res);
    // allows image to show up in app
    imageUrl.src = res.data.secure_url;
  }).catch(function (err) {
    console.error(err);
  });

});
// cloudinary code end
// add event listener to capture new post form submission
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);