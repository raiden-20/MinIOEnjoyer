var buttonGet = document.getElementById('get');
var buttonPost = document.getElementById('post');
console.log(buttonGet);
console.log(buttonPost);

buttonGet.addEventListener("click", function() {
    console.log("получить тык");
  });

// buttonPost.addEventListener("click", function(event) {
//     console.log("загрузить тык");
    
//     const file = event.target.files[0];
//     var reader = new FileReader();
//     reader.readAsDataURL(file)
//     reader.onload = () => {
//         const el = document.getElementById('photoPost')
//         el.src= reader.result
//     }    
//   });


function addPhoto (event) {
    debugger
    console.log("загрузить тык");
    
    const file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
        const el = document.getElementById('photoPost')
        el.src= reader.result
    }    
}
