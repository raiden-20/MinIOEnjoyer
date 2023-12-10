import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.2/+esm'

const buttonGet = document.getElementById('get');
const buttonPost = document.getElementById('post');
const buttonPost2 = document.getElementById('post2');

let urlPhoto = '' // здесь хранится url, который я сама генерирую на фото
let idPhoto = '' // а здесь уже, который получаю от тебя

buttonPost.addEventListener("change", function(event) {
    debugger
    console.log("загрузить тык");

    const file = event.target.files[0];
    const reader = new FileReader();
    const el = document.getElementById('photoPost')
    reader.readAsDataURL(file)
    reader.onload = (function () {
            el.src = reader.result
        }
    )
    urlPhoto = URL.createObjectURL(event.target.files[0]); // хранится ссылка на файл типа блоб (бинарные данные) как 'blob:http://localhost:63342/ce925a18-8ba0-4246-a100-d0012473fc62'  вот прям с блоб
    console.log(urlPhoto)
});

buttonPost2.addEventListener("click", function() {
    debugger
    axios.post('http://localhost:8080/api/photo/send', {
        id: urlPhoto
    }).then(response => {
        switch (response.status) { // в response.status хранится код
            case 200 : {
                idPhoto = response.data // в response.data приходит айди/юрл (хз что у тебя будет) фото, то есть ты мне возвращаешь только айди/юрл
                localStorage.setItem('idPhoto', response.data) // эт я добавляю в локальное хранилище браузера, ты не обращай внимание
                document.getElementById('floatingInput').innerHTML = idPhoto // а эт я сразу в инпут "URL пикчи" отправляю полученный от тебя url/id
            }
        }
    })
});

buttonGet.addEventListener("click", function() {
    console.log("получить тык");
    axios.get(`http://localhost:8080/api/photo/${localStorage.getItem('idPhoto')}`) // а эт вот как раз беру из локального хранилища данные
        .then(response => {
            switch (response.status) {
                case 200 :{
                    document.getElementById('setPhotoOnUrl').setAttribute('src', response.data) // в response.data приходит хзчто?? на саму фотку от тебя, чтобы она отрисовалась и мы сразу отправляем это в src фльл
                }
            }
        })
  });

