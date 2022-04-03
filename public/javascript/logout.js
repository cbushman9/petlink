// logout function 
async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });
// takes users back to homepage after they've logged out 
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}
// listens for the logout button click to log users out 
document.querySelector('#logout').addEventListener('click', logout);