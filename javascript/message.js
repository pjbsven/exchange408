var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4) {
    var messageData = JSON.parse(xhr.responseText);
    var messageKeys = Object.keys(messageData);
    console.log({messageKeys});
    var messageValues = Object.values(messageData);
    console.log({messageValues});
    var statusHTML = `<p>${messageValues} </p>`;
    document.getElementById('message').innerHTML = statusHTML;
  }
};
xhr.open('GET', 'message.json');
xhr.send();
