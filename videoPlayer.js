var iframe = document.querySelector('iframe');
var views = document.getElementById('views');
var title = document.getElementById('vd-title');
var description = document.getElementById('vd-desc');
var vdId = window.location.search;
var vdId = vdId.split('=')[1];
var playlistSec = document.getElementById('playlist-section');
var xhttp = new XMLHttpRequest();
xhttp.open(
  'GET',
  'https://5d76bf96515d1a0014085cf9.mockapi.io/video/' + vdId,
  'true'
);

xhttp.onreadystatechange = function () {
  if (this.readyState === 4) {
    document.getElementById('loading').style.display = 'none';
    let resp = JSON.parse(xhttp.responseText);

    iframe.src = 'https://player.vimeo.com/video/' + resp.vimeoId;
    views.innerHTML = resp.views + ' views';
    title.innerHTML = resp.title;
    description.innerHTML = resp.description;
  } else {
    document.getElementById('loading').style.display = 'block';
  }
};

xhttp.send();

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
  if (vdId == data.id) {
    card.style.border = '2px solid yellow';
  }
  return card;
}

var zhttp = new XMLHttpRequest();
zhttp.open(
  'GET',
  'https://5d76bf96515d1a0014085cf9.mockapi.io/playlist',
  'true'
);

zhttp.onreadystatechange = function () {
  if (this.readyState === 4) {
    let dataObjArr = JSON.parse(zhttp.responseText);
    for (let i = 0; i < dataObjArr.length; i++) {
      let card = createVideoCard(dataObjArr[i]);

      playlistSec.appendChild(card);
    }
  }
};
zhttp.send();
