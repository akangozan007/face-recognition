
// API_TOKEN = "aac48cc0755b47d992523223c0a64d0d";
API_TOKEN = "f32f1e6b854d47f3a79d0e687d5a0efd"

function detect(image, callback){
    var myHeaders = new Headers();
    myHeaders.append("token", API_TOKEN);

    var formdata = new FormData();    

    if ((typeof image == "string") && (image.indexOf("https://") == 0))
        formdata.append("photo", image);
    else
        formdata.append("photo", image, "file");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://api.luxand.cloud/photo/detect", requestOptions)
      .then(response => response.json())
      .then(result => callback(result))
      .catch(error => console.log('error', error)); 
}