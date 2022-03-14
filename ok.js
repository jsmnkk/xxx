function close(){
    var div = document.getElementById('ancrit')
    div.style.display = 'block'
    var img = document.getElementById('imageImg')
    img.style.display = 'block'
}

function create(){
    var div = document.createElement('div');
    div.id = 'ancrit';
    div.style.display = 'block';
    div.style.height = '50%';
    div.style.width = '100%';
    div.onclick = close
    var img = document.createElement('img');
    img.id = 'imageImg'
    img.style.display = 'block'
    img.onclick = close;
    document.body.appendChild(div)
    document.getElementById('ancrit').appendChild(img)
}

function show_(url){
    var div = document.getElementById('ancrit')
    div.style.display = ''
    var img = document.getElementById('imageImg')
    img.src = url
    img.style.display = ''
}

function show(num){
    if (num == 1){
        show_('https://i.ibb.co/7WB10pj/Whats-App-Image-2022-03-14-at-07-05-48.jpg')
    }else if (num == 2){
        show_('https://i.ibb.co/TcjzJQ0/5dbf67ee-f45d-47a7-912c-4c97d6b5b011.jpg')
    }else if (num == 3){
        show_('https://i.ibb.co/3ydvrVb/ff2d6f55-c094-4a8a-a014-3ce9bb98fce8.jpg')
    }
}
