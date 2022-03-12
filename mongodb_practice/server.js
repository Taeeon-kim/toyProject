const express = require("express");
const axios = require("axios");
const { header } = require("express/lib/request");
const app = express();
// console.log(axios)
const currentPut = async () => {
  let response;
  try{
    response = await axios.get("http://openapi.molit.go.kr/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTradeDev?serviceKey=l5%2FARvs4Y21x2OnTnwqvAR87P6RFjU70RblX6HyCCZcmvsthsQ2yVRFPNPuFM5afm%2BK4Mqq8txMqcxo3I25Zqw%3D%3D&pageNo=1&numOfRows=10&LAWD_CD=11110&DEAL_YMD=201512");
  } catch(e){
    console.log(e);
  }

  return response;
};

// currentPut();

app.listen(8080, function () {
  console.log("listening on 8080");
}); //원하는 port에 listen 이용하여 서버를 열어줌

app.get("/pet", function (request, response) {
  response.send("펫용품 쇼핑할 수 있는 페이지입니다.");
});
app.get("/beauty", function (request, response) {
  response.send("퓨티용품 쇼핑할 수 있는 페이지입니다.");
});



app.get("/",  (req, res) =>{
  currentPut().then((response)=>{

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(response.data.response.body.items.item); // json을 하면 response 응답으로 해당 경로에있는 데이터를 data 안에 담아서 준다.
    // console.log(response.data.response.body.items.item);
  })
});





// app.get("/", function (request, response) {
//   response.sendFile(__dirname + "/index.html"); //sendFile을 이용하여 파일을 보내줄수있음
// });
app.get("/write", function (request, response) {
  response.sendFile(__dirname + "/write.html"); //sendFile을 이용하여 파일을 보내줄수있음
});
