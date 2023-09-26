



var book = ["도시와 그 불확실한 벽:0"];
ajax_Fuc(book,'.box',20);
var best_seller = ["도시와 그 불확실한 벽:0","바다가 들리는 편의점:0","소녀 동지여 적을 쏴라:0","바다라 들리는 편의점 2:0","인간 실격:0","삼가 이와 같이 아뢰옵니다:0"];
//"노르웨이의 숲:0","오늘 밤, 세계에서 이 사랑이 사라진다 해도:0","스즈메의 문단속:0","오늘밤, 세계에서 이 눈물이 사라진다 해도:0"];
ajax_Fuc(best_seller,'.best_seller_book',20);


//ajax
function ajax_Fuc(search,classname,num){
    for (i = 0; i < search.length; i++) {
        var search_arr = search[i].split(':');
        var search_name = search_arr[0]; 
        var search_index = Number(search_arr[1]); 
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search_name },
            async: false,
            headers: { Authorization: "KakaoAK e8d09ef06608bd693218e967d666ea43" }
        })
            .done(function (msg) {
                let origin = msg.documents;
                //썸네일이 빈 문자열인것은 제외
                let data = origin.filter((val)=>{
                    return val.thumbnail != '';
                })
                let title = data[search_index].title;
                let img = document.querySelectorAll(classname+" .img")[i];
                img.setAttribute('style','background:url('+data[search_index].thumbnail+') no-repeat center / cover;');
                if(document.querySelectorAll(classname+" .book_title").length>0){
                document.querySelectorAll(classname+" .book_title")[i].innerHTML=title; //title
                document.querySelectorAll(classname+" .book_author")[i].innerHTML=data[search_index].authors; //작가
                document.querySelectorAll(classname+" .book_publisher")[i].innerHTML=data[search_index].publisher;  //출판사
                
                let price = data[search_index].price+"&nbsp";  //정가
                price = price.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
                document.querySelectorAll(classname+" .book_price")[i].innerHTML = price;
                
                let saleprice = data[search_index].sale_price+"&nbsp"; //세일가
                saleprice = saleprice.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
                document.querySelectorAll(classname+" .book_saleprice")[i].innerHTML=saleprice;
                if(document.querySelectorAll(classname+" .book_saleprice").length == 2){
                    document.querySelectorAll(classname+" .book_saleprice")[i+1].innerHTML=saleprice;
                }
            }
            });
    }
}



//메모장으로 sub 텍스트 가져오기, 서버에 올려야 보임
$(function () {
$.get("./txt/txt1.html", function (data) {
    $(".book_info_box").html(data);
})
    
});

//수량...

let  num_input = document.querySelector(".num_input");
let quantity = Number(num_input.value);
const real_price = document.querySelector(".total .book_saleprice");
const num_price = Number(real_price.textContent.replace(',',''));
let price = num_price;

function input(){
    if(isNaN(num_input.value) || num_input.value == 0){
        num_input.value = 1;
    }
    quantity = Number(num_input.value);
    num_input.value = quantity;
    price =String(num_price * quantity);
    real_price.innerHTML = price.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');


}
function num_plus(){
    quantity +=  1;
    num_input.value = quantity;
    price = String(num_price * quantity);
    real_price.innerHTML = price.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');

}
function num_minus(){
    quantity -=  1;
    if(quantity < 1){
        quantity = 1;
    }
    num_input.value = quantity;
    price = String(num_price * quantity);
    real_price.innerHTML = price.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

