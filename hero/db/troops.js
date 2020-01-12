const troops = [
    {
        name: "신관",
        stats: [34, 31, 19, 28],
        skill: ".."
        //skill: "일반 공격이 [마법 피해]를 준다. 영웅의 주는 치료 효과 + 5%(→15%).병사의 생명이 80% 이상일 때, 방어 + 10%(→30%)."
    },
    {
        name: "숲의 사제",
        stats: [40, 31, 20, 23],
        skill: ".."
        //        skill: "일반 공격이 마법 피해를 준다. 영웅의 치료효과 +15%. 영웅이 아군에게 스킬 사용시 100% 확률로 디버프 1개 제거."
    },
    {
        name: "무녀",
        stats: [36, 31, 17, 28],
        skill: ".."
        //      skill: "3	일반 공격이 [마법 피해]를 준다.병사 생명이 100%일 경우,영웅이 받는 물리 피해량 - 30%(→75%)."
    },
    {
        name: "광신자",
        stats: [36, 40, 20, 20],
        skill: ".."
        //skill: "	병사의 생명이 80% 이상일 때,보유한 버프 하나마다 병사의공격, 방어, 마방 + 5%(→15%) (최대 15%(→45%))."
    },
    {
        name: "퇴마사",
        stats: [40,37,22,20],
        skill: ".."
        //        skill: "[마물]과 전투 시 공격 + 10%(→30%).마물 이외의 적과 전투 시 방어 + 10%(→30%)."
    },
    {
        name: "세인트 나이트",
        stats: [34,34,19,26],
        skill: ".."
        //        skill: "일반 공격이 [마법 피해]를 준다.영웅의 주는 치료 효과 + 5%(→15%).병사의 생명이 80% 이상일 때, 방어 + 10%(→30%)."
    },
    {
        name: "사무라이",
        stats: [40,40,22,22],
        skill: ".."
        //        skill: "이 부대의 공격은 근접 공격 피해 차감 효과의 영향을 받지 않는다. 근접 공격 시 공격 + 7%(→20%) 원거리 공격 시 치명타율 + 7%(→20%)."
    },
    {
        name: "미스트 댄서",
        stats: [40,37,22,26],
        skill: ".."
        //        skill: "치명타율 + 15%(→45%) 치명타 후 적 부대에게 무작위 강력한 디버프 1개 부여."
    },
    {
        name: "밴디트",
        stats: [40,40,20,20],
        skill: ".."
        //        skill: "치명타율 + 10%(→30%). 공격 + 5%(→15%)."
    },
    {
        name: "닌자",
        stats: [36,43,20,20],
        skill: ".."
        //        skill: "치명타율 + 10%(→30%), 치명타 후 적 부대에게 최대 생명 7%(→20%)의 추가 피해."
    },
    {
        name: "고블린 기사",
        stats: [36,43,20,20],
        skill: ".."
        //        skill: "병사의 치명타 확률 + 30%, 치명타 발생시 전투 후 적군의 버프를 1개 탈취, 1개의 강력한 디버프 부여"
    },
    {
        name: "투석기",
        stats: [31,37,17,20],
        skill: ".."
        //        skill: "부대 일반 공격 사거리 +1. 공격하여 전투 진입 시 주는 피해량 - 30%(→20%). 7%(→20%) 확률로 강력한 디버프 부여."
    },
    {
        name: "화염 저격수",
        stats: [34,40,19,23],
        skill: ".."
        //        skill: "공격하여 전투 진입 시 공격 + 10%(→30%),전투 후 상대 최대 생명 5%(→15%)의 피해를 추가로 준다."
    },
    {
        name: "다크엘프 저격수",
        stats: [31,40,17,26],
        skill: ".."
        //        skill: "생명이 100%인 부대 공격 시 전투 진입 후 공격, 방어 + 15%(→45%)."
    },
    {
        name: "드워프 모험가",
        stats: [34,37,17,20],
        skill: ".."
        //        skill: "영웅의 기술을 직선형태로 변경한다. 부대의 피해증가 + 15%"
    },
    {
        name: "천공사수",
        stats: [36,40,17,23],
        skill: ".."
        //        skill: "이 부대의 이동은 지형의 영향을 받지 않는다.공격하여 전투 진입 시 공격 + 10%(→30%)."
    },
    {
        name: "볼트 레인저",
        stats: [40,37,22,19],
        skill: ".."
        //        skill: "생명이 50% 이상일 때 공격을 받을 시 전투 진입 전 30%(→100%) 확률로 발동, 받는 피해량 -50%."
    },
    {
        name: "하이엘프",
        stats: [34,40,19,23],
        skill: ".."
        //        skill: "[숲] 또는 [산지]에 있을 때 공격 + 10%(→30%)."
    },
    {
        name: "데몬헌터",
        stats: [36,37,20,20],
        skill: ".."
        //        skill: "공격하여 전투 진입 전 30%(→75%) 확률로 적 부대 이동력 -2, 방어 -20%, 1턴 지속."
    },
    {
        name: "엔트 수호자",
        stats: [43,43,23,17],
        skill: ".."
        //        skill: "병사가 받는 치유 효과 + 3%, 병사 생명 100% 시 공격,방어,마방 +45%"
    },
    {
        name: "근위창병",
        stats: [43,40,23,17],
        skill: ".."
        //        skill: "병사의 생명이 70% 보다 낮을 때, 공격 +15%(→45%)."
    },
    {
        name: "수정 골렘",
        stats: [48,34,22,22],
        skill: "행동 종료 시, 병사 생명 30% 회복. 마법 공격을 받아 전투 진입시 받은 피해의 30% 반사	
"
    },
    {
        name: "할버드",
        stats: [48,37,23,17],
        skill: "공격을 받아 전투 진입 시 공격, 방어 + 10%(→30%).	"
    },
    {
        name: "발키리",
        stats: [40,43,22,20],
        skill: "공격하여 전투 진입 시 공격 +10%(→30%)% 30%(→75%) 확률로 적 부대 방어 -20%, 1턴 지속."
    },
    {
        name: "중장 창병",
        stats: [48,37,26,16],
        skill: "받는 물리 피해량 - 10%(→30%)."
    },
    {
        name: "용암 골렘",
        stats: [53,34,26,19],
        skill: "행동 종료 시 주위 2칸 안의 1개 적 부대에게 [작열] 부여:대상은 행동 종료 시 생명의 10%(→30%)를 잃는다."
    },
    {
        name: "다크 센츄리온",
        stats: [48,40,26,16],
        skill: "병사의 생명이 10% 이상일 때, 공격을 받아 전투 진입 시 전투 후 30%(→100%) 확률로 영웅의 [가시] 피해 발동."
    },
    {
        name: "광전사",
        stats: [40,43,22,19],
        skill: "치명타율 + 10% (→30%). 공격력 + 5% (→15%)."
    },
    {
        name: "하이랜더",
        stats: [43,40,22,20],
        skill: "공격 + 5%(→15%) 받는 모든 피해량 - 5%(→15%)."
    },
    {
        name: "왕녀 친위대",
        stats: [43,40,22,23],
        skill: "공격을 받아 전투시 병사의 사거리 +1 공격상승 + 30%, 받는 마법피해 - 30%"
    },
    {
        name: "중장 보병",
        stats: [43,40,23,19],
        skill: "공격하여 전투 진입 시 병사의 공격 + 10%(→30%). 공격 받아 전투 진입 시 병사의 방어 + 10%(→30%)."
    },
    {
        name: "오우거",
        stats: [48,43,20,19],
        skill: "생명이 이 부대 보다 낮은 적 부대 공격 시 전투 진입 후 공격, 방어 + 10%(→30%)."
    },
    {
        name: "암흑 근위대",
        stats: [53,37,23,19],
        skill: "공격하여 전투 진입 시 전투 후 적 부대 최대 생명 5%(→15%)의 피해를 주고 병사 생명 10%(→30%) 회복."
    },
    {
        name: "가면 메이드",
        stats: [36,40,23,23],
        skill: "전투 진입 전 부대의 생명 10%(→5%)를 소모하여 공격, 방어, 마방 + 15%(→45%)"
    },
    {
        name: "그레나디어",
        stats: [53,37,23,19],
        skill: "병사의 생명이 80% 이상일 시 방어 + 15%(→45%)."
    },
    {
        name: "오크 광전사",
        stats: [43,40,22,17],
        skill: "병사의 생명이 80% 이상일 시 공격 + 15%(→45%)."
    },
    {
        name: "개조인간",
        stats: [40,43,22,19],
        skill: "공격하여 전투 진입시 영웅과 함께 원거리 공격이 가능하며, 병사의 피해 + 30%"
    },
    {
        name: "리자드맨",
        stats: [40,43,22,19],
        skill: "물속에 있을 때 공격 +15%(→45%)."
    },
    {
        name: "파도의 정령",
        stats: [43,37,23,22],
        skill: "일반 공격 시 [마법 피해]를 준다. 수중에 있을 경우 병사가 받는 물리피해감소 - 45%, 공격상승 + 20%"
    },
    {
        name: "리바이어선",
        stats: [43,40,23,19],
        skill: "물속에 있을 때 생명이 50% 이상인 부대 공격 시 전투 진입 후 공격 +15%(→45%)."
    },
    {
        name: "거대 랍스터",
        stats: [43,37,26,16],
        skill: "물속에 있을 때 받는 모든 피해량 - 15%(→50%)."
    },
    {
        name: "머맨 로드",
        stats: [43,40,23,19],
        skill: "물속에 있을 때 공격, 방어 + 10%(→30%)."
    },
    {
        name: "마녀",
        stats: [34,40,17,28],
        skill: "일반 공격이 [마법 피해]를 준다. 병사의 생명이 100% 이상일 때, 공격, 마방 + 15%(→45%)."
    },
    {
        name: "마법사",
        stats: [34,37,19,23],
        skill: "일반 공격이 [마법 피해]를 준다. 공격 시 공격, 마방 + 10%(→30%)."
    },
    {
        name: "수정술사",
        stats: [34,37,22,19],
        skill: "일반 공격이 마법 피해를 준다.행동 종료시 병사의 생명 30% 회복. 물리공격을 받아 전투시 받은피해의 30% 반사"
    },
    {
        name: "뱀파이어 배트",
        stats: [43,45,22,22],
        skill: "공격하여 전투 진입 시 전투 후 가한 피해량의 15%(→45%)만큼 병사 생명 회복."
    },
    {
        name: "홀리 페가수스",
        stats: [40,43,23,23],
        skill: "병사의 생명이 50% 이상일 때, 공격하여 전투 진입 전 30%(→100%) 확률로 받는 피해량 -50%."
    },
    {
        name: "로열 그리폰",
        stats: [40,45,22,23],
        skill: "병사의 생명이 80% 이상일 때, 공격, 방어 + 10%(→30%)."
    },
    {
        name: "강철 날개용사",
        stats: [43,45,22,22],
        skill: "공격하여 전투시 공격 + 30%. 원거리 공격을 받아 전투진입시 방어, 마방 + 30%"
    },
    {
        name: "천사",
        stats: [43,43,22,26],
        skill: "받는 마법 피해량 - 15%(→45%). 병사의 생명이 50% 이상일 때, 공격, 방어 +7%(→20%)."
    },
    {
        name: "가고일",
        stats: [43,45,22,22],
        skill: "병사의 생명이 50% 이상일 때, 공격 +10%(→30%), 병사의 생명이 50% 보다 낮을 때, 방어 +10%(→30%)."
    },
    {
        name: "근위기병",
        stats: [43,40,23,17],
        skill: "공격하여 전투 진입 시 받는 모든 피해량 - 15%(→45%)."
    },
    {
        name: "헬하운드",
        stats: [40,45,20,19],
        skill: "공격하여 전투 진입 시 전투 후 주위 2칸 범위 내 모든 적 부대의 받는 피해량 + 10%(→20%)."
    },
    {
        name: "유니콘",
        stats: [43,43,22,22],
        skill: "일반 공격 시 [마법 피해]를 준다. 이동방식이 [야전]으로 변한다. [숲], [산지], [초원]에서 전투시 공격, 마방 + 30%"
    },
    {
        name: "전갈",
        stats: [43,43,23,17],
        skill: "공격하여 전투 진입시 병사공격 + 15%,치명타 확률 + 30%. [사막],[모래],[동굴] 지형에서 전투시 받는 피해 감소 - 30%"
    },
    {
        name: "마스터 디노",
        stats: [36,45,20,19],
        skill: "병사의 생명이 80% 이상일 때, 공격 + 15%(→45%)."
    },
    {
        name: "용기병",
        stats: [43,43,22,19],
        skill: "공격하여 전투 진입 시 공격, 방어 + 10%(→30%)."
    },
    {
        name: "템플러",
        stats: [40,40,22,26],
        skill: "[마물]과 전투 시 공격, 방어 +15%(→45%). 마방 +15%(→45%)."
    },
    {
        name: "천상의 수호자",
        stats: [36,43,22,22],
        skill: "공격 전 이동한 한 칸마다, 병사 공격 +5%(→15%) (최대+15%(→45%))."
    },
    {
        name: "중장기병",
        stats: [40,43,22,17],
        skill: "공격 + 7%(→20%)."
    },
    {
        name: "황가기병",
        stats: [43,43,23,17],
        skill: "병사의 생명이 80% 이상일 때, 받는 물리 피해량 - 15%(→45%)."
    },
    {
        name: "지옥불사수",
        stats: [34,40,20,19],
        skill: "망자 소생: 병사의 생명이 0%일 때 공격하여 전투 진입 시 전투 후 생명 15%(→45%) 회복.상대 부대 최대 생명 5%(→15%)의 추가 피해."
    },
    {
        name: "듀라한",
        stats: [40,40,22,20],
        skill: "망자 소생: 병사의 생명이 0%일 때 공격하여 전투 진입 시 전투 후 생명 15%(→45%) 회복. 마물 또는 승려 이외의 부대 공격 시 공격 + 10%(→30%)."
    },
    {
        name: "중장해골",
        stats: [43,40,22,19],
        skill: "망자 소생: 병사의 생명이 0%일 때 공격하여 전투 진입 시 전투 후 생명 15%(→45%) 회복. 공격을 받아 전투 진입 시 방어 + 10%(→30%).(마물 및 승려 제외)."
    },
    {
        name: "거미정령",
        stats: [43,37,22,22],
        skill: "일반 공격이 마법 피해를 준다. 공격하여 전투 진입시 75% 확률로 이동력 -2, 마방-20%, 지속 1회합"
    }
]
