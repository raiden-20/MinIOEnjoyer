import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.2/+esm'

const buttonGet = document.getElementById('get');
const buttonPost = document.getElementById('post');
const buttonPost2 = document.getElementById('post2');

let photo = ''
let url = ''

buttonPost.addEventListener("change", function(event) {
    console.log("загрузить тык");

    const file = event.target.files[0];
    const reader = new FileReader();
    const el = document.getElementById('photoPost')
    reader.readAsDataURL(file)
    reader.onload = (function () {
            el.src = reader.result
        }
    )

    photo = event.target.files[0]
});

buttonPost2.addEventListener("click", function() {
    console.log("отправить тык");
    let formData = new FormData()
    formData.append('file', photo)
    axios.post('http://localhost:8080/api/file/send', formData).then(response => {
        switch (response.status) { 
            case 200 : {
                url = response.data 
                localStorage.setItem('url', response.data)
                document.getElementById('floatingInput').value = url
            }
        }
    })
});

buttonGet.addEventListener("click", function() {
    console.log("получить тык");
    axios.get(`http://localhost:8080/api/file/${localStorage.getItem('url')}`)
        .then(response => {
            switch (response.status) {
                case 200 :{
                    document.getElementById('setPhotoOnUrl').setAttribute('src', response.data)
                }
            }
        })
  });

