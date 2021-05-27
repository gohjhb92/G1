function getFromServer() {
  var requestOptions = {
    method: "GET",
    // redirect: "follow",
  };

  fetch("http://localhost:3000/security/all", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        id: ${item.id} <br>
        security type: ${item.security_type} <br>
        security name: ${item.security_name} <br>
        security price: ${item.security_price} 
        </li>`;
      });
      text += "</ul>";
      $(".mypanel").html(text);
    })
    .catch((error) => console.log("error", error));

    
}

function postData() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    security_type: "Crypto",
    security_name: "Ether",
    security_price: 2800,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:3000/security/add", requestOptions)
    .then((response) => response.text())
    .then((result) => $(".mypanel").html(result))
    .catch((error) => console.log("error", error));
}

function deleteData() {
  var requestOptions = {
    method: "DELETE",
  };
  fetch("http://localhost:3000/security/delete?id=2", requestOptions)
    .then((response) => response.text())
    .then((result) => $(".mypanel").html(result))
    .catch((error) => console.log("error", error));
}
