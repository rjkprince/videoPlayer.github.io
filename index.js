// {
//     "id": "1",
//     "title": "Croissants | Flour and Stone",
//     "thumbnail": "https://i.vimeocdn.com/video/600595198_390x220.webp"
// }

// <div class="card">
// <a href="#">
//   <img
//     src="https://i.vimeocdn.com/video/600595198_390x220.webp"
//     alt="thumbnail"
//   />
//   <div class="card-desc">
//     <h1 class="card-title">Croissants|Floor and Stones</h1>
//   </div>
// </a>
// </div>

function createVideoCard(data) {
  let card = document.createElement('div');
  card.classList.add('card');
  let anchor = document.createElement('a');
  anchor.href = './videoPlayer.html?vdId=' + data.id;
  let thumbnail = document.createElement('img');
  thumbnail.src = data.thumbnail;
  thumbnail.alt = 'thumbnail';
  anchor.appendChild(thumbnail);
  let cardDesc = document.createElement('div');
  cardDesc.classList.add('card-desc');
  let title = document.createElement('h1');
  title.innerHTML = data.title;
  title.classList.add('card-title');
  cardDesc.appendChild(title);
  anchor.appendChild(cardDesc);
  card.appendChild(anchor);
  return card;
}

var cardCont = document.getElementsByClassName('card-cont')[0];

var xhttp = new XMLHttpRequest();
xhttp.open(
  'GET',
  'https://5d76bf96515d1a0014085cf9.mockapi.io/playlist',
  'true'
);
xhttp.send();
xhttp.onreadystatechange = function () {
  if (this.readyState === 4) {
    let dataObjArr = JSON.parse(xhttp.responseText);
    for (let i = 0; i < dataObjArr.length; i++) {
      let card = createVideoCard(dataObjArr[i]);
      cardCont.appendChild(card);
    }
  }
};
////////////////////////////////////
