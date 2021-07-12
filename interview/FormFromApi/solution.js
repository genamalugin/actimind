document.addEventListener('DOMContentLoaded', () => {

  const modalPostsBtn = document.getElementById('getModalPosts');
  const getTenBtn = document.getElementById('getTenPosts');
  const modal = document.getElementById('myModal');
  const modalCloseBtn = document.querySelector('.close');
  const modalList = document.getElementById('modalList');
  const content = document.getElementById('content');
  const body = document.querySelector('body');
  let countId = 0;
  let posts;

  //Получаем все посты и сохраняем в массив.
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => posts = json);

  //Получаем 10 постов
  modalPostsBtn.addEventListener('click', () => {
    modal.classList.add('visible');
    body.style = 'overflow: hidden';

    for(let i = 0; i < 10; i++) {
      const item = posts[i];
      const html = `
        <li>
        <h2>${item.title}</h2>
        <p>${item.body}</p>
        </li>
      `

      modalList.innerHTML += html;
    }

  });

  // Кнопка закрытия модального окна
  modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('visible');
    body.style = 'overflow: auto';
  })

  //Получаем по 10 постов
  getTenBtn.addEventListener('click', () => {

    for(let i = 0; i < 10; i++) {
      const item = posts[countId]
      const html = `
      <div class="col">
        <article class="article">
          <h4>${item.title}</h4>
          <p>${item.body}</p>
        </article>
      </div>
      `
      content.innerHTML += html;
      countId++;
      if( countId === posts.length ) {
        getTenBtn.setAttribute("disabled", "disabled")
      }
    }

  });


});