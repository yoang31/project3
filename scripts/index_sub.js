



var book = ["1%를 읽는 힘:0"];
ajax_Fuc(book,'.box',20);
var best_seller = ["도시와 그 불확실한 벽:0","바다가 들리는 편의점:0","소녀 동지여 적을 쏴라:0","바다라 들리는 편의점 2:0","인간 실격:0","삼가 이와 같이 아뢰옵니다:0","노르웨이의 숲:0","오늘 밤, 세계에서 이 사랑이 사라진다 해도:0","스즈메의 문단속:0","오늘밤, 세계에서 이 눈물이 사라진다 해도:0"];
ajax_Fuc(best_seller,'.best_seller_book',20);


//ajax
function ajax_Fuc(search,classname,num){
    for (i = 0; i < search.length; i++) {
        console.log
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
                console.log(data);
                let title = data[search_index].title;
                let img = document.querySelectorAll(classname+" .img")[i];
                console.log(data[search_index].price);
                img.setAttribute('style','background:url('+data[search_index].thumbnail+') no-repeat center / cover;');
                if(document.getElementsByClassName("book_title").length>0){
                document.getElementsByClassName("book_title")[i].innerHTML=title; //title
                document.getElementsByClassName("book_author")[i].innerHTML=data[search_index].authors; //작가
                document.getElementsByClassName("book_publisher")[i].innerHTML=data[search_index].publisher;  //출판사
                document.getElementsByClassName("book_price")[i].innerHTML=data[search_index].price+"원&nbsp&nbsp";  //정가
                document.getElementsByClassName("book_saleprice")[i].innerHTML=data[search_index].sale_price+"원";  //세일가격

            }
            });
    }
}



