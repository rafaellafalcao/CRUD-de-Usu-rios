const userForm = document.getElementById('userForm');
const userList = document.getElementById('userList');

userForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  const userItem = document.createElement('li');
  userItem.innerHTML = `
    <strong>${name}</strong> (${email}, ${phone})
    <button class="delete">Excluir</button>
    <button class="edit">Editar</button>
  `;
  userList.appendChild(userItem);

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';

  userItem.querySelector('.delete').addEventListener('click', function () {
    userList.removeChild(userItem);
  });

  userItem.querySelector('.edit').addEventListener('click', function () {
    const newName = prompt('Novo nome:', name);
    if (newName !== null) {
      name = newName;
      userItem.innerHTML = `
        <strong>${name}</strong> (${email}, ${phone})
        <button class="delete">Excluir</button>
        <button class="edit">Editar</button>
      `;
      userItem.querySelector('.delete').addEventListener('click', function () {
        userList.removeChild(userItem);
      });
      userItem.querySelector('.edit').addEventListener('click', function () {
        const newName = prompt('Novo nome:', name);
        if (newName !== null) {
          name = newName;
          userItem.innerHTML = `
            <strong>${name}</strong> (${email}, ${phone})
            <button class="delete">Excluir</button>
            <button class="edit">Editar</button>
          `;
          userItem.querySelector('.delete').addEventListener('click', function () {
            userList.removeChild(userItem);
          });
        }
      });
    }
  });
});