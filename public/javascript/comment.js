// create a comment form for users to add comments to existing posts 
async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
// if logic to prevent blank comments 
  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}
// add event listener to capture comment form submission 
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
