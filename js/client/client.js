function renderClient(target, data) {
    let HTML = '';
    for ( let i=0; i <data.length;i++) {
        HTML += generateClient(data[i])
    }

    document.querySelector(target).innerHTML = HTML;
 
    return;
}



function generateClient(data) {
    let HTML = 
    `
<div class="client-slide fade" id=${data.id}>
  <div>
    <img class="user-logo" src="./img/user.png" alt="user logo">
  </div>
  <p class="client-name">${data.author}</p>
  <p class="client-company">${data.company}</p>
  <p class="client-review">${data.text}</p>
</div>`;
    return HTML;
}

export { renderClient };