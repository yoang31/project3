var search = ["잔망뤂세이:0","나는 왜 자꾸 내 탓을 할까:0","몸이 지친 사람을 위한 만화:0","김영하의:0","아주 희미한 빛으로도:0"];
ajax_Fuc(search,'sec_container1_box',24);
var search1 = ["도시와 그 불확실한 벽:0","디케의 눈물:0","푸른 사자 와니니6:0"];
ajax_Fuc(search1,'seller_box',22);
var bestseller = ["1%를 읽는 힘:0","세이노의 가르침:0","내 소리가 제일 커:0","아메리칸 아메리칸 프로메테우스:0","최소한의 한국사:0","뽀로로 쉑쉑:0","문과 남자의 과학 공부:0","꼬마버스 타요 고고 사운드북:0","도둑맞은 집중력:0","주식:0"];
ajax_Fuc(bestseller,'bestseller_box',20);
var newbook = ["21세기 한국 지성의 몰락:0","설민석의 한국사 대모험26:0","Go Go 카카오프렌즈 29:0","결혼ㆍ여름:0","정재승의 인간 탐구 보고서 12:0"];
ajax_Fuc(newbook,'newbook_box',20);
var recommand_box = ["치유를 파는 찻집:0","있을 법한 모든 것:0","마주:1","알레스카 샌더스 사건 1:0","나 같은 기계들:0","이 안에 당신의 수명이 들어 있습니다:0","육교 시네마:0","잘못된 장소 잘못된 시간:0","못 먹는 남자:0","낮은 해상도로부터:0"];
ajax_Fuc(recommand_box,'recommand_box',20);



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
            headers: { Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161" }
        })
            .done(function (msg) {
                let origin = msg.documents;
                //썸네일이 빈 문자열인것은 제외
                let data = origin.filter((val)=>{
                    return val.thumbnail != '';
                })
                let title = data[search_index].title;
                let str = data[search_index].contents;
                let string = (title+":"+str).substring(0, num);
                let box = document.getElementsByClassName(classname)[i];
                let img = document.querySelectorAll("."+classname+" .img")[i];
                console.log("."+classname+" .img");
                let cont =  document.querySelectorAll("."+classname+" .cont")[i];
                img.setAttribute('style','background:url('+data[search_index].thumbnail+') no-repeat center / cover;');
                document.querySelectorAll("."+classname+" .cont .title")[i].innerHTML=string; //title
                document.querySelectorAll("."+classname+" .cont .author p:nth-of-type(1)")[i].innerHTML=data[search_index].authors; //작가
                document.querySelectorAll("."+classname+" .cont .author p:nth-of-type(3)")[i].innerHTML=data[search_index].publisher;  //출판사
            });
    }
}
