function getFromServer() {
  var requestOptions = {
    method: "GET",
    // redirect: "follow",
  };

  fetch("http://localhost:3000/transactions/all", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        id: ${item.id} <br>
        time stamp: ${item.timestamp} <br>
        user id: ${item.user_id} <br>
        security id: ${item.security_id} <br>
        txn type: ${item.transaction_type} <br>
        txn units: ${item.transaction_units} <br>
        txn price: ${item.transaction_price} 
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

    timestamp: "2020-08-10",
    user_id: 2,
    security_id: 4,
    transaction_type: "Buy",
    transaction_units: 1000 ,
    transaction_price: 500,

  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:3000/transactions/add", requestOptions)
    .then((response) => response.text())
    .then((result) => $(".mypanel").html(result))
    .catch((error) => console.log("error", error));
}

function deleteData() {
  var requestOptions = {
    method: "DELETE",
  };
  fetch("http://localhost:3000/transactions/delete?id=2", requestOptions)
    .then((response) => response.text())
    .then((result) => $(".mypanel").html(result))
    .catch((error) => console.log("error", error));
}
