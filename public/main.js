//things left to do for the like button:
//one like per person

var likeButton = document.getElementsByClassName("like");
Array.from(likeButton).forEach(function likePost(element) {
  element.addEventListener("click", function () {
    const postId = element.dataset.value;
    fetch("likes", { 
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id: postId,
      }),
    })
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then(() => {
        window.location.reload(true);
      });
  });
});



// var image = document.getElementsByClassName("feedImg");
// Array.from(image).forEach(function (element){
//   element.addEventListener("dblclick", function(){
//     const postId = element.dataset.value;
//     const id = this.parentNode.parentNode.childNodes[7].innerText.trim("\n");
//     console.log(postId);
//     console.log("hi");
//     fetch("likes", {
//       method: "put",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         _id: postId,
//       }),
//     })
//       .then((response) => {
//         if (response.ok) return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         window.location.reload(true);
//       });
//   });
// });


var commentButton = document.getElementsByClassName("sendComment");
Array.from(commentButton).forEach(function (element) {
  element.addEventListener("click", function () {
    const comment = document.querySelector(".userComment").value;
    const postId = element.dataset.value;
    console.log(postId)
    fetch("comments/submit", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        comment: comment,
        postId: postId,
      }),
    })
      .then((response) => {
        console.log(response)
        if (response.ok) return response;
      })
      .then(() => {
        window.location.reload(true);
      });
  });
});

//delete to do: have users delete their post
// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         fetch('messages', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });
