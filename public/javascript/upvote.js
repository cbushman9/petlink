// function to allow upvotes or "paw-points"
async function upvoteClickHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch('/api/posts/upvote', {
    method: 'PUT',
    body: JSON.stringify({
      post_id: id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  // reloads the page to show post with new upvote/paw-point 
  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}
// event listener to handle the upvote/paw-point button 
document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);
