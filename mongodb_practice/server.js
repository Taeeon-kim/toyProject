const express = require("express");
const app = express();

app.listen(8080, function () {
  console.log("listening on 8080");
}); //원하는 port에 listen 이용하여 서버를 열어줌

app.get("/pet", function (request, response) {
  response.send("펫용품 쇼핑할 수 있는 페이지입니다.");
});
app.get("/beauty", function (request, response) {
  response.send("퓨티용품 쇼핑할 수 있는 페이지입니다.");
});
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html"); //sendFile을 이용하여 파일을 보내줄수있음
});
app.get("/write", function (request, response) {
  response.sendFile(__dirname + "/write.html"); //sendFile을 이용하여 파일을 보내줄수있음
});
