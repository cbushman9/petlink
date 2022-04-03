// create a function for users to delete posts
async function deleteFormHandler(event) {
  event.preventDefault();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });
// send users back to the dashboard after they delete a post
  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}
// event listener to process delete button click 
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
