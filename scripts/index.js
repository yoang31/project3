
var search = ["잔망뤂세이:0","나는 왜 자꾸 내 탓을 할까:0","몸이 지친 사람을 위한 만화:0","김영하의:0","아주 희미한 빛으로도:0","잔잔하게 그러나 단단하게:0","오은영의 마음 수호대1:0","도시농부:0","김영하의 세계문학 원정대 1 :0","여름 빛:0","그 책은 :1","이상하고 쓸모없고 행복한:0","잘못 뽑은 반장 코믹스 1 :0","도시와 그 불확실한 벽:0","흔한남매 13 :0","꿀벌의 예언 1 :0","토토의 무지개 왕국:0","이적의 단어들:0","정말 잘 지내고 있나요?:0","리바운드 대본집:0"];
ajax_Fuc(search,'.sec_container1_box',24);
var seller1 = ["도시와 그 불확실한 벽:0","디케의 눈물:0","푸른 사자 와니니6:0"];
ajax_Fuc(seller1,'.seller_contents:nth-of-type(1) .seller_box',22);
var seller2 = ["행복한:0","꼬마버스:0","말문트기:0"];
ajax_Fuc(seller2,'.seller_contents:nth-of-type(2) .seller_box',22);
var seller3 = ["나를 지키는 관계가 먼저입니다:0","집착의 법칙:0","인정욕구:0"];
ajax_Fuc(seller3,'.seller_contents:nth-of-type(3) .seller_box',22);


var bestseller = ["1%를 읽는 힘:0","세이노의 가르침:0","내 소리가 제일 커:0","아메리칸 아메리칸 프로메테우스:0","최소한의 한국사:0","뽀로로 쉑쉑:0","문과 남자의 과학 공부:0","꼬마버스 타요 고고 사운드북:0","도둑맞은 집중력:0","주식:0"];
ajax_Fuc(bestseller,'.bestseller_box',20);
var newbook = ["21세기 한국 지성의 몰락:0","설민석의 한국사 대모험26:0","Go Go 카카오프렌즈 29:0","결혼ㆍ여름:0","정재승의 인간 탐구 보고서 12:0"];
ajax_Fuc(newbook,'.newbook_box',20);
var recommand_box1 = ["치유를 파는 찻집:0","있을 법한 모든 것:0","마주:1","알레스카 샌더스 사건 1:0","나 같은 기계들:0","이 안에 당신의 수명이 들어 있습니다:0","육교 시네마:0","잘못된 장소 잘못된 시간:0","못 먹는 남자:0","낮은 해상도로부터:0"];
ajax_Fuc(recommand_box1,'.container11_content:nth-of-type(1) .recommand_box',20);
var recommand_box2 = ["일이란 무엇인가:0","엄마의 10억:0","박태웅의 AI 강의:0","나는 어떻게 삶의 해답을 찾는가:0","벤 버냉키의 21세기 통화 정책:0","평생 저축밖에 몰랐던 66세 임여사, 주식으로 돈 벌다:0","그레이트 마인드셋:0","모나미 153 브랜딩:0","신상품:4","한석준의 말하기 수업:0"];
ajax_Fuc(recommand_box2,'.container11_content:nth-of-type(2) .recommand_box',20);
var recommand_box3 = ["총 균 쇠:0","문과 남자의 과학 공부:0","나에겐 상처받을 이유가 없다:0","인정욕구:0","에세이즘:0","악인의 서사:0","전쟁과 죄책:0","문장의 맛:0","희망의 혁명:0","글은 어떻게 삶이 되는가:0"];
ajax_Fuc(recommand_box3,'.container11_content:nth-of-type(3) .recommand_box',20);
var recommand_box4 = ["백앤아 3:0","초등학생이 알아야 할 세상의 비밀 100가지:0","발명코믹북 무한의 계단 1:0","80일간의 세계일주:0","흔한남매 이무기 1:0","수상한 놀이공원 천옥원:0","말하지 않아도 내 마음을 아는 도깨비 언니 1 :0","15 소년 표류기:0","우리 다시 만나요:0","어린이를 위한 역사의 쓸모 인생 편 1 :0"];
ajax_Fuc(recommand_box4,'.container11_content:nth-of-type(4) .recommand_box',20);
var recommand_box5 = ["깨어있는 양육:0","우리 아이 첫 인문학 사전:0","0~5세 골든 브레인 육아법:0","암을 이겨내는 당신에게 보내는 편지:0","아빠 놀이 백과사전:0","기본 튼튼 엄마표 입시:0","대한민국 학부모님께:0","내 아이가 낯설어진 부모들에게:0","4~7세 조절하는 뇌 흔들리고 회복하는 뇌:0","누구나 알지만 아무도 모르는 소식의 과학:0"];
ajax_Fuc(recommand_box5,'.container11_content:nth-of-type(5) .recommand_box',20);



var story = ["마음의 안부:0","헤어질 결심부터 홀로서기까지:0","로마가족의 유럽살이:0","하버드 100년 전통 자기관리 수업:0","1923 간토대학살, 침묵을 깨라:0","재생의 부엌:0","저축은 답답하지만 투자는 무서운 당신에게:0","언젠가 완벽한 너를 만난다면:0","반값 보험료 만들기:0","나는 마리야:0"];
ajax_Fuc(story,'.story_box',20);


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
                let str = data[search_index].contents;
                let string = (title+":"+str).substring(0, num);
                let img = document.querySelectorAll(classname+" .img")[i];
                img.setAttribute('style','background:url('+data[search_index].thumbnail+') no-repeat center / cover;');
                if(document.querySelectorAll(classname+" .cont .title").length>0){
                document.querySelectorAll(classname+" .cont .title")[i].innerHTML=string; //title
                document.querySelectorAll(classname+" .cont .author p:nth-of-type(1)")[i].innerHTML=data[search_index].authors; //작가
                document.querySelectorAll(classname+" .cont .author p:nth-of-type(3)")[i].innerHTML=data[search_index].publisher;  //출판사
                }
            });
    }
}
//메뉴 버튼색과 내용 바꾸기
let seller_menu = document.getElementsByClassName("seller_header_ul")[0];

function seller(e,classname,contname){
    const nodes = [...e.target.parentElement.children];
    const index = nodes.indexOf(e.target);

    for(var i =0; i < nodes.length; i++){
        nodes[i].classList.remove(classname);
    }//초기화
    nodes[index].classList.add(classname);

    let seller_cont = document.querySelectorAll(contname);
    
    for(var i =0; i < seller_cont.length; i++){
        seller_cont[i].style.display = "none";
    }
    seller_cont[index].style.display = "";
}


//card book hover 기능 ...
function over(e){
    e.target.style.transform = "scale(1.15)"
    e.target.parentElement.children[1].style.display = "block";
    e.target.parentElement.children[1].addEventListener('mouseleave', (event) => {
        event.target.parentElement.children[0].style.transform = "scale(1)";
        event.target.style.display = "none";
         });
    
}
