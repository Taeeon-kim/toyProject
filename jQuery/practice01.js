
// 객체을 선언
var arr= [
    {title : '다음', url : 'http://daum.net'},
    {title : '네이버', url : 'http://naver.com'}
];

// $.each() 메서드의 첫번째 매겨변수로 위에서 선언한 배열은 전달
$.each(arr, function (index, item) {
    // 두 번째 매개변수로는 콜백함수인데 콜백함수의 매개변수 중
    // 첫 번째 index는 배열의 인덱스 또는 객체의 키를 의미하고
    // 두 번째 매개 변수 item은 해당 인덱스나 키가 가진 값을 의미합니다.

    var result = '';

    result += index +' : ' + item.title + ', ' + item.url;

    console.log(result);

    // 0 : 다음, http://daum.net
    // 1 : 네이버, http://naver.com

})
