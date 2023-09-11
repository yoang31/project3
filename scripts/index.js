
var search = ["잔망뤂세이:0","나는 왜 자꾸 내 탓을 할까:0","몸이 지친 사람을 위한 만화:0","김영하의:0","아주 희미한 빛으로도:0","잔잔하게 그러나 단단하게:0","오은영의 마음 수호대1:0","도시농부:0","김영하의 세계문학 원정대 1 :0","여름 빛:0","그 책은 :1","이상하고 쓸모없고 행복한:0","잘못 뽑은 반장 코믹스 1 :0","도시와 그 불확실한 벽:0","흔한남매 13 :0","꿀벌의 예언 1 :0","토토의 무지개 왕국:0","이적의 단어들:0","정말 잘 지내고 있나요?:0","리바운드 대본집:0"];
ajax_Fuc(search,'sec_container1_box',24);
var search1 = ["도시와 그 불확실한 벽:0","디케의 눈물:0","푸른 사자 와니니6:0"];
ajax_Fuc(search1,'seller_box',22);
var bestseller = ["1%를 읽는 힘:0","세이노의 가르침:0","내 소리가 제일 커:0","아메리칸 아메리칸 프로메테우스:0","최소한의 한국사:0","뽀로로 쉑쉑:0","문과 남자의 과학 공부:0","꼬마버스 타요 고고 사운드북:0","도둑맞은 집중력:0","주식:0"];
ajax_Fuc(bestseller,'bestseller_box',20);
var newbook = ["21세기 한국 지성의 몰락:0","설민석의 한국사 대모험26:0","Go Go 카카오프렌즈 29:0","결혼ㆍ여름:0","정재승의 인간 탐구 보고서 12:0"];
ajax_Fuc(newbook,'newbook_box',20);
var recommand_box = ["치유를 파는 찻집:0","있을 법한 모든 것:0","마주:1","알레스카 샌더스 사건 1:0","나 같은 기계들:0","이 안에 당신의 수명이 들어 있습니다:0","육교 시네마:0","잘못된 장소 잘못된 시간:0","못 먹는 남자:0","낮은 해상도로부터:0"];
ajax_Fuc(recommand_box,'recommand_box',20);
var story = ["마음의 안부:0","헤어질 결심부터 홀로서기까지:0","로마가족의 유럽살이:0","하버드 100년 전통 자기관리 수업:0","1923 간토대학살, 침묵을 깨라:0","재생의 부엌:0","저축은 답답하지만 투자는 무서운 당신에게:0","언젠가 완벽한 너를 만난다면:0","반값 보험료 만들기:0","나는 마리야:0"];
ajax_Fuc(story,'story_box',20);



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
                let img = document.querySelectorAll("."+classname+" .img")[i];
                img.setAttribute('style','background:url('+data[search_index].thumbnail+') no-repeat center / cover;');
                if(document.querySelectorAll("."+classname+" .cont .title").length>0){
                document.querySelectorAll("."+classname+" .cont .title")[i].innerHTML=string; //title
                document.querySelectorAll("."+classname+" .cont .author p:nth-of-type(1)")[i].innerHTML=data[search_index].authors; //작가
                document.querySelectorAll("."+classname+" .cont .author p:nth-of-type(3)")[i].innerHTML=data[search_index].publisher;  //출판사
                }
            });
    }
}
