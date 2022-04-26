const localList = [

    //인천
    {name:"인천", city:"incheon"},
    //부산
    {name:"부산", city:"busan"},
    //대구
    {name:"대구", city:"daegu"},
    //대전
    {name:"대전", city:"daejeon"},
    //울산
    {name:"울산", city:"ulsan"},
    //광주
    {name:"광주", city:"gwangju"},

    //서울
    {name:"강남구", city:"Gangnam-gu"},
    {name:"강동구", city:"Gangdong-gu"},
    {name:"강북구", city:"Gangbuk-gu"},
    {name:"강서구", city:"gangseo-gu"},
    {name:"관악구", city:"Gwanak-gu"},
    {name:"광진구", city:"Gwangjin-gu"},
    {name:"구로구", city:"guro-gu"},
    {name:"금천구", city:"Geumcheon-gu"},
    {name:"노원구", city:"nowon-gu"},
    {name:"도봉구", city:"dobong-gu"},
    {name:"동대문구", city:"Dongdaemun"},//ㄴㄴ
    {name:"동작구", city:"dongjak-gu"},
    {name:"마포구", city:"mapo-gu"},
    {name:"서대문구", city:"seodaemun-gu"},
    {name:"서초구", city:"seocho-gu"},
    {name:"성동구", city:"seongdong-gu"},
    {name:"성북구", city:"seongbuk-gu"},
    {name:"송파구", city:"songpa-gu"},
    {name:"양천구", city:"yangcheon-gu"},
    {name:"영등포구", city:"yeongdeungpo-gu"},
    {name:"용산구", city:"yongsan-gu"},
    {name:"은평구", city:"eunpyeong-gu"},
    {name:"종로구", city:"jongno-gu"},
    {name:"중구", city:"jung-gu"},
    {name:"중랑구", city:"jungnang-gu"},

    //경기도
    {name:"가평군", city:"gapyeong"},
    {name:"고양시", city:"goyang"},
    {name:"과천시", city:"gwacheon"},
    {name:"광명시", city:"Gwangmyeong-si"},
    {name:"광주시", city:"gwangju-si"},
    {name:"구리시", city:"guri-si"},
    {name:"군포시", city:"gunpo-si"},
    {name:"김포시", city:"gimpo-si"},
    {name:"남양주시", city:"namyangju-si"},
    {name:"동두천시", city:"dongducheon-si"},
    {name:"부천시", city:"bucheon-si"},
    {name:"성남시", city:"seongnam-si"},
    {name:"수원시", city:"suwon-si"},
    {name:"시흥시", city:"siheugn-si"},
    {name:"안산시", city:"ansan-si"},
    {name:"안성시", city:"anseong-si"},
    {name:"안양시", city:"anyang-si"},
    {name:"양주시", city:"yangju"},
    {name:"양평군", city:"yangpyeong-gun"},
    {name:"여주군", city:"yeoju"},
    {name:"연천군", city:"yeoncheon-gun"},
    {name:"오산시", city:"osan"},
    {name:"용인시", city:"yongin-si"},
    {name:"의왕시", city:"uiwang"},
    {name:"의정부시", city:"uijeongbu-si"},
    {name:"이천시", city:"icheon-si"},
    {name:"파주시", city:"paju"},
    {name:"평택시", city:"pyeongtaek-si"},
    {name:"포천시", city:"Unsal-li"},
    {name:"하남시", city:"hanam"},
    {name:"화성시", city:"hwaseong-si"},

    //강원도
    {name:"강릉시", city:"gangneung-si"},
    {name:"고성군", city:"goseong-gun"},
    {name:"동해시", city:"donghae-si"},
    {name:"삼척시", city:"samcheok-si"},
    {name:"속초시", city:"sokcho-si"},
    {name:"양구군", city:"yanggu-gun"},
    {name:"양양군", city:"yangyang-gun"},
    {name:"영월군", city:"yeongwol-gun"},
    {name:"원주시", city:"wonju-si"},
    {name:"인제군", city:"inje-gun"},
    {name:"정선군", city:"jeongseon-gun"},
    {name:"철원군", city:"cheorwon-gun"},
    {name:"춘천시", city:"chuncheon-si"},
    {name:"태백시", city:"taebaek-si"},
    {name:"평창군", city:"pyeongchang-gun"},
    {name:"홍천군", city:"hongcheon-gun"},
    {name:"화천군", city:"hwacheon-gun"},
    {name:"횡성군", city:"hoengseong-gun"},

    //경상남도
    {name:"거제시", city:"Kyosai"},
    {name:"거창군", city:"Geochang"},//ㄴㄴ
    {name:"고성군", city:"goseong"},
    {name:"김해시", city:"gimhae"},
    {name:"남해군", city:"namhae"},
    {name:"마산시", city:"masan"},
    {name:"밀양시", city:"miryang"},
    {name:"사천시", city:"Seisan-ri"},
    {name:"산청군", city:"Sancheong-gun"},//ss
    {name:"양산시", city:"Yangsan"},
    {name:"의령군", city:"uiryeong"},
    {name:"진주시", city:"jinju"},
    {name:"창녕군", city:"changnyeong"},
    {name:"창원시", city:"changwon"},
    {name:"통영시", city:"T’aep’ong-dong"},//ㄴㄴ
    {name:"하동군", city:"hadong"},
    {name:"함안군", city:"haman"},
    {name:"함양군", city:"hamyang"},
    {name:"합천군", city:"hapcheon"},

    //경상북도
    {name:"경산시", city:"gyeongsan-si"},
    {name:"경주시", city:"gyeongju"},
    {name:"고령군", city:"Goryeong"},
    {name:"구미시", city:"Jenzan"},
    {name:"군위군", city:"gunwi"},
    {name:"김천시", city:"gimcheon-si"},
    {name:"문경시", city:"mungyeong-si"},
    {name:"봉화군", city:"bonghwa"},
    {name:"상주시", city:"Sang-ni"},
    {name:"성주군", city:"seongju"},
    {name:"안동시", city:"andong"},
    {name:"영덕군", city:"Utt’ŏ-gol"},
    {name:"영양군", city:"yeongyang"},
    {name:"영주시", city:"yeongju-si"},
    {name:"영천시", city:"yeongcheon-si"},
    {name:"예천군", city:"yecheon"},
    {name:"울릉군", city:"ulreung"},//ㄴㄴ
    {name:"울진군", city:"Ulchin"},
    {name:"의성군", city:"uiseong"},
    {name:"청도군", city:"cheongdo"},
    {name:"청송군", city:"cheongsong"},
    {name:"칠곡군", city:"chilgok"},
    {name:"포항시", city:"Sangok"},

    //충청남도
    {name:"공주시", city:"gongju"},
    {name:"금산군", city:"Kinzan"},
    {name:"논산시", city:"nonsan"},
    {name:"당진군", city:"Tangjin"},
    {name:"보령시", city:"Boryeong"},
    {name:"부여군", city:"buyeo"},
    {name:"서산시", city:"seosan-si"},
    {name:"서천군", city:"seocheon"},//ss
    {name:"아산시", city:"asan"},
    {name:"계룡시", city:"gyeryong-si"},
    {name:"예산군", city:"yesan"},
    {name:"천안시", city:"cheonan-si"},
    {name:"청양군", city:"cheongyang-gun"},//ss
    {name:"태안군", city:"Taian"},
    {name:"홍성군", city:"hongseong"},

    //충청북도
    {name:"괴산군", city:"Koesan"},
    {name:"단양군", city:"Oegeomusil"},
    {name:"보은군", city:"boeun"},//ss
    {name:"영동군", city:"yeongdong"},
    {name:"옥천군", city:"okcheon-gun"},
    {name:"음성군", city:"umseong"},
    {name:"증평군", city:"jeungpyeong"},//ss이 아래로 군 다 안됨
    {name:"제천시", city:"jecheon-si"},
    {name:"진천군", city:"jincheon"},
    {name:"청원군", city:"cheongwon"},
    {name:"청주시", city:"cheongju-si"},
    {name:"충주시", city:"chungju-si"},


    //제주
    {name:"제주시", city:"Jeju"},
    {name:"서귀포시", city:"seogwipo"},//ss


    //전북
    {name:"고창군", city:"gochang"},
    {name:"군산시", city:"gunsan"},
    {name:"김제시", city:"gimje"},
    {name:"남원시", city:"namwon"},
    {name:"무주군", city:"muju"},
    {name:"부안군", city:"buan-gun"},
    {name:"완주군", city:"wanju"},
    {name:"익산시", city:"iksan-si"},
    {name:"임실군", city:"imsil"},
    {name:"장수군", city:"Changsu"},
    {name:"전주시", city:"jeonju"},
    {name:"정읍시", city:"jeongeup"},//ss
    {name:"진안군", city:"jinan-gun"},
    {name:"순창군", city:"Sunchang-chodeunghakgyo"},

    //전남
    {name:"강진군", city:"gangjin-gun"},//ss
    {name:"고흥군", city:"Koyo"},
    {name:"곡성군", city:"gokseong"},
    {name:"광양시", city:"gwangyang"},
    {name:"구례군", city:"kurye"},
    {name:"나주시", city:"naju"},
    {name:"담양군", city:"dangyang"},
    {name:"목포시", city:"mokpo"},
    {name:"무안군", city:"muan"},
    {name:"보성군", city:"boseong"},
    {name:"순천시", city:"suncheon"},
    {name:"신안군", city:"sinan"},
    {name:"여수시", city:"yeosu"},
    {name:"영광군", city:"yeonggwang"},
    {name:"영암군", city:"Yeongam-guncheong"},
    {name:"완도군", city:"wando"},
    {name:"장성군", city:"jangseong"},
    {name:"장흥군", city:"jangheung-gun"},//ss
    {name:"진도군", city:"jindo-gun"},//ss
    {name:"함평군", city:"hampyeong"},
    {name:"해남군", city:"haenam"},
    {name:"화순군", city:"hwasun"},


    

    






];