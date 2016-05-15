'use strict';
if (!window.ES6GithubUserSearch) window.ES6GithubUserSearch = {};

(function(context) {

  let userListDOM;

  function createDOMList(users) {
    userListDOM.innerHTML = '';

    users.forEach(user => {
      let li = document.createElement('li');
      li.textContent = user.login;
      userListDOM.appendChild(li);
    });
  }


  function loadUsers(query) {

    $.ajax('https://api.github.com/search/users?q=' + query)
      .done(data => {
        createDOMList(data.items);
      });

  }


  function start() {

    let queryInputDOM = document.querySelector('#query-input');
    userListDOM = document.querySelector('#user-list');

    queryInputDOM.addEventListener('keyup', evt => {
      if (evt.keyCode === 13) {
        loadUsers(queryInputDOM.value);
      }
    });

    for (let i = 0; i < 3; i++) {
      let donk = i + 1;
      console.log('for', i, donk);
    }

  }

  context.start = start;

})(window.ES6GithubUserSearch);



class SkinnedMesh {

}
