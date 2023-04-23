// wait for the page to load
window.addEventListener('load', function() {
  // show the notification
  document.getElementById('notification').classList.remove('hidden');
  
  // add event listener to close button
  document.getElementById('close-btn').addEventListener('click', function() {
    // hide the notification
    document.getElementById('notification').classList.add('hidden');
  });
});
