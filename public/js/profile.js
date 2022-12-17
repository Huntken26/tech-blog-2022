//Used some code from my other repository

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const postTitle = document.querySelector('#post-title').value;
    const postContent = document.querySelector('#post-desc').value;
  
    // if (title && description) {
      // const response = 
      await fetch('/api/posts', {
        method: 'post',
        body: JSON.stringify({ postTitle, postContent }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // if (response.ok) {
        document.location.replace('/');
      // } else {
      //   alert('Failed to create post');
      // }
    // }
  };
  
  document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);