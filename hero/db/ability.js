const ability = [
    {
        //0
        name: "우정의 유대",
        desc: "전투 진입 시 주위 3칸 내 아군 부대가 있을 경우 100% 확률로 공격, 방어 +20%."
    },
    {
        //1
        name: "딴지 걸기",
        desc: "행동 종료 시 주위 4칸 내 4기 적군 부대에게 무작위 디버프 1개 부여. 동시에 생명이 제일 낮은 다른 아군 부대의 생명을 아멜다 지력의 2.5배만큼 회복"
    },
    {
        //2
        name: "굳센 반격",
        desc: "공격을 받아 전투 진입 시 전투 후 100% 확률로 자신의 공격,방어 +10%, 2턴 지속, 최대 3회 누적가능."
    },    
    {
        //3
        name: "노익장",
        desc: "부대 생명이 낮을 수록 받는 물리 피해 감소량 증가, 최대 -40%."
    },
    {
        //4
        name: "의외의 축복",
        desc: "자신 부대 생명 +20%. 아군에게 스킬 시전 시 무작위 버프 1개 추가 부여."
    },
    {
        //5
        name: "관통 저격",
        desc: "공격하여 전투 진입 전 100% 확률로 적 부대의 방어 -30%, 1턴 지속."
    },
    {
        //6
        name: "신중한 수장",
        desc: "공격을 받을 시 받는 물리 피해량 -30%."
    },
    {
        //7
        name: "마법의 대가",
        desc: "부대 생명이 100%일 때 지력 +15%. 지력의 40%만큼 마방 상승."
    },
    {
        //8
        name: "신중한 전술가",
        desc: "생명이 50% 이상인 상태에서 전투 진입 시 받는 피해 -30%."
    },
    {
        //9
        name: "강맹함",
        desc: "치명타율 +20%, 치명타 피해량 +20%."
    },
    {
        //10
        name: "빛의 기원",
        desc: "공격하여 전투 진입 전 부대 공격, 방어 +15%, 1턴 지속. 전투 후 100% 확률로 부대 생명 30% 회복."
    },
    {
        //11
        name: "기사의 신념",
        desc: "생명이 80% 이상인 상태에서 공격하여 전투 진입 시 부대의 공격, 방어 +30%."
    },
    {
        //12
        name: "수군 교관",
        desc: "물 속에서 전투 시 공격, 방어 +15%. 행동 종료 시 부대가 물 속에 있을 경우 자신의 생명을 40% 회복."
    },
    {
        //13
        name: "사랑의 응원",
        desc: "자신 주위 2칸 내 아군 부대가 있을 경우 공격, 방어 +15%.행동 종료 시 주위 2칸 내 임의의 4개 다른 아군 부대의 이동력 +1, 1턴 지속."
    },
    {
        //14
        name: "수상전 명장",
        desc: "이 부대가 물 속에서 전투 시 공격, 방어 +30%."
    },
    {
        //15
        name: "연민의 마음",
        desc: "아군 부대에게 스킬 시전 시 추가 버프 부여 : 받는 치료 효과 +30%, 방어 +30%. 2턴 지속."
    },
    {
        //16
        name: "페라키아",
        desc: "작업중"
    },
    {
        //17
        name: "모프",
        desc: "공격하여 전투 진입 시 영웅 자신의 병종은 적군 영웅의 병종으로 전환. 이번 턴에서 병종 전환을 했다면 1회 추가 행동, 공격 +25%, 지속 1턴. 2턴 후 재시전 가능."
    },
    {
        //18
        name: "용장의 신력",
        desc: "부대 체력이 높을수록 받는 물리 피해량이 최대 30% 감소. 사망 시 부활 및 생명을 30% 회복. 이 효과는 전투마다 1회 발동할 수 있다."
    },
    {
        //19
        name: "강력한 도움",
        desc: "행동 종료 시 주위 2칸 내 모든 아군 부대에게 버프 부여: 광역 스킬 피해 +20%, 1턴 지속."
    },
    {
        //20
        name: "견제 전술",
        desc: "공격하여 전투 진입 시 공격 +15%, 동시에 상대 이동력-3, 1턴 지속. (이 효과는 발동 후 1턴이 지나야 다시 발동할 수 있다.)"
    },
    {
        //21
        name: "선물",
        desc: "주는 피해량 +20%. 행동 종료 시 주위 2칸 내 4개 다른 아군 부대의 디버프 1개 제거 및 무작위 버프 1개 부여."
    },
    {
        //22
        name: "이도류",
        desc: "치명타율 +15%. 전투 중 치명타 발생 시 전투 후 가한 피해량의 30%만큼 회복. 동시에 100% 확률로 스킬 쿨타임 -1턴."
    },
    {
        //23
        name: "늑대의 본성",
        desc: "보유한 버프 1개마다 공격, 방어 +7%, 최대 +21%. 치명타 발생 시 전투 후 상대의 버프 2개 탈취."
    },
    {
        //24
        name: "마성의 피",
        desc: "적 부대 처치 시마다 3칸 재이동 가능. 동시에 자신의 공격, 지력, 방어, 마방 +20%, 3턴 지속. 최대 2회 누적 가능."
    },
    {
        //25
        name: "지장의 장막",
        desc: "공격 시 공격 +20%, 공격을 받을 시 받는 피해 -20%. 주위 2칸 내 모든 적의 이동력-2, 호위 불가."
    },
    {
        //26
        name: "철완의 여장군",
        desc: "자신 부대의 주는 피해량 +20%. 행동 종료 시 주위 2칸 내 4개 아군 부대에게 [무쇠팔] 부여: 공격하여 전투 진입 시 영웅의 주는 피해량 +20%, 전투 후 생명 10% 소모."
    },
    {
        //27
        name: "마법 창조",
        desc: "행동 종료 시 자신 주위 3칸 내 2개 적 부대에게 "마법 폭탄" 부여: 행동 종료 후 리파니 지력의 4배의 고정 피해를 받는다."
    },
    {
        //28
        name: "맹렬한 불길",
        desc: "공격하여 적에게 피해를 준 뒤 지력 2배만큼의 추가 [고정 피해] 발생."
    },
    {
        //29
        name: "지식 전승",
        desc: "행동을 종료할 때마다 지력 +6% 상승, 5턴 지속, 최대 4회 중첩 가능."
    },
    {
        //30
        name: "하늘의 사령관",
        desc: " '비병' 및 '기병'과 전투 시 공격, 방어 +30%."
    },
    {
        //31
        name: "올리비에",
        desc: "작업중"
    },
    {
        //32
        name: "클로제",
        desc: "작업중"
    },
    {
        //33
        name: "아이리스",
        desc: "작업중"
    },
    {
        //34
        name: "세레나",
        desc: "작업중"
    },
    {
        //35
        name: "안젤리카",
        desc: "작업중"
    },
    {
        //36
        name: "카즈마",
        desc: "작업중"
    },
    {
        //37
        name: "알프레드",
        desc: "작업중"
    },
    {
        //38
        name: "판",
        desc: "작업중"
    },
    {
        //39
        name: "필로테스",
        desc: "작업중"
    },
    {
        //40
        name: "올리보",
        desc: "작업중"
    },
    {
        //41
        name: "보젤",
        desc: "작업중"
    },
    {
        //42
        name: "레딘",
        desc: "작업중"
    },
    {
        //43
        name: "레온",
        desc: "작업중"
    },
    {
        //44
        name: "베른하르트",
        desc: "작업중"
    },
    {
        //45
        name: "라나",
        desc: "작업중"
    },
    {
        //46
        name: "엘윈",
        desc: "작업중"
    },
    {
        //47
        name: "쉐리",
        desc: "작업중"
    },
    {
        //48
        name: "리아나",
        desc: "작업중"
    },
    {
        //49
        name: "알테뮬러",
        desc: "작업중"
    },
    {
        //50
        name: "루나",
        desc: "작업중"
    },
    {
        //51
        name: "디하르트",
        desc: "작업중"
    },
    {
        //52
        name: "티아리스",
        desc: "작업중"
    },
    {
        //53
        name: "쥬그라",
        desc: "작업중"
    },
    {
        //54
        name: "젤다",
        desc: "작업중"
    },
    {
        //55
        name: "제리올&레이라",
        desc: "작업중"
    },
    {
        //56
        name: "셀파닐",
        desc: "작업중"
    },
    {
        //57
        name: "안젤리나",
        desc: "작업중"
    },
    {
        //58
        name: "란포드",
        desc: "작업중"
    },
    {
        //59
        name: "리스틸",
        desc: "작업중"
    },
    {
        //60
        name: "에스텔",
        desc: "작업중"
    },
    {
        //61
        name: "요슈아",
        desc: "작업중"
    },
    {
        //62
        name: "레온하르트",
        desc: "작업중"
    },
    {
        //63
        name: "렌",
        desc: "작업중"
    },
    {
        //64
        name: "란디우스",
        desc: "작업중"
    },
    {
        //65
        name: "레이첼",
        desc: "작업중"
    },
    {
        //66
        name: "윌러",
        desc: "작업중"
    },
    {
        //67
        name: "기자로프",
        desc: "작업중"
    },
    {
        //68
        name: "시그마",
        desc: "작업중"
    },
    {
        //69
        name: "람다",
        desc: "작업중"
    },
    {
        //70
        name: "사쿠라",
        desc: "작업중"
    },
    {
        //71
        name: "스미레",
        desc: "작업중"
    },
    {
        //72
        name: "클라렛",
        desc: "작업중"
    },
    {
        //73
        name: "엘라스타",
        desc: "작업중"
    },
    {
        //74
        name: "오메가",
        desc: "작업중"
    },
    {
        //75
        name: "유리아",
        desc: "작업중"
    },
    {
        //76
        name: "유스케",
        desc: "작업중"
    },
    {
        //77
        name: "히에이",
        desc: "작업중"
    },
    {
        //78
        name: "쿠라마",
        desc: "작업중"
    },
    {
        //79
        name: "도구로형제",
        desc: "작업중"
    },
    {
        //80
        name: "레인폴스",
        desc: "작업중"
    },
    {
        //81
        name: "베티",
        desc: "작업중"
    },
    {
        //82
        name: "여신의화신",
        desc: "작업중"
    },
    {
        //83
        name: "에밀리아",
        desc: "작업중"
    },
    {
        //84
        name: "비라쥬",
        desc: "작업중"
    },
    {
        //85
        name: "미지의기사",
        desc: "작업중"
    },
    {
        //86
        name: "아카야",
        desc: "작업중"
    },
    {
        //87
        name: "브렌다",
        desc: "작업중"
    },
    {
        //88
        name: "디드리트",
        desc: "작업중"
    },
    {
        //89
        name: "아슈람",
        desc: "작업중"
    },
    {
        //90
        name: "아레스",
        desc: "작업중"
    },
    {
        //91
        name: "마이야",
        desc: "작업중"
    }
]
