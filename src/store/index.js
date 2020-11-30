import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gbs: {
      Observatory: {
        key: 'Observatory',
        name: 'Обсерватория',
      },
      Temple_of_Relics: {
        key: 'Temple_of_Relics',
        name: 'Храм реликвий',
      },
      Oracle_of_Delphi: {
        key: 'Oracle_of_Delphi',
        name: 'Дельфийский оракул',
      },
      Tower_of_Babel: {
        key: 'Tower_of_Babel',
        name: 'Вавилонская башня',
      },
      Statue_of_Zeus: {
        key: 'Statue_of_Zeus',
        name: 'Статуя Зевса',
      },
      Colosseum: {
        key: 'Colosseum',
        name: 'Колизей',
      },
      Lighthouse_of_Alexandria: {
        key: 'Lighthouse_of_Alexandria',
        name: 'Александрийский Маяк',
      },
      Hagia_Sophia: {
        key: 'Hagia_Sophia',
        name: 'Собор Святой Софии',
      },
      Cathedral_of_Aachen: {
        key: 'Cathedral_of_Aachen',
        name: 'Ахенский Собор',
      },
      St_Mark_s_Basilica: {
        key: 'St_Mark_s_Basilica',
        name: 'Собор Святого Марка',
      },
      Notre_Dame: {
        key: 'Notre_Dame',
        name: 'Нотр-Дам',
      },
      Saint_Basil_s_Cathedral: {
        key: 'Saint_Basil_s_Cathedral',
        name: 'Храм Василия Блаженного',
      },
      Castel_del_Monte: {
        key: 'Castel_del_Monte',
        name: 'Кастель-дель-Монте',
      },
      Deal_Castle: {
        key: 'Deal_Castle',
        name: 'Дильский замок',
      },
      Frauenkirche_of_Dresden: {
        key: 'Frauenkirche_of_Dresden',
        name: 'Фрауэнкирхе',
      },
      Capitol: {
        key: 'Capitol',
        name: 'Капитолий',
      },
      Royal_Albert_Hall: {
        key: 'Royal_Albert_Hall',
        name: 'Королевский Альберт-холл',
      },
      Chateau_Frontenac: {
        key: 'Chateau_Frontenac',
        name: 'Шато-Фронтенак',
      },
      Alcatraz: {
        key: 'Alcatraz',
        name: 'Алькатрас',
      },
      Space_Needle: {
        key: 'Space_Needle',
        name: 'Спейс-Нидл',
      },
      Atomium: {
        key: 'Atomium',
        name: 'Атомиум',
      },
      Cape_Canaveral: {
        key: 'Cape_Canaveral',
        name: 'Космодром на мысе Канаверал',
      },
      The_Habitat: {
        key: 'The_Habitat',
        name: 'Хабитат',
      },
      Lotus_Temple: {
        key: 'Lotus_Temple',
        name: 'Храм Лотоса',
      },
      Innovation_Tower: {
        key: 'Innovation_Tower',
        name: 'Башня Инноваций',
      },
      Truce_Tower: {
        key: 'Truce_Tower',
        name: 'Башня перемирия',
      },
      Voyager_V1: {
        key: 'Voyager_V1',
        name: 'Вояджер V1',
      },
      The_Arc: {
        key: 'The_Arc',
        name: 'Арка',
      },
      Rain_Forest_Project: {
        key: 'Rain_Forest_Project',
        name: 'Проект «Дождевой лес»',
      },
      Gaea_Statue: {
        key: 'Gaea_Statue',
        name: 'Статуя Геи',
      },
      Arctic_Orangery: {
        key: 'Arctic_Orangery',
        name: 'Арктическая оранжерея',
      },
      Seed_Vault: {
        key: 'Seed_Vault',
        name: 'Зернохранилище',
      },
      Atlantis_Museum: {
        key: 'Atlantis_Museum',
        name: 'Музей Атлантиды',
      },
      The_Kraken: {
        key: 'The_Kraken',
        name: 'Кракен',
      },
      The_Blue_Galaxy: {
        key: 'The_Blue_Galaxy',
        name: 'Синяя галактика',
      },
      Terracotta_Army: {
        key: 'Terracotta_Army',
        name: 'Терракотовая армия',
      },
      Himeji_Castle: {
        key: 'Himeji_Castle',
        name: 'Замок Химэдзи',
      },
      The_Virgo_Project: {
        key: 'The_Virgo_Project',
        name: 'Проект «Дева»',
      },
      Star_Gazer: {
        key: 'Star_Gazer',
        name: 'Звездочёт',
      },
      Space_Carrier: {
        key: 'Space_Carrier',
        name: 'Космический авианосец',
      },
    },
    gbsLevels: {
      Observatory: {
        levels: [
          {
            cost: 50,
            reward: [5, 5, 0, 0, 0],
          },
          {
            cost: 70,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 130,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 200,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 270,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 330,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 420,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 490,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 570,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 650,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 667,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 683,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 700,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 718,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 736,
            reward: [110, 55, 20, 5, 0],
          },
          {
            cost: 754,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 773,
            reward: [130, 65, 20, 5, 0],
          },
          {
            cost: 792,
            reward: [140, 70, 25, 5, 0],
          },
          {
            cost: 812,
            reward: [150, 75, 25, 5, 0],
          },
          {
            cost: 833,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 853,
            reward: [165, 85, 30, 10, 0],
          },
          {
            cost: 875,
            reward: [175, 90, 30, 10, 0],
          },
          {
            cost: 897,
            reward: [185, 95, 30, 10, 0],
          },
          {
            cost: 919,
            reward: [195, 100, 35, 10, 0],
          },
          {
            cost: 942,
            reward: [205, 105, 35, 10, 0],
          },
          {
            cost: 965,
            reward: [215, 110, 35, 10, 0],
          },
          {
            cost: 990,
            reward: [225, 115, 40, 10, 0],
          },
          {
            cost: 1014,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 1040,
            reward: [245, 125, 40, 10, 0],
          },
          {
            cost: 1066,
            reward: [255, 130, 45, 10, 0],
          },
          {
            cost: 1092,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1120,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1147,
            reward: [285, 145, 50, 15, 5],
          },
          {
            cost: 1176,
            reward: [300, 150, 50, 15, 5],
          },
          {
            cost: 1206,
            reward: [310, 155, 50, 15, 5],
          },
          {
            cost: 1236,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1267,
            reward: [330, 165, 55, 15, 5],
          },
          {
            cost: 1298,
            reward: [340, 170, 55, 15, 5],
          },
          {
            cost: 1331,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1364,
            reward: [365, 185, 60, 15, 5],
          },
          {
            cost: 1398,
            reward: [375, 190, 65, 15, 5],
          },
          {
            cost: 1433,
            reward: [385, 195, 65, 15, 5],
          },
          {
            cost: 1469,
            reward: [395, 200, 65, 15, 5],
          },
          {
            cost: 1505,
            reward: [405, 205, 70, 20, 5],
          },
          {
            cost: 1543,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1582,
            reward: [430, 215, 70, 20, 5],
          },
          {
            cost: 1621,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1662,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 1703,
            reward: [465, 235, 80, 20, 5],
          },
          {
            cost: 1746,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 1789,
            reward: [485, 245, 80, 20, 5],
          },
          {
            cost: 1834,
            reward: [500, 250, 85, 20, 5],
          },
          {
            cost: 1880,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 1927,
            reward: [520, 260, 85, 20, 5],
          },
          {
            cost: 1975,
            reward: [535, 270, 90, 25, 5],
          },
          {
            cost: 2025,
            reward: [545, 275, 90, 25, 5],
          },
          {
            cost: 2075,
            reward: [555, 280, 95, 25, 5],
          },
          {
            cost: 2127,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2180,
            reward: [580, 290, 95, 25, 5],
          },
          {
            cost: 2235,
            reward: [590, 295, 100, 25, 5],
          },
          {
            cost: 2290,
            reward: [605, 305, 100, 25, 5],
          },
          {
            cost: 2348,
            reward: [615, 310, 105, 25, 5],
          },
          {
            cost: 2406,
            reward: [630, 315, 105, 25, 5],
          },
          {
            cost: 2467,
            reward: [640, 320, 105, 25, 5],
          },
          {
            cost: 2528,
            reward: [650, 325, 110, 30, 5],
          },
          {
            cost: 2591,
            reward: [665, 335, 110, 30, 5],
          },
          {
            cost: 2656,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2723,
            reward: [690, 345, 115, 30, 5],
          },
          {
            cost: 2791,
            reward: [700, 350, 115, 30, 5],
          },
          {
            cost: 2860,
            reward: [715, 360, 120, 30, 5],
          },
          {
            cost: 2932,
            reward: [725, 365, 120, 30, 5],
          },
          {
            cost: 3005,
            reward: [735, 370, 125, 30, 5],
          },
          {
            cost: 3080,
            reward: [750, 375, 125, 30, 5],
          },
          {
            cost: 3157,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 3236,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 3317,
            reward: [785, 395, 130, 35, 5],
          },
          {
            cost: 3400,
            reward: [800, 400, 135, 35, 5],
          },
          {
            cost: 3485,
            reward: [810, 405, 135, 35, 5],
          },
          {
            cost: 3572,
            reward: [825, 415, 140, 35, 5],
          },
          {
            cost: 3661,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 3753,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 3847,
            reward: [860, 430, 145, 35, 5],
          },
          {
            cost: 3943,
            reward: [875, 440, 145, 35, 5],
          },
          {
            cost: 4041,
            reward: [890, 445, 150, 40, 10],
          },
          {
            cost: 4142,
            reward: [900, 450, 150, 40, 10],
          },
          {
            cost: 4246,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 4352,
            reward: [925, 465, 155, 40, 10],
          },
          {
            cost: 4461,
            reward: [940, 470, 155, 40, 10],
          },
          {
            cost: 4572,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 4687,
            reward: [965, 485, 160, 40, 10],
          },
          {
            cost: 4804,
            reward: [975, 490, 165, 40, 10],
          },
          {
            cost: 4924,
            reward: [990, 495, 165, 40, 10],
          },
          {
            cost: 5047,
            reward: [1005, 505, 170, 45, 10],
          },
          {
            cost: 5173,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 5303,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 5435,
            reward: [1040, 520, 175, 45, 10],
          },
          {
            cost: 5571,
            reward: [1055, 530, 175, 45, 10],
          },
          {
            cost: 5710,
            reward: [1070, 535, 180, 45, 10],
          },
          {
            cost: 5853,
            reward: [1080, 540, 180, 45, 10],
          },
          {
            cost: 5999,
            reward: [1095, 550, 185, 45, 10],
          },
          {
            cost: 6149,
            reward: [1110, 555, 185, 45, 10],
          },
          {
            cost: 6303,
            reward: [1120, 560, 185, 45, 10],
          },
          {
            cost: 6461,
            reward: [1135, 570, 190, 50, 10],
          },
          {
            cost: 6622,
            reward: [1150, 575, 190, 50, 10],
          },
          {
            cost: 6788,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 6957,
            reward: [1175, 590, 195, 50, 10],
          },
          {
            cost: 7131,
            reward: [1190, 595, 200, 50, 10],
          },
          {
            cost: 7309,
            reward: [1200, 600, 200, 50, 10],
          },
          {
            cost: 7492,
            reward: [1215, 610, 205, 50, 10],
          },
          {
            cost: 7679,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 7871,
            reward: [1240, 620, 205, 50, 10],
          },
          {
            cost: 8068,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 8270,
            reward: [1270, 635, 210, 55, 10],
          },
          {
            cost: 8477,
            reward: [1280, 640, 215, 55, 10],
          },
          {
            cost: 8688,
            reward: [1295, 650, 215, 55, 10],
          },
          {
            cost: 8906,
            reward: [1310, 655, 220, 55, 10],
          },
          {
            cost: 9128,
            reward: [1325, 665, 220, 55, 10],
          },
          {
            cost: 9357,
            reward: [1335, 670, 225, 55, 10],
          },
          {
            cost: 9590,
            reward: [1350, 675, 225, 55, 10],
          },
          {
            cost: 9830,
            reward: [1365, 685, 230, 60, 10],
          },
          {
            cost: 10076,
            reward: [1380, 690, 230, 60, 10],
          },
          {
            cost: 10328,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 10586,
            reward: [1405, 705, 235, 60, 10],
          },
          {
            cost: 10851,
            reward: [1420, 710, 235, 60, 10],
          },
          {
            cost: 11122,
            reward: [1430, 715, 240, 60, 10],
          },
          {
            cost: 11400,
            reward: [1445, 725, 240, 60, 10],
          },
          {
            cost: 11685,
            reward: [1460, 730, 245, 60, 10],
          },
          {
            cost: 11977,
            reward: [1475, 740, 245, 60, 10],
          },
          {
            cost: 12276,
            reward: [1490, 745, 250, 65, 15],
          },
          {
            cost: 12583,
            reward: [1500, 750, 250, 65, 15],
          },
          {
            cost: 12898,
            reward: [1515, 760, 255, 65, 15],
          },
          {
            cost: 13220,
            reward: [1530, 765, 255, 65, 15],
          },
          {
            cost: 13551,
            reward: [1545, 775, 260, 65, 15],
          },
          {
            cost: 13890,
            reward: [1555, 780, 260, 65, 15],
          },
          {
            cost: 14237,
            reward: [1570, 785, 260, 65, 15],
          },
        ],
      },
      Temple_of_Relics: {
        levels: [
          {
            cost: 50,
            reward: [5, 5, 0, 0, 0],
          },
          {
            cost: 70,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 130,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 200,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 270,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 330,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 420,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 490,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 570,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 650,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 667,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 683,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 700,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 718,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 736,
            reward: [110, 55, 20, 5, 0],
          },
          {
            cost: 754,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 773,
            reward: [130, 65, 20, 5, 0],
          },
          {
            cost: 792,
            reward: [140, 70, 25, 5, 0],
          },
          {
            cost: 812,
            reward: [150, 75, 25, 5, 0],
          },
          {
            cost: 833,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 853,
            reward: [165, 85, 30, 10, 0],
          },
          {
            cost: 875,
            reward: [175, 90, 30, 10, 0],
          },
          {
            cost: 897,
            reward: [185, 95, 30, 10, 0],
          },
          {
            cost: 919,
            reward: [195, 100, 35, 10, 0],
          },
          {
            cost: 942,
            reward: [205, 105, 35, 10, 0],
          },
          {
            cost: 965,
            reward: [215, 110, 35, 10, 0],
          },
          {
            cost: 990,
            reward: [225, 115, 40, 10, 0],
          },
          {
            cost: 1014,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 1040,
            reward: [245, 125, 40, 10, 0],
          },
          {
            cost: 1066,
            reward: [255, 130, 45, 10, 0],
          },
          {
            cost: 1092,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1120,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1147,
            reward: [285, 145, 50, 15, 5],
          },
          {
            cost: 1176,
            reward: [300, 150, 50, 15, 5],
          },
          {
            cost: 1206,
            reward: [310, 155, 50, 15, 5],
          },
          {
            cost: 1236,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1267,
            reward: [330, 165, 55, 15, 5],
          },
          {
            cost: 1298,
            reward: [340, 170, 55, 15, 5],
          },
          {
            cost: 1331,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1364,
            reward: [365, 185, 60, 15, 5],
          },
          {
            cost: 1398,
            reward: [375, 190, 65, 15, 5],
          },
          {
            cost: 1433,
            reward: [385, 195, 65, 15, 5],
          },
          {
            cost: 1469,
            reward: [395, 200, 65, 15, 5],
          },
          {
            cost: 1505,
            reward: [405, 205, 70, 20, 5],
          },
          {
            cost: 1543,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1582,
            reward: [430, 215, 70, 20, 5],
          },
          {
            cost: 1621,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1662,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 1703,
            reward: [465, 235, 80, 20, 5],
          },
          {
            cost: 1746,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 1789,
            reward: [485, 245, 80, 20, 5],
          },
          {
            cost: 1834,
            reward: [500, 250, 85, 20, 5],
          },
          {
            cost: 1880,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 1927,
            reward: [520, 260, 85, 20, 5],
          },
          {
            cost: 1975,
            reward: [535, 270, 90, 25, 5],
          },
          {
            cost: 2025,
            reward: [545, 275, 90, 25, 5],
          },
          {
            cost: 2075,
            reward: [555, 280, 95, 25, 5],
          },
          {
            cost: 2127,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2180,
            reward: [580, 290, 95, 25, 5],
          },
          {
            cost: 2235,
            reward: [590, 295, 100, 25, 5],
          },
          {
            cost: 2290,
            reward: [605, 305, 100, 25, 5],
          },
          {
            cost: 2348,
            reward: [615, 310, 105, 25, 5],
          },
          {
            cost: 2406,
            reward: [630, 315, 105, 25, 5],
          },
          {
            cost: 2467,
            reward: [640, 320, 105, 25, 5],
          },
          {
            cost: 2528,
            reward: [650, 325, 110, 30, 5],
          },
          {
            cost: 2591,
            reward: [665, 335, 110, 30, 5],
          },
          {
            cost: 2656,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2723,
            reward: [690, 345, 115, 30, 5],
          },
          {
            cost: 2791,
            reward: [700, 350, 115, 30, 5],
          },
          {
            cost: 2860,
            reward: [715, 360, 120, 30, 5],
          },
          {
            cost: 2932,
            reward: [725, 365, 120, 30, 5],
          },
          {
            cost: 3005,
            reward: [735, 370, 125, 30, 5],
          },
          {
            cost: 3080,
            reward: [750, 375, 125, 30, 5],
          },
          {
            cost: 3157,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 3236,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 3317,
            reward: [785, 395, 130, 35, 5],
          },
          {
            cost: 3400,
            reward: [800, 400, 135, 35, 5],
          },
          {
            cost: 3485,
            reward: [810, 405, 135, 35, 5],
          },
          {
            cost: 3572,
            reward: [825, 415, 140, 35, 5],
          },
          {
            cost: 3661,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 3753,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 3847,
            reward: [860, 430, 145, 35, 5],
          },
          {
            cost: 3943,
            reward: [875, 440, 145, 35, 5],
          },
          {
            cost: 4041,
            reward: [890, 445, 150, 40, 10],
          },
          {
            cost: 4142,
            reward: [900, 450, 150, 40, 10],
          },
          {
            cost: 4246,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 4352,
            reward: [925, 465, 155, 40, 10],
          },
          {
            cost: 4461,
            reward: [940, 470, 155, 40, 10],
          },
          {
            cost: 4572,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 4687,
            reward: [965, 485, 160, 40, 10],
          },
          {
            cost: 4804,
            reward: [975, 490, 165, 40, 10],
          },
          {
            cost: 4924,
            reward: [990, 495, 165, 40, 10],
          },
          {
            cost: 5047,
            reward: [1005, 505, 170, 45, 10],
          },
          {
            cost: 5173,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 5303,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 5435,
            reward: [1040, 520, 175, 45, 10],
          },
          {
            cost: 5571,
            reward: [1055, 530, 175, 45, 10],
          },
          {
            cost: 5710,
            reward: [1070, 535, 180, 45, 10],
          },
          {
            cost: 5853,
            reward: [1080, 540, 180, 45, 10],
          },
          {
            cost: 5999,
            reward: [1095, 550, 185, 45, 10],
          },
          {
            cost: 6149,
            reward: [1110, 555, 185, 45, 10],
          },
          {
            cost: 6303,
            reward: [1120, 560, 185, 45, 10],
          },
          {
            cost: 6461,
            reward: [1135, 570, 190, 50, 10],
          },
          {
            cost: 6622,
            reward: [1150, 575, 190, 50, 10],
          },
          {
            cost: 6788,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 6957,
            reward: [1175, 590, 195, 50, 10],
          },
          {
            cost: 7131,
            reward: [1190, 595, 200, 50, 10],
          },
          {
            cost: 7309,
            reward: [1200, 600, 200, 50, 10],
          },
          {
            cost: 7492,
            reward: [1215, 610, 205, 50, 10],
          },
          {
            cost: 7679,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 7871,
            reward: [1240, 620, 205, 50, 10],
          },
          {
            cost: 8068,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 8270,
            reward: [1270, 635, 210, 55, 10],
          },
          {
            cost: 8477,
            reward: [1280, 640, 215, 55, 10],
          },
          {
            cost: 8688,
            reward: [1295, 650, 215, 55, 10],
          },
          {
            cost: 8906,
            reward: [1310, 655, 220, 55, 10],
          },
          {
            cost: 9128,
            reward: [1325, 665, 220, 55, 10],
          },
          {
            cost: 9357,
            reward: [1335, 670, 225, 55, 10],
          },
          {
            cost: 9590,
            reward: [1350, 675, 225, 55, 10],
          },
          {
            cost: 9830,
            reward: [1365, 685, 230, 60, 10],
          },
          {
            cost: 10076,
            reward: [1380, 690, 230, 60, 10],
          },
          {
            cost: 10328,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 10586,
            reward: [1405, 705, 235, 60, 10],
          },
          {
            cost: 10851,
            reward: [1420, 710, 235, 60, 10],
          },
          {
            cost: 11122,
            reward: [1430, 715, 240, 60, 10],
          },
          {
            cost: 11400,
            reward: [1445, 725, 240, 60, 10],
          },
          {
            cost: 11685,
            reward: [1460, 730, 245, 60, 10],
          },
          {
            cost: 11977,
            reward: [1475, 740, 245, 60, 10],
          },
          {
            cost: 12276,
            reward: [1490, 745, 250, 65, 15],
          },
          {
            cost: 12583,
            reward: [1500, 750, 250, 65, 15],
          },
          {
            cost: 12898,
            reward: [1515, 760, 255, 65, 15],
          },
          {
            cost: 13220,
            reward: [1530, 765, 255, 65, 15],
          },
          {
            cost: 13551,
            reward: [1545, 775, 260, 65, 15],
          },
          {
            cost: 13890,
            reward: [1555, 780, 260, 65, 15],
          },
          {
            cost: 14237,
            reward: [1570, 785, 260, 65, 15],
          },
        ],
      },
      Oracle_of_Delphi: {
        levels: [
          {
            cost: 20,
            reward: [5, 5, 0, 0, 0],
          },
          {
            cost: 40,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 60,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 130,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 210,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 290,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 370,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 460,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 550,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 650,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 667,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 683,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 700,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 718,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 736,
            reward: [110, 55, 20, 5, 0],
          },
          {
            cost: 754,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 773,
            reward: [130, 65, 20, 5, 0],
          },
          {
            cost: 792,
            reward: [140, 70, 25, 5, 0],
          },
          {
            cost: 812,
            reward: [150, 75, 25, 5, 0],
          },
          {
            cost: 833,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 853,
            reward: [165, 85, 30, 10, 0],
          },
          {
            cost: 875,
            reward: [175, 90, 30, 10, 0],
          },
          {
            cost: 897,
            reward: [185, 95, 30, 10, 0],
          },
          {
            cost: 919,
            reward: [195, 100, 35, 10, 0],
          },
          {
            cost: 942,
            reward: [205, 105, 35, 10, 0],
          },
          {
            cost: 965,
            reward: [215, 110, 35, 10, 0],
          },
          {
            cost: 990,
            reward: [225, 115, 40, 10, 0],
          },
          {
            cost: 1014,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 1040,
            reward: [245, 125, 40, 10, 0],
          },
          {
            cost: 1066,
            reward: [255, 130, 45, 10, 0],
          },
          {
            cost: 1092,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1120,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1147,
            reward: [285, 145, 50, 15, 5],
          },
          {
            cost: 1176,
            reward: [300, 150, 50, 15, 5],
          },
          {
            cost: 1206,
            reward: [310, 155, 50, 15, 5],
          },
          {
            cost: 1236,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1267,
            reward: [330, 165, 55, 15, 5],
          },
          {
            cost: 1298,
            reward: [340, 170, 55, 15, 5],
          },
          {
            cost: 1331,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1364,
            reward: [365, 185, 60, 15, 5],
          },
          {
            cost: 1398,
            reward: [375, 190, 65, 15, 5],
          },
          {
            cost: 1433,
            reward: [385, 195, 65, 15, 5],
          },
          {
            cost: 1469,
            reward: [395, 200, 65, 15, 5],
          },
          {
            cost: 1505,
            reward: [405, 205, 70, 20, 5],
          },
          {
            cost: 1543,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1582,
            reward: [430, 215, 70, 20, 5],
          },
          {
            cost: 1621,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1662,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 1703,
            reward: [465, 235, 80, 20, 5],
          },
          {
            cost: 1746,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 1789,
            reward: [485, 245, 80, 20, 5],
          },
          {
            cost: 1834,
            reward: [500, 250, 85, 20, 5],
          },
          {
            cost: 1880,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 1927,
            reward: [520, 260, 85, 20, 5],
          },
          {
            cost: 1975,
            reward: [535, 270, 90, 25, 5],
          },
          {
            cost: 2025,
            reward: [545, 275, 90, 25, 5],
          },
          {
            cost: 2075,
            reward: [555, 280, 95, 25, 5],
          },
          {
            cost: 2127,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2180,
            reward: [580, 290, 95, 25, 5],
          },
          {
            cost: 2235,
            reward: [590, 295, 100, 25, 5],
          },
          {
            cost: 2290,
            reward: [605, 305, 100, 25, 5],
          },
          {
            cost: 2348,
            reward: [615, 310, 105, 25, 5],
          },
          {
            cost: 2406,
            reward: [630, 315, 105, 25, 5],
          },
          {
            cost: 2467,
            reward: [640, 320, 105, 25, 5],
          },
          {
            cost: 2528,
            reward: [650, 325, 110, 30, 5],
          },
          {
            cost: 2591,
            reward: [665, 335, 110, 30, 5],
          },
          {
            cost: 2656,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2723,
            reward: [690, 345, 115, 30, 5],
          },
          {
            cost: 2791,
            reward: [700, 350, 115, 30, 5],
          },
          {
            cost: 2860,
            reward: [715, 360, 120, 30, 5],
          },
          {
            cost: 2932,
            reward: [725, 365, 120, 30, 5],
          },
          {
            cost: 3005,
            reward: [735, 370, 125, 30, 5],
          },
          {
            cost: 3080,
            reward: [750, 375, 125, 30, 5],
          },
          {
            cost: 3157,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 3236,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 3317,
            reward: [785, 395, 130, 35, 5],
          },
          {
            cost: 3400,
            reward: [800, 400, 135, 35, 5],
          },
          {
            cost: 3485,
            reward: [810, 405, 135, 35, 5],
          },
          {
            cost: 3572,
            reward: [825, 415, 140, 35, 5],
          },
          {
            cost: 3661,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 3753,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 3847,
            reward: [860, 430, 145, 35, 5],
          },
          {
            cost: 3943,
            reward: [875, 440, 145, 35, 5],
          },
          {
            cost: 4041,
            reward: [890, 445, 150, 40, 10],
          },
          {
            cost: 4142,
            reward: [900, 450, 150, 40, 10],
          },
          {
            cost: 4246,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 4352,
            reward: [925, 465, 155, 40, 10],
          },
          {
            cost: 4461,
            reward: [940, 470, 155, 40, 10],
          },
          {
            cost: 4572,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 4687,
            reward: [965, 485, 160, 40, 10],
          },
          {
            cost: 4804,
            reward: [975, 490, 165, 40, 10],
          },
          {
            cost: 4924,
            reward: [990, 495, 165, 40, 10],
          },
          {
            cost: 5047,
            reward: [1005, 505, 170, 45, 10],
          },
          {
            cost: 5173,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 5303,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 5435,
            reward: [1040, 520, 175, 45, 10],
          },
          {
            cost: 5571,
            reward: [1055, 530, 175, 45, 10],
          },
          {
            cost: 5710,
            reward: [1070, 535, 180, 45, 10],
          },
          {
            cost: 5853,
            reward: [1080, 540, 180, 45, 10],
          },
          {
            cost: 5999,
            reward: [1095, 550, 185, 45, 10],
          },
          {
            cost: 6149,
            reward: [1110, 555, 185, 45, 10],
          },
          {
            cost: 6303,
            reward: [1120, 560, 185, 45, 10],
          },
          {
            cost: 6461,
            reward: [1135, 570, 190, 50, 10],
          },
          {
            cost: 6622,
            reward: [1150, 575, 190, 50, 10],
          },
          {
            cost: 6788,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 6957,
            reward: [1175, 590, 195, 50, 10],
          },
          {
            cost: 7131,
            reward: [1190, 595, 200, 50, 10],
          },
          {
            cost: 7309,
            reward: [1200, 600, 200, 50, 10],
          },
          {
            cost: 7492,
            reward: [1215, 610, 205, 50, 10],
          },
          {
            cost: 7679,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 7871,
            reward: [1240, 620, 205, 50, 10],
          },
          {
            cost: 8068,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 8270,
            reward: [1270, 635, 210, 55, 10],
          },
          {
            cost: 8477,
            reward: [1280, 640, 215, 55, 10],
          },
          {
            cost: 8688,
            reward: [1295, 650, 215, 55, 10],
          },
          {
            cost: 8906,
            reward: [1310, 655, 220, 55, 10],
          },
          {
            cost: 9128,
            reward: [1325, 665, 220, 55, 10],
          },
          {
            cost: 9357,
            reward: [1335, 670, 225, 55, 10],
          },
          {
            cost: 9590,
            reward: [1350, 675, 225, 55, 10],
          },
          {
            cost: 9830,
            reward: [1365, 685, 230, 60, 10],
          },
          {
            cost: 10076,
            reward: [1380, 690, 230, 60, 10],
          },
          {
            cost: 10328,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 10586,
            reward: [1405, 705, 235, 60, 10],
          },
          {
            cost: 10851,
            reward: [1420, 710, 235, 60, 10],
          },
          {
            cost: 11122,
            reward: [1430, 715, 240, 60, 10],
          },
          {
            cost: 11400,
            reward: [1445, 725, 240, 60, 10],
          },
          {
            cost: 11685,
            reward: [1460, 730, 245, 60, 10],
          },
          {
            cost: 11977,
            reward: [1475, 740, 245, 60, 10],
          },
          {
            cost: 12276,
            reward: [1490, 745, 250, 65, 15],
          },
          {
            cost: 12583,
            reward: [1500, 750, 250, 65, 15],
          },
          {
            cost: 12898,
            reward: [1515, 760, 255, 65, 15],
          },
          {
            cost: 13220,
            reward: [1530, 765, 255, 65, 15],
          },
          {
            cost: 13551,
            reward: [1545, 775, 260, 65, 15],
          },
          {
            cost: 13890,
            reward: [1555, 780, 260, 65, 15],
          },
          {
            cost: 14237,
            reward: [1570, 785, 260, 65, 15],
          },
        ],
      },
      Tower_of_Babel: {
        levels: [
          {
            cost: 40,
            reward: [5, 5, 0, 0, 0],
          },
          {
            cost: 60,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 100,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 150,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 210,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 270,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 330,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 380,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 450,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 510,
            reward: [55, 30, 10, 5, 0],
          },
          {
            cost: 523,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 536,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 550,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 563,
            reward: [80, 40, 15, 5, 0],
          },
          {
            cost: 578,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 592,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 607,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 622,
            reward: [110, 55, 20, 5, 0],
          },
          {
            cost: 637,
            reward: [115, 60, 20, 5, 0],
          },
          {
            cost: 653,
            reward: [125, 65, 20, 5, 0],
          },
          {
            cost: 670,
            reward: [130, 65, 20, 5, 0],
          },
          {
            cost: 686,
            reward: [140, 70, 25, 5, 0],
          },
          {
            cost: 704,
            reward: [145, 75, 25, 5, 0],
          },
          {
            cost: 721,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 739,
            reward: [160, 80, 25, 5, 0],
          },
          {
            cost: 758,
            reward: [170, 85, 30, 10, 0],
          },
          {
            cost: 777,
            reward: [180, 90, 30, 10, 0],
          },
          {
            cost: 796,
            reward: [185, 95, 30, 10, 0],
          },
          {
            cost: 816,
            reward: [195, 100, 35, 10, 0],
          },
          {
            cost: 836,
            reward: [200, 100, 35, 10, 0],
          },
          {
            cost: 857,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 879,
            reward: [220, 110, 35, 10, 0],
          },
          {
            cost: 900,
            reward: [225, 115, 40, 10, 0],
          },
          {
            cost: 923,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 946,
            reward: [245, 125, 40, 10, 0],
          },
          {
            cost: 970,
            reward: [250, 125, 40, 10, 0],
          },
          {
            cost: 994,
            reward: [260, 130, 45, 10, 0],
          },
          {
            cost: 1019,
            reward: [270, 135, 45, 10, 0],
          },
          {
            cost: 1044,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1070,
            reward: [285, 145, 50, 15, 5],
          },
          {
            cost: 1097,
            reward: [295, 150, 50, 15, 5],
          },
          {
            cost: 1124,
            reward: [300, 150, 50, 15, 5],
          },
          {
            cost: 1153,
            reward: [310, 155, 50, 15, 5],
          },
          {
            cost: 1181,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1211,
            reward: [330, 165, 55, 15, 5],
          },
          {
            cost: 1241,
            reward: [340, 170, 55, 15, 5],
          },
          {
            cost: 1272,
            reward: [345, 175, 60, 15, 5],
          },
          {
            cost: 1304,
            reward: [355, 180, 60, 15, 5],
          },
          {
            cost: 1336,
            reward: [365, 185, 60, 15, 5],
          },
          {
            cost: 1370,
            reward: [375, 190, 65, 15, 5],
          },
          {
            cost: 1404,
            reward: [380, 190, 65, 15, 5],
          },
          {
            cost: 1439,
            reward: [390, 195, 65, 15, 5],
          },
          {
            cost: 1475,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1512,
            reward: [410, 205, 70, 20, 5],
          },
          {
            cost: 1550,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1589,
            reward: [430, 215, 70, 20, 5],
          },
          {
            cost: 1628,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1669,
            reward: [445, 225, 75, 20, 5],
          },
          {
            cost: 1711,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1753,
            reward: [465, 235, 80, 20, 5],
          },
          {
            cost: 1797,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 1842,
            reward: [485, 245, 80, 20, 5],
          },
          {
            cost: 1888,
            reward: [495, 250, 85, 20, 5],
          },
          {
            cost: 1935,
            reward: [505, 255, 85, 20, 5],
          },
          {
            cost: 1984,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 2033,
            reward: [520, 260, 85, 20, 5],
          },
          {
            cost: 2084,
            reward: [530, 265, 90, 25, 5],
          },
          {
            cost: 2136,
            reward: [540, 270, 90, 25, 5],
          },
          {
            cost: 2190,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2244,
            reward: [560, 280, 95, 25, 5],
          },
          {
            cost: 2300,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2358,
            reward: [580, 290, 95, 25, 5],
          },
          {
            cost: 2417,
            reward: [590, 295, 100, 25, 5],
          },
          {
            cost: 2477,
            reward: [600, 300, 100, 25, 5],
          },
          {
            cost: 2539,
            reward: [610, 305, 100, 25, 5],
          },
          {
            cost: 2603,
            reward: [620, 310, 105, 25, 5],
          },
          {
            cost: 2668,
            reward: [630, 315, 105, 25, 5],
          },
          {
            cost: 2734,
            reward: [640, 320, 105, 25, 5],
          },
          {
            cost: 2803,
            reward: [650, 325, 110, 30, 5],
          },
          {
            cost: 2873,
            reward: [660, 330, 110, 30, 5],
          },
          {
            cost: 2945,
            reward: [670, 335, 110, 30, 5],
          },
          {
            cost: 3018,
            reward: [680, 340, 115, 30, 5],
          },
          {
            cost: 3094,
            reward: [690, 345, 115, 30, 5],
          },
          {
            cost: 3171,
            reward: [700, 350, 115, 30, 5],
          },
          {
            cost: 3250,
            reward: [710, 355, 120, 30, 5],
          },
          {
            cost: 3332,
            reward: [720, 360, 120, 30, 5],
          },
          {
            cost: 3415,
            reward: [730, 365, 120, 30, 5],
          },
          {
            cost: 3500,
            reward: [740, 370, 125, 30, 5],
          },
          {
            cost: 3588,
            reward: [750, 375, 125, 30, 5],
          },
          {
            cost: 3677,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 3769,
            reward: [770, 385, 130, 35, 5],
          },
          {
            cost: 3864,
            reward: [780, 390, 130, 35, 5],
          },
          {
            cost: 3960,
            reward: [790, 395, 130, 35, 5],
          },
          {
            cost: 4059,
            reward: [800, 400, 135, 35, 5],
          },
          {
            cost: 4161,
            reward: [810, 405, 135, 35, 5],
          },
          {
            cost: 4265,
            reward: [820, 410, 135, 35, 5],
          },
          {
            cost: 4371,
            reward: [830, 415, 140, 35, 5],
          },
          {
            cost: 4480,
            reward: [840, 420, 140, 35, 5],
          },
          {
            cost: 4592,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 4707,
            reward: [860, 430, 145, 35, 5],
          },
          {
            cost: 4825,
            reward: [870, 435, 145, 35, 5],
          },
          {
            cost: 4945,
            reward: [880, 440, 145, 35, 5],
          },
          {
            cost: 5069,
            reward: [890, 445, 150, 40, 10],
          },
          {
            cost: 5196,
            reward: [905, 455, 150, 40, 10],
          },
          {
            cost: 5326,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 5459,
            reward: [925, 465, 155, 40, 10],
          },
          {
            cost: 5595,
            reward: [935, 470, 155, 40, 10],
          },
          {
            cost: 5735,
            reward: [945, 475, 160, 40, 10],
          },
          {
            cost: 5879,
            reward: [955, 480, 160, 40, 10],
          },
          {
            cost: 6025,
            reward: [965, 485, 160, 40, 10],
          },
          {
            cost: 6176,
            reward: [975, 490, 165, 40, 10],
          },
          {
            cost: 6331,
            reward: [985, 495, 165, 40, 10],
          },
          {
            cost: 6489,
            reward: [995, 500, 165, 40, 10],
          },
          {
            cost: 6651,
            reward: [1010, 505, 170, 45, 10],
          },
          {
            cost: 6817,
            reward: [1020, 510, 170, 45, 10],
          },
          {
            cost: 6988,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 7162,
            reward: [1040, 520, 175, 45, 10],
          },
          {
            cost: 7341,
            reward: [1050, 525, 175, 45, 10],
          },
          {
            cost: 7525,
            reward: [1060, 530, 175, 45, 10],
          },
          {
            cost: 7713,
            reward: [1070, 535, 180, 45, 10],
          },
          {
            cost: 7906,
            reward: [1085, 545, 180, 45, 10],
          },
          {
            cost: 8103,
            reward: [1095, 550, 185, 45, 10],
          },
          {
            cost: 8306,
            reward: [1105, 555, 185, 45, 10],
          },
          {
            cost: 8514,
            reward: [1115, 560, 185, 45, 10],
          },
          {
            cost: 8726,
            reward: [1125, 565, 190, 50, 10],
          },
          {
            cost: 8945,
            reward: [1135, 570, 190, 50, 10],
          },
          {
            cost: 9168,
            reward: [1150, 575, 190, 50, 10],
          },
          {
            cost: 9397,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 9632,
            reward: [1170, 585, 195, 50, 10],
          },
          {
            cost: 9873,
            reward: [1180, 590, 195, 50, 10],
          },
          {
            cost: 10120,
            reward: [1190, 595, 200, 50, 10],
          },
          {
            cost: 10373,
            reward: [1200, 600, 200, 50, 10],
          },
          {
            cost: 10632,
            reward: [1215, 610, 205, 50, 10],
          },
          {
            cost: 10898,
            reward: [1225, 615, 205, 50, 10],
          },
          {
            cost: 11171,
            reward: [1235, 620, 205, 50, 10],
          },
          {
            cost: 11450,
            reward: [1245, 625, 210, 55, 10],
          },
          {
            cost: 11736,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 12029,
            reward: [1270, 635, 210, 55, 10],
          },
          {
            cost: 12330,
            reward: [1280, 640, 215, 55, 10],
          },
          {
            cost: 12638,
            reward: [1290, 645, 215, 55, 10],
          },
          {
            cost: 12954,
            reward: [1300, 650, 215, 55, 10],
          },
          {
            cost: 13278,
            reward: [1310, 655, 220, 55, 10],
          },
          {
            cost: 13610,
            reward: [1325, 665, 220, 55, 10],
          },
          {
            cost: 13950,
            reward: [1335, 670, 225, 55, 10],
          },
          {
            cost: 14299,
            reward: [1345, 675, 225, 55, 10],
          },
          {
            cost: 14657,
            reward: [1355, 680, 225, 55, 10],
          },
          {
            cost: 15023,
            reward: [1370, 685, 230, 60, 10],
          },
          {
            cost: 15398,
            reward: [1380, 690, 230, 60, 10],
          },
          {
            cost: 15783,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 16178,
            reward: [1400, 700, 235, 60, 10],
          },
          {
            cost: 16582,
            reward: [1415, 710, 235, 60, 10],
          },
          {
            cost: 16997,
            reward: [1425, 715, 240, 60, 10],
          },
          {
            cost: 17422,
            reward: [1435, 720, 240, 60, 10],
          },
          {
            cost: 17857,
            reward: [1445, 725, 240, 60, 10],
          },
          {
            cost: 18304,
            reward: [1460, 730, 245, 60, 10],
          },
          {
            cost: 18761,
            reward: [1470, 735, 245, 60, 10],
          },
          {
            cost: 19230,
            reward: [1480, 740, 245, 60, 10],
          },
          {
            cost: 19711,
            reward: [1490, 745, 250, 65, 15],
          },
          {
            cost: 20204,
            reward: [1505, 755, 250, 65, 15],
          },
          {
            cost: 20709,
            reward: [1515, 760, 255, 65, 15],
          },
          {
            cost: 21227,
            reward: [1525, 765, 255, 65, 15],
          },
        ],
      },
      Statue_of_Zeus: {
        levels: [
          {
            cost: 40,
            reward: [5, 5, 0, 0, 0],
          },
          {
            cost: 60,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 100,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 150,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 210,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 270,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 330,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 380,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 450,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 510,
            reward: [55, 30, 10, 5, 0],
          },
          {
            cost: 523,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 536,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 550,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 563,
            reward: [80, 40, 15, 5, 0],
          },
          {
            cost: 578,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 592,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 607,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 622,
            reward: [110, 55, 20, 5, 0],
          },
          {
            cost: 637,
            reward: [115, 60, 20, 5, 0],
          },
          {
            cost: 653,
            reward: [125, 65, 20, 5, 0],
          },
          {
            cost: 670,
            reward: [130, 65, 20, 5, 0],
          },
          {
            cost: 686,
            reward: [140, 70, 25, 5, 0],
          },
          {
            cost: 704,
            reward: [145, 75, 25, 5, 0],
          },
          {
            cost: 721,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 739,
            reward: [160, 80, 25, 5, 0],
          },
          {
            cost: 758,
            reward: [170, 85, 30, 10, 0],
          },
          {
            cost: 777,
            reward: [180, 90, 30, 10, 0],
          },
          {
            cost: 796,
            reward: [185, 95, 30, 10, 0],
          },
          {
            cost: 816,
            reward: [195, 100, 35, 10, 0],
          },
          {
            cost: 836,
            reward: [200, 100, 35, 10, 0],
          },
          {
            cost: 857,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 879,
            reward: [220, 110, 35, 10, 0],
          },
          {
            cost: 900,
            reward: [225, 115, 40, 10, 0],
          },
          {
            cost: 923,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 946,
            reward: [245, 125, 40, 10, 0],
          },
          {
            cost: 970,
            reward: [250, 125, 40, 10, 0],
          },
          {
            cost: 994,
            reward: [260, 130, 45, 10, 0],
          },
          {
            cost: 1019,
            reward: [270, 135, 45, 10, 0],
          },
          {
            cost: 1044,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1070,
            reward: [285, 145, 50, 15, 5],
          },
          {
            cost: 1097,
            reward: [295, 150, 50, 15, 5],
          },
          {
            cost: 1124,
            reward: [300, 150, 50, 15, 5],
          },
          {
            cost: 1153,
            reward: [310, 155, 50, 15, 5],
          },
          {
            cost: 1181,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1211,
            reward: [330, 165, 55, 15, 5],
          },
          {
            cost: 1241,
            reward: [340, 170, 55, 15, 5],
          },
          {
            cost: 1272,
            reward: [345, 175, 60, 15, 5],
          },
          {
            cost: 1304,
            reward: [355, 180, 60, 15, 5],
          },
          {
            cost: 1336,
            reward: [365, 185, 60, 15, 5],
          },
          {
            cost: 1370,
            reward: [375, 190, 65, 15, 5],
          },
          {
            cost: 1404,
            reward: [380, 190, 65, 15, 5],
          },
          {
            cost: 1439,
            reward: [390, 195, 65, 15, 5],
          },
          {
            cost: 1475,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1512,
            reward: [410, 205, 70, 20, 5],
          },
          {
            cost: 1550,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1589,
            reward: [430, 215, 70, 20, 5],
          },
          {
            cost: 1628,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1669,
            reward: [445, 225, 75, 20, 5],
          },
          {
            cost: 1711,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1753,
            reward: [465, 235, 80, 20, 5],
          },
          {
            cost: 1797,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 1842,
            reward: [485, 245, 80, 20, 5],
          },
          {
            cost: 1888,
            reward: [495, 250, 85, 20, 5],
          },
          {
            cost: 1935,
            reward: [505, 255, 85, 20, 5],
          },
          {
            cost: 1984,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 2033,
            reward: [520, 260, 85, 20, 5],
          },
          {
            cost: 2084,
            reward: [530, 265, 90, 25, 5],
          },
          {
            cost: 2136,
            reward: [540, 270, 90, 25, 5],
          },
          {
            cost: 2190,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2244,
            reward: [560, 280, 95, 25, 5],
          },
          {
            cost: 2300,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2358,
            reward: [580, 290, 95, 25, 5],
          },
          {
            cost: 2417,
            reward: [590, 295, 100, 25, 5],
          },
          {
            cost: 2477,
            reward: [600, 300, 100, 25, 5],
          },
          {
            cost: 2539,
            reward: [610, 305, 100, 25, 5],
          },
          {
            cost: 2603,
            reward: [620, 310, 105, 25, 5],
          },
          {
            cost: 2668,
            reward: [630, 315, 105, 25, 5],
          },
          {
            cost: 2734,
            reward: [640, 320, 105, 25, 5],
          },
          {
            cost: 2803,
            reward: [650, 325, 110, 30, 5],
          },
          {
            cost: 2873,
            reward: [660, 330, 110, 30, 5],
          },
          {
            cost: 2945,
            reward: [670, 335, 110, 30, 5],
          },
          {
            cost: 3018,
            reward: [680, 340, 115, 30, 5],
          },
          {
            cost: 3094,
            reward: [690, 345, 115, 30, 5],
          },
          {
            cost: 3171,
            reward: [700, 350, 115, 30, 5],
          },
          {
            cost: 3250,
            reward: [710, 355, 120, 30, 5],
          },
          {
            cost: 3332,
            reward: [720, 360, 120, 30, 5],
          },
          {
            cost: 3415,
            reward: [730, 365, 120, 30, 5],
          },
          {
            cost: 3500,
            reward: [740, 370, 125, 30, 5],
          },
          {
            cost: 3588,
            reward: [750, 375, 125, 30, 5],
          },
          {
            cost: 3677,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 3769,
            reward: [770, 385, 130, 35, 5],
          },
          {
            cost: 3864,
            reward: [780, 390, 130, 35, 5],
          },
          {
            cost: 3960,
            reward: [790, 395, 130, 35, 5],
          },
          {
            cost: 4059,
            reward: [800, 400, 135, 35, 5],
          },
          {
            cost: 4161,
            reward: [810, 405, 135, 35, 5],
          },
          {
            cost: 4265,
            reward: [820, 410, 135, 35, 5],
          },
          {
            cost: 4371,
            reward: [830, 415, 140, 35, 5],
          },
          {
            cost: 4480,
            reward: [840, 420, 140, 35, 5],
          },
          {
            cost: 4592,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 4707,
            reward: [860, 430, 145, 35, 5],
          },
          {
            cost: 4825,
            reward: [870, 435, 145, 35, 5],
          },
          {
            cost: 4945,
            reward: [880, 440, 145, 35, 5],
          },
          {
            cost: 5069,
            reward: [890, 445, 150, 40, 10],
          },
          {
            cost: 5196,
            reward: [905, 455, 150, 40, 10],
          },
          {
            cost: 5326,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 5459,
            reward: [925, 465, 155, 40, 10],
          },
          {
            cost: 5595,
            reward: [935, 470, 155, 40, 10],
          },
          {
            cost: 5735,
            reward: [945, 475, 160, 40, 10],
          },
          {
            cost: 5879,
            reward: [955, 480, 160, 40, 10],
          },
          {
            cost: 6025,
            reward: [965, 485, 160, 40, 10],
          },
          {
            cost: 6176,
            reward: [975, 490, 165, 40, 10],
          },
          {
            cost: 6331,
            reward: [985, 495, 165, 40, 10],
          },
          {
            cost: 6489,
            reward: [995, 500, 165, 40, 10],
          },
          {
            cost: 6651,
            reward: [1010, 505, 170, 45, 10],
          },
          {
            cost: 6817,
            reward: [1020, 510, 170, 45, 10],
          },
          {
            cost: 6988,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 7162,
            reward: [1040, 520, 175, 45, 10],
          },
          {
            cost: 7341,
            reward: [1050, 525, 175, 45, 10],
          },
          {
            cost: 7525,
            reward: [1060, 530, 175, 45, 10],
          },
          {
            cost: 7713,
            reward: [1070, 535, 180, 45, 10],
          },
          {
            cost: 7906,
            reward: [1085, 545, 180, 45, 10],
          },
          {
            cost: 8103,
            reward: [1095, 550, 185, 45, 10],
          },
          {
            cost: 8306,
            reward: [1105, 555, 185, 45, 10],
          },
          {
            cost: 8514,
            reward: [1115, 560, 185, 45, 10],
          },
          {
            cost: 8726,
            reward: [1125, 565, 190, 50, 10],
          },
          {
            cost: 8945,
            reward: [1135, 570, 190, 50, 10],
          },
          {
            cost: 9168,
            reward: [1150, 575, 190, 50, 10],
          },
          {
            cost: 9397,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 9632,
            reward: [1170, 585, 195, 50, 10],
          },
          {
            cost: 9873,
            reward: [1180, 590, 195, 50, 10],
          },
          {
            cost: 10120,
            reward: [1190, 595, 200, 50, 10],
          },
          {
            cost: 10373,
            reward: [1200, 600, 200, 50, 10],
          },
          {
            cost: 10632,
            reward: [1215, 610, 205, 50, 10],
          },
          {
            cost: 10898,
            reward: [1225, 615, 205, 50, 10],
          },
          {
            cost: 11171,
            reward: [1235, 620, 205, 50, 10],
          },
          {
            cost: 11450,
            reward: [1245, 625, 210, 55, 10],
          },
          {
            cost: 11736,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 12029,
            reward: [1270, 635, 210, 55, 10],
          },
          {
            cost: 12330,
            reward: [1280, 640, 215, 55, 10],
          },
          {
            cost: 12638,
            reward: [1290, 645, 215, 55, 10],
          },
          {
            cost: 12954,
            reward: [1300, 650, 215, 55, 10],
          },
          {
            cost: 13278,
            reward: [1310, 655, 220, 55, 10],
          },
          {
            cost: 13610,
            reward: [1325, 665, 220, 55, 10],
          },
          {
            cost: 13950,
            reward: [1335, 670, 225, 55, 10],
          },
          {
            cost: 14299,
            reward: [1345, 675, 225, 55, 10],
          },
          {
            cost: 14657,
            reward: [1355, 680, 225, 55, 10],
          },
          {
            cost: 15023,
            reward: [1370, 685, 230, 60, 10],
          },
          {
            cost: 15398,
            reward: [1380, 690, 230, 60, 10],
          },
          {
            cost: 15783,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 16178,
            reward: [1400, 700, 235, 60, 10],
          },
          {
            cost: 16582,
            reward: [1415, 710, 235, 60, 10],
          },
          {
            cost: 16997,
            reward: [1425, 715, 240, 60, 10],
          },
          {
            cost: 17422,
            reward: [1435, 720, 240, 60, 10],
          },
          {
            cost: 17857,
            reward: [1445, 725, 240, 60, 10],
          },
          {
            cost: 18304,
            reward: [1460, 730, 245, 60, 10],
          },
          {
            cost: 18761,
            reward: [1470, 735, 245, 60, 10],
          },
          {
            cost: 19230,
            reward: [1480, 740, 245, 60, 10],
          },
          {
            cost: 19711,
            reward: [1490, 745, 250, 65, 15],
          },
          {
            cost: 20204,
            reward: [1505, 755, 250, 65, 15],
          },
          {
            cost: 20709,
            reward: [1515, 760, 255, 65, 15],
          },
          {
            cost: 21227,
            reward: [1525, 765, 255, 65, 15],
          },
        ],
      },
      Colosseum: {
        levels: [
          {
            cost: 40,
            reward: [5, 5, 0, 0, 0],
          },
          {
            cost: 60,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 120,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 170,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 220,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 290,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 360,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 420,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 490,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 550,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 564,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 578,
            reward: [70, 35, 10, 5, 0],
          },
          {
            cost: 593,
            reward: [80, 40, 15, 5, 0],
          },
          {
            cost: 608,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 623,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 638,
            reward: [105, 55, 20, 5, 0],
          },
          {
            cost: 654,
            reward: [110, 55, 20, 5, 0],
          },
          {
            cost: 671,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 687,
            reward: [125, 65, 20, 5, 0],
          },
          {
            cost: 705,
            reward: [135, 70, 25, 5, 0],
          },
          {
            cost: 722,
            reward: [145, 75, 25, 5, 0],
          },
          {
            cost: 740,
            reward: [150, 75, 25, 5, 0],
          },
          {
            cost: 759,
            reward: [160, 80, 25, 5, 0],
          },
          {
            cost: 778,
            reward: [170, 85, 30, 10, 0],
          },
          {
            cost: 797,
            reward: [175, 90, 30, 10, 0],
          },
          {
            cost: 817,
            reward: [185, 95, 30, 10, 0],
          },
          {
            cost: 837,
            reward: [195, 100, 35, 10, 0],
          },
          {
            cost: 858,
            reward: [200, 100, 35, 10, 0],
          },
          {
            cost: 880,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 902,
            reward: [220, 110, 35, 10, 0],
          },
          {
            cost: 924,
            reward: [230, 115, 40, 10, 0],
          },
          {
            cost: 947,
            reward: [240, 120, 40, 10, 0],
          },
          {
            cost: 971,
            reward: [245, 125, 40, 10, 0],
          },
          {
            cost: 995,
            reward: [255, 130, 45, 10, 0],
          },
          {
            cost: 1020,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1046,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1072,
            reward: [285, 145, 50, 15, 5],
          },
          {
            cost: 1099,
            reward: [290, 145, 50, 15, 5],
          },
          {
            cost: 1126,
            reward: [300, 150, 50, 15, 5],
          },
          {
            cost: 1154,
            reward: [310, 155, 50, 15, 5],
          },
          {
            cost: 1183,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1213,
            reward: [330, 165, 55, 15, 5],
          },
          {
            cost: 1243,
            reward: [340, 170, 55, 15, 5],
          },
          {
            cost: 1274,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1306,
            reward: [360, 180, 60, 15, 5],
          },
          {
            cost: 1338,
            reward: [370, 185, 60, 15, 5],
          },
          {
            cost: 1372,
            reward: [380, 190, 65, 15, 5],
          },
          {
            cost: 1406,
            reward: [390, 195, 65, 15, 5],
          },
          {
            cost: 1441,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1477,
            reward: [405, 205, 70, 20, 5],
          },
          {
            cost: 1514,
            reward: [415, 210, 70, 20, 5],
          },
          {
            cost: 1552,
            reward: [425, 215, 70, 20, 5],
          },
          {
            cost: 1591,
            reward: [435, 220, 75, 20, 5],
          },
          {
            cost: 1631,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 1671,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1713,
            reward: [465, 235, 80, 20, 5],
          },
          {
            cost: 1756,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 1800,
            reward: [485, 245, 80, 20, 5],
          },
          {
            cost: 1845,
            reward: [495, 250, 85, 20, 5],
          },
          {
            cost: 1891,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 1938,
            reward: [520, 260, 85, 20, 5],
          },
          {
            cost: 1987,
            reward: [530, 265, 90, 25, 5],
          },
          {
            cost: 2036,
            reward: [540, 270, 90, 25, 5],
          },
          {
            cost: 2087,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2139,
            reward: [560, 280, 95, 25, 5],
          },
          {
            cost: 2193,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2248,
            reward: [580, 290, 95, 25, 5],
          },
          {
            cost: 2304,
            reward: [590, 295, 100, 25, 5],
          },
          {
            cost: 2361,
            reward: [600, 300, 100, 25, 5],
          },
          {
            cost: 2420,
            reward: [610, 305, 100, 25, 5],
          },
          {
            cost: 2481,
            reward: [620, 310, 105, 25, 5],
          },
          {
            cost: 2543,
            reward: [630, 315, 105, 25, 5],
          },
          {
            cost: 2606,
            reward: [645, 325, 110, 30, 5],
          },
          {
            cost: 2672,
            reward: [655, 330, 110, 30, 5],
          },
          {
            cost: 2738,
            reward: [665, 335, 110, 30, 5],
          },
          {
            cost: 2807,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2877,
            reward: [685, 345, 115, 30, 5],
          },
          {
            cost: 2949,
            reward: [695, 350, 115, 30, 5],
          },
          {
            cost: 3023,
            reward: [705, 355, 120, 30, 5],
          },
          {
            cost: 3098,
            reward: [720, 360, 120, 30, 5],
          },
          {
            cost: 3176,
            reward: [730, 365, 120, 30, 5],
          },
          {
            cost: 3255,
            reward: [740, 370, 125, 30, 5],
          },
          {
            cost: 3336,
            reward: [750, 375, 125, 30, 5],
          },
          {
            cost: 3420,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 3505,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 3593,
            reward: [785, 395, 130, 35, 5],
          },
          {
            cost: 3683,
            reward: [795, 400, 135, 35, 5],
          },
          {
            cost: 3775,
            reward: [805, 405, 135, 35, 5],
          },
          {
            cost: 3869,
            reward: [815, 410, 135, 35, 5],
          },
          {
            cost: 3966,
            reward: [825, 415, 140, 35, 5],
          },
          {
            cost: 4065,
            reward: [840, 420, 140, 35, 5],
          },
          {
            cost: 4167,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 4271,
            reward: [860, 430, 145, 35, 5],
          },
          {
            cost: 4377,
            reward: [870, 435, 145, 35, 5],
          },
          {
            cost: 4487,
            reward: [885, 445, 150, 40, 10],
          },
          {
            cost: 4599,
            reward: [895, 450, 150, 40, 10],
          },
          {
            cost: 4714,
            reward: [905, 455, 150, 40, 10],
          },
          {
            cost: 4832,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 4953,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 5076,
            reward: [940, 470, 155, 40, 10],
          },
          {
            cost: 5203,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 5333,
            reward: [960, 480, 160, 40, 10],
          },
          {
            cost: 5467,
            reward: [975, 490, 165, 40, 10],
          },
          {
            cost: 5603,
            reward: [985, 495, 165, 40, 10],
          },
          {
            cost: 5743,
            reward: [995, 500, 165, 40, 10],
          },
          {
            cost: 5887,
            reward: [1010, 505, 170, 45, 10],
          },
          {
            cost: 6034,
            reward: [1020, 510, 170, 45, 10],
          },
          {
            cost: 6185,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 6340,
            reward: [1040, 520, 175, 45, 10],
          },
          {
            cost: 6498,
            reward: [1055, 530, 175, 45, 10],
          },
          {
            cost: 6660,
            reward: [1065, 535, 180, 45, 10],
          },
          {
            cost: 6827,
            reward: [1075, 540, 180, 45, 10],
          },
          {
            cost: 6998,
            reward: [1090, 545, 180, 45, 10],
          },
          {
            cost: 7173,
            reward: [1100, 550, 185, 45, 10],
          },
          {
            cost: 7352,
            reward: [1110, 555, 185, 45, 10],
          },
          {
            cost: 7536,
            reward: [1125, 565, 190, 50, 10],
          },
          {
            cost: 7724,
            reward: [1135, 570, 190, 50, 10],
          },
          {
            cost: 7917,
            reward: [1145, 575, 190, 50, 10],
          },
          {
            cost: 8115,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 8318,
            reward: [1170, 585, 195, 50, 10],
          },
          {
            cost: 8526,
            reward: [1180, 590, 195, 50, 10],
          },
          {
            cost: 8739,
            reward: [1195, 600, 200, 50, 10],
          },
          {
            cost: 8957,
            reward: [1205, 605, 200, 50, 10],
          },
          {
            cost: 9181,
            reward: [1215, 610, 205, 50, 10],
          },
          {
            cost: 9411,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 9646,
            reward: [1240, 620, 205, 50, 10],
          },
          {
            cost: 9887,
            reward: [1250, 625, 210, 55, 10],
          },
          {
            cost: 10134,
            reward: [1265, 635, 210, 55, 10],
          },
          {
            cost: 10388,
            reward: [1275, 640, 215, 55, 10],
          },
          {
            cost: 10647,
            reward: [1285, 645, 215, 55, 10],
          },
          {
            cost: 10914,
            reward: [1300, 650, 215, 55, 10],
          },
          {
            cost: 11186,
            reward: [1310, 655, 220, 55, 10],
          },
          {
            cost: 11466,
            reward: [1325, 665, 220, 55, 10],
          },
        ],
      },
      Lighthouse_of_Alexandria: {
        levels: [
          {
            cost: 40,
            reward: [5, 5, 0, 0, 0],
          },
          {
            cost: 60,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 120,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 170,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 220,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 290,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 360,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 420,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 490,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 550,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 564,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 578,
            reward: [70, 35, 10, 5, 0],
          },
          {
            cost: 593,
            reward: [80, 40, 15, 5, 0],
          },
          {
            cost: 608,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 623,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 638,
            reward: [105, 55, 20, 5, 0],
          },
          {
            cost: 654,
            reward: [110, 55, 20, 5, 0],
          },
          {
            cost: 671,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 687,
            reward: [125, 65, 20, 5, 0],
          },
          {
            cost: 705,
            reward: [135, 70, 25, 5, 0],
          },
          {
            cost: 722,
            reward: [145, 75, 25, 5, 0],
          },
          {
            cost: 740,
            reward: [150, 75, 25, 5, 0],
          },
          {
            cost: 759,
            reward: [160, 80, 25, 5, 0],
          },
          {
            cost: 778,
            reward: [170, 85, 30, 10, 0],
          },
          {
            cost: 797,
            reward: [175, 90, 30, 10, 0],
          },
          {
            cost: 817,
            reward: [185, 95, 30, 10, 0],
          },
          {
            cost: 837,
            reward: [195, 100, 35, 10, 0],
          },
          {
            cost: 858,
            reward: [200, 100, 35, 10, 0],
          },
          {
            cost: 880,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 902,
            reward: [220, 110, 35, 10, 0],
          },
          {
            cost: 924,
            reward: [230, 115, 40, 10, 0],
          },
          {
            cost: 947,
            reward: [240, 120, 40, 10, 0],
          },
          {
            cost: 971,
            reward: [245, 125, 40, 10, 0],
          },
          {
            cost: 995,
            reward: [255, 130, 45, 10, 0],
          },
          {
            cost: 1020,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1046,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1072,
            reward: [285, 145, 50, 15, 5],
          },
          {
            cost: 1099,
            reward: [290, 145, 50, 15, 5],
          },
          {
            cost: 1126,
            reward: [300, 150, 50, 15, 5],
          },
          {
            cost: 1154,
            reward: [310, 155, 50, 15, 5],
          },
          {
            cost: 1183,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1213,
            reward: [330, 165, 55, 15, 5],
          },
          {
            cost: 1243,
            reward: [340, 170, 55, 15, 5],
          },
          {
            cost: 1274,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1306,
            reward: [360, 180, 60, 15, 5],
          },
          {
            cost: 1338,
            reward: [370, 185, 60, 15, 5],
          },
          {
            cost: 1372,
            reward: [380, 190, 65, 15, 5],
          },
          {
            cost: 1406,
            reward: [390, 195, 65, 15, 5],
          },
          {
            cost: 1441,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1477,
            reward: [405, 205, 70, 20, 5],
          },
          {
            cost: 1514,
            reward: [415, 210, 70, 20, 5],
          },
          {
            cost: 1552,
            reward: [425, 215, 70, 20, 5],
          },
          {
            cost: 1591,
            reward: [435, 220, 75, 20, 5],
          },
          {
            cost: 1631,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 1671,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1713,
            reward: [465, 235, 80, 20, 5],
          },
          {
            cost: 1756,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 1800,
            reward: [485, 245, 80, 20, 5],
          },
          {
            cost: 1845,
            reward: [495, 250, 85, 20, 5],
          },
          {
            cost: 1891,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 1938,
            reward: [520, 260, 85, 20, 5],
          },
          {
            cost: 1987,
            reward: [530, 265, 90, 25, 5],
          },
          {
            cost: 2036,
            reward: [540, 270, 90, 25, 5],
          },
          {
            cost: 2087,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2139,
            reward: [560, 280, 95, 25, 5],
          },
          {
            cost: 2193,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2248,
            reward: [580, 290, 95, 25, 5],
          },
          {
            cost: 2304,
            reward: [590, 295, 100, 25, 5],
          },
          {
            cost: 2361,
            reward: [600, 300, 100, 25, 5],
          },
          {
            cost: 2420,
            reward: [610, 305, 100, 25, 5],
          },
          {
            cost: 2481,
            reward: [620, 310, 105, 25, 5],
          },
          {
            cost: 2543,
            reward: [630, 315, 105, 25, 5],
          },
          {
            cost: 2606,
            reward: [645, 325, 110, 30, 5],
          },
          {
            cost: 2672,
            reward: [655, 330, 110, 30, 5],
          },
          {
            cost: 2738,
            reward: [665, 335, 110, 30, 5],
          },
          {
            cost: 2807,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2877,
            reward: [685, 345, 115, 30, 5],
          },
          {
            cost: 2949,
            reward: [695, 350, 115, 30, 5],
          },
          {
            cost: 3023,
            reward: [705, 355, 120, 30, 5],
          },
          {
            cost: 3098,
            reward: [720, 360, 120, 30, 5],
          },
          {
            cost: 3176,
            reward: [730, 365, 120, 30, 5],
          },
          {
            cost: 3255,
            reward: [740, 370, 125, 30, 5],
          },
          {
            cost: 3336,
            reward: [750, 375, 125, 30, 5],
          },
          {
            cost: 3420,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 3505,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 3593,
            reward: [785, 395, 130, 35, 5],
          },
          {
            cost: 3683,
            reward: [795, 400, 135, 35, 5],
          },
          {
            cost: 3775,
            reward: [805, 405, 135, 35, 5],
          },
          {
            cost: 3869,
            reward: [815, 410, 135, 35, 5],
          },
          {
            cost: 3966,
            reward: [825, 415, 140, 35, 5],
          },
          {
            cost: 4065,
            reward: [840, 420, 140, 35, 5],
          },
          {
            cost: 4167,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 4271,
            reward: [860, 430, 145, 35, 5],
          },
          {
            cost: 4377,
            reward: [870, 435, 145, 35, 5],
          },
          {
            cost: 4487,
            reward: [885, 445, 150, 40, 10],
          },
          {
            cost: 4599,
            reward: [895, 450, 150, 40, 10],
          },
          {
            cost: 4714,
            reward: [905, 455, 150, 40, 10],
          },
          {
            cost: 4832,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 4953,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 5076,
            reward: [940, 470, 155, 40, 10],
          },
          {
            cost: 5203,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 5333,
            reward: [960, 480, 160, 40, 10],
          },
          {
            cost: 5467,
            reward: [975, 490, 165, 40, 10],
          },
          {
            cost: 5603,
            reward: [985, 495, 165, 40, 10],
          },
          {
            cost: 5743,
            reward: [995, 500, 165, 40, 10],
          },
          {
            cost: 5887,
            reward: [1010, 505, 170, 45, 10],
          },
          {
            cost: 6034,
            reward: [1020, 510, 170, 45, 10],
          },
          {
            cost: 6185,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 6340,
            reward: [1040, 520, 175, 45, 10],
          },
          {
            cost: 6498,
            reward: [1055, 530, 175, 45, 10],
          },
          {
            cost: 6660,
            reward: [1065, 535, 180, 45, 10],
          },
          {
            cost: 6827,
            reward: [1075, 540, 180, 45, 10],
          },
          {
            cost: 6998,
            reward: [1090, 545, 180, 45, 10],
          },
          {
            cost: 7173,
            reward: [1100, 550, 185, 45, 10],
          },
          {
            cost: 7352,
            reward: [1110, 555, 185, 45, 10],
          },
          {
            cost: 7536,
            reward: [1125, 565, 190, 50, 10],
          },
          {
            cost: 7724,
            reward: [1135, 570, 190, 50, 10],
          },
          {
            cost: 7917,
            reward: [1145, 575, 190, 50, 10],
          },
          {
            cost: 8115,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 8318,
            reward: [1170, 585, 195, 50, 10],
          },
          {
            cost: 8526,
            reward: [1180, 590, 195, 50, 10],
          },
          {
            cost: 8739,
            reward: [1195, 600, 200, 50, 10],
          },
          {
            cost: 8957,
            reward: [1205, 605, 200, 50, 10],
          },
          {
            cost: 9181,
            reward: [1215, 610, 205, 50, 10],
          },
          {
            cost: 9411,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 9646,
            reward: [1240, 620, 205, 50, 10],
          },
          {
            cost: 9887,
            reward: [1250, 625, 210, 55, 10],
          },
          {
            cost: 10134,
            reward: [1265, 635, 210, 55, 10],
          },
          {
            cost: 10388,
            reward: [1275, 640, 215, 55, 10],
          },
          {
            cost: 10647,
            reward: [1285, 645, 215, 55, 10],
          },
          {
            cost: 10914,
            reward: [1300, 650, 215, 55, 10],
          },
          {
            cost: 11186,
            reward: [1310, 655, 220, 55, 10],
          },
          {
            cost: 11466,
            reward: [1325, 665, 220, 55, 10],
          },
        ],
      },
      Hagia_Sophia: {
        levels: [
          {
            cost: 50,
            reward: [5, 5, 0, 0, 0],
          },
          {
            cost: 60,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 120,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 190,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 240,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 320,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 380,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 460,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 530,
            reward: [55, 30, 10, 5, 0],
          },
          {
            cost: 600,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 615,
            reward: [70, 35, 10, 5, 0],
          },
          {
            cost: 631,
            reward: [80, 40, 15, 5, 0],
          },
          {
            cost: 647,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 663,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 679,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 696,
            reward: [110, 55, 20, 5, 0],
          },
          {
            cost: 714,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 732,
            reward: [130, 65, 20, 5, 0],
          },
          {
            cost: 750,
            reward: [135, 70, 25, 5, 0],
          },
          {
            cost: 769,
            reward: [145, 75, 25, 5, 0],
          },
          {
            cost: 788,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 807,
            reward: [165, 85, 30, 10, 0],
          },
          {
            cost: 828,
            reward: [175, 90, 30, 10, 0],
          },
          {
            cost: 848,
            reward: [180, 90, 30, 10, 0],
          },
          {
            cost: 869,
            reward: [190, 95, 30, 10, 0],
          },
          {
            cost: 891,
            reward: [200, 100, 35, 10, 0],
          },
          {
            cost: 913,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 936,
            reward: [220, 110, 35, 10, 0],
          },
          {
            cost: 960,
            reward: [230, 115, 40, 10, 0],
          },
          {
            cost: 984,
            reward: [240, 120, 40, 10, 0],
          },
          {
            cost: 1008,
            reward: [250, 125, 40, 10, 0],
          },
          {
            cost: 1033,
            reward: [255, 130, 45, 10, 0],
          },
          {
            cost: 1059,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1086,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1113,
            reward: [285, 145, 50, 15, 5],
          },
          {
            cost: 1141,
            reward: [295, 150, 50, 15, 5],
          },
          {
            cost: 1169,
            reward: [305, 155, 50, 15, 5],
          },
          {
            cost: 1198,
            reward: [315, 160, 55, 15, 5],
          },
          {
            cost: 1228,
            reward: [325, 165, 55, 15, 5],
          },
          {
            cost: 1259,
            reward: [335, 170, 55, 15, 5],
          },
          {
            cost: 1291,
            reward: [345, 175, 60, 15, 5],
          },
          {
            cost: 1323,
            reward: [360, 180, 60, 15, 5],
          },
          {
            cost: 1356,
            reward: [370, 185, 60, 15, 5],
          },
          {
            cost: 1390,
            reward: [380, 190, 65, 15, 5],
          },
          {
            cost: 1424,
            reward: [390, 195, 65, 15, 5],
          },
          {
            cost: 1460,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1497,
            reward: [410, 205, 70, 20, 5],
          },
          {
            cost: 1534,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1572,
            reward: [430, 215, 70, 20, 5],
          },
          {
            cost: 1612,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1652,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 1693,
            reward: [465, 235, 80, 20, 5],
          },
          {
            cost: 1735,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 1779,
            reward: [485, 245, 80, 20, 5],
          },
          {
            cost: 1823,
            reward: [495, 250, 85, 20, 5],
          },
          {
            cost: 1869,
            reward: [505, 255, 85, 20, 5],
          },
          {
            cost: 1916,
            reward: [515, 260, 85, 20, 5],
          },
          {
            cost: 1963,
            reward: [525, 265, 90, 25, 5],
          },
          {
            cost: 2012,
            reward: [540, 270, 90, 25, 5],
          },
          {
            cost: 2063,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2114,
            reward: [560, 280, 95, 25, 5],
          },
          {
            cost: 2167,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2221,
            reward: [585, 295, 100, 25, 5],
          },
          {
            cost: 2277,
            reward: [595, 300, 100, 25, 5],
          },
          {
            cost: 2334,
            reward: [605, 305, 100, 25, 5],
          },
          {
            cost: 2392,
            reward: [615, 310, 105, 25, 5],
          },
          {
            cost: 2452,
            reward: [625, 315, 105, 25, 5],
          },
          {
            cost: 2513,
            reward: [640, 320, 105, 25, 5],
          },
          {
            cost: 2576,
            reward: [650, 325, 110, 30, 5],
          },
          {
            cost: 2640,
            reward: [660, 330, 110, 30, 5],
          },
          {
            cost: 2706,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2774,
            reward: [685, 345, 115, 30, 5],
          },
          {
            cost: 2843,
            reward: [695, 350, 115, 30, 5],
          },
          {
            cost: 2914,
            reward: [705, 355, 120, 30, 5],
          },
          {
            cost: 2987,
            reward: [720, 360, 120, 30, 5],
          },
          {
            cost: 3062,
            reward: [730, 365, 120, 30, 5],
          },
          {
            cost: 3138,
            reward: [740, 370, 125, 30, 5],
          },
          {
            cost: 3217,
            reward: [755, 380, 125, 30, 5],
          },
          {
            cost: 3297,
            reward: [765, 385, 130, 35, 5],
          },
          {
            cost: 3380,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 3464,
            reward: [790, 395, 130, 35, 5],
          },
          {
            cost: 3551,
            reward: [800, 400, 135, 35, 5],
          },
          {
            cost: 3640,
            reward: [810, 405, 135, 35, 5],
          },
          {
            cost: 3731,
            reward: [825, 415, 140, 35, 5],
          },
          {
            cost: 3824,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 3919,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 4017,
            reward: [860, 430, 145, 35, 5],
          },
          {
            cost: 4118,
            reward: [875, 440, 145, 35, 5],
          },
          {
            cost: 4221,
            reward: [885, 445, 150, 40, 10],
          },
          {
            cost: 4326,
            reward: [895, 450, 150, 40, 10],
          },
          {
            cost: 4434,
            reward: [910, 455, 150, 40, 10],
          },
          {
            cost: 4545,
            reward: [920, 460, 155, 40, 10],
          },
          {
            cost: 4659,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 4775,
            reward: [945, 475, 160, 40, 10],
          },
          {
            cost: 4895,
            reward: [955, 480, 160, 40, 10],
          },
          {
            cost: 5017,
            reward: [970, 485, 160, 40, 10],
          },
          {
            cost: 5142,
            reward: [980, 490, 165, 40, 10],
          },
          {
            cost: 5271,
            reward: [995, 500, 165, 40, 10],
          },
          {
            cost: 5403,
            reward: [1005, 505, 170, 45, 10],
          },
          {
            cost: 5538,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 5676,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 5818,
            reward: [1040, 520, 175, 45, 10],
          },
          {
            cost: 5964,
            reward: [1055, 530, 175, 45, 10],
          },
          {
            cost: 6113,
            reward: [1065, 535, 180, 45, 10],
          },
          {
            cost: 6265,
            reward: [1080, 540, 180, 45, 10],
          },
          {
            cost: 6422,
            reward: [1090, 545, 180, 45, 10],
          },
          {
            cost: 6583,
            reward: [1105, 555, 185, 45, 10],
          },
          {
            cost: 6747,
            reward: [1115, 560, 185, 45, 10],
          },
          {
            cost: 6916,
            reward: [1130, 565, 190, 50, 10],
          },
          {
            cost: 7089,
            reward: [1140, 570, 190, 50, 10],
          },
          {
            cost: 7266,
            reward: [1155, 580, 195, 50, 10],
          },
          {
            cost: 7448,
            reward: [1165, 585, 195, 50, 10],
          },
          {
            cost: 7634,
            reward: [1180, 590, 195, 50, 10],
          },
          {
            cost: 7825,
            reward: [1190, 595, 200, 50, 10],
          },
          {
            cost: 8020,
            reward: [1205, 605, 200, 50, 10],
          },
          {
            cost: 8221,
            reward: [1215, 610, 205, 50, 10],
          },
          {
            cost: 8426,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 8637,
            reward: [1240, 620, 205, 50, 10],
          },
          {
            cost: 8853,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 9074,
            reward: [1265, 635, 210, 55, 10],
          },
          {
            cost: 9301,
            reward: [1280, 640, 215, 55, 10],
          },
          {
            cost: 9533,
            reward: [1290, 645, 215, 55, 10],
          },
          {
            cost: 9772,
            reward: [1305, 655, 220, 55, 10],
          },
          {
            cost: 10016,
            reward: [1320, 660, 220, 55, 10],
          },
          {
            cost: 10266,
            reward: [1330, 665, 220, 55, 10],
          },
          {
            cost: 10523,
            reward: [1345, 675, 225, 55, 10],
          },
          {
            cost: 10786,
            reward: [1355, 680, 225, 55, 10],
          },
          {
            cost: 11056,
            reward: [1370, 685, 230, 60, 10],
          },
          {
            cost: 11332,
            reward: [1380, 690, 230, 60, 10],
          },
          {
            cost: 11615,
            reward: [1395, 700, 235, 60, 10],
          },
          {
            cost: 11906,
            reward: [1405, 705, 235, 60, 10],
          },
          {
            cost: 12203,
            reward: [1420, 710, 235, 60, 10],
          },
          {
            cost: 12508,
            reward: [1435, 720, 240, 60, 10],
          },
          {
            cost: 12821,
            reward: [1445, 725, 240, 60, 10],
          },
          {
            cost: 13142,
            reward: [1460, 730, 245, 60, 10],
          },
          {
            cost: 13470,
            reward: [1475, 740, 245, 60, 10],
          },
          {
            cost: 13807,
            reward: [1485, 745, 250, 65, 15],
          },
          {
            cost: 14152,
            reward: [1500, 750, 250, 65, 15],
          },
          {
            cost: 14506,
            reward: [1510, 755, 250, 65, 15],
          },
          {
            cost: 14869,
            reward: [1525, 765, 255, 65, 15],
          },
          {
            cost: 15240,
            reward: [1540, 770, 255, 65, 15],
          },
          {
            cost: 15621,
            reward: [1550, 775, 260, 65, 15],
          },
          {
            cost: 16012,
            reward: [1565, 785, 260, 65, 15],
          },
          {
            cost: 16412,
            reward: [1575, 790, 265, 65, 15],
          },
          {
            cost: 16822,
            reward: [1590, 795, 265, 65, 15],
          },
          {
            cost: 17243,
            reward: [1605, 805, 270, 70, 15],
          },
          {
            cost: 17674,
            reward: [1615, 810, 270, 70, 15],
          },
          {
            cost: 18116,
            reward: [1630, 815, 270, 70, 15],
          },
          {
            cost: 18569,
            reward: [1645, 825, 275, 70, 15],
          },
          {
            cost: 19033,
            reward: [1655, 830, 275, 70, 15],
          },
          {
            cost: 19509,
            reward: [1670, 835, 280, 70, 15],
          },
        ],
      },
      Cathedral_of_Aachen: {
        levels: [
          {
            cost: 50,
            reward: [5, 5, 0, 0, 0],
          },
          {
            cost: 60,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 120,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 190,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 240,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 320,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 380,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 460,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 530,
            reward: [55, 30, 10, 5, 0],
          },
          {
            cost: 600,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 615,
            reward: [70, 35, 10, 5, 0],
          },
          {
            cost: 631,
            reward: [80, 40, 15, 5, 0],
          },
          {
            cost: 647,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 663,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 679,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 696,
            reward: [110, 55, 20, 5, 0],
          },
          {
            cost: 714,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 732,
            reward: [130, 65, 20, 5, 0],
          },
          {
            cost: 750,
            reward: [135, 70, 25, 5, 0],
          },
          {
            cost: 769,
            reward: [145, 75, 25, 5, 0],
          },
          {
            cost: 788,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 807,
            reward: [165, 85, 30, 10, 0],
          },
          {
            cost: 828,
            reward: [175, 90, 30, 10, 0],
          },
          {
            cost: 848,
            reward: [180, 90, 30, 10, 0],
          },
          {
            cost: 869,
            reward: [190, 95, 30, 10, 0],
          },
          {
            cost: 891,
            reward: [200, 100, 35, 10, 0],
          },
          {
            cost: 913,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 936,
            reward: [220, 110, 35, 10, 0],
          },
          {
            cost: 960,
            reward: [230, 115, 40, 10, 0],
          },
          {
            cost: 984,
            reward: [240, 120, 40, 10, 0],
          },
          {
            cost: 1008,
            reward: [250, 125, 40, 10, 0],
          },
          {
            cost: 1033,
            reward: [255, 130, 45, 10, 0],
          },
          {
            cost: 1059,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1086,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1113,
            reward: [285, 145, 50, 15, 5],
          },
          {
            cost: 1141,
            reward: [295, 150, 50, 15, 5],
          },
          {
            cost: 1169,
            reward: [305, 155, 50, 15, 5],
          },
          {
            cost: 1198,
            reward: [315, 160, 55, 15, 5],
          },
          {
            cost: 1228,
            reward: [325, 165, 55, 15, 5],
          },
          {
            cost: 1259,
            reward: [335, 170, 55, 15, 5],
          },
          {
            cost: 1291,
            reward: [345, 175, 60, 15, 5],
          },
          {
            cost: 1323,
            reward: [360, 180, 60, 15, 5],
          },
          {
            cost: 1356,
            reward: [370, 185, 60, 15, 5],
          },
          {
            cost: 1390,
            reward: [380, 190, 65, 15, 5],
          },
          {
            cost: 1424,
            reward: [390, 195, 65, 15, 5],
          },
          {
            cost: 1460,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1497,
            reward: [410, 205, 70, 20, 5],
          },
          {
            cost: 1534,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1572,
            reward: [430, 215, 70, 20, 5],
          },
          {
            cost: 1612,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1652,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 1693,
            reward: [465, 235, 80, 20, 5],
          },
          {
            cost: 1735,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 1779,
            reward: [485, 245, 80, 20, 5],
          },
          {
            cost: 1823,
            reward: [495, 250, 85, 20, 5],
          },
          {
            cost: 1869,
            reward: [505, 255, 85, 20, 5],
          },
          {
            cost: 1916,
            reward: [515, 260, 85, 20, 5],
          },
          {
            cost: 1963,
            reward: [525, 265, 90, 25, 5],
          },
          {
            cost: 2012,
            reward: [540, 270, 90, 25, 5],
          },
          {
            cost: 2063,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2114,
            reward: [560, 280, 95, 25, 5],
          },
          {
            cost: 2167,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2221,
            reward: [585, 295, 100, 25, 5],
          },
          {
            cost: 2277,
            reward: [595, 300, 100, 25, 5],
          },
          {
            cost: 2334,
            reward: [605, 305, 100, 25, 5],
          },
          {
            cost: 2392,
            reward: [615, 310, 105, 25, 5],
          },
          {
            cost: 2452,
            reward: [625, 315, 105, 25, 5],
          },
          {
            cost: 2513,
            reward: [640, 320, 105, 25, 5],
          },
          {
            cost: 2576,
            reward: [650, 325, 110, 30, 5],
          },
          {
            cost: 2640,
            reward: [660, 330, 110, 30, 5],
          },
          {
            cost: 2706,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2774,
            reward: [685, 345, 115, 30, 5],
          },
          {
            cost: 2843,
            reward: [695, 350, 115, 30, 5],
          },
          {
            cost: 2914,
            reward: [705, 355, 120, 30, 5],
          },
          {
            cost: 2987,
            reward: [720, 360, 120, 30, 5],
          },
          {
            cost: 3062,
            reward: [730, 365, 120, 30, 5],
          },
          {
            cost: 3138,
            reward: [740, 370, 125, 30, 5],
          },
          {
            cost: 3217,
            reward: [755, 380, 125, 30, 5],
          },
          {
            cost: 3297,
            reward: [765, 385, 130, 35, 5],
          },
          {
            cost: 3380,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 3464,
            reward: [790, 395, 130, 35, 5],
          },
          {
            cost: 3551,
            reward: [800, 400, 135, 35, 5],
          },
          {
            cost: 3640,
            reward: [810, 405, 135, 35, 5],
          },
          {
            cost: 3731,
            reward: [825, 415, 140, 35, 5],
          },
          {
            cost: 3824,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 3919,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 4017,
            reward: [860, 430, 145, 35, 5],
          },
          {
            cost: 4118,
            reward: [875, 440, 145, 35, 5],
          },
          {
            cost: 4221,
            reward: [885, 445, 150, 40, 10],
          },
          {
            cost: 4326,
            reward: [895, 450, 150, 40, 10],
          },
          {
            cost: 4434,
            reward: [910, 455, 150, 40, 10],
          },
          {
            cost: 4545,
            reward: [920, 460, 155, 40, 10],
          },
          {
            cost: 4659,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 4775,
            reward: [945, 475, 160, 40, 10],
          },
          {
            cost: 4895,
            reward: [955, 480, 160, 40, 10],
          },
          {
            cost: 5017,
            reward: [970, 485, 160, 40, 10],
          },
          {
            cost: 5142,
            reward: [980, 490, 165, 40, 10],
          },
          {
            cost: 5271,
            reward: [995, 500, 165, 40, 10],
          },
          {
            cost: 5403,
            reward: [1005, 505, 170, 45, 10],
          },
          {
            cost: 5538,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 5676,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 5818,
            reward: [1040, 520, 175, 45, 10],
          },
          {
            cost: 5964,
            reward: [1055, 530, 175, 45, 10],
          },
          {
            cost: 6113,
            reward: [1065, 535, 180, 45, 10],
          },
          {
            cost: 6265,
            reward: [1080, 540, 180, 45, 10],
          },
          {
            cost: 6422,
            reward: [1090, 545, 180, 45, 10],
          },
          {
            cost: 6583,
            reward: [1105, 555, 185, 45, 10],
          },
          {
            cost: 6747,
            reward: [1115, 560, 185, 45, 10],
          },
          {
            cost: 6916,
            reward: [1130, 565, 190, 50, 10],
          },
          {
            cost: 7089,
            reward: [1140, 570, 190, 50, 10],
          },
          {
            cost: 7266,
            reward: [1155, 580, 195, 50, 10],
          },
          {
            cost: 7448,
            reward: [1165, 585, 195, 50, 10],
          },
          {
            cost: 7634,
            reward: [1180, 590, 195, 50, 10],
          },
          {
            cost: 7825,
            reward: [1190, 595, 200, 50, 10],
          },
          {
            cost: 8020,
            reward: [1205, 605, 200, 50, 10],
          },
          {
            cost: 8221,
            reward: [1215, 610, 205, 50, 10],
          },
          {
            cost: 8426,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 8637,
            reward: [1240, 620, 205, 50, 10],
          },
          {
            cost: 8853,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 9074,
            reward: [1265, 635, 210, 55, 10],
          },
          {
            cost: 9301,
            reward: [1280, 640, 215, 55, 10],
          },
          {
            cost: 9533,
            reward: [1290, 645, 215, 55, 10],
          },
          {
            cost: 9772,
            reward: [1305, 655, 220, 55, 10],
          },
          {
            cost: 10016,
            reward: [1320, 660, 220, 55, 10],
          },
          {
            cost: 10266,
            reward: [1330, 665, 220, 55, 10],
          },
          {
            cost: 10523,
            reward: [1345, 675, 225, 55, 10],
          },
          {
            cost: 10786,
            reward: [1355, 680, 225, 55, 10],
          },
          {
            cost: 11056,
            reward: [1370, 685, 230, 60, 10],
          },
          {
            cost: 11332,
            reward: [1380, 690, 230, 60, 10],
          },
          {
            cost: 11615,
            reward: [1395, 700, 235, 60, 10],
          },
          {
            cost: 11906,
            reward: [1405, 705, 235, 60, 10],
          },
          {
            cost: 12203,
            reward: [1420, 710, 235, 60, 10],
          },
          {
            cost: 12508,
            reward: [1435, 720, 240, 60, 10],
          },
          {
            cost: 12821,
            reward: [1445, 725, 240, 60, 10],
          },
          {
            cost: 13142,
            reward: [1460, 730, 245, 60, 10],
          },
          {
            cost: 13470,
            reward: [1475, 740, 245, 60, 10],
          },
          {
            cost: 13807,
            reward: [1485, 745, 250, 65, 15],
          },
          {
            cost: 14152,
            reward: [1500, 750, 250, 65, 15],
          },
          {
            cost: 14506,
            reward: [1510, 755, 250, 65, 15],
          },
          {
            cost: 14869,
            reward: [1525, 765, 255, 65, 15],
          },
          {
            cost: 15240,
            reward: [1540, 770, 255, 65, 15],
          },
          {
            cost: 15621,
            reward: [1550, 775, 260, 65, 15],
          },
          {
            cost: 16012,
            reward: [1565, 785, 260, 65, 15],
          },
          {
            cost: 16412,
            reward: [1575, 790, 265, 65, 15],
          },
          {
            cost: 16822,
            reward: [1590, 795, 265, 65, 15],
          },
          {
            cost: 17243,
            reward: [1605, 805, 270, 70, 15],
          },
          {
            cost: 17674,
            reward: [1615, 810, 270, 70, 15],
          },
          {
            cost: 18116,
            reward: [1630, 815, 270, 70, 15],
          },
          {
            cost: 18569,
            reward: [1645, 825, 275, 70, 15],
          },
          {
            cost: 19033,
            reward: [1655, 830, 275, 70, 15],
          },
          {
            cost: 19509,
            reward: [1670, 835, 280, 70, 15],
          },
        ],
      },
      St_Mark_s_Basilica: {
        levels: [
          {
            cost: 50,
            reward: [5, 5, 0, 0, 0],
          },
          {
            cost: 70,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 130,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 200,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 270,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 330,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 420,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 490,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 570,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 650,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 667,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 683,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 700,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 718,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 736,
            reward: [110, 55, 20, 5, 0],
          },
          {
            cost: 754,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 773,
            reward: [130, 65, 20, 5, 0],
          },
          {
            cost: 792,
            reward: [140, 70, 25, 5, 0],
          },
          {
            cost: 812,
            reward: [150, 75, 25, 5, 0],
          },
          {
            cost: 833,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 853,
            reward: [165, 85, 30, 10, 0],
          },
          {
            cost: 875,
            reward: [175, 90, 30, 10, 0],
          },
          {
            cost: 897,
            reward: [185, 95, 30, 10, 0],
          },
          {
            cost: 919,
            reward: [195, 100, 35, 10, 0],
          },
          {
            cost: 942,
            reward: [205, 105, 35, 10, 0],
          },
          {
            cost: 965,
            reward: [215, 110, 35, 10, 0],
          },
          {
            cost: 990,
            reward: [225, 115, 40, 10, 0],
          },
          {
            cost: 1014,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 1040,
            reward: [245, 125, 40, 10, 0],
          },
          {
            cost: 1066,
            reward: [255, 130, 45, 10, 0],
          },
          {
            cost: 1092,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1120,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1147,
            reward: [285, 145, 50, 15, 5],
          },
          {
            cost: 1176,
            reward: [300, 150, 50, 15, 5],
          },
          {
            cost: 1206,
            reward: [310, 155, 50, 15, 5],
          },
          {
            cost: 1236,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1267,
            reward: [330, 165, 55, 15, 5],
          },
          {
            cost: 1298,
            reward: [340, 170, 55, 15, 5],
          },
          {
            cost: 1331,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1364,
            reward: [365, 185, 60, 15, 5],
          },
          {
            cost: 1398,
            reward: [375, 190, 65, 15, 5],
          },
          {
            cost: 1433,
            reward: [385, 195, 65, 15, 5],
          },
          {
            cost: 1469,
            reward: [395, 200, 65, 15, 5],
          },
          {
            cost: 1505,
            reward: [405, 205, 70, 20, 5],
          },
          {
            cost: 1543,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1582,
            reward: [430, 215, 70, 20, 5],
          },
          {
            cost: 1621,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1662,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 1703,
            reward: [465, 235, 80, 20, 5],
          },
          {
            cost: 1746,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 1789,
            reward: [485, 245, 80, 20, 5],
          },
          {
            cost: 1834,
            reward: [500, 250, 85, 20, 5],
          },
          {
            cost: 1880,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 1927,
            reward: [520, 260, 85, 20, 5],
          },
          {
            cost: 1975,
            reward: [535, 270, 90, 25, 5],
          },
          {
            cost: 2025,
            reward: [545, 275, 90, 25, 5],
          },
          {
            cost: 2075,
            reward: [555, 280, 95, 25, 5],
          },
          {
            cost: 2127,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2180,
            reward: [580, 290, 95, 25, 5],
          },
          {
            cost: 2235,
            reward: [590, 295, 100, 25, 5],
          },
          {
            cost: 2290,
            reward: [605, 305, 100, 25, 5],
          },
          {
            cost: 2348,
            reward: [615, 310, 105, 25, 5],
          },
          {
            cost: 2406,
            reward: [630, 315, 105, 25, 5],
          },
          {
            cost: 2467,
            reward: [640, 320, 105, 25, 5],
          },
          {
            cost: 2528,
            reward: [650, 325, 110, 30, 5],
          },
          {
            cost: 2591,
            reward: [665, 335, 110, 30, 5],
          },
          {
            cost: 2656,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2723,
            reward: [690, 345, 115, 30, 5],
          },
          {
            cost: 2791,
            reward: [700, 350, 115, 30, 5],
          },
          {
            cost: 2860,
            reward: [715, 360, 120, 30, 5],
          },
          {
            cost: 2932,
            reward: [725, 365, 120, 30, 5],
          },
          {
            cost: 3005,
            reward: [735, 370, 125, 30, 5],
          },
          {
            cost: 3080,
            reward: [750, 375, 125, 30, 5],
          },
          {
            cost: 3157,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 3236,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 3317,
            reward: [785, 395, 130, 35, 5],
          },
          {
            cost: 3400,
            reward: [800, 400, 135, 35, 5],
          },
          {
            cost: 3485,
            reward: [810, 405, 135, 35, 5],
          },
          {
            cost: 3572,
            reward: [825, 415, 140, 35, 5],
          },
          {
            cost: 3661,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 3753,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 3847,
            reward: [860, 430, 145, 35, 5],
          },
          {
            cost: 3943,
            reward: [875, 440, 145, 35, 5],
          },
          {
            cost: 4041,
            reward: [890, 445, 150, 40, 10],
          },
          {
            cost: 4142,
            reward: [900, 450, 150, 40, 10],
          },
          {
            cost: 4246,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 4352,
            reward: [925, 465, 155, 40, 10],
          },
          {
            cost: 4461,
            reward: [940, 470, 155, 40, 10],
          },
          {
            cost: 4572,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 4687,
            reward: [965, 485, 160, 40, 10],
          },
          {
            cost: 4804,
            reward: [975, 490, 165, 40, 10],
          },
          {
            cost: 4924,
            reward: [990, 495, 165, 40, 10],
          },
          {
            cost: 5047,
            reward: [1005, 505, 170, 45, 10],
          },
          {
            cost: 5173,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 5303,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 5435,
            reward: [1040, 520, 175, 45, 10],
          },
          {
            cost: 5571,
            reward: [1055, 530, 175, 45, 10],
          },
          {
            cost: 5710,
            reward: [1070, 535, 180, 45, 10],
          },
          {
            cost: 5853,
            reward: [1080, 540, 180, 45, 10],
          },
          {
            cost: 5999,
            reward: [1095, 550, 185, 45, 10],
          },
          {
            cost: 6149,
            reward: [1110, 555, 185, 45, 10],
          },
          {
            cost: 6303,
            reward: [1120, 560, 185, 45, 10],
          },
          {
            cost: 6461,
            reward: [1135, 570, 190, 50, 10],
          },
          {
            cost: 6622,
            reward: [1150, 575, 190, 50, 10],
          },
          {
            cost: 6788,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 6957,
            reward: [1175, 590, 195, 50, 10],
          },
          {
            cost: 7131,
            reward: [1190, 595, 200, 50, 10],
          },
          {
            cost: 7309,
            reward: [1200, 600, 200, 50, 10],
          },
          {
            cost: 7492,
            reward: [1215, 610, 205, 50, 10],
          },
          {
            cost: 7679,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 7871,
            reward: [1240, 620, 205, 50, 10],
          },
          {
            cost: 8068,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 8270,
            reward: [1270, 635, 210, 55, 10],
          },
          {
            cost: 8477,
            reward: [1280, 640, 215, 55, 10],
          },
          {
            cost: 8688,
            reward: [1295, 650, 215, 55, 10],
          },
          {
            cost: 8906,
            reward: [1310, 655, 220, 55, 10],
          },
          {
            cost: 9128,
            reward: [1325, 665, 220, 55, 10],
          },
          {
            cost: 9357,
            reward: [1335, 670, 225, 55, 10],
          },
          {
            cost: 9590,
            reward: [1350, 675, 225, 55, 10],
          },
          {
            cost: 9830,
            reward: [1365, 685, 230, 60, 10],
          },
          {
            cost: 10076,
            reward: [1380, 690, 230, 60, 10],
          },
          {
            cost: 10328,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 10586,
            reward: [1405, 705, 235, 60, 10],
          },
          {
            cost: 10851,
            reward: [1420, 710, 235, 60, 10],
          },
          {
            cost: 11122,
            reward: [1430, 715, 240, 60, 10],
          },
          {
            cost: 11400,
            reward: [1445, 725, 240, 60, 10],
          },
          {
            cost: 11685,
            reward: [1460, 730, 245, 60, 10],
          },
          {
            cost: 11977,
            reward: [1475, 740, 245, 60, 10],
          },
          {
            cost: 12276,
            reward: [1490, 745, 250, 65, 15],
          },
          {
            cost: 12583,
            reward: [1500, 750, 250, 65, 15],
          },
          {
            cost: 12898,
            reward: [1515, 760, 255, 65, 15],
          },
          {
            cost: 13220,
            reward: [1530, 765, 255, 65, 15],
          },
          {
            cost: 13551,
            reward: [1545, 775, 260, 65, 15],
          },
          {
            cost: 13890,
            reward: [1555, 780, 260, 65, 15],
          },
          {
            cost: 14237,
            reward: [1570, 785, 260, 65, 15],
          },
        ],
      },
      Notre_Dame: {
        levels: [
          {
            cost: 50,
            reward: [5, 5, 0, 0, 0],
          },
          {
            cost: 70,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 130,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 200,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 270,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 330,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 420,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 490,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 570,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 650,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 667,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 683,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 700,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 718,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 736,
            reward: [110, 55, 20, 5, 0],
          },
          {
            cost: 754,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 773,
            reward: [130, 65, 20, 5, 0],
          },
          {
            cost: 792,
            reward: [140, 70, 25, 5, 0],
          },
          {
            cost: 812,
            reward: [150, 75, 25, 5, 0],
          },
          {
            cost: 833,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 853,
            reward: [165, 85, 30, 10, 0],
          },
          {
            cost: 875,
            reward: [175, 90, 30, 10, 0],
          },
          {
            cost: 897,
            reward: [185, 95, 30, 10, 0],
          },
          {
            cost: 919,
            reward: [195, 100, 35, 10, 0],
          },
          {
            cost: 942,
            reward: [205, 105, 35, 10, 0],
          },
          {
            cost: 965,
            reward: [215, 110, 35, 10, 0],
          },
          {
            cost: 990,
            reward: [225, 115, 40, 10, 0],
          },
          {
            cost: 1014,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 1040,
            reward: [245, 125, 40, 10, 0],
          },
          {
            cost: 1066,
            reward: [255, 130, 45, 10, 0],
          },
          {
            cost: 1092,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1120,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1147,
            reward: [285, 145, 50, 15, 5],
          },
          {
            cost: 1176,
            reward: [300, 150, 50, 15, 5],
          },
          {
            cost: 1206,
            reward: [310, 155, 50, 15, 5],
          },
          {
            cost: 1236,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1267,
            reward: [330, 165, 55, 15, 5],
          },
          {
            cost: 1298,
            reward: [340, 170, 55, 15, 5],
          },
          {
            cost: 1331,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1364,
            reward: [365, 185, 60, 15, 5],
          },
          {
            cost: 1398,
            reward: [375, 190, 65, 15, 5],
          },
          {
            cost: 1433,
            reward: [385, 195, 65, 15, 5],
          },
          {
            cost: 1469,
            reward: [395, 200, 65, 15, 5],
          },
          {
            cost: 1505,
            reward: [405, 205, 70, 20, 5],
          },
          {
            cost: 1543,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1582,
            reward: [430, 215, 70, 20, 5],
          },
          {
            cost: 1621,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1662,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 1703,
            reward: [465, 235, 80, 20, 5],
          },
          {
            cost: 1746,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 1789,
            reward: [485, 245, 80, 20, 5],
          },
          {
            cost: 1834,
            reward: [500, 250, 85, 20, 5],
          },
          {
            cost: 1880,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 1927,
            reward: [520, 260, 85, 20, 5],
          },
          {
            cost: 1975,
            reward: [535, 270, 90, 25, 5],
          },
          {
            cost: 2025,
            reward: [545, 275, 90, 25, 5],
          },
          {
            cost: 2075,
            reward: [555, 280, 95, 25, 5],
          },
          {
            cost: 2127,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2180,
            reward: [580, 290, 95, 25, 5],
          },
          {
            cost: 2235,
            reward: [590, 295, 100, 25, 5],
          },
          {
            cost: 2290,
            reward: [605, 305, 100, 25, 5],
          },
          {
            cost: 2348,
            reward: [615, 310, 105, 25, 5],
          },
          {
            cost: 2406,
            reward: [630, 315, 105, 25, 5],
          },
          {
            cost: 2467,
            reward: [640, 320, 105, 25, 5],
          },
          {
            cost: 2528,
            reward: [650, 325, 110, 30, 5],
          },
          {
            cost: 2591,
            reward: [665, 335, 110, 30, 5],
          },
          {
            cost: 2656,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2723,
            reward: [690, 345, 115, 30, 5],
          },
          {
            cost: 2791,
            reward: [700, 350, 115, 30, 5],
          },
          {
            cost: 2860,
            reward: [715, 360, 120, 30, 5],
          },
          {
            cost: 2932,
            reward: [725, 365, 120, 30, 5],
          },
          {
            cost: 3005,
            reward: [735, 370, 125, 30, 5],
          },
          {
            cost: 3080,
            reward: [750, 375, 125, 30, 5],
          },
          {
            cost: 3157,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 3236,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 3317,
            reward: [785, 395, 130, 35, 5],
          },
          {
            cost: 3400,
            reward: [800, 400, 135, 35, 5],
          },
          {
            cost: 3485,
            reward: [810, 405, 135, 35, 5],
          },
          {
            cost: 3572,
            reward: [825, 415, 140, 35, 5],
          },
          {
            cost: 3661,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 3753,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 3847,
            reward: [860, 430, 145, 35, 5],
          },
          {
            cost: 3943,
            reward: [875, 440, 145, 35, 5],
          },
          {
            cost: 4041,
            reward: [890, 445, 150, 40, 10],
          },
          {
            cost: 4142,
            reward: [900, 450, 150, 40, 10],
          },
          {
            cost: 4246,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 4352,
            reward: [925, 465, 155, 40, 10],
          },
          {
            cost: 4461,
            reward: [940, 470, 155, 40, 10],
          },
          {
            cost: 4572,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 4687,
            reward: [965, 485, 160, 40, 10],
          },
          {
            cost: 4804,
            reward: [975, 490, 165, 40, 10],
          },
          {
            cost: 4924,
            reward: [990, 495, 165, 40, 10],
          },
          {
            cost: 5047,
            reward: [1005, 505, 170, 45, 10],
          },
          {
            cost: 5173,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 5303,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 5435,
            reward: [1040, 520, 175, 45, 10],
          },
          {
            cost: 5571,
            reward: [1055, 530, 175, 45, 10],
          },
          {
            cost: 5710,
            reward: [1070, 535, 180, 45, 10],
          },
          {
            cost: 5853,
            reward: [1080, 540, 180, 45, 10],
          },
          {
            cost: 5999,
            reward: [1095, 550, 185, 45, 10],
          },
          {
            cost: 6149,
            reward: [1110, 555, 185, 45, 10],
          },
          {
            cost: 6303,
            reward: [1120, 560, 185, 45, 10],
          },
          {
            cost: 6461,
            reward: [1135, 570, 190, 50, 10],
          },
          {
            cost: 6622,
            reward: [1150, 575, 190, 50, 10],
          },
          {
            cost: 6788,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 6957,
            reward: [1175, 590, 195, 50, 10],
          },
          {
            cost: 7131,
            reward: [1190, 595, 200, 50, 10],
          },
          {
            cost: 7309,
            reward: [1200, 600, 200, 50, 10],
          },
          {
            cost: 7492,
            reward: [1215, 610, 205, 50, 10],
          },
          {
            cost: 7679,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 7871,
            reward: [1240, 620, 205, 50, 10],
          },
          {
            cost: 8068,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 8270,
            reward: [1270, 635, 210, 55, 10],
          },
          {
            cost: 8477,
            reward: [1280, 640, 215, 55, 10],
          },
          {
            cost: 8688,
            reward: [1295, 650, 215, 55, 10],
          },
          {
            cost: 8906,
            reward: [1310, 655, 220, 55, 10],
          },
          {
            cost: 9128,
            reward: [1325, 665, 220, 55, 10],
          },
          {
            cost: 9357,
            reward: [1335, 670, 225, 55, 10],
          },
          {
            cost: 9590,
            reward: [1350, 675, 225, 55, 10],
          },
          {
            cost: 9830,
            reward: [1365, 685, 230, 60, 10],
          },
          {
            cost: 10076,
            reward: [1380, 690, 230, 60, 10],
          },
          {
            cost: 10328,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 10586,
            reward: [1405, 705, 235, 60, 10],
          },
          {
            cost: 10851,
            reward: [1420, 710, 235, 60, 10],
          },
          {
            cost: 11122,
            reward: [1430, 715, 240, 60, 10],
          },
          {
            cost: 11400,
            reward: [1445, 725, 240, 60, 10],
          },
          {
            cost: 11685,
            reward: [1460, 730, 245, 60, 10],
          },
          {
            cost: 11977,
            reward: [1475, 740, 245, 60, 10],
          },
          {
            cost: 12276,
            reward: [1490, 745, 250, 65, 15],
          },
          {
            cost: 12583,
            reward: [1500, 750, 250, 65, 15],
          },
          {
            cost: 12898,
            reward: [1515, 760, 255, 65, 15],
          },
          {
            cost: 13220,
            reward: [1530, 765, 255, 65, 15],
          },
          {
            cost: 13551,
            reward: [1545, 775, 260, 65, 15],
          },
          {
            cost: 13890,
            reward: [1555, 780, 260, 65, 15],
          },
          {
            cost: 14237,
            reward: [1570, 785, 260, 65, 15],
          },
        ],
      },
      Saint_Basil_s_Cathedral: {
        levels: [
          {
            cost: 50,
            reward: [5, 5, 0, 0, 0],
          },
          {
            cost: 80,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 140,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 210,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 290,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 360,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 440,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 530,
            reward: [55, 30, 10, 5, 0],
          },
          {
            cost: 610,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 700,
            reward: [70, 35, 10, 5, 0],
          },
          {
            cost: 718,
            reward: [80, 40, 15, 5, 0],
          },
          {
            cost: 736,
            reward: [90, 45, 15, 5, 0],
          },
          {
            cost: 754,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 773,
            reward: [110, 55, 20, 5, 0],
          },
          {
            cost: 792,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 812,
            reward: [125, 65, 20, 5, 0],
          },
          {
            cost: 833,
            reward: [140, 70, 25, 5, 0],
          },
          {
            cost: 853,
            reward: [150, 75, 25, 5, 0],
          },
          {
            cost: 875,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 897,
            reward: [170, 85, 30, 10, 0],
          },
          {
            cost: 919,
            reward: [180, 90, 30, 10, 0],
          },
          {
            cost: 942,
            reward: [190, 95, 30, 10, 0],
          },
          {
            cost: 965,
            reward: [200, 100, 35, 10, 0],
          },
          {
            cost: 990,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 1014,
            reward: [220, 110, 35, 10, 0],
          },
          {
            cost: 1040,
            reward: [230, 115, 40, 10, 0],
          },
          {
            cost: 1066,
            reward: [240, 120, 40, 10, 0],
          },
          {
            cost: 1092,
            reward: [250, 125, 40, 10, 0],
          },
          {
            cost: 1120,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1148,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1176,
            reward: [285, 145, 50, 15, 5],
          },
          {
            cost: 1206,
            reward: [295, 150, 50, 15, 5],
          },
          {
            cost: 1236,
            reward: [310, 155, 50, 15, 5],
          },
          {
            cost: 1267,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1298,
            reward: [330, 165, 55, 15, 5],
          },
          {
            cost: 1331,
            reward: [340, 170, 55, 15, 5],
          },
          {
            cost: 1364,
            reward: [355, 180, 60, 15, 5],
          },
          {
            cost: 1398,
            reward: [365, 185, 60, 15, 5],
          },
          {
            cost: 1433,
            reward: [375, 190, 65, 15, 5],
          },
          {
            cost: 1469,
            reward: [390, 195, 65, 15, 5],
          },
          {
            cost: 1506,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1543,
            reward: [410, 205, 70, 20, 5],
          },
          {
            cost: 1582,
            reward: [425, 215, 70, 20, 5],
          },
          {
            cost: 1621,
            reward: [435, 220, 75, 20, 5],
          },
          {
            cost: 1662,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 1703,
            reward: [460, 230, 75, 20, 5],
          },
          {
            cost: 1746,
            reward: [470, 235, 80, 20, 5],
          },
          {
            cost: 1789,
            reward: [485, 245, 80, 20, 5],
          },
          {
            cost: 1834,
            reward: [495, 250, 85, 20, 5],
          },
          {
            cost: 1880,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 1927,
            reward: [520, 260, 85, 20, 5],
          },
          {
            cost: 1975,
            reward: [535, 270, 90, 25, 5],
          },
          {
            cost: 2025,
            reward: [545, 275, 90, 25, 5],
          },
          {
            cost: 2075,
            reward: [560, 280, 95, 25, 5],
          },
          {
            cost: 2127,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2180,
            reward: [585, 295, 100, 25, 5],
          },
          {
            cost: 2235,
            reward: [595, 300, 100, 25, 5],
          },
          {
            cost: 2291,
            reward: [610, 305, 100, 25, 5],
          },
          {
            cost: 2348,
            reward: [620, 310, 105, 25, 5],
          },
          {
            cost: 2406,
            reward: [635, 320, 105, 25, 5],
          },
          {
            cost: 2467,
            reward: [645, 325, 110, 30, 5],
          },
          {
            cost: 2528,
            reward: [660, 330, 110, 30, 5],
          },
          {
            cost: 2591,
            reward: [670, 335, 110, 30, 5],
          },
          {
            cost: 2656,
            reward: [685, 345, 115, 30, 5],
          },
          {
            cost: 2723,
            reward: [700, 350, 115, 30, 5],
          },
          {
            cost: 2791,
            reward: [710, 355, 120, 30, 5],
          },
          {
            cost: 2860,
            reward: [725, 365, 120, 30, 5],
          },
          {
            cost: 2932,
            reward: [735, 370, 125, 30, 5],
          },
          {
            cost: 3005,
            reward: [750, 375, 125, 30, 5],
          },
          {
            cost: 3080,
            reward: [765, 385, 130, 35, 5],
          },
          {
            cost: 3157,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 3236,
            reward: [790, 395, 130, 35, 5],
          },
          {
            cost: 3317,
            reward: [805, 405, 135, 35, 5],
          },
          {
            cost: 3400,
            reward: [815, 410, 135, 35, 5],
          },
          {
            cost: 3485,
            reward: [830, 415, 140, 35, 5],
          },
          {
            cost: 3572,
            reward: [845, 425, 140, 35, 5],
          },
          {
            cost: 3661,
            reward: [855, 430, 145, 35, 5],
          },
          {
            cost: 3753,
            reward: [870, 435, 145, 35, 5],
          },
          {
            cost: 3847,
            reward: [885, 445, 150, 40, 10],
          },
          {
            cost: 3943,
            reward: [895, 450, 150, 40, 10],
          },
          {
            cost: 4042,
            reward: [910, 455, 150, 40, 10],
          },
          {
            cost: 4143,
            reward: [925, 465, 155, 40, 10],
          },
          {
            cost: 4246,
            reward: [935, 470, 155, 40, 10],
          },
          {
            cost: 4352,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 4461,
            reward: [965, 485, 160, 40, 10],
          },
          {
            cost: 4573,
            reward: [980, 490, 165, 40, 10],
          },
          {
            cost: 4687,
            reward: [990, 495, 165, 40, 10],
          },
          {
            cost: 4804,
            reward: [1005, 505, 170, 45, 10],
          },
          {
            cost: 4924,
            reward: [1020, 510, 170, 45, 10],
          },
          {
            cost: 5047,
            reward: [1035, 520, 175, 45, 10],
          },
          {
            cost: 5173,
            reward: [1045, 525, 175, 45, 10],
          },
          {
            cost: 5303,
            reward: [1060, 530, 175, 45, 10],
          },
          {
            cost: 5435,
            reward: [1075, 540, 180, 45, 10],
          },
          {
            cost: 5571,
            reward: [1090, 545, 180, 45, 10],
          },
          {
            cost: 5710,
            reward: [1105, 555, 185, 45, 10],
          },
          {
            cost: 5853,
            reward: [1115, 560, 185, 45, 10],
          },
          {
            cost: 5999,
            reward: [1130, 565, 190, 50, 10],
          },
          {
            cost: 6149,
            reward: [1145, 575, 190, 50, 10],
          },
          {
            cost: 6303,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 6461,
            reward: [1175, 590, 195, 50, 10],
          },
          {
            cost: 6622,
            reward: [1185, 595, 200, 50, 10],
          },
          {
            cost: 6788,
            reward: [1200, 600, 200, 50, 10],
          },
          {
            cost: 6957,
            reward: [1215, 610, 205, 50, 10],
          },
          {
            cost: 7131,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 7310,
            reward: [1245, 625, 210, 55, 10],
          },
          {
            cost: 7492,
            reward: [1260, 630, 210, 55, 10],
          },
          {
            cost: 7680,
            reward: [1275, 640, 215, 55, 10],
          },
          {
            cost: 7872,
            reward: [1285, 645, 215, 55, 10],
          },
          {
            cost: 8068,
            reward: [1300, 650, 215, 55, 10],
          },
          {
            cost: 8270,
            reward: [1315, 660, 220, 55, 10],
          },
          {
            cost: 8477,
            reward: [1330, 665, 220, 55, 10],
          },
          {
            cost: 8689,
            reward: [1345, 675, 225, 55, 10],
          },
          {
            cost: 8906,
            reward: [1360, 680, 225, 55, 10],
          },
          {
            cost: 9129,
            reward: [1375, 690, 230, 60, 10],
          },
          {
            cost: 9357,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 9591,
            reward: [1405, 705, 235, 60, 10],
          },
          {
            cost: 9830,
            reward: [1415, 710, 235, 60, 10],
          },
          {
            cost: 10076,
            reward: [1430, 715, 240, 60, 10],
          },
          {
            cost: 10328,
            reward: [1445, 725, 240, 60, 10],
          },
          {
            cost: 10586,
            reward: [1460, 730, 245, 60, 10],
          },
          {
            cost: 10851,
            reward: [1475, 740, 245, 60, 10],
          },
          {
            cost: 11122,
            reward: [1490, 745, 250, 65, 15],
          },
          {
            cost: 11400,
            reward: [1505, 755, 250, 65, 15],
          },
          {
            cost: 11685,
            reward: [1520, 760, 255, 65, 15],
          },
          {
            cost: 11977,
            reward: [1535, 770, 255, 65, 15],
          },
          {
            cost: 12277,
            reward: [1550, 775, 260, 65, 15],
          },
          {
            cost: 12584,
            reward: [1565, 785, 260, 65, 15],
          },
          {
            cost: 12898,
            reward: [1580, 790, 265, 65, 15],
          },
          {
            cost: 13221,
            reward: [1595, 800, 265, 65, 15],
          },
          {
            cost: 13551,
            reward: [1610, 805, 270, 70, 15],
          },
          {
            cost: 13890,
            reward: [1625, 815, 270, 70, 15],
          },
          {
            cost: 14237,
            reward: [1640, 820, 275, 70, 15],
          },
          {
            cost: 14593,
            reward: [1655, 830, 275, 70, 15],
          },
          {
            cost: 14958,
            reward: [1670, 835, 280, 70, 15],
          },
          {
            cost: 15332,
            reward: [1685, 845, 280, 70, 15],
          },
          {
            cost: 15715,
            reward: [1700, 850, 285, 70, 15],
          },
          {
            cost: 16108,
            reward: [1715, 860, 285, 70, 15],
          },
          {
            cost: 16511,
            reward: [1730, 865, 290, 75, 15],
          },
          {
            cost: 16923,
            reward: [1745, 875, 290, 75, 15],
          },
          {
            cost: 17347,
            reward: [1760, 880, 295, 75, 15],
          },
          {
            cost: 17780,
            reward: [1775, 890, 295, 75, 15],
          },
          {
            cost: 18225,
            reward: [1790, 895, 300, 75, 15],
          },
          {
            cost: 18680,
            reward: [1805, 905, 300, 75, 15],
          },
          {
            cost: 19147,
            reward: [1820, 910, 305, 75, 15],
          },
          {
            cost: 19626,
            reward: [1835, 920, 305, 75, 15],
          },
          {
            cost: 20117,
            reward: [1850, 925, 310, 80, 15],
          },
          {
            cost: 20620,
            reward: [1865, 935, 310, 80, 15],
          },
          {
            cost: 21135,
            reward: [1880, 940, 315, 80, 15],
          },
          {
            cost: 21663,
            reward: [1895, 950, 315, 80, 15],
          },
          {
            cost: 22205,
            reward: [1910, 955, 320, 80, 15],
          },
          {
            cost: 22760,
            reward: [1925, 965, 320, 80, 15],
          },
          {
            cost: 23329,
            reward: [1940, 970, 325, 80, 15],
          },
          {
            cost: 23912,
            reward: [1955, 980, 325, 80, 15],
          },
          {
            cost: 24510,
            reward: [1975, 990, 330, 85, 15],
          },
          {
            cost: 25123,
            reward: [1990, 995, 330, 85, 15],
          },
          {
            cost: 25751,
            reward: [2005, 1005, 335, 85, 15],
          },
        ],
      },
      Castel_del_Monte: {
        levels: [
          {
            cost: 50,
            reward: [5, 5, 0, 0, 0],
          },
          {
            cost: 80,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 140,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 210,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 290,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 360,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 440,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 530,
            reward: [55, 30, 10, 5, 0],
          },
          {
            cost: 610,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 700,
            reward: [70, 35, 10, 5, 0],
          },
          {
            cost: 718,
            reward: [80, 40, 15, 5, 0],
          },
          {
            cost: 736,
            reward: [90, 45, 15, 5, 0],
          },
          {
            cost: 754,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 773,
            reward: [110, 55, 20, 5, 0],
          },
          {
            cost: 792,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 812,
            reward: [125, 65, 20, 5, 0],
          },
          {
            cost: 833,
            reward: [140, 70, 25, 5, 0],
          },
          {
            cost: 853,
            reward: [150, 75, 25, 5, 0],
          },
          {
            cost: 875,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 897,
            reward: [170, 85, 30, 10, 0],
          },
          {
            cost: 919,
            reward: [180, 90, 30, 10, 0],
          },
          {
            cost: 942,
            reward: [190, 95, 30, 10, 0],
          },
          {
            cost: 965,
            reward: [200, 100, 35, 10, 0],
          },
          {
            cost: 990,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 1014,
            reward: [220, 110, 35, 10, 0],
          },
          {
            cost: 1040,
            reward: [230, 115, 40, 10, 0],
          },
          {
            cost: 1066,
            reward: [240, 120, 40, 10, 0],
          },
          {
            cost: 1092,
            reward: [250, 125, 40, 10, 0],
          },
          {
            cost: 1120,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1148,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1176,
            reward: [285, 145, 50, 15, 5],
          },
          {
            cost: 1206,
            reward: [295, 150, 50, 15, 5],
          },
          {
            cost: 1236,
            reward: [310, 155, 50, 15, 5],
          },
          {
            cost: 1267,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1298,
            reward: [330, 165, 55, 15, 5],
          },
          {
            cost: 1331,
            reward: [340, 170, 55, 15, 5],
          },
          {
            cost: 1364,
            reward: [355, 180, 60, 15, 5],
          },
          {
            cost: 1398,
            reward: [365, 185, 60, 15, 5],
          },
          {
            cost: 1433,
            reward: [375, 190, 65, 15, 5],
          },
          {
            cost: 1469,
            reward: [390, 195, 65, 15, 5],
          },
          {
            cost: 1506,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1543,
            reward: [410, 205, 70, 20, 5],
          },
          {
            cost: 1582,
            reward: [425, 215, 70, 20, 5],
          },
          {
            cost: 1621,
            reward: [435, 220, 75, 20, 5],
          },
          {
            cost: 1662,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 1703,
            reward: [460, 230, 75, 20, 5],
          },
          {
            cost: 1746,
            reward: [470, 235, 80, 20, 5],
          },
          {
            cost: 1789,
            reward: [485, 245, 80, 20, 5],
          },
          {
            cost: 1834,
            reward: [495, 250, 85, 20, 5],
          },
          {
            cost: 1880,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 1927,
            reward: [520, 260, 85, 20, 5],
          },
          {
            cost: 1975,
            reward: [535, 270, 90, 25, 5],
          },
          {
            cost: 2025,
            reward: [545, 275, 90, 25, 5],
          },
          {
            cost: 2075,
            reward: [560, 280, 95, 25, 5],
          },
          {
            cost: 2127,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2180,
            reward: [585, 295, 100, 25, 5],
          },
          {
            cost: 2235,
            reward: [595, 300, 100, 25, 5],
          },
          {
            cost: 2291,
            reward: [610, 305, 100, 25, 5],
          },
          {
            cost: 2348,
            reward: [620, 310, 105, 25, 5],
          },
          {
            cost: 2406,
            reward: [635, 320, 105, 25, 5],
          },
          {
            cost: 2467,
            reward: [645, 325, 110, 30, 5],
          },
          {
            cost: 2528,
            reward: [660, 330, 110, 30, 5],
          },
          {
            cost: 2591,
            reward: [670, 335, 110, 30, 5],
          },
          {
            cost: 2656,
            reward: [685, 345, 115, 30, 5],
          },
          {
            cost: 2723,
            reward: [700, 350, 115, 30, 5],
          },
          {
            cost: 2791,
            reward: [710, 355, 120, 30, 5],
          },
          {
            cost: 2860,
            reward: [725, 365, 120, 30, 5],
          },
          {
            cost: 2932,
            reward: [735, 370, 125, 30, 5],
          },
          {
            cost: 3005,
            reward: [750, 375, 125, 30, 5],
          },
          {
            cost: 3080,
            reward: [765, 385, 130, 35, 5],
          },
          {
            cost: 3157,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 3236,
            reward: [790, 395, 130, 35, 5],
          },
          {
            cost: 3317,
            reward: [805, 405, 135, 35, 5],
          },
          {
            cost: 3400,
            reward: [815, 410, 135, 35, 5],
          },
          {
            cost: 3485,
            reward: [830, 415, 140, 35, 5],
          },
          {
            cost: 3572,
            reward: [845, 425, 140, 35, 5],
          },
          {
            cost: 3661,
            reward: [855, 430, 145, 35, 5],
          },
          {
            cost: 3753,
            reward: [870, 435, 145, 35, 5],
          },
          {
            cost: 3847,
            reward: [885, 445, 150, 40, 10],
          },
          {
            cost: 3943,
            reward: [895, 450, 150, 40, 10],
          },
          {
            cost: 4042,
            reward: [910, 455, 150, 40, 10],
          },
          {
            cost: 4143,
            reward: [925, 465, 155, 40, 10],
          },
          {
            cost: 4246,
            reward: [935, 470, 155, 40, 10],
          },
          {
            cost: 4352,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 4461,
            reward: [965, 485, 160, 40, 10],
          },
          {
            cost: 4573,
            reward: [980, 490, 165, 40, 10],
          },
          {
            cost: 4687,
            reward: [990, 495, 165, 40, 10],
          },
          {
            cost: 4804,
            reward: [1005, 505, 170, 45, 10],
          },
          {
            cost: 4924,
            reward: [1020, 510, 170, 45, 10],
          },
          {
            cost: 5047,
            reward: [1035, 520, 175, 45, 10],
          },
          {
            cost: 5173,
            reward: [1045, 525, 175, 45, 10],
          },
          {
            cost: 5303,
            reward: [1060, 530, 175, 45, 10],
          },
          {
            cost: 5435,
            reward: [1075, 540, 180, 45, 10],
          },
          {
            cost: 5571,
            reward: [1090, 545, 180, 45, 10],
          },
          {
            cost: 5710,
            reward: [1105, 555, 185, 45, 10],
          },
          {
            cost: 5853,
            reward: [1115, 560, 185, 45, 10],
          },
          {
            cost: 5999,
            reward: [1130, 565, 190, 50, 10],
          },
          {
            cost: 6149,
            reward: [1145, 575, 190, 50, 10],
          },
          {
            cost: 6303,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 6461,
            reward: [1175, 590, 195, 50, 10],
          },
          {
            cost: 6622,
            reward: [1185, 595, 200, 50, 10],
          },
          {
            cost: 6788,
            reward: [1200, 600, 200, 50, 10],
          },
          {
            cost: 6957,
            reward: [1215, 610, 205, 50, 10],
          },
          {
            cost: 7131,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 7310,
            reward: [1245, 625, 210, 55, 10],
          },
          {
            cost: 7492,
            reward: [1260, 630, 210, 55, 10],
          },
          {
            cost: 7680,
            reward: [1275, 640, 215, 55, 10],
          },
          {
            cost: 7872,
            reward: [1285, 645, 215, 55, 10],
          },
          {
            cost: 8068,
            reward: [1300, 650, 215, 55, 10],
          },
          {
            cost: 8270,
            reward: [1315, 660, 220, 55, 10],
          },
          {
            cost: 8477,
            reward: [1330, 665, 220, 55, 10],
          },
          {
            cost: 8689,
            reward: [1345, 675, 225, 55, 10],
          },
          {
            cost: 8906,
            reward: [1360, 680, 225, 55, 10],
          },
          {
            cost: 9129,
            reward: [1375, 690, 230, 60, 10],
          },
          {
            cost: 9357,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 9591,
            reward: [1405, 705, 235, 60, 10],
          },
          {
            cost: 9830,
            reward: [1415, 710, 235, 60, 10],
          },
          {
            cost: 10076,
            reward: [1430, 715, 240, 60, 10],
          },
          {
            cost: 10328,
            reward: [1445, 725, 240, 60, 10],
          },
          {
            cost: 10586,
            reward: [1460, 730, 245, 60, 10],
          },
          {
            cost: 10851,
            reward: [1475, 740, 245, 60, 10],
          },
          {
            cost: 11122,
            reward: [1490, 745, 250, 65, 15],
          },
          {
            cost: 11400,
            reward: [1505, 755, 250, 65, 15],
          },
          {
            cost: 11685,
            reward: [1520, 760, 255, 65, 15],
          },
          {
            cost: 11977,
            reward: [1535, 770, 255, 65, 15],
          },
          {
            cost: 12277,
            reward: [1550, 775, 260, 65, 15],
          },
          {
            cost: 12584,
            reward: [1565, 785, 260, 65, 15],
          },
          {
            cost: 12898,
            reward: [1580, 790, 265, 65, 15],
          },
          {
            cost: 13221,
            reward: [1595, 800, 265, 65, 15],
          },
          {
            cost: 13551,
            reward: [1610, 805, 270, 70, 15],
          },
          {
            cost: 13890,
            reward: [1625, 815, 270, 70, 15],
          },
          {
            cost: 14237,
            reward: [1640, 820, 275, 70, 15],
          },
          {
            cost: 14593,
            reward: [1655, 830, 275, 70, 15],
          },
          {
            cost: 14958,
            reward: [1670, 835, 280, 70, 15],
          },
          {
            cost: 15332,
            reward: [1685, 845, 280, 70, 15],
          },
          {
            cost: 15715,
            reward: [1700, 850, 285, 70, 15],
          },
          {
            cost: 16108,
            reward: [1715, 860, 285, 70, 15],
          },
          {
            cost: 16511,
            reward: [1730, 865, 290, 75, 15],
          },
          {
            cost: 16923,
            reward: [1745, 875, 290, 75, 15],
          },
          {
            cost: 17347,
            reward: [1760, 880, 295, 75, 15],
          },
          {
            cost: 17780,
            reward: [1775, 890, 295, 75, 15],
          },
          {
            cost: 18225,
            reward: [1790, 895, 300, 75, 15],
          },
          {
            cost: 18680,
            reward: [1805, 905, 300, 75, 15],
          },
          {
            cost: 19147,
            reward: [1820, 910, 305, 75, 15],
          },
          {
            cost: 19626,
            reward: [1835, 920, 305, 75, 15],
          },
          {
            cost: 20117,
            reward: [1850, 925, 310, 80, 15],
          },
          {
            cost: 20620,
            reward: [1865, 935, 310, 80, 15],
          },
          {
            cost: 21135,
            reward: [1880, 940, 315, 80, 15],
          },
          {
            cost: 21663,
            reward: [1895, 950, 315, 80, 15],
          },
          {
            cost: 22205,
            reward: [1910, 955, 320, 80, 15],
          },
          {
            cost: 22760,
            reward: [1925, 965, 320, 80, 15],
          },
          {
            cost: 23329,
            reward: [1940, 970, 325, 80, 15],
          },
          {
            cost: 23912,
            reward: [1955, 980, 325, 80, 15],
          },
          {
            cost: 24510,
            reward: [1975, 990, 330, 85, 15],
          },
          {
            cost: 25123,
            reward: [1990, 995, 330, 85, 15],
          },
          {
            cost: 25751,
            reward: [2005, 1005, 335, 85, 15],
          },
        ],
      },
      Deal_Castle: {
        levels: [
          {
            cost: 50,
            reward: [5, 5, 0, 0, 0],
          },
          {
            cost: 90,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 150,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 220,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 310,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 380,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 480,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 560,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 650,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 740,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 759,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 778,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 797,
            reward: [105, 55, 20, 5, 0],
          },
          {
            cost: 817,
            reward: [115, 60, 20, 5, 0],
          },
          {
            cost: 838,
            reward: [125, 65, 20, 5, 0],
          },
          {
            cost: 859,
            reward: [135, 70, 25, 5, 0],
          },
          {
            cost: 880,
            reward: [145, 75, 25, 5, 0],
          },
          {
            cost: 902,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 925,
            reward: [170, 85, 30, 10, 0],
          },
          {
            cost: 948,
            reward: [180, 90, 30, 10, 0],
          },
          {
            cost: 971,
            reward: [190, 95, 30, 10, 0],
          },
          {
            cost: 996,
            reward: [200, 100, 35, 10, 0],
          },
          {
            cost: 1021,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 1046,
            reward: [225, 115, 40, 10, 0],
          },
          {
            cost: 1072,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 1099,
            reward: [245, 125, 40, 10, 0],
          },
          {
            cost: 1126,
            reward: [260, 130, 45, 10, 0],
          },
          {
            cost: 1155,
            reward: [270, 135, 45, 10, 0],
          },
          {
            cost: 1184,
            reward: [280, 140, 45, 10, 0],
          },
          {
            cost: 1213,
            reward: [295, 150, 50, 15, 5],
          },
          {
            cost: 1243,
            reward: [305, 155, 50, 15, 5],
          },
          {
            cost: 1274,
            reward: [315, 160, 55, 15, 5],
          },
          {
            cost: 1306,
            reward: [330, 165, 55, 15, 5],
          },
          {
            cost: 1339,
            reward: [340, 170, 55, 15, 5],
          },
          {
            cost: 1372,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1407,
            reward: [365, 185, 60, 15, 5],
          },
          {
            cost: 1442,
            reward: [375, 190, 65, 15, 5],
          },
          {
            cost: 1478,
            reward: [390, 195, 65, 15, 5],
          },
          {
            cost: 1515,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1553,
            reward: [415, 210, 70, 20, 5],
          },
          {
            cost: 1592,
            reward: [425, 215, 70, 20, 5],
          },
          {
            cost: 1631,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1672,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 1714,
            reward: [465, 235, 80, 20, 5],
          },
          {
            cost: 1757,
            reward: [480, 240, 80, 20, 5],
          },
          {
            cost: 1801,
            reward: [490, 245, 80, 20, 5],
          },
          {
            cost: 1846,
            reward: [505, 255, 85, 20, 5],
          },
          {
            cost: 1892,
            reward: [515, 260, 85, 20, 5],
          },
          {
            cost: 1939,
            reward: [530, 265, 90, 25, 5],
          },
          {
            cost: 1987,
            reward: [540, 270, 90, 25, 5],
          },
          {
            cost: 2037,
            reward: [555, 280, 95, 25, 5],
          },
          {
            cost: 2088,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2140,
            reward: [580, 290, 95, 25, 5],
          },
          {
            cost: 2194,
            reward: [595, 300, 100, 25, 5],
          },
          {
            cost: 2249,
            reward: [610, 305, 100, 25, 5],
          },
          {
            cost: 2305,
            reward: [620, 310, 105, 25, 5],
          },
          {
            cost: 2362,
            reward: [635, 320, 105, 25, 5],
          },
          {
            cost: 2421,
            reward: [650, 325, 110, 30, 5],
          },
          {
            cost: 2482,
            reward: [665, 335, 110, 30, 5],
          },
          {
            cost: 2544,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2608,
            reward: [690, 345, 115, 30, 5],
          },
          {
            cost: 2673,
            reward: [705, 355, 120, 30, 5],
          },
          {
            cost: 2740,
            reward: [715, 360, 120, 30, 5],
          },
          {
            cost: 2808,
            reward: [730, 365, 120, 30, 5],
          },
          {
            cost: 2878,
            reward: [745, 375, 125, 30, 5],
          },
          {
            cost: 2950,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 3024,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 3099,
            reward: [785, 395, 130, 35, 5],
          },
          {
            cost: 3177,
            reward: [800, 400, 135, 35, 5],
          },
          {
            cost: 3256,
            reward: [815, 410, 135, 35, 5],
          },
          {
            cost: 3338,
            reward: [830, 415, 140, 35, 5],
          },
          {
            cost: 3421,
            reward: [840, 420, 140, 35, 5],
          },
          {
            cost: 3507,
            reward: [855, 430, 145, 35, 5],
          },
          {
            cost: 3594,
            reward: [870, 435, 145, 35, 5],
          },
          {
            cost: 3684,
            reward: [885, 445, 150, 40, 10],
          },
          {
            cost: 3776,
            reward: [900, 450, 150, 40, 10],
          },
          {
            cost: 3871,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 3967,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 4067,
            reward: [940, 470, 155, 40, 10],
          },
          {
            cost: 4168,
            reward: [955, 480, 160, 40, 10],
          },
          {
            cost: 4272,
            reward: [970, 485, 160, 40, 10],
          },
          {
            cost: 4379,
            reward: [985, 495, 165, 40, 10],
          },
          {
            cost: 4489,
            reward: [1000, 500, 165, 40, 10],
          },
          {
            cost: 4601,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 4716,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 4834,
            reward: [1045, 525, 175, 45, 10],
          },
          {
            cost: 4955,
            reward: [1060, 530, 175, 45, 10],
          },
          {
            cost: 5079,
            reward: [1075, 540, 180, 45, 10],
          },
          {
            cost: 5205,
            reward: [1090, 545, 180, 45, 10],
          },
          {
            cost: 5336,
            reward: [1100, 550, 185, 45, 10],
          },
          {
            cost: 5469,
            reward: [1115, 560, 185, 45, 10],
          },
          {
            cost: 5606,
            reward: [1130, 565, 190, 50, 10],
          },
          {
            cost: 5746,
            reward: [1145, 575, 190, 50, 10],
          },
          {
            cost: 5889,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 6037,
            reward: [1175, 590, 195, 50, 10],
          },
          {
            cost: 6188,
            reward: [1190, 595, 200, 50, 10],
          },
          {
            cost: 6342,
            reward: [1205, 605, 200, 50, 10],
          },
          {
            cost: 6501,
            reward: [1220, 610, 205, 50, 10],
          },
          {
            cost: 6663,
            reward: [1235, 620, 205, 50, 10],
          },
          {
            cost: 6830,
            reward: [1250, 625, 210, 55, 10],
          },
          {
            cost: 7001,
            reward: [1265, 635, 210, 55, 10],
          },
          {
            cost: 7176,
            reward: [1280, 640, 215, 55, 10],
          },
          {
            cost: 7355,
            reward: [1295, 650, 215, 55, 10],
          },
          {
            cost: 7539,
            reward: [1310, 655, 220, 55, 10],
          },
          {
            cost: 7727,
            reward: [1325, 665, 220, 55, 10],
          },
          {
            cost: 7920,
            reward: [1345, 675, 225, 55, 10],
          },
          {
            cost: 8118,
            reward: [1355, 680, 225, 55, 10],
          },
          {
            cost: 8321,
            reward: [1375, 690, 230, 60, 10],
          },
          {
            cost: 8529,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 8743,
            reward: [1405, 705, 235, 60, 10],
          },
          {
            cost: 8961,
            reward: [1420, 710, 235, 60, 10],
          },
          {
            cost: 9185,
            reward: [1435, 720, 240, 60, 10],
          },
          {
            cost: 9415,
            reward: [1450, 725, 240, 60, 10],
          },
          {
            cost: 9650,
            reward: [1465, 735, 245, 60, 10],
          },
          {
            cost: 9891,
            reward: [1480, 740, 245, 60, 10],
          },
        ],
      },
      Frauenkirche_of_Dresden: {
        levels: [
          {
            cost: 50,
            reward: [5, 5, 0, 0, 0],
          },
          {
            cost: 90,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 150,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 220,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 310,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 380,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 480,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 560,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 650,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 740,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 759,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 778,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 797,
            reward: [105, 55, 20, 5, 0],
          },
          {
            cost: 817,
            reward: [115, 60, 20, 5, 0],
          },
          {
            cost: 838,
            reward: [125, 65, 20, 5, 0],
          },
          {
            cost: 859,
            reward: [135, 70, 25, 5, 0],
          },
          {
            cost: 880,
            reward: [145, 75, 25, 5, 0],
          },
          {
            cost: 902,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 925,
            reward: [170, 85, 30, 10, 0],
          },
          {
            cost: 948,
            reward: [180, 90, 30, 10, 0],
          },
          {
            cost: 971,
            reward: [190, 95, 30, 10, 0],
          },
          {
            cost: 996,
            reward: [200, 100, 35, 10, 0],
          },
          {
            cost: 1021,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 1046,
            reward: [225, 115, 40, 10, 0],
          },
          {
            cost: 1072,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 1099,
            reward: [245, 125, 40, 10, 0],
          },
          {
            cost: 1126,
            reward: [260, 130, 45, 10, 0],
          },
          {
            cost: 1155,
            reward: [270, 135, 45, 10, 0],
          },
          {
            cost: 1184,
            reward: [280, 140, 45, 10, 0],
          },
          {
            cost: 1213,
            reward: [295, 150, 50, 15, 5],
          },
          {
            cost: 1243,
            reward: [305, 155, 50, 15, 5],
          },
          {
            cost: 1274,
            reward: [315, 160, 55, 15, 5],
          },
          {
            cost: 1306,
            reward: [330, 165, 55, 15, 5],
          },
          {
            cost: 1339,
            reward: [340, 170, 55, 15, 5],
          },
          {
            cost: 1372,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1407,
            reward: [365, 185, 60, 15, 5],
          },
          {
            cost: 1442,
            reward: [375, 190, 65, 15, 5],
          },
          {
            cost: 1478,
            reward: [390, 195, 65, 15, 5],
          },
          {
            cost: 1515,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1553,
            reward: [415, 210, 70, 20, 5],
          },
          {
            cost: 1592,
            reward: [425, 215, 70, 20, 5],
          },
          {
            cost: 1631,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1672,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 1714,
            reward: [465, 235, 80, 20, 5],
          },
          {
            cost: 1757,
            reward: [480, 240, 80, 20, 5],
          },
          {
            cost: 1801,
            reward: [490, 245, 80, 20, 5],
          },
          {
            cost: 1846,
            reward: [505, 255, 85, 20, 5],
          },
          {
            cost: 1892,
            reward: [515, 260, 85, 20, 5],
          },
          {
            cost: 1939,
            reward: [530, 265, 90, 25, 5],
          },
          {
            cost: 1987,
            reward: [540, 270, 90, 25, 5],
          },
          {
            cost: 2037,
            reward: [555, 280, 95, 25, 5],
          },
          {
            cost: 2088,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2140,
            reward: [580, 290, 95, 25, 5],
          },
          {
            cost: 2194,
            reward: [595, 300, 100, 25, 5],
          },
          {
            cost: 2249,
            reward: [610, 305, 100, 25, 5],
          },
          {
            cost: 2305,
            reward: [620, 310, 105, 25, 5],
          },
          {
            cost: 2362,
            reward: [635, 320, 105, 25, 5],
          },
          {
            cost: 2421,
            reward: [650, 325, 110, 30, 5],
          },
          {
            cost: 2482,
            reward: [665, 335, 110, 30, 5],
          },
          {
            cost: 2544,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2608,
            reward: [690, 345, 115, 30, 5],
          },
          {
            cost: 2673,
            reward: [705, 355, 120, 30, 5],
          },
          {
            cost: 2740,
            reward: [715, 360, 120, 30, 5],
          },
          {
            cost: 2808,
            reward: [730, 365, 120, 30, 5],
          },
          {
            cost: 2878,
            reward: [745, 375, 125, 30, 5],
          },
          {
            cost: 2950,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 3024,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 3099,
            reward: [785, 395, 130, 35, 5],
          },
          {
            cost: 3177,
            reward: [800, 400, 135, 35, 5],
          },
          {
            cost: 3256,
            reward: [815, 410, 135, 35, 5],
          },
          {
            cost: 3338,
            reward: [830, 415, 140, 35, 5],
          },
          {
            cost: 3421,
            reward: [840, 420, 140, 35, 5],
          },
          {
            cost: 3507,
            reward: [855, 430, 145, 35, 5],
          },
          {
            cost: 3594,
            reward: [870, 435, 145, 35, 5],
          },
          {
            cost: 3684,
            reward: [885, 445, 150, 40, 10],
          },
          {
            cost: 3776,
            reward: [900, 450, 150, 40, 10],
          },
          {
            cost: 3871,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 3967,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 4067,
            reward: [940, 470, 155, 40, 10],
          },
          {
            cost: 4168,
            reward: [955, 480, 160, 40, 10],
          },
          {
            cost: 4272,
            reward: [970, 485, 160, 40, 10],
          },
          {
            cost: 4379,
            reward: [985, 495, 165, 40, 10],
          },
          {
            cost: 4489,
            reward: [1000, 500, 165, 40, 10],
          },
          {
            cost: 4601,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 4716,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 4834,
            reward: [1045, 525, 175, 45, 10],
          },
          {
            cost: 4955,
            reward: [1060, 530, 175, 45, 10],
          },
          {
            cost: 5079,
            reward: [1075, 540, 180, 45, 10],
          },
          {
            cost: 5205,
            reward: [1090, 545, 180, 45, 10],
          },
          {
            cost: 5336,
            reward: [1100, 550, 185, 45, 10],
          },
          {
            cost: 5469,
            reward: [1115, 560, 185, 45, 10],
          },
          {
            cost: 5606,
            reward: [1130, 565, 190, 50, 10],
          },
          {
            cost: 5746,
            reward: [1145, 575, 190, 50, 10],
          },
          {
            cost: 5889,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 6037,
            reward: [1175, 590, 195, 50, 10],
          },
          {
            cost: 6188,
            reward: [1190, 595, 200, 50, 10],
          },
          {
            cost: 6342,
            reward: [1205, 605, 200, 50, 10],
          },
          {
            cost: 6501,
            reward: [1220, 610, 205, 50, 10],
          },
          {
            cost: 6663,
            reward: [1235, 620, 205, 50, 10],
          },
          {
            cost: 6830,
            reward: [1250, 625, 210, 55, 10],
          },
          {
            cost: 7001,
            reward: [1265, 635, 210, 55, 10],
          },
          {
            cost: 7176,
            reward: [1280, 640, 215, 55, 10],
          },
          {
            cost: 7355,
            reward: [1295, 650, 215, 55, 10],
          },
          {
            cost: 7539,
            reward: [1310, 655, 220, 55, 10],
          },
          {
            cost: 7727,
            reward: [1325, 665, 220, 55, 10],
          },
          {
            cost: 7920,
            reward: [1345, 675, 225, 55, 10],
          },
          {
            cost: 8118,
            reward: [1355, 680, 225, 55, 10],
          },
          {
            cost: 8321,
            reward: [1375, 690, 230, 60, 10],
          },
          {
            cost: 8529,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 8743,
            reward: [1405, 705, 235, 60, 10],
          },
          {
            cost: 8961,
            reward: [1420, 710, 235, 60, 10],
          },
          {
            cost: 9185,
            reward: [1435, 720, 240, 60, 10],
          },
          {
            cost: 9415,
            reward: [1450, 725, 240, 60, 10],
          },
          {
            cost: 9650,
            reward: [1465, 735, 245, 60, 10],
          },
          {
            cost: 9891,
            reward: [1480, 740, 245, 60, 10],
          },
        ],
      },
      Capitol: {
        levels: [
          {
            cost: 60,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 90,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 150,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 240,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 330,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 410,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 500,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 600,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 690,
            reward: [70, 35, 10, 5, 0],
          },
          {
            cost: 790,
            reward: [80, 40, 15, 5, 0],
          },
          {
            cost: 810,
            reward: [90, 45, 15, 5, 0],
          },
          {
            cost: 830,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 851,
            reward: [115, 60, 20, 5, 0],
          },
          {
            cost: 873,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 894,
            reward: [135, 70, 25, 5, 0],
          },
          {
            cost: 917,
            reward: [145, 75, 25, 5, 0],
          },
          {
            cost: 940,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 963,
            reward: [165, 85, 30, 10, 0],
          },
          {
            cost: 987,
            reward: [180, 90, 30, 10, 0],
          },
          {
            cost: 1012,
            reward: [190, 95, 30, 10, 0],
          },
          {
            cost: 1037,
            reward: [200, 100, 35, 10, 0],
          },
          {
            cost: 1063,
            reward: [215, 110, 35, 10, 0],
          },
          {
            cost: 1090,
            reward: [225, 115, 40, 10, 0],
          },
          {
            cost: 1117,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 1145,
            reward: [250, 125, 40, 10, 0],
          },
          {
            cost: 1173,
            reward: [260, 130, 45, 10, 0],
          },
          {
            cost: 1203,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1233,
            reward: [285, 145, 50, 15, 5],
          },
          {
            cost: 1263,
            reward: [300, 150, 50, 15, 5],
          },
          {
            cost: 1295,
            reward: [310, 155, 50, 15, 5],
          },
          {
            cost: 1327,
            reward: [325, 165, 55, 15, 5],
          },
          {
            cost: 1361,
            reward: [335, 170, 55, 15, 5],
          },
          {
            cost: 1395,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1429,
            reward: [360, 180, 60, 15, 5],
          },
          {
            cost: 1465,
            reward: [375, 190, 65, 15, 5],
          },
          {
            cost: 1502,
            reward: [390, 195, 65, 15, 5],
          },
          {
            cost: 1539,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1578,
            reward: [415, 210, 70, 20, 5],
          },
          {
            cost: 1617,
            reward: [425, 215, 70, 20, 5],
          },
          {
            cost: 1658,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1699,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1741,
            reward: [465, 235, 80, 20, 5],
          },
          {
            cost: 1785,
            reward: [480, 240, 80, 20, 5],
          },
          {
            cost: 1830,
            reward: [495, 250, 85, 20, 5],
          },
          {
            cost: 1875,
            reward: [505, 255, 85, 20, 5],
          },
          {
            cost: 1922,
            reward: [520, 260, 85, 20, 5],
          },
          {
            cost: 1970,
            reward: [535, 270, 90, 25, 5],
          },
          {
            cost: 2019,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2070,
            reward: [560, 280, 95, 25, 5],
          },
          {
            cost: 2122,
            reward: [575, 290, 95, 25, 5],
          },
          {
            cost: 2175,
            reward: [590, 295, 100, 25, 5],
          },
          {
            cost: 2229,
            reward: [605, 305, 100, 25, 5],
          },
          {
            cost: 2285,
            reward: [620, 310, 105, 25, 5],
          },
          {
            cost: 2342,
            reward: [635, 320, 105, 25, 5],
          },
          {
            cost: 2400,
            reward: [645, 325, 110, 30, 5],
          },
          {
            cost: 2460,
            reward: [660, 330, 110, 30, 5],
          },
          {
            cost: 2522,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2585,
            reward: [690, 345, 115, 30, 5],
          },
          {
            cost: 2650,
            reward: [705, 355, 120, 30, 5],
          },
          {
            cost: 2716,
            reward: [720, 360, 120, 30, 5],
          },
          {
            cost: 2784,
            reward: [735, 370, 125, 30, 5],
          },
          {
            cost: 2853,
            reward: [745, 375, 125, 30, 5],
          },
          {
            cost: 2925,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 2998,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 3073,
            reward: [790, 395, 130, 35, 5],
          },
          {
            cost: 3149,
            reward: [805, 405, 135, 35, 5],
          },
          {
            cost: 3228,
            reward: [820, 410, 135, 35, 5],
          },
          {
            cost: 3309,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 3392,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 3476,
            reward: [865, 435, 145, 35, 5],
          },
          {
            cost: 3563,
            reward: [880, 440, 145, 35, 5],
          },
          {
            cost: 3652,
            reward: [895, 450, 150, 40, 10],
          },
          {
            cost: 3744,
            reward: [910, 455, 150, 40, 10],
          },
          {
            cost: 3837,
            reward: [925, 465, 155, 40, 10],
          },
          {
            cost: 3933,
            reward: [940, 470, 155, 40, 10],
          },
          {
            cost: 4031,
            reward: [955, 480, 160, 40, 10],
          },
          {
            cost: 4132,
            reward: [970, 485, 160, 40, 10],
          },
          {
            cost: 4235,
            reward: [985, 495, 165, 40, 10],
          },
          {
            cost: 4341,
            reward: [1000, 500, 165, 40, 10],
          },
          {
            cost: 4450,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 4561,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 4675,
            reward: [1045, 525, 175, 45, 10],
          },
          {
            cost: 4792,
            reward: [1065, 535, 180, 45, 10],
          },
          {
            cost: 4912,
            reward: [1075, 540, 180, 45, 10],
          },
          {
            cost: 5035,
            reward: [1095, 550, 185, 45, 10],
          },
          {
            cost: 5160,
            reward: [1110, 555, 185, 45, 10],
          },
          {
            cost: 5289,
            reward: [1125, 565, 190, 50, 10],
          },
          {
            cost: 5422,
            reward: [1140, 570, 190, 50, 10],
          },
          {
            cost: 5557,
            reward: [1155, 580, 195, 50, 10],
          },
          {
            cost: 5696,
            reward: [1170, 585, 195, 50, 10],
          },
          {
            cost: 5838,
            reward: [1185, 595, 200, 50, 10],
          },
          {
            cost: 5984,
            reward: [1200, 600, 200, 50, 10],
          },
          {
            cost: 6134,
            reward: [1220, 610, 205, 50, 10],
          },
          {
            cost: 6287,
            reward: [1235, 620, 205, 50, 10],
          },
          {
            cost: 6445,
            reward: [1250, 625, 210, 55, 10],
          },
          {
            cost: 6606,
            reward: [1265, 635, 210, 55, 10],
          },
          {
            cost: 6771,
            reward: [1280, 640, 215, 55, 10],
          },
          {
            cost: 6940,
            reward: [1300, 650, 215, 55, 10],
          },
          {
            cost: 7113,
            reward: [1315, 660, 220, 55, 10],
          },
          {
            cost: 7291,
            reward: [1330, 665, 220, 55, 10],
          },
          {
            cost: 7474,
            reward: [1345, 675, 225, 55, 10],
          },
          {
            cost: 7660,
            reward: [1360, 680, 225, 55, 10],
          },
          {
            cost: 7852,
            reward: [1375, 690, 230, 60, 10],
          },
          {
            cost: 8048,
            reward: [1395, 700, 235, 60, 10],
          },
          {
            cost: 8249,
            reward: [1410, 705, 235, 60, 10],
          },
          {
            cost: 8456,
            reward: [1425, 715, 240, 60, 10],
          },
          {
            cost: 8667,
            reward: [1440, 720, 240, 60, 10],
          },
          {
            cost: 8884,
            reward: [1460, 730, 245, 60, 10],
          },
          {
            cost: 9106,
            reward: [1475, 740, 245, 60, 10],
          },
          {
            cost: 9333,
            reward: [1490, 745, 250, 65, 15],
          },
          {
            cost: 9567,
            reward: [1505, 755, 250, 65, 15],
          },
          {
            cost: 9806,
            reward: [1525, 765, 255, 65, 15],
          },
          {
            cost: 10051,
            reward: [1540, 770, 255, 65, 15],
          },
          {
            cost: 10302,
            reward: [1555, 780, 260, 65, 15],
          },
        ],
      },
      Royal_Albert_Hall: {
        levels: [
          {
            cost: 60,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 90,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 150,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 240,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 330,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 410,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 500,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 600,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 690,
            reward: [70, 35, 10, 5, 0],
          },
          {
            cost: 790,
            reward: [80, 40, 15, 5, 0],
          },
          {
            cost: 810,
            reward: [90, 45, 15, 5, 0],
          },
          {
            cost: 830,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 851,
            reward: [115, 60, 20, 5, 0],
          },
          {
            cost: 873,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 894,
            reward: [135, 70, 25, 5, 0],
          },
          {
            cost: 917,
            reward: [145, 75, 25, 5, 0],
          },
          {
            cost: 940,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 963,
            reward: [165, 85, 30, 10, 0],
          },
          {
            cost: 987,
            reward: [180, 90, 30, 10, 0],
          },
          {
            cost: 1012,
            reward: [190, 95, 30, 10, 0],
          },
          {
            cost: 1037,
            reward: [200, 100, 35, 10, 0],
          },
          {
            cost: 1063,
            reward: [215, 110, 35, 10, 0],
          },
          {
            cost: 1090,
            reward: [225, 115, 40, 10, 0],
          },
          {
            cost: 1117,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 1145,
            reward: [250, 125, 40, 10, 0],
          },
          {
            cost: 1173,
            reward: [260, 130, 45, 10, 0],
          },
          {
            cost: 1203,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1233,
            reward: [285, 145, 50, 15, 5],
          },
          {
            cost: 1263,
            reward: [300, 150, 50, 15, 5],
          },
          {
            cost: 1295,
            reward: [310, 155, 50, 15, 5],
          },
          {
            cost: 1327,
            reward: [325, 165, 55, 15, 5],
          },
          {
            cost: 1361,
            reward: [335, 170, 55, 15, 5],
          },
          {
            cost: 1395,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1429,
            reward: [360, 180, 60, 15, 5],
          },
          {
            cost: 1465,
            reward: [375, 190, 65, 15, 5],
          },
          {
            cost: 1502,
            reward: [390, 195, 65, 15, 5],
          },
          {
            cost: 1539,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1578,
            reward: [415, 210, 70, 20, 5],
          },
          {
            cost: 1617,
            reward: [425, 215, 70, 20, 5],
          },
          {
            cost: 1658,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1699,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1741,
            reward: [465, 235, 80, 20, 5],
          },
          {
            cost: 1785,
            reward: [480, 240, 80, 20, 5],
          },
          {
            cost: 1830,
            reward: [495, 250, 85, 20, 5],
          },
          {
            cost: 1875,
            reward: [505, 255, 85, 20, 5],
          },
          {
            cost: 1922,
            reward: [520, 260, 85, 20, 5],
          },
          {
            cost: 1970,
            reward: [535, 270, 90, 25, 5],
          },
          {
            cost: 2019,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2070,
            reward: [560, 280, 95, 25, 5],
          },
          {
            cost: 2122,
            reward: [575, 290, 95, 25, 5],
          },
          {
            cost: 2175,
            reward: [590, 295, 100, 25, 5],
          },
          {
            cost: 2229,
            reward: [605, 305, 100, 25, 5],
          },
          {
            cost: 2285,
            reward: [620, 310, 105, 25, 5],
          },
          {
            cost: 2342,
            reward: [635, 320, 105, 25, 5],
          },
          {
            cost: 2400,
            reward: [645, 325, 110, 30, 5],
          },
          {
            cost: 2460,
            reward: [660, 330, 110, 30, 5],
          },
          {
            cost: 2522,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2585,
            reward: [690, 345, 115, 30, 5],
          },
          {
            cost: 2650,
            reward: [705, 355, 120, 30, 5],
          },
          {
            cost: 2716,
            reward: [720, 360, 120, 30, 5],
          },
          {
            cost: 2784,
            reward: [735, 370, 125, 30, 5],
          },
          {
            cost: 2853,
            reward: [745, 375, 125, 30, 5],
          },
          {
            cost: 2925,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 2998,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 3073,
            reward: [790, 395, 130, 35, 5],
          },
          {
            cost: 3149,
            reward: [805, 405, 135, 35, 5],
          },
          {
            cost: 3228,
            reward: [820, 410, 135, 35, 5],
          },
          {
            cost: 3309,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 3392,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 3476,
            reward: [865, 435, 145, 35, 5],
          },
          {
            cost: 3563,
            reward: [880, 440, 145, 35, 5],
          },
          {
            cost: 3652,
            reward: [895, 450, 150, 40, 10],
          },
          {
            cost: 3744,
            reward: [910, 455, 150, 40, 10],
          },
          {
            cost: 3837,
            reward: [925, 465, 155, 40, 10],
          },
          {
            cost: 3933,
            reward: [940, 470, 155, 40, 10],
          },
          {
            cost: 4031,
            reward: [955, 480, 160, 40, 10],
          },
          {
            cost: 4132,
            reward: [970, 485, 160, 40, 10],
          },
          {
            cost: 4235,
            reward: [985, 495, 165, 40, 10],
          },
          {
            cost: 4341,
            reward: [1000, 500, 165, 40, 10],
          },
          {
            cost: 4450,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 4561,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 4675,
            reward: [1045, 525, 175, 45, 10],
          },
          {
            cost: 4792,
            reward: [1065, 535, 180, 45, 10],
          },
          {
            cost: 4912,
            reward: [1075, 540, 180, 45, 10],
          },
          {
            cost: 5035,
            reward: [1095, 550, 185, 45, 10],
          },
          {
            cost: 5160,
            reward: [1110, 555, 185, 45, 10],
          },
          {
            cost: 5289,
            reward: [1125, 565, 190, 50, 10],
          },
          {
            cost: 5422,
            reward: [1140, 570, 190, 50, 10],
          },
          {
            cost: 5557,
            reward: [1155, 580, 195, 50, 10],
          },
          {
            cost: 5696,
            reward: [1170, 585, 195, 50, 10],
          },
          {
            cost: 5838,
            reward: [1185, 595, 200, 50, 10],
          },
          {
            cost: 5984,
            reward: [1200, 600, 200, 50, 10],
          },
          {
            cost: 6134,
            reward: [1220, 610, 205, 50, 10],
          },
          {
            cost: 6287,
            reward: [1235, 620, 205, 50, 10],
          },
          {
            cost: 6445,
            reward: [1250, 625, 210, 55, 10],
          },
          {
            cost: 6606,
            reward: [1265, 635, 210, 55, 10],
          },
          {
            cost: 6771,
            reward: [1280, 640, 215, 55, 10],
          },
          {
            cost: 6940,
            reward: [1300, 650, 215, 55, 10],
          },
          {
            cost: 7113,
            reward: [1315, 660, 220, 55, 10],
          },
          {
            cost: 7291,
            reward: [1330, 665, 220, 55, 10],
          },
          {
            cost: 7474,
            reward: [1345, 675, 225, 55, 10],
          },
          {
            cost: 7660,
            reward: [1360, 680, 225, 55, 10],
          },
          {
            cost: 7852,
            reward: [1375, 690, 230, 60, 10],
          },
          {
            cost: 8048,
            reward: [1395, 700, 235, 60, 10],
          },
          {
            cost: 8249,
            reward: [1410, 705, 235, 60, 10],
          },
          {
            cost: 8456,
            reward: [1425, 715, 240, 60, 10],
          },
          {
            cost: 8667,
            reward: [1440, 720, 240, 60, 10],
          },
          {
            cost: 8884,
            reward: [1460, 730, 245, 60, 10],
          },
          {
            cost: 9106,
            reward: [1475, 740, 245, 60, 10],
          },
          {
            cost: 9333,
            reward: [1490, 745, 250, 65, 15],
          },
          {
            cost: 9567,
            reward: [1505, 755, 250, 65, 15],
          },
          {
            cost: 9806,
            reward: [1525, 765, 255, 65, 15],
          },
          {
            cost: 10051,
            reward: [1540, 770, 255, 65, 15],
          },
          {
            cost: 10302,
            reward: [1555, 780, 260, 65, 15],
          },
        ],
      },
      Chateau_Frontenac: {
        levels: [
          {
            cost: 60,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 90,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 170,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 260,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 340,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 440,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 530,
            reward: [55, 30, 10, 5, 0],
          },
          {
            cost: 630,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 740,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 830,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 851,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 873,
            reward: [105, 55, 20, 5, 0],
          },
          {
            cost: 894,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 917,
            reward: [130, 65, 20, 5, 0],
          },
          {
            cost: 940,
            reward: [140, 70, 25, 5, 0],
          },
          {
            cost: 963,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 987,
            reward: [165, 85, 30, 10, 0],
          },
          {
            cost: 1012,
            reward: [175, 90, 30, 10, 0],
          },
          {
            cost: 1037,
            reward: [190, 95, 30, 10, 0],
          },
          {
            cost: 1063,
            reward: [200, 100, 35, 10, 0],
          },
          {
            cost: 1090,
            reward: [215, 110, 35, 10, 0],
          },
          {
            cost: 1117,
            reward: [225, 115, 40, 10, 0],
          },
          {
            cost: 1145,
            reward: [240, 120, 40, 10, 0],
          },
          {
            cost: 1173,
            reward: [250, 125, 40, 10, 0],
          },
          {
            cost: 1203,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1233,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1263,
            reward: [290, 145, 50, 15, 5],
          },
          {
            cost: 1295,
            reward: [300, 150, 50, 15, 5],
          },
          {
            cost: 1327,
            reward: [315, 160, 55, 15, 5],
          },
          {
            cost: 1361,
            reward: [330, 165, 55, 15, 5],
          },
          {
            cost: 1395,
            reward: [340, 170, 55, 15, 5],
          },
          {
            cost: 1429,
            reward: [355, 180, 60, 15, 5],
          },
          {
            cost: 1465,
            reward: [370, 185, 60, 15, 5],
          },
          {
            cost: 1502,
            reward: [385, 195, 65, 15, 5],
          },
          {
            cost: 1539,
            reward: [395, 200, 65, 15, 5],
          },
          {
            cost: 1578,
            reward: [410, 205, 70, 20, 5],
          },
          {
            cost: 1617,
            reward: [425, 215, 70, 20, 5],
          },
          {
            cost: 1658,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1699,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 1741,
            reward: [465, 235, 80, 20, 5],
          },
          {
            cost: 1785,
            reward: [480, 240, 80, 20, 5],
          },
          {
            cost: 1830,
            reward: [495, 250, 85, 20, 5],
          },
          {
            cost: 1875,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 1922,
            reward: [525, 265, 90, 25, 5],
          },
          {
            cost: 1970,
            reward: [535, 270, 90, 25, 5],
          },
          {
            cost: 2020,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2070,
            reward: [565, 285, 95, 25, 5],
          },
          {
            cost: 2122,
            reward: [580, 290, 95, 25, 5],
          },
          {
            cost: 2175,
            reward: [595, 300, 100, 25, 5],
          },
          {
            cost: 2229,
            reward: [610, 305, 100, 25, 5],
          },
          {
            cost: 2285,
            reward: [625, 315, 105, 25, 5],
          },
          {
            cost: 2342,
            reward: [640, 320, 105, 25, 5],
          },
          {
            cost: 2400,
            reward: [655, 330, 110, 30, 5],
          },
          {
            cost: 2460,
            reward: [670, 335, 110, 30, 5],
          },
          {
            cost: 2522,
            reward: [685, 345, 115, 30, 5],
          },
          {
            cost: 2585,
            reward: [700, 350, 115, 30, 5],
          },
          {
            cost: 2650,
            reward: [715, 360, 120, 30, 5],
          },
          {
            cost: 2716,
            reward: [730, 365, 120, 30, 5],
          },
          {
            cost: 2784,
            reward: [745, 375, 125, 30, 5],
          },
          {
            cost: 2853,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 2925,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 2998,
            reward: [790, 395, 130, 35, 5],
          },
          {
            cost: 3073,
            reward: [805, 405, 135, 35, 5],
          },
          {
            cost: 3149,
            reward: [820, 410, 135, 35, 5],
          },
          {
            cost: 3228,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 3309,
            reward: [855, 430, 145, 35, 5],
          },
          {
            cost: 3392,
            reward: [870, 435, 145, 35, 5],
          },
          {
            cost: 3476,
            reward: [885, 445, 150, 40, 10],
          },
          {
            cost: 3563,
            reward: [900, 450, 150, 40, 10],
          },
          {
            cost: 3652,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 3744,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 3837,
            reward: [945, 475, 160, 40, 10],
          },
          {
            cost: 3933,
            reward: [965, 485, 160, 40, 10],
          },
          {
            cost: 4031,
            reward: [980, 490, 165, 40, 10],
          },
          {
            cost: 4132,
            reward: [995, 500, 165, 40, 10],
          },
          {
            cost: 4235,
            reward: [1010, 505, 170, 45, 10],
          },
          {
            cost: 4341,
            reward: [1025, 515, 170, 45, 10],
          },
          {
            cost: 4450,
            reward: [1045, 525, 175, 45, 10],
          },
          {
            cost: 4561,
            reward: [1060, 530, 175, 45, 10],
          },
          {
            cost: 4675,
            reward: [1075, 540, 180, 45, 10],
          },
          {
            cost: 4792,
            reward: [1090, 545, 180, 45, 10],
          },
          {
            cost: 4912,
            reward: [1110, 555, 185, 45, 10],
          },
          {
            cost: 5035,
            reward: [1125, 565, 190, 50, 10],
          },
          {
            cost: 5160,
            reward: [1140, 570, 190, 50, 10],
          },
          {
            cost: 5289,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 5422,
            reward: [1175, 590, 195, 50, 10],
          },
          {
            cost: 5557,
            reward: [1190, 595, 200, 50, 10],
          },
          {
            cost: 5696,
            reward: [1205, 605, 200, 50, 10],
          },
          {
            cost: 5838,
            reward: [1225, 615, 205, 50, 10],
          },
          {
            cost: 5984,
            reward: [1240, 620, 205, 50, 10],
          },
          {
            cost: 6134,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 6287,
            reward: [1275, 640, 215, 55, 10],
          },
          {
            cost: 6445,
            reward: [1290, 645, 215, 55, 10],
          },
          {
            cost: 6606,
            reward: [1305, 655, 220, 55, 10],
          },
          {
            cost: 6771,
            reward: [1325, 665, 220, 55, 10],
          },
          {
            cost: 6940,
            reward: [1340, 670, 225, 55, 10],
          },
          {
            cost: 7114,
            reward: [1355, 680, 225, 55, 10],
          },
          {
            cost: 7291,
            reward: [1375, 690, 230, 60, 10],
          },
          {
            cost: 7474,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 7660,
            reward: [1410, 705, 235, 60, 10],
          },
          {
            cost: 7852,
            reward: [1425, 715, 240, 60, 10],
          },
          {
            cost: 8048,
            reward: [1440, 720, 240, 60, 10],
          },
          {
            cost: 8249,
            reward: [1460, 730, 245, 60, 10],
          },
          {
            cost: 8456,
            reward: [1475, 740, 245, 60, 10],
          },
          {
            cost: 8667,
            reward: [1490, 745, 250, 65, 15],
          },
          {
            cost: 8884,
            reward: [1510, 755, 250, 65, 15],
          },
          {
            cost: 9106,
            reward: [1525, 765, 255, 65, 15],
          },
          {
            cost: 9333,
            reward: [1545, 775, 260, 65, 15],
          },
          {
            cost: 9567,
            reward: [1560, 780, 260, 65, 15],
          },
          {
            cost: 9806,
            reward: [1580, 790, 265, 65, 15],
          },
          {
            cost: 10051,
            reward: [1595, 800, 265, 65, 15],
          },
          {
            cost: 10302,
            reward: [1615, 810, 270, 70, 15],
          },
          {
            cost: 10560,
            reward: [1630, 815, 270, 70, 15],
          },
          {
            cost: 10824,
            reward: [1650, 825, 275, 70, 15],
          },
          {
            cost: 11094,
            reward: [1665, 835, 280, 70, 15],
          },
          {
            cost: 11372,
            reward: [1685, 845, 280, 70, 15],
          },
          {
            cost: 11656,
            reward: [1700, 850, 285, 70, 15],
          },
          {
            cost: 11947,
            reward: [1715, 860, 285, 70, 15],
          },
          {
            cost: 12246,
            reward: [1735, 870, 290, 75, 15],
          },
          {
            cost: 12552,
            reward: [1755, 880, 295, 75, 15],
          },
          {
            cost: 12866,
            reward: [1770, 885, 295, 75, 15],
          },
          {
            cost: 13188,
            reward: [1790, 895, 300, 75, 15],
          },
          {
            cost: 13517,
            reward: [1805, 905, 300, 75, 15],
          },
          {
            cost: 13855,
            reward: [1825, 915, 305, 75, 15],
          },
          {
            cost: 14202,
            reward: [1840, 920, 305, 75, 15],
          },
          {
            cost: 14557,
            reward: [1860, 930, 310, 80, 15],
          },
          {
            cost: 14921,
            reward: [1875, 940, 315, 80, 15],
          },
          {
            cost: 15294,
            reward: [1895, 950, 315, 80, 15],
          },
          {
            cost: 15676,
            reward: [1915, 960, 320, 80, 15],
          },
          {
            cost: 16068,
            reward: [1930, 965, 320, 80, 15],
          },
          {
            cost: 16469,
            reward: [1950, 975, 325, 80, 15],
          },
          {
            cost: 16881,
            reward: [1965, 985, 330, 85, 15],
          },
          {
            cost: 17303,
            reward: [1985, 995, 330, 85, 15],
          },
          {
            cost: 17736,
            reward: [2000, 1000, 335, 85, 15],
          },
          {
            cost: 18179,
            reward: [2020, 1010, 335, 85, 15],
          },
          {
            cost: 18634,
            reward: [2040, 1020, 340, 85, 15],
          },
          {
            cost: 19099,
            reward: [2055, 1030, 345, 85, 15],
          },
          {
            cost: 19577,
            reward: [2075, 1040, 345, 85, 15],
          },
          {
            cost: 20066,
            reward: [2095, 1050, 350, 90, 20],
          },
          {
            cost: 20568,
            reward: [2110, 1055, 350, 90, 20],
          },
          {
            cost: 21082,
            reward: [2130, 1065, 355, 90, 20],
          },
          {
            cost: 21609,
            reward: [2145, 1075, 360, 90, 20],
          },
          {
            cost: 22149,
            reward: [2165, 1085, 360, 90, 20],
          },
          {
            cost: 22703,
            reward: [2185, 1095, 365, 90, 20],
          },
          {
            cost: 23271,
            reward: [2200, 1100, 365, 90, 20],
          },
          {
            cost: 23852,
            reward: [2220, 1110, 370, 95, 20],
          },
          {
            cost: 24449,
            reward: [2240, 1120, 375, 95, 20],
          },
          {
            cost: 25060,
            reward: [2255, 1130, 375, 95, 20],
          },
          {
            cost: 25686,
            reward: [2275, 1140, 380, 95, 20],
          },
          {
            cost: 26329,
            reward: [2295, 1150, 385, 95, 20],
          },
          {
            cost: 26987,
            reward: [2310, 1155, 385, 95, 20],
          },
          {
            cost: 27661,
            reward: [2330, 1165, 390, 100, 20],
          },
          {
            cost: 28353,
            reward: [2350, 1175, 390, 100, 20],
          },
          {
            cost: 29062,
            reward: [2365, 1185, 395, 100, 20],
          },
          {
            cost: 29788,
            reward: [2385, 1195, 400, 100, 20],
          },
          {
            cost: 30533,
            reward: [2405, 1205, 400, 100, 20],
          },
          {
            cost: 31296,
            reward: [2420, 1210, 405, 100, 20],
          },
          {
            cost: 32079,
            reward: [2440, 1220, 405, 100, 20],
          },
          {
            cost: 32881,
            reward: [2460, 1230, 410, 105, 20],
          },
          {
            cost: 33703,
            reward: [2480, 1240, 415, 105, 20],
          },
          {
            cost: 34545,
            reward: [2495, 1250, 415, 105, 20],
          },
          {
            cost: 35409,
            reward: [2515, 1260, 420, 105, 20],
          },
          {
            cost: 36294,
            reward: [2535, 1270, 425, 105, 20],
          },
          {
            cost: 37201,
            reward: [2555, 1280, 425, 105, 20],
          },
          {
            cost: 38131,
            reward: [2570, 1285, 430, 110, 20],
          },
          {
            cost: 39085,
            reward: [2590, 1295, 430, 110, 20],
          },
          {
            cost: 40062,
            reward: [2610, 1305, 435, 110, 20],
          },
          {
            cost: 41063,
            reward: [2630, 1315, 440, 110, 20],
          },
          {
            cost: 42090,
            reward: [2645, 1325, 440, 110, 20],
          },
          {
            cost: 43142,
            reward: [2665, 1335, 445, 110, 20],
          },
          {
            cost: 44221,
            reward: [2685, 1345, 450, 115, 25],
          },
          {
            cost: 45326,
            reward: [2705, 1355, 450, 115, 25],
          },
          {
            cost: 46459,
            reward: [2720, 1360, 455, 115, 25],
          },
          {
            cost: 47621,
            reward: [2740, 1370, 455, 115, 25],
          },
          {
            cost: 48811,
            reward: [2760, 1380, 460, 115, 25],
          },
          {
            cost: 50032,
            reward: [2780, 1390, 465, 115, 25],
          },
          {
            cost: 51282,
            reward: [2800, 1400, 465, 115, 25],
          },
          {
            cost: 52564,
            reward: [2815, 1410, 470, 120, 25],
          },
          {
            cost: 53878,
            reward: [2835, 1420, 475, 120, 25],
          },
          {
            cost: 55225,
            reward: [2855, 1430, 475, 120, 25],
          },
          {
            cost: 56606,
            reward: [2875, 1440, 480, 120, 25],
          },
          {
            cost: 58021,
            reward: [2895, 1450, 485, 120, 25],
          },
          {
            cost: 59472,
            reward: [2910, 1455, 485, 120, 25],
          },
          {
            cost: 60958,
            reward: [2930, 1465, 490, 125, 25],
          },
          {
            cost: 62482,
            reward: [2950, 1475, 490, 125, 25],
          },
          {
            cost: 64044,
            reward: [2970, 1485, 495, 125, 25],
          },
          {
            cost: 65646,
            reward: [2990, 1495, 500, 125, 25],
          },
          {
            cost: 67287,
            reward: [3010, 1505, 500, 125, 25],
          },
          {
            cost: 68969,
            reward: [3030, 1515, 505, 125, 25],
          },
          {
            cost: 70693,
            reward: [3045, 1525, 510, 130, 25],
          },
          {
            cost: 72460,
            reward: [3065, 1535, 510, 130, 25],
          },
          {
            cost: 74272,
            reward: [3085, 1545, 515, 130, 25],
          },
          {
            cost: 76129,
            reward: [3105, 1555, 520, 130, 25],
          },
          {
            cost: 78032,
            reward: [3125, 1565, 520, 130, 25],
          },
          {
            cost: 79983,
            reward: [3145, 1575, 525, 130, 25],
          },
          {
            cost: 81982,
            reward: [3165, 1585, 530, 135, 25],
          },
          {
            cost: 84032,
            reward: [3180, 1590, 530, 135, 25],
          },
          {
            cost: 86133,
            reward: [3200, 1600, 535, 135, 25],
          },
          {
            cost: 88286,
            reward: [3220, 1610, 535, 135, 25],
          },
        ],
      },
      Alcatraz: {
        levels: [
          {
            cost: 60,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 90,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 170,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 260,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 340,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 440,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 530,
            reward: [55, 30, 10, 5, 0],
          },
          {
            cost: 630,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 740,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 830,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 851,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 873,
            reward: [105, 55, 20, 5, 0],
          },
          {
            cost: 894,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 917,
            reward: [130, 65, 20, 5, 0],
          },
          {
            cost: 940,
            reward: [140, 70, 25, 5, 0],
          },
          {
            cost: 963,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 987,
            reward: [165, 85, 30, 10, 0],
          },
          {
            cost: 1012,
            reward: [175, 90, 30, 10, 0],
          },
          {
            cost: 1037,
            reward: [190, 95, 30, 10, 0],
          },
          {
            cost: 1063,
            reward: [200, 100, 35, 10, 0],
          },
          {
            cost: 1090,
            reward: [215, 110, 35, 10, 0],
          },
          {
            cost: 1117,
            reward: [225, 115, 40, 10, 0],
          },
          {
            cost: 1145,
            reward: [240, 120, 40, 10, 0],
          },
          {
            cost: 1173,
            reward: [250, 125, 40, 10, 0],
          },
          {
            cost: 1203,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1233,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1263,
            reward: [290, 145, 50, 15, 5],
          },
          {
            cost: 1295,
            reward: [300, 150, 50, 15, 5],
          },
          {
            cost: 1327,
            reward: [315, 160, 55, 15, 5],
          },
          {
            cost: 1361,
            reward: [330, 165, 55, 15, 5],
          },
          {
            cost: 1395,
            reward: [340, 170, 55, 15, 5],
          },
          {
            cost: 1429,
            reward: [355, 180, 60, 15, 5],
          },
          {
            cost: 1465,
            reward: [370, 185, 60, 15, 5],
          },
          {
            cost: 1502,
            reward: [385, 195, 65, 15, 5],
          },
          {
            cost: 1539,
            reward: [395, 200, 65, 15, 5],
          },
          {
            cost: 1578,
            reward: [410, 205, 70, 20, 5],
          },
          {
            cost: 1617,
            reward: [425, 215, 70, 20, 5],
          },
          {
            cost: 1658,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1699,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 1741,
            reward: [465, 235, 80, 20, 5],
          },
          {
            cost: 1785,
            reward: [480, 240, 80, 20, 5],
          },
          {
            cost: 1830,
            reward: [495, 250, 85, 20, 5],
          },
          {
            cost: 1875,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 1922,
            reward: [525, 265, 90, 25, 5],
          },
          {
            cost: 1970,
            reward: [535, 270, 90, 25, 5],
          },
          {
            cost: 2020,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2070,
            reward: [565, 285, 95, 25, 5],
          },
          {
            cost: 2122,
            reward: [580, 290, 95, 25, 5],
          },
          {
            cost: 2175,
            reward: [595, 300, 100, 25, 5],
          },
          {
            cost: 2229,
            reward: [610, 305, 100, 25, 5],
          },
          {
            cost: 2285,
            reward: [625, 315, 105, 25, 5],
          },
          {
            cost: 2342,
            reward: [640, 320, 105, 25, 5],
          },
          {
            cost: 2400,
            reward: [655, 330, 110, 30, 5],
          },
          {
            cost: 2460,
            reward: [670, 335, 110, 30, 5],
          },
          {
            cost: 2522,
            reward: [685, 345, 115, 30, 5],
          },
          {
            cost: 2585,
            reward: [700, 350, 115, 30, 5],
          },
          {
            cost: 2650,
            reward: [715, 360, 120, 30, 5],
          },
          {
            cost: 2716,
            reward: [730, 365, 120, 30, 5],
          },
          {
            cost: 2784,
            reward: [745, 375, 125, 30, 5],
          },
          {
            cost: 2853,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 2925,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 2998,
            reward: [790, 395, 130, 35, 5],
          },
          {
            cost: 3073,
            reward: [805, 405, 135, 35, 5],
          },
          {
            cost: 3149,
            reward: [820, 410, 135, 35, 5],
          },
          {
            cost: 3228,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 3309,
            reward: [855, 430, 145, 35, 5],
          },
          {
            cost: 3392,
            reward: [870, 435, 145, 35, 5],
          },
          {
            cost: 3476,
            reward: [885, 445, 150, 40, 10],
          },
          {
            cost: 3563,
            reward: [900, 450, 150, 40, 10],
          },
          {
            cost: 3652,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 3744,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 3837,
            reward: [945, 475, 160, 40, 10],
          },
          {
            cost: 3933,
            reward: [965, 485, 160, 40, 10],
          },
          {
            cost: 4031,
            reward: [980, 490, 165, 40, 10],
          },
          {
            cost: 4132,
            reward: [995, 500, 165, 40, 10],
          },
          {
            cost: 4235,
            reward: [1010, 505, 170, 45, 10],
          },
          {
            cost: 4341,
            reward: [1025, 515, 170, 45, 10],
          },
          {
            cost: 4450,
            reward: [1045, 525, 175, 45, 10],
          },
          {
            cost: 4561,
            reward: [1060, 530, 175, 45, 10],
          },
          {
            cost: 4675,
            reward: [1075, 540, 180, 45, 10],
          },
          {
            cost: 4792,
            reward: [1090, 545, 180, 45, 10],
          },
          {
            cost: 4912,
            reward: [1110, 555, 185, 45, 10],
          },
          {
            cost: 5035,
            reward: [1125, 565, 190, 50, 10],
          },
          {
            cost: 5160,
            reward: [1140, 570, 190, 50, 10],
          },
          {
            cost: 5289,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 5422,
            reward: [1175, 590, 195, 50, 10],
          },
          {
            cost: 5557,
            reward: [1190, 595, 200, 50, 10],
          },
          {
            cost: 5696,
            reward: [1205, 605, 200, 50, 10],
          },
          {
            cost: 5838,
            reward: [1225, 615, 205, 50, 10],
          },
          {
            cost: 5984,
            reward: [1240, 620, 205, 50, 10],
          },
          {
            cost: 6134,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 6287,
            reward: [1275, 640, 215, 55, 10],
          },
          {
            cost: 6445,
            reward: [1290, 645, 215, 55, 10],
          },
          {
            cost: 6606,
            reward: [1305, 655, 220, 55, 10],
          },
          {
            cost: 6771,
            reward: [1325, 665, 220, 55, 10],
          },
          {
            cost: 6940,
            reward: [1340, 670, 225, 55, 10],
          },
          {
            cost: 7114,
            reward: [1355, 680, 225, 55, 10],
          },
          {
            cost: 7291,
            reward: [1375, 690, 230, 60, 10],
          },
          {
            cost: 7474,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 7660,
            reward: [1410, 705, 235, 60, 10],
          },
          {
            cost: 7852,
            reward: [1425, 715, 240, 60, 10],
          },
          {
            cost: 8048,
            reward: [1440, 720, 240, 60, 10],
          },
          {
            cost: 8249,
            reward: [1460, 730, 245, 60, 10],
          },
          {
            cost: 8456,
            reward: [1475, 740, 245, 60, 10],
          },
          {
            cost: 8667,
            reward: [1490, 745, 250, 65, 15],
          },
          {
            cost: 8884,
            reward: [1510, 755, 250, 65, 15],
          },
          {
            cost: 9106,
            reward: [1525, 765, 255, 65, 15],
          },
          {
            cost: 9333,
            reward: [1545, 775, 260, 65, 15],
          },
          {
            cost: 9567,
            reward: [1560, 780, 260, 65, 15],
          },
          {
            cost: 9806,
            reward: [1580, 790, 265, 65, 15],
          },
          {
            cost: 10051,
            reward: [1595, 800, 265, 65, 15],
          },
          {
            cost: 10302,
            reward: [1615, 810, 270, 70, 15],
          },
          {
            cost: 10560,
            reward: [1630, 815, 270, 70, 15],
          },
          {
            cost: 10824,
            reward: [1650, 825, 275, 70, 15],
          },
          {
            cost: 11094,
            reward: [1665, 835, 280, 70, 15],
          },
          {
            cost: 11372,
            reward: [1685, 845, 280, 70, 15],
          },
          {
            cost: 11656,
            reward: [1700, 850, 285, 70, 15],
          },
          {
            cost: 11947,
            reward: [1715, 860, 285, 70, 15],
          },
          {
            cost: 12246,
            reward: [1735, 870, 290, 75, 15],
          },
          {
            cost: 12552,
            reward: [1755, 880, 295, 75, 15],
          },
          {
            cost: 12866,
            reward: [1770, 885, 295, 75, 15],
          },
          {
            cost: 13188,
            reward: [1790, 895, 300, 75, 15],
          },
          {
            cost: 13517,
            reward: [1805, 905, 300, 75, 15],
          },
          {
            cost: 13855,
            reward: [1825, 915, 305, 75, 15],
          },
          {
            cost: 14202,
            reward: [1840, 920, 305, 75, 15],
          },
          {
            cost: 14557,
            reward: [1860, 930, 310, 80, 15],
          },
          {
            cost: 14921,
            reward: [1875, 940, 315, 80, 15],
          },
          {
            cost: 15294,
            reward: [1895, 950, 315, 80, 15],
          },
          {
            cost: 15676,
            reward: [1915, 960, 320, 80, 15],
          },
          {
            cost: 16068,
            reward: [1930, 965, 320, 80, 15],
          },
          {
            cost: 16469,
            reward: [1950, 975, 325, 80, 15],
          },
          {
            cost: 16881,
            reward: [1965, 985, 330, 85, 15],
          },
          {
            cost: 17303,
            reward: [1985, 995, 330, 85, 15],
          },
          {
            cost: 17736,
            reward: [2000, 1000, 335, 85, 15],
          },
          {
            cost: 18179,
            reward: [2020, 1010, 335, 85, 15],
          },
          {
            cost: 18634,
            reward: [2040, 1020, 340, 85, 15],
          },
          {
            cost: 19099,
            reward: [2055, 1030, 345, 85, 15],
          },
          {
            cost: 19577,
            reward: [2075, 1040, 345, 85, 15],
          },
          {
            cost: 20066,
            reward: [2095, 1050, 350, 90, 20],
          },
          {
            cost: 20568,
            reward: [2110, 1055, 350, 90, 20],
          },
          {
            cost: 21082,
            reward: [2130, 1065, 355, 90, 20],
          },
          {
            cost: 21609,
            reward: [2145, 1075, 360, 90, 20],
          },
          {
            cost: 22149,
            reward: [2165, 1085, 360, 90, 20],
          },
          {
            cost: 22703,
            reward: [2185, 1095, 365, 90, 20],
          },
          {
            cost: 23271,
            reward: [2200, 1100, 365, 90, 20],
          },
          {
            cost: 23852,
            reward: [2220, 1110, 370, 95, 20],
          },
          {
            cost: 24449,
            reward: [2240, 1120, 375, 95, 20],
          },
          {
            cost: 25060,
            reward: [2255, 1130, 375, 95, 20],
          },
          {
            cost: 25686,
            reward: [2275, 1140, 380, 95, 20],
          },
          {
            cost: 26329,
            reward: [2295, 1150, 385, 95, 20],
          },
          {
            cost: 26987,
            reward: [2310, 1155, 385, 95, 20],
          },
          {
            cost: 27661,
            reward: [2330, 1165, 390, 100, 20],
          },
          {
            cost: 28353,
            reward: [2350, 1175, 390, 100, 20],
          },
          {
            cost: 29062,
            reward: [2365, 1185, 395, 100, 20],
          },
          {
            cost: 29788,
            reward: [2385, 1195, 400, 100, 20],
          },
          {
            cost: 30533,
            reward: [2405, 1205, 400, 100, 20],
          },
          {
            cost: 31296,
            reward: [2420, 1210, 405, 100, 20],
          },
          {
            cost: 32079,
            reward: [2440, 1220, 405, 100, 20],
          },
          {
            cost: 32881,
            reward: [2460, 1230, 410, 105, 20],
          },
          {
            cost: 33703,
            reward: [2480, 1240, 415, 105, 20],
          },
          {
            cost: 34545,
            reward: [2495, 1250, 415, 105, 20],
          },
          {
            cost: 35409,
            reward: [2515, 1260, 420, 105, 20],
          },
          {
            cost: 36294,
            reward: [2535, 1270, 425, 105, 20],
          },
          {
            cost: 37201,
            reward: [2555, 1280, 425, 105, 20],
          },
          {
            cost: 38131,
            reward: [2570, 1285, 430, 110, 20],
          },
          {
            cost: 39085,
            reward: [2590, 1295, 430, 110, 20],
          },
          {
            cost: 40062,
            reward: [2610, 1305, 435, 110, 20],
          },
          {
            cost: 41063,
            reward: [2630, 1315, 440, 110, 20],
          },
          {
            cost: 42090,
            reward: [2645, 1325, 440, 110, 20],
          },
          {
            cost: 43142,
            reward: [2665, 1335, 445, 110, 20],
          },
          {
            cost: 44221,
            reward: [2685, 1345, 450, 115, 25],
          },
          {
            cost: 45326,
            reward: [2705, 1355, 450, 115, 25],
          },
          {
            cost: 46459,
            reward: [2720, 1360, 455, 115, 25],
          },
          {
            cost: 47621,
            reward: [2740, 1370, 455, 115, 25],
          },
          {
            cost: 48811,
            reward: [2760, 1380, 460, 115, 25],
          },
          {
            cost: 50032,
            reward: [2780, 1390, 465, 115, 25],
          },
          {
            cost: 51282,
            reward: [2800, 1400, 465, 115, 25],
          },
          {
            cost: 52564,
            reward: [2815, 1410, 470, 120, 25],
          },
          {
            cost: 53878,
            reward: [2835, 1420, 475, 120, 25],
          },
          {
            cost: 55225,
            reward: [2855, 1430, 475, 120, 25],
          },
          {
            cost: 56606,
            reward: [2875, 1440, 480, 120, 25],
          },
          {
            cost: 58021,
            reward: [2895, 1450, 485, 120, 25],
          },
          {
            cost: 59472,
            reward: [2910, 1455, 485, 120, 25],
          },
          {
            cost: 60958,
            reward: [2930, 1465, 490, 125, 25],
          },
          {
            cost: 62482,
            reward: [2950, 1475, 490, 125, 25],
          },
          {
            cost: 64044,
            reward: [2970, 1485, 495, 125, 25],
          },
          {
            cost: 65646,
            reward: [2990, 1495, 500, 125, 25],
          },
          {
            cost: 67287,
            reward: [3010, 1505, 500, 125, 25],
          },
          {
            cost: 68969,
            reward: [3030, 1515, 505, 125, 25],
          },
          {
            cost: 70693,
            reward: [3045, 1525, 510, 130, 25],
          },
          {
            cost: 72460,
            reward: [3065, 1535, 510, 130, 25],
          },
          {
            cost: 74272,
            reward: [3085, 1545, 515, 130, 25],
          },
          {
            cost: 76129,
            reward: [3105, 1555, 520, 130, 25],
          },
          {
            cost: 78032,
            reward: [3125, 1565, 520, 130, 25],
          },
          {
            cost: 79983,
            reward: [3145, 1575, 525, 130, 25],
          },
          {
            cost: 81982,
            reward: [3165, 1585, 530, 135, 25],
          },
          {
            cost: 84032,
            reward: [3180, 1590, 530, 135, 25],
          },
          {
            cost: 86133,
            reward: [3200, 1600, 535, 135, 25],
          },
          {
            cost: 88286,
            reward: [3220, 1610, 535, 135, 25],
          },
        ],
      },
      Space_Needle: {
        levels: [
          {
            cost: 60,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 100,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 180,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 270,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 360,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 460,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 560,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 670,
            reward: [70, 35, 10, 5, 0],
          },
          {
            cost: 770,
            reward: [80, 40, 15, 5, 0],
          },
          {
            cost: 880,
            reward: [90, 45, 15, 5, 0],
          },
          {
            cost: 902,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 925,
            reward: [115, 60, 20, 5, 0],
          },
          {
            cost: 948,
            reward: [125, 65, 20, 5, 0],
          },
          {
            cost: 972,
            reward: [135, 70, 25, 5, 0],
          },
          {
            cost: 996,
            reward: [150, 75, 25, 5, 0],
          },
          {
            cost: 1021,
            reward: [160, 80, 25, 5, 0],
          },
          {
            cost: 1047,
            reward: [175, 90, 30, 10, 0],
          },
          {
            cost: 1073,
            reward: [185, 95, 30, 10, 0],
          },
          {
            cost: 1099,
            reward: [200, 100, 35, 10, 0],
          },
          {
            cost: 1127,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 1155,
            reward: [225, 115, 40, 10, 0],
          },
          {
            cost: 1184,
            reward: [240, 120, 40, 10, 0],
          },
          {
            cost: 1214,
            reward: [250, 125, 40, 10, 0],
          },
          {
            cost: 1244,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1275,
            reward: [280, 140, 45, 10, 0],
          },
          {
            cost: 1307,
            reward: [290, 145, 50, 15, 5],
          },
          {
            cost: 1340,
            reward: [305, 155, 50, 15, 5],
          },
          {
            cost: 1373,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1407,
            reward: [335, 170, 55, 15, 5],
          },
          {
            cost: 1442,
            reward: [345, 175, 60, 15, 5],
          },
          {
            cost: 1479,
            reward: [360, 180, 60, 15, 5],
          },
          {
            cost: 1515,
            reward: [375, 190, 65, 15, 5],
          },
          {
            cost: 1553,
            reward: [390, 195, 65, 15, 5],
          },
          {
            cost: 1592,
            reward: [405, 205, 70, 20, 5],
          },
          {
            cost: 1632,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1673,
            reward: [430, 215, 70, 20, 5],
          },
          {
            cost: 1715,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 1757,
            reward: [460, 230, 75, 20, 5],
          },
          {
            cost: 1801,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 1846,
            reward: [490, 245, 80, 20, 5],
          },
          {
            cost: 1893,
            reward: [505, 255, 85, 20, 5],
          },
          {
            cost: 1940,
            reward: [520, 260, 85, 20, 5],
          },
          {
            cost: 1988,
            reward: [535, 270, 90, 25, 5],
          },
          {
            cost: 2038,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2089,
            reward: [565, 285, 95, 25, 5],
          },
          {
            cost: 2141,
            reward: [580, 290, 95, 25, 5],
          },
          {
            cost: 2195,
            reward: [600, 300, 100, 25, 5],
          },
          {
            cost: 2250,
            reward: [615, 310, 105, 25, 5],
          },
          {
            cost: 2306,
            reward: [630, 315, 105, 25, 5],
          },
          {
            cost: 2363,
            reward: [645, 325, 110, 30, 5],
          },
          {
            cost: 2422,
            reward: [660, 330, 110, 30, 5],
          },
          {
            cost: 2483,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2545,
            reward: [690, 345, 115, 30, 5],
          },
          {
            cost: 2609,
            reward: [705, 355, 120, 30, 5],
          },
          {
            cost: 2674,
            reward: [725, 365, 120, 30, 5],
          },
          {
            cost: 2741,
            reward: [740, 370, 125, 30, 5],
          },
          {
            cost: 2809,
            reward: [755, 380, 125, 30, 5],
          },
          {
            cost: 2879,
            reward: [770, 385, 130, 35, 5],
          },
          {
            cost: 2951,
            reward: [785, 395, 130, 35, 5],
          },
          {
            cost: 3025,
            reward: [800, 400, 135, 35, 5],
          },
          {
            cost: 3101,
            reward: [820, 410, 135, 35, 5],
          },
          {
            cost: 3178,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 3258,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 3339,
            reward: [870, 435, 145, 35, 5],
          },
          {
            cost: 3423,
            reward: [885, 445, 150, 40, 10],
          },
          {
            cost: 3508,
            reward: [900, 450, 150, 40, 10],
          },
          {
            cost: 3596,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 3686,
            reward: [935, 470, 155, 40, 10],
          },
          {
            cost: 3778,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 3872,
            reward: [965, 485, 160, 40, 10],
          },
          {
            cost: 3969,
            reward: [985, 495, 165, 40, 10],
          },
          {
            cost: 4068,
            reward: [1000, 500, 165, 40, 10],
          },
          {
            cost: 4170,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 4274,
            reward: [1035, 520, 175, 45, 10],
          },
          {
            cost: 4381,
            reward: [1050, 525, 175, 45, 10],
          },
          {
            cost: 4491,
            reward: [1065, 535, 180, 45, 10],
          },
          {
            cost: 4603,
            reward: [1085, 545, 180, 45, 10],
          },
          {
            cost: 4718,
            reward: [1100, 550, 185, 45, 10],
          },
          {
            cost: 4836,
            reward: [1120, 560, 185, 45, 10],
          },
          {
            cost: 4957,
            reward: [1135, 570, 190, 50, 10],
          },
          {
            cost: 5081,
            reward: [1150, 575, 190, 50, 10],
          },
          {
            cost: 5208,
            reward: [1170, 585, 195, 50, 10],
          },
          {
            cost: 5338,
            reward: [1185, 595, 200, 50, 10],
          },
          {
            cost: 5471,
            reward: [1205, 605, 200, 50, 10],
          },
          {
            cost: 5608,
            reward: [1220, 610, 205, 50, 10],
          },
          {
            cost: 5748,
            reward: [1240, 620, 205, 50, 10],
          },
          {
            cost: 5892,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 6039,
            reward: [1275, 640, 215, 55, 10],
          },
          {
            cost: 6190,
            reward: [1290, 645, 215, 55, 10],
          },
          {
            cost: 6345,
            reward: [1310, 655, 220, 55, 10],
          },
          {
            cost: 6504,
            reward: [1325, 665, 220, 55, 10],
          },
          {
            cost: 6666,
            reward: [1345, 675, 225, 55, 10],
          },
          {
            cost: 6833,
            reward: [1360, 680, 225, 55, 10],
          },
          {
            cost: 7004,
            reward: [1380, 690, 230, 60, 10],
          },
          {
            cost: 7179,
            reward: [1395, 700, 235, 60, 10],
          },
          {
            cost: 7358,
            reward: [1415, 710, 235, 60, 10],
          },
          {
            cost: 7542,
            reward: [1430, 715, 240, 60, 10],
          },
          {
            cost: 7731,
            reward: [1450, 725, 240, 60, 10],
          },
          {
            cost: 7924,
            reward: [1470, 735, 245, 60, 10],
          },
          {
            cost: 8122,
            reward: [1485, 745, 250, 65, 15],
          },
          {
            cost: 8325,
            reward: [1505, 755, 250, 65, 15],
          },
          {
            cost: 8533,
            reward: [1520, 760, 255, 65, 15],
          },
          {
            cost: 8746,
            reward: [1540, 770, 255, 65, 15],
          },
          {
            cost: 8965,
            reward: [1555, 780, 260, 65, 15],
          },
          {
            cost: 9189,
            reward: [1575, 790, 265, 65, 15],
          },
          {
            cost: 9419,
            reward: [1595, 800, 265, 65, 15],
          },
          {
            cost: 9654,
            reward: [1610, 805, 270, 70, 15],
          },
          {
            cost: 9896,
            reward: [1630, 815, 270, 70, 15],
          },
          {
            cost: 10143,
            reward: [1650, 825, 275, 70, 15],
          },
          {
            cost: 10397,
            reward: [1665, 835, 280, 70, 15],
          },
          {
            cost: 10656,
            reward: [1685, 845, 280, 70, 15],
          },
          {
            cost: 10923,
            reward: [1705, 855, 285, 70, 15],
          },
        ],
      },
      Atomium: {
        levels: [
          {
            cost: 60,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 100,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 180,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 270,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 360,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 460,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 560,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 670,
            reward: [70, 35, 10, 5, 0],
          },
          {
            cost: 770,
            reward: [80, 40, 15, 5, 0],
          },
          {
            cost: 880,
            reward: [90, 45, 15, 5, 0],
          },
          {
            cost: 902,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 925,
            reward: [115, 60, 20, 5, 0],
          },
          {
            cost: 948,
            reward: [125, 65, 20, 5, 0],
          },
          {
            cost: 972,
            reward: [135, 70, 25, 5, 0],
          },
          {
            cost: 996,
            reward: [150, 75, 25, 5, 0],
          },
          {
            cost: 1021,
            reward: [160, 80, 25, 5, 0],
          },
          {
            cost: 1047,
            reward: [175, 90, 30, 10, 0],
          },
          {
            cost: 1073,
            reward: [185, 95, 30, 10, 0],
          },
          {
            cost: 1099,
            reward: [200, 100, 35, 10, 0],
          },
          {
            cost: 1127,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 1155,
            reward: [225, 115, 40, 10, 0],
          },
          {
            cost: 1184,
            reward: [240, 120, 40, 10, 0],
          },
          {
            cost: 1214,
            reward: [250, 125, 40, 10, 0],
          },
          {
            cost: 1244,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1275,
            reward: [280, 140, 45, 10, 0],
          },
          {
            cost: 1307,
            reward: [290, 145, 50, 15, 5],
          },
          {
            cost: 1340,
            reward: [305, 155, 50, 15, 5],
          },
          {
            cost: 1373,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1407,
            reward: [335, 170, 55, 15, 5],
          },
          {
            cost: 1442,
            reward: [345, 175, 60, 15, 5],
          },
          {
            cost: 1479,
            reward: [360, 180, 60, 15, 5],
          },
          {
            cost: 1515,
            reward: [375, 190, 65, 15, 5],
          },
          {
            cost: 1553,
            reward: [390, 195, 65, 15, 5],
          },
          {
            cost: 1592,
            reward: [405, 205, 70, 20, 5],
          },
          {
            cost: 1632,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1673,
            reward: [430, 215, 70, 20, 5],
          },
          {
            cost: 1715,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 1757,
            reward: [460, 230, 75, 20, 5],
          },
          {
            cost: 1801,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 1846,
            reward: [490, 245, 80, 20, 5],
          },
          {
            cost: 1893,
            reward: [505, 255, 85, 20, 5],
          },
          {
            cost: 1940,
            reward: [520, 260, 85, 20, 5],
          },
          {
            cost: 1988,
            reward: [535, 270, 90, 25, 5],
          },
          {
            cost: 2038,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2089,
            reward: [565, 285, 95, 25, 5],
          },
          {
            cost: 2141,
            reward: [580, 290, 95, 25, 5],
          },
          {
            cost: 2195,
            reward: [600, 300, 100, 25, 5],
          },
          {
            cost: 2250,
            reward: [615, 310, 105, 25, 5],
          },
          {
            cost: 2306,
            reward: [630, 315, 105, 25, 5],
          },
          {
            cost: 2363,
            reward: [645, 325, 110, 30, 5],
          },
          {
            cost: 2422,
            reward: [660, 330, 110, 30, 5],
          },
          {
            cost: 2483,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2545,
            reward: [690, 345, 115, 30, 5],
          },
          {
            cost: 2609,
            reward: [705, 355, 120, 30, 5],
          },
          {
            cost: 2674,
            reward: [725, 365, 120, 30, 5],
          },
          {
            cost: 2741,
            reward: [740, 370, 125, 30, 5],
          },
          {
            cost: 2809,
            reward: [755, 380, 125, 30, 5],
          },
          {
            cost: 2879,
            reward: [770, 385, 130, 35, 5],
          },
          {
            cost: 2951,
            reward: [785, 395, 130, 35, 5],
          },
          {
            cost: 3025,
            reward: [800, 400, 135, 35, 5],
          },
          {
            cost: 3101,
            reward: [820, 410, 135, 35, 5],
          },
          {
            cost: 3178,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 3258,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 3339,
            reward: [870, 435, 145, 35, 5],
          },
          {
            cost: 3423,
            reward: [885, 445, 150, 40, 10],
          },
          {
            cost: 3508,
            reward: [900, 450, 150, 40, 10],
          },
          {
            cost: 3596,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 3686,
            reward: [935, 470, 155, 40, 10],
          },
          {
            cost: 3778,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 3872,
            reward: [965, 485, 160, 40, 10],
          },
          {
            cost: 3969,
            reward: [985, 495, 165, 40, 10],
          },
          {
            cost: 4068,
            reward: [1000, 500, 165, 40, 10],
          },
          {
            cost: 4170,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 4274,
            reward: [1035, 520, 175, 45, 10],
          },
          {
            cost: 4381,
            reward: [1050, 525, 175, 45, 10],
          },
          {
            cost: 4491,
            reward: [1065, 535, 180, 45, 10],
          },
          {
            cost: 4603,
            reward: [1085, 545, 180, 45, 10],
          },
          {
            cost: 4718,
            reward: [1100, 550, 185, 45, 10],
          },
          {
            cost: 4836,
            reward: [1120, 560, 185, 45, 10],
          },
          {
            cost: 4957,
            reward: [1135, 570, 190, 50, 10],
          },
          {
            cost: 5081,
            reward: [1150, 575, 190, 50, 10],
          },
          {
            cost: 5208,
            reward: [1170, 585, 195, 50, 10],
          },
          {
            cost: 5338,
            reward: [1185, 595, 200, 50, 10],
          },
          {
            cost: 5471,
            reward: [1205, 605, 200, 50, 10],
          },
          {
            cost: 5608,
            reward: [1220, 610, 205, 50, 10],
          },
          {
            cost: 5748,
            reward: [1240, 620, 205, 50, 10],
          },
          {
            cost: 5892,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 6039,
            reward: [1275, 640, 215, 55, 10],
          },
          {
            cost: 6190,
            reward: [1290, 645, 215, 55, 10],
          },
          {
            cost: 6345,
            reward: [1310, 655, 220, 55, 10],
          },
          {
            cost: 6504,
            reward: [1325, 665, 220, 55, 10],
          },
          {
            cost: 6666,
            reward: [1345, 675, 225, 55, 10],
          },
          {
            cost: 6833,
            reward: [1360, 680, 225, 55, 10],
          },
          {
            cost: 7004,
            reward: [1380, 690, 230, 60, 10],
          },
          {
            cost: 7179,
            reward: [1395, 700, 235, 60, 10],
          },
          {
            cost: 7358,
            reward: [1415, 710, 235, 60, 10],
          },
          {
            cost: 7542,
            reward: [1430, 715, 240, 60, 10],
          },
          {
            cost: 7731,
            reward: [1450, 725, 240, 60, 10],
          },
          {
            cost: 7924,
            reward: [1470, 735, 245, 60, 10],
          },
          {
            cost: 8122,
            reward: [1485, 745, 250, 65, 15],
          },
          {
            cost: 8325,
            reward: [1505, 755, 250, 65, 15],
          },
          {
            cost: 8533,
            reward: [1520, 760, 255, 65, 15],
          },
          {
            cost: 8746,
            reward: [1540, 770, 255, 65, 15],
          },
          {
            cost: 8965,
            reward: [1555, 780, 260, 65, 15],
          },
          {
            cost: 9189,
            reward: [1575, 790, 265, 65, 15],
          },
          {
            cost: 9419,
            reward: [1595, 800, 265, 65, 15],
          },
          {
            cost: 9654,
            reward: [1610, 805, 270, 70, 15],
          },
          {
            cost: 9896,
            reward: [1630, 815, 270, 70, 15],
          },
          {
            cost: 10143,
            reward: [1650, 825, 275, 70, 15],
          },
          {
            cost: 10397,
            reward: [1665, 835, 280, 70, 15],
          },
          {
            cost: 10656,
            reward: [1685, 845, 280, 70, 15],
          },
          {
            cost: 10923,
            reward: [1705, 855, 285, 70, 15],
          },
        ],
      },
      Cape_Canaveral: {
        levels: [
          {
            cost: 60,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 100,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 180,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 270,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 360,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 460,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 560,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 670,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 770,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 880,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 902,
            reward: [110, 55, 20, 5, 0],
          },
          {
            cost: 925,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 948,
            reward: [130, 65, 20, 5, 0],
          },
          {
            cost: 972,
            reward: [145, 75, 25, 5, 0],
          },
          {
            cost: 996,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 1021,
            reward: [170, 85, 30, 10, 0],
          },
          {
            cost: 1047,
            reward: [185, 95, 30, 10, 0],
          },
          {
            cost: 1073,
            reward: [195, 100, 35, 10, 0],
          },
          {
            cost: 1099,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 1127,
            reward: [225, 115, 40, 10, 0],
          },
          {
            cost: 1155,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 1184,
            reward: [250, 125, 40, 10, 0],
          },
          {
            cost: 1214,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1244,
            reward: [280, 140, 45, 10, 0],
          },
          {
            cost: 1275,
            reward: [295, 150, 50, 15, 5],
          },
          {
            cost: 1307,
            reward: [305, 155, 50, 15, 5],
          },
          {
            cost: 1340,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1373,
            reward: [335, 170, 55, 15, 5],
          },
          {
            cost: 1407,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1442,
            reward: [365, 185, 60, 15, 5],
          },
          {
            cost: 1479,
            reward: [380, 190, 65, 15, 5],
          },
          {
            cost: 1515,
            reward: [395, 200, 65, 15, 5],
          },
          {
            cost: 1553,
            reward: [410, 205, 70, 20, 5],
          },
          {
            cost: 1592,
            reward: [425, 215, 70, 20, 5],
          },
          {
            cost: 1632,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1673,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1715,
            reward: [470, 235, 80, 20, 5],
          },
          {
            cost: 1757,
            reward: [485, 245, 80, 20, 5],
          },
          {
            cost: 1801,
            reward: [500, 250, 85, 20, 5],
          },
          {
            cost: 1846,
            reward: [515, 260, 85, 20, 5],
          },
          {
            cost: 1893,
            reward: [535, 270, 90, 25, 5],
          },
          {
            cost: 1940,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 1988,
            reward: [565, 285, 95, 25, 5],
          },
          {
            cost: 2038,
            reward: [580, 290, 95, 25, 5],
          },
          {
            cost: 2089,
            reward: [595, 300, 100, 25, 5],
          },
          {
            cost: 2141,
            reward: [615, 310, 105, 25, 5],
          },
          {
            cost: 2195,
            reward: [630, 315, 105, 25, 5],
          },
          {
            cost: 2250,
            reward: [645, 325, 110, 30, 5],
          },
          {
            cost: 2306,
            reward: [660, 330, 110, 30, 5],
          },
          {
            cost: 2363,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2422,
            reward: [695, 350, 115, 30, 5],
          },
          {
            cost: 2483,
            reward: [710, 355, 120, 30, 5],
          },
          {
            cost: 2545,
            reward: [725, 365, 120, 30, 5],
          },
          {
            cost: 2609,
            reward: [745, 375, 125, 30, 5],
          },
          {
            cost: 2674,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 2741,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 2809,
            reward: [795, 400, 135, 35, 5],
          },
          {
            cost: 2879,
            reward: [810, 405, 135, 35, 5],
          },
          {
            cost: 2951,
            reward: [830, 415, 140, 35, 5],
          },
          {
            cost: 3025,
            reward: [845, 425, 140, 35, 5],
          },
          {
            cost: 3101,
            reward: [860, 430, 145, 35, 5],
          },
          {
            cost: 3178,
            reward: [880, 440, 145, 35, 5],
          },
          {
            cost: 3258,
            reward: [895, 450, 150, 40, 10],
          },
          {
            cost: 3339,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 3423,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 3508,
            reward: [945, 475, 160, 40, 10],
          },
          {
            cost: 3596,
            reward: [965, 485, 160, 40, 10],
          },
          {
            cost: 3686,
            reward: [985, 495, 165, 40, 10],
          },
          {
            cost: 3778,
            reward: [1000, 500, 165, 40, 10],
          },
          {
            cost: 3872,
            reward: [1020, 510, 170, 45, 10],
          },
          {
            cost: 3969,
            reward: [1035, 520, 175, 45, 10],
          },
          {
            cost: 4068,
            reward: [1050, 525, 175, 45, 10],
          },
          {
            cost: 4170,
            reward: [1070, 535, 180, 45, 10],
          },
          {
            cost: 4274,
            reward: [1090, 545, 180, 45, 10],
          },
          {
            cost: 4381,
            reward: [1105, 555, 185, 45, 10],
          },
          {
            cost: 4491,
            reward: [1125, 565, 190, 50, 10],
          },
          {
            cost: 4603,
            reward: [1140, 570, 190, 50, 10],
          },
          {
            cost: 4718,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 4836,
            reward: [1175, 590, 195, 50, 10],
          },
          {
            cost: 4957,
            reward: [1195, 600, 200, 50, 10],
          },
          {
            cost: 5081,
            reward: [1215, 610, 205, 50, 10],
          },
          {
            cost: 5208,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 5338,
            reward: [1250, 625, 210, 55, 10],
          },
          {
            cost: 5471,
            reward: [1265, 635, 210, 55, 10],
          },
          {
            cost: 5608,
            reward: [1285, 645, 215, 55, 10],
          },
          {
            cost: 5748,
            reward: [1305, 655, 220, 55, 10],
          },
          {
            cost: 5892,
            reward: [1320, 660, 220, 55, 10],
          },
          {
            cost: 6039,
            reward: [1340, 670, 225, 55, 10],
          },
          {
            cost: 6190,
            reward: [1360, 680, 225, 55, 10],
          },
          {
            cost: 6345,
            reward: [1375, 690, 230, 60, 10],
          },
          {
            cost: 6504,
            reward: [1395, 700, 235, 60, 10],
          },
          {
            cost: 6666,
            reward: [1415, 710, 235, 60, 10],
          },
          {
            cost: 6833,
            reward: [1435, 720, 240, 60, 10],
          },
          {
            cost: 7004,
            reward: [1450, 725, 240, 60, 10],
          },
          {
            cost: 7179,
            reward: [1470, 735, 245, 60, 10],
          },
          {
            cost: 7358,
            reward: [1490, 745, 250, 65, 15],
          },
          {
            cost: 7542,
            reward: [1510, 755, 250, 65, 15],
          },
          {
            cost: 7731,
            reward: [1525, 765, 255, 65, 15],
          },
          {
            cost: 7924,
            reward: [1545, 775, 260, 65, 15],
          },
          {
            cost: 8122,
            reward: [1565, 785, 260, 65, 15],
          },
          {
            cost: 8325,
            reward: [1585, 795, 265, 65, 15],
          },
          {
            cost: 8533,
            reward: [1600, 800, 265, 65, 15],
          },
          {
            cost: 8746,
            reward: [1620, 810, 270, 70, 15],
          },
          {
            cost: 8965,
            reward: [1640, 820, 275, 70, 15],
          },
          {
            cost: 9189,
            reward: [1660, 830, 275, 70, 15],
          },
          {
            cost: 9419,
            reward: [1680, 840, 280, 70, 15],
          },
          {
            cost: 9654,
            reward: [1695, 850, 285, 70, 15],
          },
          {
            cost: 9896,
            reward: [1715, 860, 285, 70, 15],
          },
          {
            cost: 10143,
            reward: [1735, 870, 290, 75, 15],
          },
          {
            cost: 10397,
            reward: [1755, 880, 295, 75, 15],
          },
          {
            cost: 10656,
            reward: [1775, 890, 295, 75, 15],
          },
          {
            cost: 10923,
            reward: [1790, 895, 300, 75, 15],
          },
          {
            cost: 11196,
            reward: [1810, 905, 300, 75, 15],
          },
          {
            cost: 11476,
            reward: [1830, 915, 305, 75, 15],
          },
          {
            cost: 11763,
            reward: [1850, 925, 310, 80, 15],
          },
          {
            cost: 12057,
            reward: [1870, 935, 310, 80, 15],
          },
          {
            cost: 12358,
            reward: [1890, 945, 315, 80, 15],
          },
          {
            cost: 12667,
            reward: [1910, 955, 320, 80, 15],
          },
          {
            cost: 12984,
            reward: [1930, 965, 320, 80, 15],
          },
          {
            cost: 13308,
            reward: [1950, 975, 325, 80, 15],
          },
          {
            cost: 13641,
            reward: [1965, 985, 330, 85, 15],
          },
          {
            cost: 13982,
            reward: [1985, 995, 330, 85, 15],
          },
          {
            cost: 14332,
            reward: [2005, 1005, 335, 85, 15],
          },
          {
            cost: 14690,
            reward: [2025, 1015, 340, 85, 15],
          },
          {
            cost: 15057,
            reward: [2045, 1025, 340, 85, 15],
          },
          {
            cost: 15434,
            reward: [2065, 1035, 345, 85, 15],
          },
          {
            cost: 15819,
            reward: [2085, 1045, 350, 90, 20],
          },
          {
            cost: 16215,
            reward: [2105, 1055, 350, 90, 20],
          },
          {
            cost: 16620,
            reward: [2125, 1065, 355, 90, 20],
          },
          {
            cost: 17036,
            reward: [2145, 1075, 360, 90, 20],
          },
          {
            cost: 17462,
            reward: [2165, 1085, 360, 90, 20],
          },
          {
            cost: 17898,
            reward: [2185, 1095, 365, 90, 20],
          },
          {
            cost: 18346,
            reward: [2205, 1105, 370, 95, 20],
          },
          {
            cost: 18804,
            reward: [2225, 1115, 370, 95, 20],
          },
          {
            cost: 19274,
            reward: [2245, 1125, 375, 95, 20],
          },
          {
            cost: 19756,
            reward: [2265, 1135, 380, 95, 20],
          },
          {
            cost: 20250,
            reward: [2285, 1145, 380, 95, 20],
          },
          {
            cost: 20756,
            reward: [2305, 1155, 385, 95, 20],
          },
          {
            cost: 21275,
            reward: [2325, 1165, 390, 100, 20],
          },
        ],
      },
      The_Habitat: {
        levels: [
          {
            cost: 60,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 100,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 180,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 270,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 360,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 460,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 560,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 670,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 770,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 880,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 902,
            reward: [110, 55, 20, 5, 0],
          },
          {
            cost: 925,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 948,
            reward: [130, 65, 20, 5, 0],
          },
          {
            cost: 972,
            reward: [145, 75, 25, 5, 0],
          },
          {
            cost: 996,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 1021,
            reward: [170, 85, 30, 10, 0],
          },
          {
            cost: 1047,
            reward: [185, 95, 30, 10, 0],
          },
          {
            cost: 1073,
            reward: [195, 100, 35, 10, 0],
          },
          {
            cost: 1099,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 1127,
            reward: [225, 115, 40, 10, 0],
          },
          {
            cost: 1155,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 1184,
            reward: [250, 125, 40, 10, 0],
          },
          {
            cost: 1214,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1244,
            reward: [280, 140, 45, 10, 0],
          },
          {
            cost: 1275,
            reward: [295, 150, 50, 15, 5],
          },
          {
            cost: 1307,
            reward: [305, 155, 50, 15, 5],
          },
          {
            cost: 1340,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1373,
            reward: [335, 170, 55, 15, 5],
          },
          {
            cost: 1407,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1442,
            reward: [365, 185, 60, 15, 5],
          },
          {
            cost: 1479,
            reward: [380, 190, 65, 15, 5],
          },
          {
            cost: 1515,
            reward: [395, 200, 65, 15, 5],
          },
          {
            cost: 1553,
            reward: [410, 205, 70, 20, 5],
          },
          {
            cost: 1592,
            reward: [425, 215, 70, 20, 5],
          },
          {
            cost: 1632,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1673,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1715,
            reward: [470, 235, 80, 20, 5],
          },
          {
            cost: 1757,
            reward: [485, 245, 80, 20, 5],
          },
          {
            cost: 1801,
            reward: [500, 250, 85, 20, 5],
          },
          {
            cost: 1846,
            reward: [515, 260, 85, 20, 5],
          },
          {
            cost: 1893,
            reward: [535, 270, 90, 25, 5],
          },
          {
            cost: 1940,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 1988,
            reward: [565, 285, 95, 25, 5],
          },
          {
            cost: 2038,
            reward: [580, 290, 95, 25, 5],
          },
          {
            cost: 2089,
            reward: [595, 300, 100, 25, 5],
          },
          {
            cost: 2141,
            reward: [615, 310, 105, 25, 5],
          },
          {
            cost: 2195,
            reward: [630, 315, 105, 25, 5],
          },
          {
            cost: 2250,
            reward: [645, 325, 110, 30, 5],
          },
          {
            cost: 2306,
            reward: [660, 330, 110, 30, 5],
          },
          {
            cost: 2363,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2422,
            reward: [695, 350, 115, 30, 5],
          },
          {
            cost: 2483,
            reward: [710, 355, 120, 30, 5],
          },
          {
            cost: 2545,
            reward: [725, 365, 120, 30, 5],
          },
          {
            cost: 2609,
            reward: [745, 375, 125, 30, 5],
          },
          {
            cost: 2674,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 2741,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 2809,
            reward: [795, 400, 135, 35, 5],
          },
          {
            cost: 2879,
            reward: [810, 405, 135, 35, 5],
          },
          {
            cost: 2951,
            reward: [830, 415, 140, 35, 5],
          },
          {
            cost: 3025,
            reward: [845, 425, 140, 35, 5],
          },
          {
            cost: 3101,
            reward: [860, 430, 145, 35, 5],
          },
          {
            cost: 3178,
            reward: [880, 440, 145, 35, 5],
          },
          {
            cost: 3258,
            reward: [895, 450, 150, 40, 10],
          },
          {
            cost: 3339,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 3423,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 3508,
            reward: [945, 475, 160, 40, 10],
          },
          {
            cost: 3596,
            reward: [965, 485, 160, 40, 10],
          },
          {
            cost: 3686,
            reward: [985, 495, 165, 40, 10],
          },
          {
            cost: 3778,
            reward: [1000, 500, 165, 40, 10],
          },
          {
            cost: 3872,
            reward: [1020, 510, 170, 45, 10],
          },
          {
            cost: 3969,
            reward: [1035, 520, 175, 45, 10],
          },
          {
            cost: 4068,
            reward: [1050, 525, 175, 45, 10],
          },
          {
            cost: 4170,
            reward: [1070, 535, 180, 45, 10],
          },
          {
            cost: 4274,
            reward: [1090, 545, 180, 45, 10],
          },
          {
            cost: 4381,
            reward: [1105, 555, 185, 45, 10],
          },
          {
            cost: 4491,
            reward: [1125, 565, 190, 50, 10],
          },
          {
            cost: 4603,
            reward: [1140, 570, 190, 50, 10],
          },
          {
            cost: 4718,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 4836,
            reward: [1175, 590, 195, 50, 10],
          },
          {
            cost: 4957,
            reward: [1195, 600, 200, 50, 10],
          },
          {
            cost: 5081,
            reward: [1215, 610, 205, 50, 10],
          },
          {
            cost: 5208,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 5338,
            reward: [1250, 625, 210, 55, 10],
          },
          {
            cost: 5471,
            reward: [1265, 635, 210, 55, 10],
          },
          {
            cost: 5608,
            reward: [1285, 645, 215, 55, 10],
          },
          {
            cost: 5748,
            reward: [1305, 655, 220, 55, 10],
          },
          {
            cost: 5892,
            reward: [1320, 660, 220, 55, 10],
          },
          {
            cost: 6039,
            reward: [1340, 670, 225, 55, 10],
          },
          {
            cost: 6190,
            reward: [1360, 680, 225, 55, 10],
          },
          {
            cost: 6345,
            reward: [1375, 690, 230, 60, 10],
          },
          {
            cost: 6504,
            reward: [1395, 700, 235, 60, 10],
          },
          {
            cost: 6666,
            reward: [1415, 710, 235, 60, 10],
          },
          {
            cost: 6833,
            reward: [1435, 720, 240, 60, 10],
          },
          {
            cost: 7004,
            reward: [1450, 725, 240, 60, 10],
          },
          {
            cost: 7179,
            reward: [1470, 735, 245, 60, 10],
          },
          {
            cost: 7358,
            reward: [1490, 745, 250, 65, 15],
          },
          {
            cost: 7542,
            reward: [1510, 755, 250, 65, 15],
          },
          {
            cost: 7731,
            reward: [1525, 765, 255, 65, 15],
          },
          {
            cost: 7924,
            reward: [1545, 775, 260, 65, 15],
          },
          {
            cost: 8122,
            reward: [1565, 785, 260, 65, 15],
          },
          {
            cost: 8325,
            reward: [1585, 795, 265, 65, 15],
          },
          {
            cost: 8533,
            reward: [1600, 800, 265, 65, 15],
          },
          {
            cost: 8746,
            reward: [1620, 810, 270, 70, 15],
          },
          {
            cost: 8965,
            reward: [1640, 820, 275, 70, 15],
          },
          {
            cost: 9189,
            reward: [1660, 830, 275, 70, 15],
          },
          {
            cost: 9419,
            reward: [1680, 840, 280, 70, 15],
          },
          {
            cost: 9654,
            reward: [1695, 850, 285, 70, 15],
          },
          {
            cost: 9896,
            reward: [1715, 860, 285, 70, 15],
          },
          {
            cost: 10143,
            reward: [1735, 870, 290, 75, 15],
          },
          {
            cost: 10397,
            reward: [1755, 880, 295, 75, 15],
          },
          {
            cost: 10656,
            reward: [1775, 890, 295, 75, 15],
          },
          {
            cost: 10923,
            reward: [1790, 895, 300, 75, 15],
          },
          {
            cost: 11196,
            reward: [1810, 905, 300, 75, 15],
          },
          {
            cost: 11476,
            reward: [1830, 915, 305, 75, 15],
          },
          {
            cost: 11763,
            reward: [1850, 925, 310, 80, 15],
          },
          {
            cost: 12057,
            reward: [1870, 935, 310, 80, 15],
          },
          {
            cost: 12358,
            reward: [1890, 945, 315, 80, 15],
          },
          {
            cost: 12667,
            reward: [1910, 955, 320, 80, 15],
          },
          {
            cost: 12984,
            reward: [1930, 965, 320, 80, 15],
          },
          {
            cost: 13308,
            reward: [1950, 975, 325, 80, 15],
          },
          {
            cost: 13641,
            reward: [1965, 985, 330, 85, 15],
          },
          {
            cost: 13982,
            reward: [1985, 995, 330, 85, 15],
          },
          {
            cost: 14332,
            reward: [2005, 1005, 335, 85, 15],
          },
          {
            cost: 14690,
            reward: [2025, 1015, 340, 85, 15],
          },
          {
            cost: 15057,
            reward: [2045, 1025, 340, 85, 15],
          },
          {
            cost: 15434,
            reward: [2065, 1035, 345, 85, 15],
          },
          {
            cost: 15819,
            reward: [2085, 1045, 350, 90, 20],
          },
          {
            cost: 16215,
            reward: [2105, 1055, 350, 90, 20],
          },
          {
            cost: 16620,
            reward: [2125, 1065, 355, 90, 20],
          },
          {
            cost: 17036,
            reward: [2145, 1075, 360, 90, 20],
          },
          {
            cost: 17462,
            reward: [2165, 1085, 360, 90, 20],
          },
          {
            cost: 17898,
            reward: [2185, 1095, 365, 90, 20],
          },
          {
            cost: 18346,
            reward: [2205, 1105, 370, 95, 20],
          },
          {
            cost: 18804,
            reward: [2225, 1115, 370, 95, 20],
          },
          {
            cost: 19274,
            reward: [2245, 1125, 375, 95, 20],
          },
          {
            cost: 19756,
            reward: [2265, 1135, 380, 95, 20],
          },
          {
            cost: 20250,
            reward: [2285, 1145, 380, 95, 20],
          },
          {
            cost: 20756,
            reward: [2305, 1155, 385, 95, 20],
          },
          {
            cost: 21275,
            reward: [2325, 1165, 390, 100, 20],
          },
        ],
      },
      Lotus_Temple: {
        levels: [
          {
            cost: 60,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 100,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 180,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 270,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 360,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 460,
            reward: [55, 30, 10, 5, 0],
          },
          {
            cost: 560,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 670,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 770,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 880,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 902,
            reward: [115, 60, 20, 5, 0],
          },
          {
            cost: 925,
            reward: [125, 65, 20, 5, 0],
          },
          {
            cost: 948,
            reward: [140, 70, 25, 5, 0],
          },
          {
            cost: 972,
            reward: [150, 75, 25, 5, 0],
          },
          {
            cost: 996,
            reward: [165, 85, 30, 10, 0],
          },
          {
            cost: 1021,
            reward: [180, 90, 30, 10, 0],
          },
          {
            cost: 1047,
            reward: [190, 95, 30, 10, 0],
          },
          {
            cost: 1073,
            reward: [205, 105, 35, 10, 0],
          },
          {
            cost: 1099,
            reward: [220, 110, 35, 10, 0],
          },
          {
            cost: 1127,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 1155,
            reward: [250, 125, 40, 10, 0],
          },
          {
            cost: 1184,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1214,
            reward: [280, 140, 45, 10, 0],
          },
          {
            cost: 1244,
            reward: [290, 145, 50, 15, 5],
          },
          {
            cost: 1275,
            reward: [305, 155, 50, 15, 5],
          },
          {
            cost: 1307,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1340,
            reward: [335, 170, 55, 15, 5],
          },
          {
            cost: 1373,
            reward: [355, 180, 60, 15, 5],
          },
          {
            cost: 1407,
            reward: [365, 185, 60, 15, 5],
          },
          {
            cost: 1442,
            reward: [385, 195, 65, 15, 5],
          },
          {
            cost: 1479,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1515,
            reward: [415, 210, 70, 20, 5],
          },
          {
            cost: 1553,
            reward: [430, 215, 70, 20, 5],
          },
          {
            cost: 1592,
            reward: [445, 225, 75, 20, 5],
          },
          {
            cost: 1632,
            reward: [460, 230, 75, 20, 5],
          },
          {
            cost: 1673,
            reward: [480, 240, 80, 20, 5],
          },
          {
            cost: 1715,
            reward: [495, 250, 85, 20, 5],
          },
          {
            cost: 1757,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 1801,
            reward: [525, 265, 90, 25, 5],
          },
          {
            cost: 1846,
            reward: [545, 275, 90, 25, 5],
          },
          {
            cost: 1893,
            reward: [560, 280, 95, 25, 5],
          },
          {
            cost: 1940,
            reward: [575, 290, 95, 25, 5],
          },
          {
            cost: 1988,
            reward: [590, 295, 100, 25, 5],
          },
          {
            cost: 2038,
            reward: [610, 305, 100, 25, 5],
          },
          {
            cost: 2089,
            reward: [625, 315, 105, 25, 5],
          },
          {
            cost: 2141,
            reward: [645, 325, 110, 30, 5],
          },
          {
            cost: 2195,
            reward: [660, 330, 110, 30, 5],
          },
          {
            cost: 2250,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2306,
            reward: [695, 350, 115, 30, 5],
          },
          {
            cost: 2363,
            reward: [710, 355, 120, 30, 5],
          },
          {
            cost: 2422,
            reward: [730, 365, 120, 30, 5],
          },
          {
            cost: 2483,
            reward: [745, 375, 125, 30, 5],
          },
          {
            cost: 2545,
            reward: [765, 385, 130, 35, 5],
          },
          {
            cost: 2609,
            reward: [780, 390, 130, 35, 5],
          },
          {
            cost: 2674,
            reward: [800, 400, 135, 35, 5],
          },
          {
            cost: 2741,
            reward: [815, 410, 135, 35, 5],
          },
          {
            cost: 2809,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 2879,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 2951,
            reward: [870, 435, 145, 35, 5],
          },
          {
            cost: 3025,
            reward: [885, 445, 150, 40, 10],
          },
          {
            cost: 3101,
            reward: [905, 455, 150, 40, 10],
          },
          {
            cost: 3178,
            reward: [920, 460, 155, 40, 10],
          },
          {
            cost: 3258,
            reward: [940, 470, 155, 40, 10],
          },
          {
            cost: 3339,
            reward: [960, 480, 160, 40, 10],
          },
          {
            cost: 3423,
            reward: [975, 490, 165, 40, 10],
          },
          {
            cost: 3508,
            reward: [995, 500, 165, 40, 10],
          },
          {
            cost: 3596,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 3686,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 3778,
            reward: [1050, 525, 175, 45, 10],
          },
          {
            cost: 3872,
            reward: [1070, 535, 180, 45, 10],
          },
          {
            cost: 3969,
            reward: [1085, 545, 180, 45, 10],
          },
          {
            cost: 4068,
            reward: [1105, 555, 185, 45, 10],
          },
          {
            cost: 4170,
            reward: [1125, 565, 190, 50, 10],
          },
          {
            cost: 4274,
            reward: [1140, 570, 190, 50, 10],
          },
          {
            cost: 4381,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 4491,
            reward: [1180, 590, 195, 50, 10],
          },
          {
            cost: 4603,
            reward: [1200, 600, 200, 50, 10],
          },
          {
            cost: 4718,
            reward: [1215, 610, 205, 50, 10],
          },
          {
            cost: 4836,
            reward: [1235, 620, 205, 50, 10],
          },
          {
            cost: 4957,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 5081,
            reward: [1275, 640, 215, 55, 10],
          },
          {
            cost: 5208,
            reward: [1290, 645, 215, 55, 10],
          },
          {
            cost: 5338,
            reward: [1310, 655, 220, 55, 10],
          },
          {
            cost: 5471,
            reward: [1330, 665, 220, 55, 10],
          },
          {
            cost: 5608,
            reward: [1350, 675, 225, 55, 10],
          },
          {
            cost: 5748,
            reward: [1370, 685, 230, 60, 10],
          },
          {
            cost: 5892,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 6039,
            reward: [1410, 705, 235, 60, 10],
          },
          {
            cost: 6190,
            reward: [1425, 715, 240, 60, 10],
          },
          {
            cost: 6345,
            reward: [1445, 725, 240, 60, 10],
          },
          {
            cost: 6504,
            reward: [1465, 735, 245, 60, 10],
          },
          {
            cost: 6666,
            reward: [1485, 745, 250, 65, 15],
          },
          {
            cost: 6833,
            reward: [1505, 755, 250, 65, 15],
          },
          {
            cost: 7004,
            reward: [1525, 765, 255, 65, 15],
          },
          {
            cost: 7179,
            reward: [1545, 775, 260, 65, 15],
          },
          {
            cost: 7358,
            reward: [1565, 785, 260, 65, 15],
          },
          {
            cost: 7542,
            reward: [1580, 790, 265, 65, 15],
          },
          {
            cost: 7731,
            reward: [1600, 800, 265, 65, 15],
          },
          {
            cost: 7924,
            reward: [1625, 815, 270, 70, 15],
          },
          {
            cost: 8122,
            reward: [1640, 820, 275, 70, 15],
          },
          {
            cost: 8325,
            reward: [1660, 830, 275, 70, 15],
          },
          {
            cost: 8533,
            reward: [1680, 840, 280, 70, 15],
          },
          {
            cost: 8746,
            reward: [1700, 850, 285, 70, 15],
          },
          {
            cost: 8965,
            reward: [1720, 860, 285, 70, 15],
          },
          {
            cost: 9189,
            reward: [1740, 870, 290, 75, 15],
          },
          {
            cost: 9419,
            reward: [1760, 880, 295, 75, 15],
          },
          {
            cost: 9654,
            reward: [1780, 890, 295, 75, 15],
          },
          {
            cost: 9896,
            reward: [1800, 900, 300, 75, 15],
          },
          {
            cost: 10143,
            reward: [1820, 910, 305, 75, 15],
          },
          {
            cost: 10397,
            reward: [1840, 920, 305, 75, 15],
          },
          {
            cost: 10656,
            reward: [1860, 930, 310, 80, 15],
          },
          {
            cost: 10923,
            reward: [1880, 940, 315, 80, 15],
          },
          {
            cost: 11196,
            reward: [1900, 950, 315, 80, 15],
          },
          {
            cost: 11476,
            reward: [1920, 960, 320, 80, 15],
          },
          {
            cost: 11763,
            reward: [1945, 975, 325, 80, 15],
          },
          {
            cost: 12057,
            reward: [1965, 985, 330, 85, 15],
          },
          {
            cost: 12358,
            reward: [1985, 995, 330, 85, 15],
          },
          {
            cost: 12667,
            reward: [2005, 1005, 335, 85, 15],
          },
          {
            cost: 12984,
            reward: [2025, 1015, 340, 85, 15],
          },
          {
            cost: 13308,
            reward: [2045, 1025, 340, 85, 15],
          },
          {
            cost: 13641,
            reward: [2065, 1035, 345, 85, 15],
          },
          {
            cost: 13982,
            reward: [2085, 1045, 350, 90, 20],
          },
          {
            cost: 14332,
            reward: [2105, 1055, 350, 90, 20],
          },
          {
            cost: 14690,
            reward: [2125, 1065, 355, 90, 20],
          },
          {
            cost: 15057,
            reward: [2150, 1075, 360, 90, 20],
          },
          {
            cost: 15434,
            reward: [2170, 1085, 360, 90, 20],
          },
          {
            cost: 15819,
            reward: [2190, 1095, 365, 90, 20],
          },
          {
            cost: 16215,
            reward: [2210, 1105, 370, 95, 20],
          },
          {
            cost: 16620,
            reward: [2230, 1115, 370, 95, 20],
          },
          {
            cost: 17036,
            reward: [2250, 1125, 375, 95, 20],
          },
          {
            cost: 17462,
            reward: [2275, 1140, 380, 95, 20],
          },
        ],
      },
      Innovation_Tower: {
        levels: [
          {
            cost: 60,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 100,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 180,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 270,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 360,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 460,
            reward: [55, 30, 10, 5, 0],
          },
          {
            cost: 560,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 670,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 770,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 880,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 902,
            reward: [115, 60, 20, 5, 0],
          },
          {
            cost: 925,
            reward: [125, 65, 20, 5, 0],
          },
          {
            cost: 948,
            reward: [140, 70, 25, 5, 0],
          },
          {
            cost: 972,
            reward: [150, 75, 25, 5, 0],
          },
          {
            cost: 996,
            reward: [165, 85, 30, 10, 0],
          },
          {
            cost: 1021,
            reward: [180, 90, 30, 10, 0],
          },
          {
            cost: 1047,
            reward: [190, 95, 30, 10, 0],
          },
          {
            cost: 1073,
            reward: [205, 105, 35, 10, 0],
          },
          {
            cost: 1099,
            reward: [220, 110, 35, 10, 0],
          },
          {
            cost: 1127,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 1155,
            reward: [250, 125, 40, 10, 0],
          },
          {
            cost: 1184,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1214,
            reward: [280, 140, 45, 10, 0],
          },
          {
            cost: 1244,
            reward: [290, 145, 50, 15, 5],
          },
          {
            cost: 1275,
            reward: [305, 155, 50, 15, 5],
          },
          {
            cost: 1307,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1340,
            reward: [335, 170, 55, 15, 5],
          },
          {
            cost: 1373,
            reward: [355, 180, 60, 15, 5],
          },
          {
            cost: 1407,
            reward: [365, 185, 60, 15, 5],
          },
          {
            cost: 1442,
            reward: [385, 195, 65, 15, 5],
          },
          {
            cost: 1479,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1515,
            reward: [415, 210, 70, 20, 5],
          },
          {
            cost: 1553,
            reward: [430, 215, 70, 20, 5],
          },
          {
            cost: 1592,
            reward: [445, 225, 75, 20, 5],
          },
          {
            cost: 1632,
            reward: [460, 230, 75, 20, 5],
          },
          {
            cost: 1673,
            reward: [480, 240, 80, 20, 5],
          },
          {
            cost: 1715,
            reward: [495, 250, 85, 20, 5],
          },
          {
            cost: 1757,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 1801,
            reward: [525, 265, 90, 25, 5],
          },
          {
            cost: 1846,
            reward: [545, 275, 90, 25, 5],
          },
          {
            cost: 1893,
            reward: [560, 280, 95, 25, 5],
          },
          {
            cost: 1940,
            reward: [575, 290, 95, 25, 5],
          },
          {
            cost: 1988,
            reward: [590, 295, 100, 25, 5],
          },
          {
            cost: 2038,
            reward: [610, 305, 100, 25, 5],
          },
          {
            cost: 2089,
            reward: [625, 315, 105, 25, 5],
          },
          {
            cost: 2141,
            reward: [645, 325, 110, 30, 5],
          },
          {
            cost: 2195,
            reward: [660, 330, 110, 30, 5],
          },
          {
            cost: 2250,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2306,
            reward: [695, 350, 115, 30, 5],
          },
          {
            cost: 2363,
            reward: [710, 355, 120, 30, 5],
          },
          {
            cost: 2422,
            reward: [730, 365, 120, 30, 5],
          },
          {
            cost: 2483,
            reward: [745, 375, 125, 30, 5],
          },
          {
            cost: 2545,
            reward: [765, 385, 130, 35, 5],
          },
          {
            cost: 2609,
            reward: [780, 390, 130, 35, 5],
          },
          {
            cost: 2674,
            reward: [800, 400, 135, 35, 5],
          },
          {
            cost: 2741,
            reward: [815, 410, 135, 35, 5],
          },
          {
            cost: 2809,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 2879,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 2951,
            reward: [870, 435, 145, 35, 5],
          },
          {
            cost: 3025,
            reward: [885, 445, 150, 40, 10],
          },
          {
            cost: 3101,
            reward: [905, 455, 150, 40, 10],
          },
          {
            cost: 3178,
            reward: [920, 460, 155, 40, 10],
          },
          {
            cost: 3258,
            reward: [940, 470, 155, 40, 10],
          },
          {
            cost: 3339,
            reward: [960, 480, 160, 40, 10],
          },
          {
            cost: 3423,
            reward: [975, 490, 165, 40, 10],
          },
          {
            cost: 3508,
            reward: [995, 500, 165, 40, 10],
          },
          {
            cost: 3596,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 3686,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 3778,
            reward: [1050, 525, 175, 45, 10],
          },
          {
            cost: 3872,
            reward: [1070, 535, 180, 45, 10],
          },
          {
            cost: 3969,
            reward: [1085, 545, 180, 45, 10],
          },
          {
            cost: 4068,
            reward: [1105, 555, 185, 45, 10],
          },
          {
            cost: 4170,
            reward: [1125, 565, 190, 50, 10],
          },
          {
            cost: 4274,
            reward: [1140, 570, 190, 50, 10],
          },
          {
            cost: 4381,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 4491,
            reward: [1180, 590, 195, 50, 10],
          },
          {
            cost: 4603,
            reward: [1200, 600, 200, 50, 10],
          },
          {
            cost: 4718,
            reward: [1215, 610, 205, 50, 10],
          },
          {
            cost: 4836,
            reward: [1235, 620, 205, 50, 10],
          },
          {
            cost: 4957,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 5081,
            reward: [1275, 640, 215, 55, 10],
          },
          {
            cost: 5208,
            reward: [1290, 645, 215, 55, 10],
          },
          {
            cost: 5338,
            reward: [1310, 655, 220, 55, 10],
          },
          {
            cost: 5471,
            reward: [1330, 665, 220, 55, 10],
          },
          {
            cost: 5608,
            reward: [1350, 675, 225, 55, 10],
          },
          {
            cost: 5748,
            reward: [1370, 685, 230, 60, 10],
          },
          {
            cost: 5892,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 6039,
            reward: [1410, 705, 235, 60, 10],
          },
          {
            cost: 6190,
            reward: [1425, 715, 240, 60, 10],
          },
          {
            cost: 6345,
            reward: [1445, 725, 240, 60, 10],
          },
          {
            cost: 6504,
            reward: [1465, 735, 245, 60, 10],
          },
          {
            cost: 6666,
            reward: [1485, 745, 250, 65, 15],
          },
          {
            cost: 6833,
            reward: [1505, 755, 250, 65, 15],
          },
          {
            cost: 7004,
            reward: [1525, 765, 255, 65, 15],
          },
          {
            cost: 7179,
            reward: [1545, 775, 260, 65, 15],
          },
          {
            cost: 7358,
            reward: [1565, 785, 260, 65, 15],
          },
          {
            cost: 7542,
            reward: [1580, 790, 265, 65, 15],
          },
          {
            cost: 7731,
            reward: [1600, 800, 265, 65, 15],
          },
          {
            cost: 7924,
            reward: [1625, 815, 270, 70, 15],
          },
          {
            cost: 8122,
            reward: [1640, 820, 275, 70, 15],
          },
          {
            cost: 8325,
            reward: [1660, 830, 275, 70, 15],
          },
          {
            cost: 8533,
            reward: [1680, 840, 280, 70, 15],
          },
          {
            cost: 8746,
            reward: [1700, 850, 285, 70, 15],
          },
          {
            cost: 8965,
            reward: [1720, 860, 285, 70, 15],
          },
          {
            cost: 9189,
            reward: [1740, 870, 290, 75, 15],
          },
          {
            cost: 9419,
            reward: [1760, 880, 295, 75, 15],
          },
          {
            cost: 9654,
            reward: [1780, 890, 295, 75, 15],
          },
          {
            cost: 9896,
            reward: [1800, 900, 300, 75, 15],
          },
          {
            cost: 10143,
            reward: [1820, 910, 305, 75, 15],
          },
          {
            cost: 10397,
            reward: [1840, 920, 305, 75, 15],
          },
          {
            cost: 10656,
            reward: [1860, 930, 310, 80, 15],
          },
          {
            cost: 10923,
            reward: [1880, 940, 315, 80, 15],
          },
          {
            cost: 11196,
            reward: [1900, 950, 315, 80, 15],
          },
          {
            cost: 11476,
            reward: [1920, 960, 320, 80, 15],
          },
          {
            cost: 11763,
            reward: [1945, 975, 325, 80, 15],
          },
          {
            cost: 12057,
            reward: [1965, 985, 330, 85, 15],
          },
          {
            cost: 12358,
            reward: [1985, 995, 330, 85, 15],
          },
          {
            cost: 12667,
            reward: [2005, 1005, 335, 85, 15],
          },
          {
            cost: 12984,
            reward: [2025, 1015, 340, 85, 15],
          },
          {
            cost: 13308,
            reward: [2045, 1025, 340, 85, 15],
          },
          {
            cost: 13641,
            reward: [2065, 1035, 345, 85, 15],
          },
          {
            cost: 13982,
            reward: [2085, 1045, 350, 90, 20],
          },
          {
            cost: 14332,
            reward: [2105, 1055, 350, 90, 20],
          },
          {
            cost: 14690,
            reward: [2125, 1065, 355, 90, 20],
          },
          {
            cost: 15057,
            reward: [2150, 1075, 360, 90, 20],
          },
          {
            cost: 15434,
            reward: [2170, 1085, 360, 90, 20],
          },
          {
            cost: 15819,
            reward: [2190, 1095, 365, 90, 20],
          },
          {
            cost: 16215,
            reward: [2210, 1105, 370, 95, 20],
          },
          {
            cost: 16620,
            reward: [2230, 1115, 370, 95, 20],
          },
          {
            cost: 17036,
            reward: [2250, 1125, 375, 95, 20],
          },
          {
            cost: 17462,
            reward: [2275, 1140, 380, 95, 20],
          },
        ],
      },
      Truce_Tower: {
        levels: [
          {
            cost: 70,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 100,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 190,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 280,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 380,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 480,
            reward: [55, 30, 10, 5, 0],
          },
          {
            cost: 590,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 710,
            reward: [80, 40, 15, 5, 0],
          },
          {
            cost: 810,
            reward: [90, 45, 15, 5, 0],
          },
          {
            cost: 930,
            reward: [105, 55, 20, 5, 0],
          },
          {
            cost: 954,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 978,
            reward: [130, 65, 20, 5, 0],
          },
          {
            cost: 1002,
            reward: [145, 75, 25, 5, 0],
          },
          {
            cost: 1027,
            reward: [160, 80, 25, 5, 0],
          },
          {
            cost: 1053,
            reward: [175, 90, 30, 10, 0],
          },
          {
            cost: 1079,
            reward: [185, 95, 30, 10, 0],
          },
          {
            cost: 1106,
            reward: [200, 100, 35, 10, 0],
          },
          {
            cost: 1134,
            reward: [215, 110, 35, 10, 0],
          },
          {
            cost: 1162,
            reward: [230, 115, 40, 10, 0],
          },
          {
            cost: 1191,
            reward: [245, 125, 40, 10, 0],
          },
          {
            cost: 1221,
            reward: [260, 130, 45, 10, 0],
          },
          {
            cost: 1251,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1283,
            reward: [290, 145, 50, 15, 5],
          },
          {
            cost: 1315,
            reward: [305, 155, 50, 15, 5],
          },
          {
            cost: 1347,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1381,
            reward: [335, 170, 55, 15, 5],
          },
          {
            cost: 1416,
            reward: [355, 180, 60, 15, 5],
          },
          {
            cost: 1451,
            reward: [370, 185, 60, 15, 5],
          },
          {
            cost: 1487,
            reward: [385, 195, 65, 15, 5],
          },
          {
            cost: 1524,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1563,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1602,
            reward: [435, 220, 75, 20, 5],
          },
          {
            cost: 1642,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 1683,
            reward: [465, 235, 80, 20, 5],
          },
          {
            cost: 1725,
            reward: [485, 245, 80, 20, 5],
          },
          {
            cost: 1768,
            reward: [500, 250, 85, 20, 5],
          },
          {
            cost: 1812,
            reward: [515, 260, 85, 20, 5],
          },
          {
            cost: 1857,
            reward: [535, 270, 90, 25, 5],
          },
          {
            cost: 1904,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 1951,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2000,
            reward: [585, 295, 100, 25, 5],
          },
          {
            cost: 2050,
            reward: [605, 305, 100, 25, 5],
          },
          {
            cost: 2101,
            reward: [620, 310, 105, 25, 5],
          },
          {
            cost: 2154,
            reward: [640, 320, 105, 25, 5],
          },
          {
            cost: 2208,
            reward: [655, 330, 110, 30, 5],
          },
          {
            cost: 2263,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2319,
            reward: [690, 345, 115, 30, 5],
          },
          {
            cost: 2377,
            reward: [710, 355, 120, 30, 5],
          },
          {
            cost: 2437,
            reward: [730, 365, 120, 30, 5],
          },
          {
            cost: 2498,
            reward: [745, 375, 125, 30, 5],
          },
          {
            cost: 2560,
            reward: [765, 385, 130, 35, 5],
          },
          {
            cost: 2624,
            reward: [780, 390, 130, 35, 5],
          },
          {
            cost: 2690,
            reward: [800, 400, 135, 35, 5],
          },
          {
            cost: 2757,
            reward: [820, 410, 135, 35, 5],
          },
          {
            cost: 2826,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 2896,
            reward: [855, 430, 145, 35, 5],
          },
          {
            cost: 2969,
            reward: [875, 440, 145, 35, 5],
          },
          {
            cost: 3043,
            reward: [890, 445, 150, 40, 10],
          },
          {
            cost: 3119,
            reward: [910, 455, 150, 40, 10],
          },
          {
            cost: 3197,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 3277,
            reward: [945, 475, 160, 40, 10],
          },
          {
            cost: 3359,
            reward: [965, 485, 160, 40, 10],
          },
          {
            cost: 3443,
            reward: [985, 495, 165, 40, 10],
          },
          {
            cost: 3529,
            reward: [1005, 505, 170, 45, 10],
          },
          {
            cost: 3617,
            reward: [1025, 515, 170, 45, 10],
          },
          {
            cost: 3707,
            reward: [1040, 520, 175, 45, 10],
          },
          {
            cost: 3800,
            reward: [1060, 530, 175, 45, 10],
          },
          {
            cost: 3895,
            reward: [1080, 540, 180, 45, 10],
          },
          {
            cost: 3993,
            reward: [1100, 550, 185, 45, 10],
          },
          {
            cost: 4092,
            reward: [1120, 560, 185, 45, 10],
          },
          {
            cost: 4195,
            reward: [1140, 570, 190, 50, 10],
          },
          {
            cost: 4299,
            reward: [1155, 580, 195, 50, 10],
          },
          {
            cost: 4407,
            reward: [1175, 590, 195, 50, 10],
          },
          {
            cost: 4517,
            reward: [1195, 600, 200, 50, 10],
          },
          {
            cost: 4630,
            reward: [1215, 610, 205, 50, 10],
          },
          {
            cost: 4746,
            reward: [1235, 620, 205, 50, 10],
          },
          {
            cost: 4864,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 4986,
            reward: [1275, 640, 215, 55, 10],
          },
          {
            cost: 5111,
            reward: [1295, 650, 215, 55, 10],
          },
          {
            cost: 5238,
            reward: [1315, 660, 220, 55, 10],
          },
          {
            cost: 5369,
            reward: [1335, 670, 225, 55, 10],
          },
          {
            cost: 5504,
            reward: [1355, 680, 225, 55, 10],
          },
          {
            cost: 5641,
            reward: [1375, 690, 230, 60, 10],
          },
          {
            cost: 5782,
            reward: [1395, 700, 235, 60, 10],
          },
          {
            cost: 5927,
            reward: [1415, 710, 235, 60, 10],
          },
          {
            cost: 6075,
            reward: [1435, 720, 240, 60, 10],
          },
          {
            cost: 6227,
            reward: [1455, 730, 245, 60, 10],
          },
          {
            cost: 6382,
            reward: [1475, 740, 245, 60, 10],
          },
          {
            cost: 6542,
            reward: [1495, 750, 250, 65, 15],
          },
          {
            cost: 6705,
            reward: [1515, 760, 255, 65, 15],
          },
          {
            cost: 6873,
            reward: [1535, 770, 255, 65, 15],
          },
          {
            cost: 7045,
            reward: [1555, 780, 260, 65, 15],
          },
          {
            cost: 7221,
            reward: [1575, 790, 265, 65, 15],
          },
          {
            cost: 7401,
            reward: [1595, 800, 265, 65, 15],
          },
          {
            cost: 7586,
            reward: [1615, 810, 270, 70, 15],
          },
          {
            cost: 7776,
            reward: [1640, 820, 275, 70, 15],
          },
          {
            cost: 7971,
            reward: [1660, 830, 275, 70, 15],
          },
          {
            cost: 8170,
            reward: [1680, 840, 280, 70, 15],
          },
          {
            cost: 8374,
            reward: [1700, 850, 285, 70, 15],
          },
          {
            cost: 8583,
            reward: [1720, 860, 285, 70, 15],
          },
          {
            cost: 8798,
            reward: [1740, 870, 290, 75, 15],
          },
          {
            cost: 9018,
            reward: [1760, 880, 295, 75, 15],
          },
          {
            cost: 9243,
            reward: [1780, 890, 295, 75, 15],
          },
          {
            cost: 9474,
            reward: [1805, 905, 300, 75, 15],
          },
          {
            cost: 9711,
            reward: [1825, 915, 305, 75, 15],
          },
          {
            cost: 9954,
            reward: [1845, 925, 310, 80, 15],
          },
          {
            cost: 10203,
            reward: [1865, 935, 310, 80, 15],
          },
          {
            cost: 10458,
            reward: [1885, 945, 315, 80, 15],
          },
          {
            cost: 10719,
            reward: [1910, 955, 320, 80, 15],
          },
        ],
      },
      Voyager_V1: {
        levels: [
          {
            cost: 70,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 100,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 190,
            reward: [20, 10, 5, 0, 0],
          },
          {
            cost: 280,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 380,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 480,
            reward: [55, 30, 10, 5, 0],
          },
          {
            cost: 590,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 710,
            reward: [80, 40, 15, 5, 0],
          },
          {
            cost: 810,
            reward: [90, 45, 15, 5, 0],
          },
          {
            cost: 930,
            reward: [105, 55, 20, 5, 0],
          },
          {
            cost: 954,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 978,
            reward: [130, 65, 20, 5, 0],
          },
          {
            cost: 1002,
            reward: [145, 75, 25, 5, 0],
          },
          {
            cost: 1027,
            reward: [160, 80, 25, 5, 0],
          },
          {
            cost: 1053,
            reward: [175, 90, 30, 10, 0],
          },
          {
            cost: 1079,
            reward: [185, 95, 30, 10, 0],
          },
          {
            cost: 1106,
            reward: [200, 100, 35, 10, 0],
          },
          {
            cost: 1134,
            reward: [215, 110, 35, 10, 0],
          },
          {
            cost: 1162,
            reward: [230, 115, 40, 10, 0],
          },
          {
            cost: 1191,
            reward: [245, 125, 40, 10, 0],
          },
          {
            cost: 1221,
            reward: [260, 130, 45, 10, 0],
          },
          {
            cost: 1251,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1283,
            reward: [290, 145, 50, 15, 5],
          },
          {
            cost: 1315,
            reward: [305, 155, 50, 15, 5],
          },
          {
            cost: 1347,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1381,
            reward: [335, 170, 55, 15, 5],
          },
          {
            cost: 1416,
            reward: [355, 180, 60, 15, 5],
          },
          {
            cost: 1451,
            reward: [370, 185, 60, 15, 5],
          },
          {
            cost: 1487,
            reward: [385, 195, 65, 15, 5],
          },
          {
            cost: 1524,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1563,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1602,
            reward: [435, 220, 75, 20, 5],
          },
          {
            cost: 1642,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 1683,
            reward: [465, 235, 80, 20, 5],
          },
          {
            cost: 1725,
            reward: [485, 245, 80, 20, 5],
          },
          {
            cost: 1768,
            reward: [500, 250, 85, 20, 5],
          },
          {
            cost: 1812,
            reward: [515, 260, 85, 20, 5],
          },
          {
            cost: 1857,
            reward: [535, 270, 90, 25, 5],
          },
          {
            cost: 1904,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 1951,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2000,
            reward: [585, 295, 100, 25, 5],
          },
          {
            cost: 2050,
            reward: [605, 305, 100, 25, 5],
          },
          {
            cost: 2101,
            reward: [620, 310, 105, 25, 5],
          },
          {
            cost: 2154,
            reward: [640, 320, 105, 25, 5],
          },
          {
            cost: 2208,
            reward: [655, 330, 110, 30, 5],
          },
          {
            cost: 2263,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2319,
            reward: [690, 345, 115, 30, 5],
          },
          {
            cost: 2377,
            reward: [710, 355, 120, 30, 5],
          },
          {
            cost: 2437,
            reward: [730, 365, 120, 30, 5],
          },
          {
            cost: 2498,
            reward: [745, 375, 125, 30, 5],
          },
          {
            cost: 2560,
            reward: [765, 385, 130, 35, 5],
          },
          {
            cost: 2624,
            reward: [780, 390, 130, 35, 5],
          },
          {
            cost: 2690,
            reward: [800, 400, 135, 35, 5],
          },
          {
            cost: 2757,
            reward: [820, 410, 135, 35, 5],
          },
          {
            cost: 2826,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 2896,
            reward: [855, 430, 145, 35, 5],
          },
          {
            cost: 2969,
            reward: [875, 440, 145, 35, 5],
          },
          {
            cost: 3043,
            reward: [890, 445, 150, 40, 10],
          },
          {
            cost: 3119,
            reward: [910, 455, 150, 40, 10],
          },
          {
            cost: 3197,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 3277,
            reward: [945, 475, 160, 40, 10],
          },
          {
            cost: 3359,
            reward: [965, 485, 160, 40, 10],
          },
          {
            cost: 3443,
            reward: [985, 495, 165, 40, 10],
          },
          {
            cost: 3529,
            reward: [1005, 505, 170, 45, 10],
          },
          {
            cost: 3617,
            reward: [1025, 515, 170, 45, 10],
          },
          {
            cost: 3707,
            reward: [1040, 520, 175, 45, 10],
          },
          {
            cost: 3800,
            reward: [1060, 530, 175, 45, 10],
          },
          {
            cost: 3895,
            reward: [1080, 540, 180, 45, 10],
          },
          {
            cost: 3993,
            reward: [1100, 550, 185, 45, 10],
          },
          {
            cost: 4092,
            reward: [1120, 560, 185, 45, 10],
          },
          {
            cost: 4195,
            reward: [1140, 570, 190, 50, 10],
          },
          {
            cost: 4299,
            reward: [1155, 580, 195, 50, 10],
          },
          {
            cost: 4407,
            reward: [1175, 590, 195, 50, 10],
          },
          {
            cost: 4517,
            reward: [1195, 600, 200, 50, 10],
          },
          {
            cost: 4630,
            reward: [1215, 610, 205, 50, 10],
          },
          {
            cost: 4746,
            reward: [1235, 620, 205, 50, 10],
          },
          {
            cost: 4864,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 4986,
            reward: [1275, 640, 215, 55, 10],
          },
          {
            cost: 5111,
            reward: [1295, 650, 215, 55, 10],
          },
          {
            cost: 5238,
            reward: [1315, 660, 220, 55, 10],
          },
          {
            cost: 5369,
            reward: [1335, 670, 225, 55, 10],
          },
          {
            cost: 5504,
            reward: [1355, 680, 225, 55, 10],
          },
          {
            cost: 5641,
            reward: [1375, 690, 230, 60, 10],
          },
          {
            cost: 5782,
            reward: [1395, 700, 235, 60, 10],
          },
          {
            cost: 5927,
            reward: [1415, 710, 235, 60, 10],
          },
          {
            cost: 6075,
            reward: [1435, 720, 240, 60, 10],
          },
          {
            cost: 6227,
            reward: [1455, 730, 245, 60, 10],
          },
          {
            cost: 6382,
            reward: [1475, 740, 245, 60, 10],
          },
          {
            cost: 6542,
            reward: [1495, 750, 250, 65, 15],
          },
          {
            cost: 6705,
            reward: [1515, 760, 255, 65, 15],
          },
          {
            cost: 6873,
            reward: [1535, 770, 255, 65, 15],
          },
          {
            cost: 7045,
            reward: [1555, 780, 260, 65, 15],
          },
          {
            cost: 7221,
            reward: [1575, 790, 265, 65, 15],
          },
          {
            cost: 7401,
            reward: [1595, 800, 265, 65, 15],
          },
          {
            cost: 7586,
            reward: [1615, 810, 270, 70, 15],
          },
          {
            cost: 7776,
            reward: [1640, 820, 275, 70, 15],
          },
          {
            cost: 7971,
            reward: [1660, 830, 275, 70, 15],
          },
          {
            cost: 8170,
            reward: [1680, 840, 280, 70, 15],
          },
          {
            cost: 8374,
            reward: [1700, 850, 285, 70, 15],
          },
          {
            cost: 8583,
            reward: [1720, 860, 285, 70, 15],
          },
          {
            cost: 8798,
            reward: [1740, 870, 290, 75, 15],
          },
          {
            cost: 9018,
            reward: [1760, 880, 295, 75, 15],
          },
          {
            cost: 9243,
            reward: [1780, 890, 295, 75, 15],
          },
          {
            cost: 9474,
            reward: [1805, 905, 300, 75, 15],
          },
          {
            cost: 9711,
            reward: [1825, 915, 305, 75, 15],
          },
          {
            cost: 9954,
            reward: [1845, 925, 310, 80, 15],
          },
          {
            cost: 10203,
            reward: [1865, 935, 310, 80, 15],
          },
          {
            cost: 10458,
            reward: [1885, 945, 315, 80, 15],
          },
          {
            cost: 10719,
            reward: [1910, 955, 320, 80, 15],
          },
        ],
      },
      The_Arc: {
        levels: [
          {
            cost: 70,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 110,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 200,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 290,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 400,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 510,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 620,
            reward: [70, 35, 10, 5, 0],
          },
          {
            cost: 740,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 860,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 970,
            reward: [110, 55, 20, 5, 0],
          },
          {
            cost: 995,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 1020,
            reward: [135, 70, 25, 5, 0],
          },
          {
            cost: 1045,
            reward: [150, 75, 25, 5, 0],
          },
          {
            cost: 1071,
            reward: [165, 85, 30, 10, 0],
          },
          {
            cost: 1098,
            reward: [180, 90, 30, 10, 0],
          },
          {
            cost: 1125,
            reward: [195, 100, 35, 10, 0],
          },
          {
            cost: 1154,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 1182,
            reward: [225, 115, 40, 10, 0],
          },
          {
            cost: 1212,
            reward: [240, 120, 40, 10, 0],
          },
          {
            cost: 1242,
            reward: [255, 130, 45, 10, 0],
          },
          {
            cost: 1273,
            reward: [270, 135, 45, 10, 0],
          },
          {
            cost: 1305,
            reward: [290, 145, 50, 15, 5],
          },
          {
            cost: 1338,
            reward: [305, 155, 50, 15, 5],
          },
          {
            cost: 1371,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1405,
            reward: [335, 170, 55, 15, 5],
          },
          {
            cost: 1440,
            reward: [355, 180, 60, 15, 5],
          },
          {
            cost: 1476,
            reward: [370, 185, 60, 15, 5],
          },
          {
            cost: 1513,
            reward: [385, 195, 65, 15, 5],
          },
          {
            cost: 1551,
            reward: [405, 205, 70, 20, 5],
          },
          {
            cost: 1590,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1630,
            reward: [435, 220, 75, 20, 5],
          },
          {
            cost: 1670,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1712,
            reward: [470, 235, 80, 20, 5],
          },
          {
            cost: 1755,
            reward: [490, 245, 80, 20, 5],
          },
          {
            cost: 1799,
            reward: [505, 255, 85, 20, 5],
          },
          {
            cost: 1844,
            reward: [525, 265, 90, 25, 5],
          },
          {
            cost: 1890,
            reward: [540, 270, 90, 25, 5],
          },
          {
            cost: 1937,
            reward: [560, 280, 95, 25, 5],
          },
          {
            cost: 1986,
            reward: [575, 290, 95, 25, 5],
          },
          {
            cost: 2035,
            reward: [595, 300, 100, 25, 5],
          },
          {
            cost: 2086,
            reward: [615, 310, 105, 25, 5],
          },
          {
            cost: 2138,
            reward: [630, 315, 105, 25, 5],
          },
          {
            cost: 2192,
            reward: [650, 325, 110, 30, 5],
          },
          {
            cost: 2246,
            reward: [670, 335, 110, 30, 5],
          },
          {
            cost: 2303,
            reward: [685, 345, 115, 30, 5],
          },
          {
            cost: 2360,
            reward: [705, 355, 120, 30, 5],
          },
          {
            cost: 2419,
            reward: [725, 365, 120, 30, 5],
          },
          {
            cost: 2480,
            reward: [740, 370, 125, 30, 5],
          },
          {
            cost: 2541,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 2605,
            reward: [780, 390, 130, 35, 5],
          },
          {
            cost: 2670,
            reward: [800, 400, 135, 35, 5],
          },
          {
            cost: 2737,
            reward: [815, 410, 135, 35, 5],
          },
          {
            cost: 2805,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 2875,
            reward: [855, 430, 145, 35, 5],
          },
          {
            cost: 2947,
            reward: [875, 440, 145, 35, 5],
          },
          {
            cost: 3021,
            reward: [895, 450, 150, 40, 10],
          },
          {
            cost: 3096,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 3174,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 3253,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 3334,
            reward: [970, 485, 160, 40, 10],
          },
          {
            cost: 3418,
            reward: [990, 495, 165, 40, 10],
          },
          {
            cost: 3503,
            reward: [1010, 505, 170, 45, 10],
          },
          {
            cost: 3591,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 3681,
            reward: [1050, 525, 175, 45, 10],
          },
          {
            cost: 3773,
            reward: [1070, 535, 180, 45, 10],
          },
          {
            cost: 3867,
            reward: [1090, 545, 180, 45, 10],
          },
          {
            cost: 3964,
            reward: [1110, 555, 185, 45, 10],
          },
          {
            cost: 4063,
            reward: [1130, 565, 190, 50, 10],
          },
          {
            cost: 4164,
            reward: [1150, 575, 190, 50, 10],
          },
          {
            cost: 4268,
            reward: [1170, 585, 195, 50, 10],
          },
          {
            cost: 4375,
            reward: [1190, 595, 200, 50, 10],
          },
          {
            cost: 4484,
            reward: [1210, 605, 200, 50, 10],
          },
          {
            cost: 4596,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 4711,
            reward: [1250, 625, 210, 55, 10],
          },
          {
            cost: 4829,
            reward: [1270, 635, 210, 55, 10],
          },
          {
            cost: 4950,
            reward: [1290, 645, 215, 55, 10],
          },
          {
            cost: 5074,
            reward: [1310, 655, 220, 55, 10],
          },
          {
            cost: 5200,
            reward: [1335, 670, 225, 55, 10],
          },
          {
            cost: 5330,
            reward: [1355, 680, 225, 55, 10],
          },
          {
            cost: 5464,
            reward: [1375, 690, 230, 60, 10],
          },
          {
            cost: 5600,
            reward: [1395, 700, 235, 60, 10],
          },
          {
            cost: 5740,
            reward: [1415, 710, 235, 60, 10],
          },
          {
            cost: 5884,
            reward: [1435, 720, 240, 60, 10],
          },
          {
            cost: 6031,
            reward: [1455, 730, 245, 60, 10],
          },
          {
            cost: 6182,
            reward: [1480, 740, 245, 60, 10],
          },
          {
            cost: 6336,
            reward: [1500, 750, 250, 65, 15],
          },
          {
            cost: 6494,
            reward: [1520, 760, 255, 65, 15],
          },
          {
            cost: 6657,
            reward: [1540, 770, 255, 65, 15],
          },
          {
            cost: 6823,
            reward: [1560, 780, 260, 65, 15],
          },
          {
            cost: 6994,
            reward: [1585, 795, 265, 65, 15],
          },
          {
            cost: 7169,
            reward: [1605, 805, 270, 70, 15],
          },
          {
            cost: 7348,
            reward: [1625, 815, 270, 70, 15],
          },
          {
            cost: 7531,
            reward: [1645, 825, 275, 70, 15],
          },
          {
            cost: 7720,
            reward: [1670, 835, 280, 70, 15],
          },
          {
            cost: 7913,
            reward: [1690, 845, 280, 70, 15],
          },
          {
            cost: 8111,
            reward: [1710, 855, 285, 70, 15],
          },
          {
            cost: 8313,
            reward: [1735, 870, 290, 75, 15],
          },
          {
            cost: 8521,
            reward: [1755, 880, 295, 75, 15],
          },
          {
            cost: 8734,
            reward: [1775, 890, 295, 75, 15],
          },
          {
            cost: 8952,
            reward: [1800, 900, 300, 75, 15],
          },
          {
            cost: 9176,
            reward: [1820, 910, 305, 75, 15],
          },
          {
            cost: 9406,
            reward: [1840, 920, 305, 75, 15],
          },
          {
            cost: 9641,
            reward: [1865, 935, 310, 80, 15],
          },
          {
            cost: 9882,
            reward: [1885, 945, 315, 80, 15],
          },
          {
            cost: 10129,
            reward: [1905, 955, 320, 80, 15],
          },
          {
            cost: 10382,
            reward: [1930, 965, 320, 80, 15],
          },
          {
            cost: 10642,
            reward: [1950, 975, 325, 80, 15],
          },
          {
            cost: 10908,
            reward: [1975, 990, 330, 85, 15],
          },
          {
            cost: 11180,
            reward: [1995, 1000, 335, 85, 15],
          },
          {
            cost: 11460,
            reward: [2015, 1010, 335, 85, 15],
          },
          {
            cost: 11746,
            reward: [2040, 1020, 340, 85, 15],
          },
          {
            cost: 12040,
            reward: [2060, 1030, 345, 85, 15],
          },
          {
            cost: 12341,
            reward: [2085, 1045, 350, 90, 20],
          },
          {
            cost: 12649,
            reward: [2105, 1055, 350, 90, 20],
          },
          {
            cost: 12966,
            reward: [2130, 1065, 355, 90, 20],
          },
          {
            cost: 13290,
            reward: [2150, 1075, 360, 90, 20],
          },
          {
            cost: 13622,
            reward: [2170, 1085, 360, 90, 20],
          },
          {
            cost: 13963,
            reward: [2195, 1100, 365, 90, 20],
          },
          {
            cost: 14312,
            reward: [2215, 1110, 370, 95, 20],
          },
          {
            cost: 14669,
            reward: [2240, 1120, 375, 95, 20],
          },
          {
            cost: 15036,
            reward: [2260, 1130, 375, 95, 20],
          },
          {
            cost: 15412,
            reward: [2285, 1145, 380, 95, 20],
          },
          {
            cost: 15797,
            reward: [2305, 1155, 385, 95, 20],
          },
          {
            cost: 16192,
            reward: [2330, 1165, 390, 100, 20],
          },
          {
            cost: 16597,
            reward: [2350, 1175, 390, 100, 20],
          },
          {
            cost: 17012,
            reward: [2375, 1190, 395, 100, 20],
          },
          {
            cost: 17437,
            reward: [2395, 1200, 400, 100, 20],
          },
          {
            cost: 17873,
            reward: [2420, 1210, 405, 100, 20],
          },
          {
            cost: 18320,
            reward: [2445, 1225, 410, 105, 20],
          },
          {
            cost: 18778,
            reward: [2465, 1235, 410, 105, 20],
          },
          {
            cost: 19247,
            reward: [2490, 1245, 415, 105, 20],
          },
          {
            cost: 19729,
            reward: [2510, 1255, 420, 105, 20],
          },
          {
            cost: 20222,
            reward: [2535, 1270, 425, 105, 20],
          },
          {
            cost: 20727,
            reward: [2555, 1280, 425, 105, 20],
          },
          {
            cost: 21245,
            reward: [2580, 1290, 430, 110, 20],
          },
          {
            cost: 21777,
            reward: [2605, 1305, 435, 110, 20],
          },
          {
            cost: 22321,
            reward: [2625, 1315, 440, 110, 20],
          },
          {
            cost: 22879,
            reward: [2650, 1325, 440, 110, 20],
          },
          {
            cost: 23451,
            reward: [2675, 1340, 445, 110, 20],
          },
          {
            cost: 24037,
            reward: [2695, 1350, 450, 115, 25],
          },
          {
            cost: 24638,
            reward: [2720, 1360, 455, 115, 25],
          },
          {
            cost: 25254,
            reward: [2740, 1370, 455, 115, 25],
          },
          {
            cost: 25885,
            reward: [2765, 1385, 460, 115, 25],
          },
          {
            cost: 26532,
            reward: [2790, 1395, 465, 115, 25],
          },
          {
            cost: 27196,
            reward: [2810, 1405, 470, 120, 25],
          },
          {
            cost: 27876,
            reward: [2835, 1420, 475, 120, 25],
          },
          {
            cost: 28573,
            reward: [2860, 1430, 475, 120, 25],
          },
          {
            cost: 29287,
            reward: [2880, 1440, 480, 120, 25],
          },
          {
            cost: 30019,
            reward: [2905, 1455, 485, 120, 25],
          },
          {
            cost: 30769,
            reward: [2930, 1465, 490, 125, 25],
          },
          {
            cost: 31539,
            reward: [2950, 1475, 490, 125, 25],
          },
          {
            cost: 32327,
            reward: [2975, 1490, 495, 125, 25],
          },
          {
            cost: 33135,
            reward: [3000, 1500, 500, 125, 25],
          },
          {
            cost: 33964,
            reward: [3025, 1515, 505, 125, 25],
          },
          {
            cost: 34813,
            reward: [3050, 1525, 510, 130, 25],
          },
          {
            cost: 35683,
            reward: [3070, 1535, 510, 130, 25],
          },
          {
            cost: 36575,
            reward: [3095, 1550, 515, 130, 25],
          },
          {
            cost: 37489,
            reward: [3120, 1560, 520, 130, 25],
          },
          {
            cost: 38427,
            reward: [3140, 1570, 525, 130, 25],
          },
          {
            cost: 39387,
            reward: [3165, 1585, 530, 135, 25],
          },
          {
            cost: 40372,
            reward: [3190, 1595, 530, 135, 25],
          },
          {
            cost: 41381,
            reward: [3215, 1610, 535, 135, 25],
          },
          {
            cost: 42416,
            reward: [3235, 1620, 540, 135, 25],
          },
          {
            cost: 43476,
            reward: [3260, 1630, 545, 135, 25],
          },
          {
            cost: 44563,
            reward: [3285, 1645, 550, 140, 30],
          },
          {
            cost: 45677,
            reward: [3310, 1655, 550, 140, 30],
          },
          {
            cost: 46819,
            reward: [3335, 1670, 555, 140, 30],
          },
          {
            cost: 47990,
            reward: [3355, 1680, 560, 140, 30],
          },
          {
            cost: 49189,
            reward: [3380, 1690, 565, 140, 30],
          },
          {
            cost: 50419,
            reward: [3405, 1705, 570, 145, 30],
          },
          {
            cost: 51679,
            reward: [3430, 1715, 570, 145, 30],
          },
          {
            cost: 52971,
            reward: [3455, 1730, 575, 145, 30],
          },
          {
            cost: 54296,
            reward: [3480, 1740, 580, 145, 30],
          },
          {
            cost: 55653,
            reward: [3500, 1750, 585, 145, 30],
          },
          {
            cost: 57044,
            reward: [3525, 1765, 590, 150, 30],
          },
          {
            cost: 58471,
            reward: [3550, 1775, 590, 150, 30],
          },
          {
            cost: 59932,
            reward: [3575, 1790, 595, 150, 30],
          },
          {
            cost: 61431,
            reward: [3600, 1800, 600, 150, 30],
          },
          {
            cost: 62966,
            reward: [3625, 1815, 605, 150, 30],
          },
          {
            cost: 64540,
            reward: [3650, 1825, 610, 155, 30],
          },
          {
            cost: 66154,
            reward: [3670, 1835, 610, 155, 30],
          },
          {
            cost: 67808,
            reward: [3695, 1850, 615, 155, 30],
          },
          {
            cost: 69503,
            reward: [3720, 1860, 620, 155, 30],
          },
          {
            cost: 71241,
            reward: [3745, 1875, 625, 155, 30],
          },
          {
            cost: 73022,
            reward: [3770, 1885, 630, 160, 30],
          },
        ],
      },
      Rain_Forest_Project: {
        levels: [
          {
            cost: 70,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 110,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 200,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 290,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 400,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 510,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 620,
            reward: [70, 35, 10, 5, 0],
          },
          {
            cost: 740,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 860,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 970,
            reward: [110, 55, 20, 5, 0],
          },
          {
            cost: 995,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 1020,
            reward: [135, 70, 25, 5, 0],
          },
          {
            cost: 1045,
            reward: [150, 75, 25, 5, 0],
          },
          {
            cost: 1071,
            reward: [165, 85, 30, 10, 0],
          },
          {
            cost: 1098,
            reward: [180, 90, 30, 10, 0],
          },
          {
            cost: 1125,
            reward: [195, 100, 35, 10, 0],
          },
          {
            cost: 1154,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 1182,
            reward: [225, 115, 40, 10, 0],
          },
          {
            cost: 1212,
            reward: [240, 120, 40, 10, 0],
          },
          {
            cost: 1242,
            reward: [255, 130, 45, 10, 0],
          },
          {
            cost: 1273,
            reward: [270, 135, 45, 10, 0],
          },
          {
            cost: 1305,
            reward: [290, 145, 50, 15, 5],
          },
          {
            cost: 1338,
            reward: [305, 155, 50, 15, 5],
          },
          {
            cost: 1371,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1405,
            reward: [335, 170, 55, 15, 5],
          },
          {
            cost: 1440,
            reward: [355, 180, 60, 15, 5],
          },
          {
            cost: 1476,
            reward: [370, 185, 60, 15, 5],
          },
          {
            cost: 1513,
            reward: [385, 195, 65, 15, 5],
          },
          {
            cost: 1551,
            reward: [405, 205, 70, 20, 5],
          },
          {
            cost: 1590,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1630,
            reward: [435, 220, 75, 20, 5],
          },
          {
            cost: 1670,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1712,
            reward: [470, 235, 80, 20, 5],
          },
          {
            cost: 1755,
            reward: [490, 245, 80, 20, 5],
          },
          {
            cost: 1799,
            reward: [505, 255, 85, 20, 5],
          },
          {
            cost: 1844,
            reward: [525, 265, 90, 25, 5],
          },
          {
            cost: 1890,
            reward: [540, 270, 90, 25, 5],
          },
          {
            cost: 1937,
            reward: [560, 280, 95, 25, 5],
          },
          {
            cost: 1986,
            reward: [575, 290, 95, 25, 5],
          },
          {
            cost: 2035,
            reward: [595, 300, 100, 25, 5],
          },
          {
            cost: 2086,
            reward: [615, 310, 105, 25, 5],
          },
          {
            cost: 2138,
            reward: [630, 315, 105, 25, 5],
          },
          {
            cost: 2192,
            reward: [650, 325, 110, 30, 5],
          },
          {
            cost: 2246,
            reward: [670, 335, 110, 30, 5],
          },
          {
            cost: 2303,
            reward: [685, 345, 115, 30, 5],
          },
          {
            cost: 2360,
            reward: [705, 355, 120, 30, 5],
          },
          {
            cost: 2419,
            reward: [725, 365, 120, 30, 5],
          },
          {
            cost: 2480,
            reward: [740, 370, 125, 30, 5],
          },
          {
            cost: 2541,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 2605,
            reward: [780, 390, 130, 35, 5],
          },
          {
            cost: 2670,
            reward: [800, 400, 135, 35, 5],
          },
          {
            cost: 2737,
            reward: [815, 410, 135, 35, 5],
          },
          {
            cost: 2805,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 2875,
            reward: [855, 430, 145, 35, 5],
          },
          {
            cost: 2947,
            reward: [875, 440, 145, 35, 5],
          },
          {
            cost: 3021,
            reward: [895, 450, 150, 40, 10],
          },
          {
            cost: 3096,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 3174,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 3253,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 3334,
            reward: [970, 485, 160, 40, 10],
          },
          {
            cost: 3418,
            reward: [990, 495, 165, 40, 10],
          },
          {
            cost: 3503,
            reward: [1010, 505, 170, 45, 10],
          },
          {
            cost: 3591,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 3681,
            reward: [1050, 525, 175, 45, 10],
          },
          {
            cost: 3773,
            reward: [1070, 535, 180, 45, 10],
          },
          {
            cost: 3867,
            reward: [1090, 545, 180, 45, 10],
          },
          {
            cost: 3964,
            reward: [1110, 555, 185, 45, 10],
          },
          {
            cost: 4063,
            reward: [1130, 565, 190, 50, 10],
          },
          {
            cost: 4164,
            reward: [1150, 575, 190, 50, 10],
          },
          {
            cost: 4268,
            reward: [1170, 585, 195, 50, 10],
          },
          {
            cost: 4375,
            reward: [1190, 595, 200, 50, 10],
          },
          {
            cost: 4484,
            reward: [1210, 605, 200, 50, 10],
          },
          {
            cost: 4596,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 4711,
            reward: [1250, 625, 210, 55, 10],
          },
          {
            cost: 4829,
            reward: [1270, 635, 210, 55, 10],
          },
          {
            cost: 4950,
            reward: [1290, 645, 215, 55, 10],
          },
          {
            cost: 5074,
            reward: [1310, 655, 220, 55, 10],
          },
          {
            cost: 5200,
            reward: [1335, 670, 225, 55, 10],
          },
          {
            cost: 5330,
            reward: [1355, 680, 225, 55, 10],
          },
          {
            cost: 5464,
            reward: [1375, 690, 230, 60, 10],
          },
          {
            cost: 5600,
            reward: [1395, 700, 235, 60, 10],
          },
          {
            cost: 5740,
            reward: [1415, 710, 235, 60, 10],
          },
          {
            cost: 5884,
            reward: [1435, 720, 240, 60, 10],
          },
          {
            cost: 6031,
            reward: [1455, 730, 245, 60, 10],
          },
          {
            cost: 6182,
            reward: [1480, 740, 245, 60, 10],
          },
          {
            cost: 6336,
            reward: [1500, 750, 250, 65, 15],
          },
          {
            cost: 6494,
            reward: [1520, 760, 255, 65, 15],
          },
          {
            cost: 6657,
            reward: [1540, 770, 255, 65, 15],
          },
          {
            cost: 6823,
            reward: [1560, 780, 260, 65, 15],
          },
          {
            cost: 6994,
            reward: [1585, 795, 265, 65, 15],
          },
          {
            cost: 7169,
            reward: [1605, 805, 270, 70, 15],
          },
          {
            cost: 7348,
            reward: [1625, 815, 270, 70, 15],
          },
          {
            cost: 7531,
            reward: [1645, 825, 275, 70, 15],
          },
          {
            cost: 7720,
            reward: [1670, 835, 280, 70, 15],
          },
          {
            cost: 7913,
            reward: [1690, 845, 280, 70, 15],
          },
          {
            cost: 8111,
            reward: [1710, 855, 285, 70, 15],
          },
          {
            cost: 8313,
            reward: [1735, 870, 290, 75, 15],
          },
          {
            cost: 8521,
            reward: [1755, 880, 295, 75, 15],
          },
          {
            cost: 8734,
            reward: [1775, 890, 295, 75, 15],
          },
          {
            cost: 8952,
            reward: [1800, 900, 300, 75, 15],
          },
          {
            cost: 9176,
            reward: [1820, 910, 305, 75, 15],
          },
          {
            cost: 9406,
            reward: [1840, 920, 305, 75, 15],
          },
          {
            cost: 9641,
            reward: [1865, 935, 310, 80, 15],
          },
          {
            cost: 9882,
            reward: [1885, 945, 315, 80, 15],
          },
          {
            cost: 10129,
            reward: [1905, 955, 320, 80, 15],
          },
          {
            cost: 10382,
            reward: [1930, 965, 320, 80, 15],
          },
          {
            cost: 10642,
            reward: [1950, 975, 325, 80, 15],
          },
          {
            cost: 10908,
            reward: [1975, 990, 330, 85, 15],
          },
          {
            cost: 11180,
            reward: [1995, 1000, 335, 85, 15],
          },
          {
            cost: 11460,
            reward: [2015, 1010, 335, 85, 15],
          },
          {
            cost: 11746,
            reward: [2040, 1020, 340, 85, 15],
          },
          {
            cost: 12040,
            reward: [2060, 1030, 345, 85, 15],
          },
          {
            cost: 12341,
            reward: [2085, 1045, 350, 90, 20],
          },
          {
            cost: 12649,
            reward: [2105, 1055, 350, 90, 20],
          },
          {
            cost: 12966,
            reward: [2130, 1065, 355, 90, 20],
          },
          {
            cost: 13290,
            reward: [2150, 1075, 360, 90, 20],
          },
          {
            cost: 13622,
            reward: [2170, 1085, 360, 90, 20],
          },
          {
            cost: 13963,
            reward: [2195, 1100, 365, 90, 20],
          },
          {
            cost: 14312,
            reward: [2215, 1110, 370, 95, 20],
          },
          {
            cost: 14669,
            reward: [2240, 1120, 375, 95, 20],
          },
          {
            cost: 15036,
            reward: [2260, 1130, 375, 95, 20],
          },
          {
            cost: 15412,
            reward: [2285, 1145, 380, 95, 20],
          },
          {
            cost: 15797,
            reward: [2305, 1155, 385, 95, 20],
          },
          {
            cost: 16192,
            reward: [2330, 1165, 390, 100, 20],
          },
          {
            cost: 16597,
            reward: [2350, 1175, 390, 100, 20],
          },
          {
            cost: 17012,
            reward: [2375, 1190, 395, 100, 20],
          },
          {
            cost: 17437,
            reward: [2395, 1200, 400, 100, 20],
          },
          {
            cost: 17873,
            reward: [2420, 1210, 405, 100, 20],
          },
          {
            cost: 18320,
            reward: [2445, 1225, 410, 105, 20],
          },
          {
            cost: 18778,
            reward: [2465, 1235, 410, 105, 20],
          },
          {
            cost: 19247,
            reward: [2490, 1245, 415, 105, 20],
          },
          {
            cost: 19729,
            reward: [2510, 1255, 420, 105, 20],
          },
          {
            cost: 20222,
            reward: [2535, 1270, 425, 105, 20],
          },
          {
            cost: 20727,
            reward: [2555, 1280, 425, 105, 20],
          },
          {
            cost: 21245,
            reward: [2580, 1290, 430, 110, 20],
          },
          {
            cost: 21777,
            reward: [2605, 1305, 435, 110, 20],
          },
          {
            cost: 22321,
            reward: [2625, 1315, 440, 110, 20],
          },
          {
            cost: 22879,
            reward: [2650, 1325, 440, 110, 20],
          },
          {
            cost: 23451,
            reward: [2675, 1340, 445, 110, 20],
          },
          {
            cost: 24037,
            reward: [2695, 1350, 450, 115, 25],
          },
          {
            cost: 24638,
            reward: [2720, 1360, 455, 115, 25],
          },
          {
            cost: 25254,
            reward: [2740, 1370, 455, 115, 25],
          },
          {
            cost: 25885,
            reward: [2765, 1385, 460, 115, 25],
          },
          {
            cost: 26532,
            reward: [2790, 1395, 465, 115, 25],
          },
          {
            cost: 27196,
            reward: [2810, 1405, 470, 120, 25],
          },
          {
            cost: 27876,
            reward: [2835, 1420, 475, 120, 25],
          },
          {
            cost: 28573,
            reward: [2860, 1430, 475, 120, 25],
          },
          {
            cost: 29287,
            reward: [2880, 1440, 480, 120, 25],
          },
          {
            cost: 30019,
            reward: [2905, 1455, 485, 120, 25],
          },
          {
            cost: 30769,
            reward: [2930, 1465, 490, 125, 25],
          },
          {
            cost: 31539,
            reward: [2950, 1475, 490, 125, 25],
          },
          {
            cost: 32327,
            reward: [2975, 1490, 495, 125, 25],
          },
          {
            cost: 33135,
            reward: [3000, 1500, 500, 125, 25],
          },
          {
            cost: 33964,
            reward: [3025, 1515, 505, 125, 25],
          },
          {
            cost: 34813,
            reward: [3050, 1525, 510, 130, 25],
          },
          {
            cost: 35683,
            reward: [3070, 1535, 510, 130, 25],
          },
          {
            cost: 36575,
            reward: [3095, 1550, 515, 130, 25],
          },
          {
            cost: 37489,
            reward: [3120, 1560, 520, 130, 25],
          },
          {
            cost: 38427,
            reward: [3140, 1570, 525, 130, 25],
          },
          {
            cost: 39387,
            reward: [3165, 1585, 530, 135, 25],
          },
          {
            cost: 40372,
            reward: [3190, 1595, 530, 135, 25],
          },
          {
            cost: 41381,
            reward: [3215, 1610, 535, 135, 25],
          },
          {
            cost: 42416,
            reward: [3235, 1620, 540, 135, 25],
          },
          {
            cost: 43476,
            reward: [3260, 1630, 545, 135, 25],
          },
          {
            cost: 44563,
            reward: [3285, 1645, 550, 140, 30],
          },
          {
            cost: 45677,
            reward: [3310, 1655, 550, 140, 30],
          },
          {
            cost: 46819,
            reward: [3335, 1670, 555, 140, 30],
          },
          {
            cost: 47990,
            reward: [3355, 1680, 560, 140, 30],
          },
          {
            cost: 49189,
            reward: [3380, 1690, 565, 140, 30],
          },
          {
            cost: 50419,
            reward: [3405, 1705, 570, 145, 30],
          },
          {
            cost: 51679,
            reward: [3430, 1715, 570, 145, 30],
          },
          {
            cost: 52971,
            reward: [3455, 1730, 575, 145, 30],
          },
          {
            cost: 54296,
            reward: [3480, 1740, 580, 145, 30],
          },
          {
            cost: 55653,
            reward: [3500, 1750, 585, 145, 30],
          },
          {
            cost: 57044,
            reward: [3525, 1765, 590, 150, 30],
          },
          {
            cost: 58471,
            reward: [3550, 1775, 590, 150, 30],
          },
          {
            cost: 59932,
            reward: [3575, 1790, 595, 150, 30],
          },
          {
            cost: 61431,
            reward: [3600, 1800, 600, 150, 30],
          },
          {
            cost: 62966,
            reward: [3625, 1815, 605, 150, 30],
          },
          {
            cost: 64540,
            reward: [3650, 1825, 610, 155, 30],
          },
          {
            cost: 66154,
            reward: [3670, 1835, 610, 155, 30],
          },
          {
            cost: 67808,
            reward: [3695, 1850, 615, 155, 30],
          },
          {
            cost: 69503,
            reward: [3720, 1860, 620, 155, 30],
          },
          {
            cost: 71241,
            reward: [3745, 1875, 625, 155, 30],
          },
          {
            cost: 73022,
            reward: [3770, 1885, 630, 160, 30],
          },
        ],
      },
      Gaea_Statue: {
        levels: [
          {
            cost: 80,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 120,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 230,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 340,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 450,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 580,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 710,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 850,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 980,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 1110,
            reward: [115, 60, 20, 5, 0],
          },
          {
            cost: 1138,
            reward: [130, 65, 20, 5, 0],
          },
          {
            cost: 1167,
            reward: [145, 75, 25, 5, 0],
          },
          {
            cost: 1196,
            reward: [160, 80, 25, 5, 0],
          },
          {
            cost: 1226,
            reward: [170, 85, 30, 10, 0],
          },
          {
            cost: 1256,
            reward: [190, 95, 30, 10, 0],
          },
          {
            cost: 1288,
            reward: [205, 105, 35, 10, 0],
          },
          {
            cost: 1320,
            reward: [220, 110, 35, 10, 0],
          },
          {
            cost: 1353,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 1387,
            reward: [250, 125, 40, 10, 0],
          },
          {
            cost: 1421,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1457,
            reward: [285, 145, 50, 15, 5],
          },
          {
            cost: 1493,
            reward: [300, 150, 50, 15, 5],
          },
          {
            cost: 1531,
            reward: [315, 160, 55, 15, 5],
          },
          {
            cost: 1569,
            reward: [335, 170, 55, 15, 5],
          },
          {
            cost: 1608,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1648,
            reward: [370, 185, 60, 15, 5],
          },
          {
            cost: 1689,
            reward: [385, 195, 65, 15, 5],
          },
          {
            cost: 1732,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1775,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1819,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1865,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1911,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 1959,
            reward: [490, 245, 80, 20, 5],
          },
          {
            cost: 2008,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 2058,
            reward: [525, 265, 90, 25, 5],
          },
          {
            cost: 2110,
            reward: [545, 275, 90, 25, 5],
          },
          {
            cost: 2163,
            reward: [565, 285, 95, 25, 5],
          },
          {
            cost: 2217,
            reward: [585, 295, 100, 25, 5],
          },
          {
            cost: 2272,
            reward: [600, 300, 100, 25, 5],
          },
          {
            cost: 2329,
            reward: [620, 310, 105, 25, 5],
          },
          {
            cost: 2387,
            reward: [640, 320, 105, 25, 5],
          },
          {
            cost: 2447,
            reward: [660, 330, 110, 30, 5],
          },
          {
            cost: 2508,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2571,
            reward: [695, 350, 115, 30, 5],
          },
          {
            cost: 2635,
            reward: [715, 360, 120, 30, 5],
          },
          {
            cost: 2701,
            reward: [735, 370, 125, 30, 5],
          },
          {
            cost: 2768,
            reward: [755, 380, 125, 30, 5],
          },
          {
            cost: 2837,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 2908,
            reward: [795, 400, 135, 35, 5],
          },
          {
            cost: 2981,
            reward: [815, 410, 135, 35, 5],
          },
          {
            cost: 3055,
            reward: [830, 415, 140, 35, 5],
          },
          {
            cost: 3132,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 3210,
            reward: [870, 435, 145, 35, 5],
          },
          {
            cost: 3290,
            reward: [895, 450, 150, 40, 10],
          },
          {
            cost: 3373,
            reward: [910, 455, 150, 40, 10],
          },
          {
            cost: 3457,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 3543,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 3632,
            reward: [970, 485, 160, 40, 10],
          },
          {
            cost: 3723,
            reward: [995, 500, 165, 40, 10],
          },
          {
            cost: 3816,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 3911,
            reward: [1035, 520, 175, 45, 10],
          },
          {
            cost: 4009,
            reward: [1055, 530, 175, 45, 10],
          },
          {
            cost: 4109,
            reward: [1075, 540, 180, 45, 10],
          },
          {
            cost: 4212,
            reward: [1095, 550, 185, 45, 10],
          },
          {
            cost: 4317,
            reward: [1115, 560, 185, 45, 10],
          },
          {
            cost: 4425,
            reward: [1135, 570, 190, 50, 10],
          },
          {
            cost: 4536,
            reward: [1155, 580, 195, 50, 10],
          },
          {
            cost: 4649,
            reward: [1180, 590, 195, 50, 10],
          },
          {
            cost: 4765,
            reward: [1200, 600, 200, 50, 10],
          },
          {
            cost: 4884,
            reward: [1220, 610, 205, 50, 10],
          },
          {
            cost: 5006,
            reward: [1240, 620, 205, 50, 10],
          },
          {
            cost: 5132,
            reward: [1260, 630, 210, 55, 10],
          },
          {
            cost: 5260,
            reward: [1285, 645, 215, 55, 10],
          },
          {
            cost: 5391,
            reward: [1305, 655, 220, 55, 10],
          },
          {
            cost: 5526,
            reward: [1325, 665, 220, 55, 10],
          },
          {
            cost: 5664,
            reward: [1350, 675, 225, 55, 10],
          },
          {
            cost: 5806,
            reward: [1370, 685, 230, 60, 10],
          },
          {
            cost: 5951,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 6100,
            reward: [1410, 705, 235, 60, 10],
          },
          {
            cost: 6252,
            reward: [1435, 720, 240, 60, 10],
          },
          {
            cost: 6408,
            reward: [1455, 730, 245, 60, 10],
          },
          {
            cost: 6569,
            reward: [1475, 740, 245, 60, 10],
          },
          {
            cost: 6733,
            reward: [1500, 750, 250, 65, 15],
          },
          {
            cost: 6901,
            reward: [1520, 760, 255, 65, 15],
          },
          {
            cost: 7074,
            reward: [1545, 775, 260, 65, 15],
          },
          {
            cost: 7250,
            reward: [1565, 785, 260, 65, 15],
          },
          {
            cost: 7432,
            reward: [1585, 795, 265, 65, 15],
          },
          {
            cost: 7618,
            reward: [1610, 805, 270, 70, 15],
          },
          {
            cost: 7808,
            reward: [1630, 815, 270, 70, 15],
          },
          {
            cost: 8003,
            reward: [1650, 825, 275, 70, 15],
          },
          {
            cost: 8203,
            reward: [1675, 840, 280, 70, 15],
          },
          {
            cost: 8408,
            reward: [1695, 850, 285, 70, 15],
          },
          {
            cost: 8618,
            reward: [1720, 860, 285, 70, 15],
          },
          {
            cost: 8834,
            reward: [1740, 870, 290, 75, 15],
          },
          {
            cost: 9055,
            reward: [1765, 885, 295, 75, 15],
          },
          {
            cost: 9281,
            reward: [1785, 895, 300, 75, 15],
          },
          {
            cost: 9513,
            reward: [1810, 905, 300, 75, 15],
          },
          {
            cost: 9751,
            reward: [1830, 915, 305, 75, 15],
          },
          {
            cost: 9995,
            reward: [1855, 930, 310, 80, 15],
          },
          {
            cost: 10245,
            reward: [1875, 940, 315, 80, 15],
          },
          {
            cost: 10501,
            reward: [1900, 950, 315, 80, 15],
          },
          {
            cost: 10763,
            reward: [1920, 960, 320, 80, 15],
          },
          {
            cost: 11032,
            reward: [1945, 975, 325, 80, 15],
          },
          {
            cost: 11308,
            reward: [1965, 985, 330, 85, 15],
          },
          {
            cost: 11591,
            reward: [1990, 995, 330, 85, 15],
          },
          {
            cost: 11880,
            reward: [2015, 1010, 335, 85, 15],
          },
          {
            cost: 12177,
            reward: [2035, 1020, 340, 85, 15],
          },
          {
            cost: 12482,
            reward: [2060, 1030, 345, 85, 15],
          },
          {
            cost: 12794,
            reward: [2080, 1040, 345, 85, 15],
          },
          {
            cost: 13114,
            reward: [2105, 1055, 350, 90, 20],
          },
          {
            cost: 13442,
            reward: [2125, 1065, 355, 90, 20],
          },
          {
            cost: 13778,
            reward: [2150, 1075, 360, 90, 20],
          },
          {
            cost: 14122,
            reward: [2175, 1090, 365, 90, 20],
          },
          {
            cost: 14475,
            reward: [2195, 1100, 365, 90, 20],
          },
          {
            cost: 14837,
            reward: [2220, 1110, 370, 95, 20],
          },
          {
            cost: 15208,
            reward: [2245, 1125, 375, 95, 20],
          },
          {
            cost: 15588,
            reward: [2265, 1135, 380, 95, 20],
          },
          {
            cost: 15978,
            reward: [2290, 1145, 380, 95, 20],
          },
          {
            cost: 16377,
            reward: [2315, 1160, 385, 95, 20],
          },
          {
            cost: 16787,
            reward: [2335, 1170, 390, 100, 20],
          },
          {
            cost: 17206,
            reward: [2360, 1180, 395, 100, 20],
          },
          {
            cost: 17636,
            reward: [2385, 1195, 400, 100, 20],
          },
          {
            cost: 18077,
            reward: [2405, 1205, 400, 100, 20],
          },
          {
            cost: 18529,
            reward: [2430, 1215, 405, 100, 20],
          },
          {
            cost: 18992,
            reward: [2455, 1230, 410, 105, 20],
          },
          {
            cost: 19467,
            reward: [2480, 1240, 415, 105, 20],
          },
          {
            cost: 19954,
            reward: [2500, 1250, 415, 105, 20],
          },
          {
            cost: 20453,
            reward: [2525, 1265, 420, 105, 20],
          },
          {
            cost: 20964,
            reward: [2550, 1275, 425, 105, 20],
          },
          {
            cost: 21488,
            reward: [2575, 1290, 430, 110, 20],
          },
          {
            cost: 22025,
            reward: [2595, 1300, 435, 110, 20],
          },
          {
            cost: 22576,
            reward: [2620, 1310, 435, 110, 20],
          },
          {
            cost: 23140,
            reward: [2645, 1325, 440, 110, 20],
          },
          {
            cost: 23719,
            reward: [2670, 1335, 445, 110, 20],
          },
          {
            cost: 24312,
            reward: [2690, 1345, 450, 115, 25],
          },
          {
            cost: 24919,
            reward: [2715, 1360, 455, 115, 25],
          },
          {
            cost: 25542,
            reward: [2740, 1370, 455, 115, 25],
          },
          {
            cost: 26181,
            reward: [2765, 1385, 460, 115, 25],
          },
          {
            cost: 26836,
            reward: [2790, 1395, 465, 115, 25],
          },
          {
            cost: 27506,
            reward: [2815, 1410, 470, 120, 25],
          },
          {
            cost: 28194,
            reward: [2835, 1420, 475, 120, 25],
          },
          {
            cost: 28899,
            reward: [2860, 1430, 475, 120, 25],
          },
          {
            cost: 29621,
            reward: [2885, 1445, 480, 120, 25],
          },
          {
            cost: 30362,
            reward: [2910, 1455, 485, 120, 25],
          },
          {
            cost: 31121,
            reward: [2935, 1470, 490, 125, 25],
          },
          {
            cost: 31899,
            reward: [2960, 1480, 495, 125, 25],
          },
          {
            cost: 32696,
            reward: [2985, 1495, 500, 125, 25],
          },
          {
            cost: 33514,
            reward: [3010, 1505, 500, 125, 25],
          },
          {
            cost: 34352,
            reward: [3030, 1515, 505, 125, 25],
          },
          {
            cost: 35210,
            reward: [3055, 1530, 510, 130, 25],
          },
          {
            cost: 36091,
            reward: [3080, 1540, 515, 130, 25],
          },
          {
            cost: 36993,
            reward: [3105, 1555, 520, 130, 25],
          },
          {
            cost: 37918,
            reward: [3130, 1565, 520, 130, 25],
          },
          {
            cost: 38866,
            reward: [3155, 1580, 525, 130, 25],
          },
          {
            cost: 39837,
            reward: [3180, 1590, 530, 135, 25],
          },
          {
            cost: 40833,
            reward: [3205, 1605, 535, 135, 25],
          },
          {
            cost: 41854,
            reward: [3230, 1615, 540, 135, 25],
          },
          {
            cost: 42900,
            reward: [3255, 1630, 545, 135, 25],
          },
          {
            cost: 43973,
            reward: [3280, 1640, 545, 135, 25],
          },
          {
            cost: 45072,
            reward: [3305, 1655, 550, 140, 30],
          },
          {
            cost: 46199,
            reward: [3330, 1665, 555, 140, 30],
          },
          {
            cost: 47354,
            reward: [3355, 1680, 560, 140, 30],
          },
          {
            cost: 48538,
            reward: [3380, 1690, 565, 140, 30],
          },
          {
            cost: 49751,
            reward: [3405, 1705, 570, 145, 30],
          },
          {
            cost: 50995,
            reward: [3430, 1715, 570, 145, 30],
          },
          {
            cost: 52270,
            reward: [3455, 1730, 575, 145, 30],
          },
          {
            cost: 53576,
            reward: [3480, 1740, 580, 145, 30],
          },
        ],
      },
      Arctic_Orangery: {
        levels: [
          {
            cost: 80,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 120,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 230,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 340,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 450,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 580,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 710,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 850,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 980,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 1110,
            reward: [115, 60, 20, 5, 0],
          },
          {
            cost: 1138,
            reward: [130, 65, 20, 5, 0],
          },
          {
            cost: 1167,
            reward: [145, 75, 25, 5, 0],
          },
          {
            cost: 1196,
            reward: [160, 80, 25, 5, 0],
          },
          {
            cost: 1226,
            reward: [170, 85, 30, 10, 0],
          },
          {
            cost: 1256,
            reward: [190, 95, 30, 10, 0],
          },
          {
            cost: 1288,
            reward: [205, 105, 35, 10, 0],
          },
          {
            cost: 1320,
            reward: [220, 110, 35, 10, 0],
          },
          {
            cost: 1353,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 1387,
            reward: [250, 125, 40, 10, 0],
          },
          {
            cost: 1421,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1457,
            reward: [285, 145, 50, 15, 5],
          },
          {
            cost: 1493,
            reward: [300, 150, 50, 15, 5],
          },
          {
            cost: 1531,
            reward: [315, 160, 55, 15, 5],
          },
          {
            cost: 1569,
            reward: [335, 170, 55, 15, 5],
          },
          {
            cost: 1608,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1648,
            reward: [370, 185, 60, 15, 5],
          },
          {
            cost: 1689,
            reward: [385, 195, 65, 15, 5],
          },
          {
            cost: 1732,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1775,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1819,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1865,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1911,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 1959,
            reward: [490, 245, 80, 20, 5],
          },
          {
            cost: 2008,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 2058,
            reward: [525, 265, 90, 25, 5],
          },
          {
            cost: 2110,
            reward: [545, 275, 90, 25, 5],
          },
          {
            cost: 2163,
            reward: [565, 285, 95, 25, 5],
          },
          {
            cost: 2217,
            reward: [585, 295, 100, 25, 5],
          },
          {
            cost: 2272,
            reward: [600, 300, 100, 25, 5],
          },
          {
            cost: 2329,
            reward: [620, 310, 105, 25, 5],
          },
          {
            cost: 2387,
            reward: [640, 320, 105, 25, 5],
          },
          {
            cost: 2447,
            reward: [660, 330, 110, 30, 5],
          },
          {
            cost: 2508,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2571,
            reward: [695, 350, 115, 30, 5],
          },
          {
            cost: 2635,
            reward: [715, 360, 120, 30, 5],
          },
          {
            cost: 2701,
            reward: [735, 370, 125, 30, 5],
          },
          {
            cost: 2768,
            reward: [755, 380, 125, 30, 5],
          },
          {
            cost: 2837,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 2908,
            reward: [795, 400, 135, 35, 5],
          },
          {
            cost: 2981,
            reward: [815, 410, 135, 35, 5],
          },
          {
            cost: 3055,
            reward: [830, 415, 140, 35, 5],
          },
          {
            cost: 3132,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 3210,
            reward: [870, 435, 145, 35, 5],
          },
          {
            cost: 3290,
            reward: [895, 450, 150, 40, 10],
          },
          {
            cost: 3373,
            reward: [910, 455, 150, 40, 10],
          },
          {
            cost: 3457,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 3543,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 3632,
            reward: [970, 485, 160, 40, 10],
          },
          {
            cost: 3723,
            reward: [995, 500, 165, 40, 10],
          },
          {
            cost: 3816,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 3911,
            reward: [1035, 520, 175, 45, 10],
          },
          {
            cost: 4009,
            reward: [1055, 530, 175, 45, 10],
          },
          {
            cost: 4109,
            reward: [1075, 540, 180, 45, 10],
          },
          {
            cost: 4212,
            reward: [1095, 550, 185, 45, 10],
          },
          {
            cost: 4317,
            reward: [1115, 560, 185, 45, 10],
          },
          {
            cost: 4425,
            reward: [1135, 570, 190, 50, 10],
          },
          {
            cost: 4536,
            reward: [1155, 580, 195, 50, 10],
          },
          {
            cost: 4649,
            reward: [1180, 590, 195, 50, 10],
          },
          {
            cost: 4765,
            reward: [1200, 600, 200, 50, 10],
          },
          {
            cost: 4884,
            reward: [1220, 610, 205, 50, 10],
          },
          {
            cost: 5006,
            reward: [1240, 620, 205, 50, 10],
          },
          {
            cost: 5132,
            reward: [1260, 630, 210, 55, 10],
          },
          {
            cost: 5260,
            reward: [1285, 645, 215, 55, 10],
          },
          {
            cost: 5391,
            reward: [1305, 655, 220, 55, 10],
          },
          {
            cost: 5526,
            reward: [1325, 665, 220, 55, 10],
          },
          {
            cost: 5664,
            reward: [1350, 675, 225, 55, 10],
          },
          {
            cost: 5806,
            reward: [1370, 685, 230, 60, 10],
          },
          {
            cost: 5951,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 6100,
            reward: [1410, 705, 235, 60, 10],
          },
          {
            cost: 6252,
            reward: [1435, 720, 240, 60, 10],
          },
          {
            cost: 6408,
            reward: [1455, 730, 245, 60, 10],
          },
          {
            cost: 6569,
            reward: [1475, 740, 245, 60, 10],
          },
          {
            cost: 6733,
            reward: [1500, 750, 250, 65, 15],
          },
          {
            cost: 6901,
            reward: [1520, 760, 255, 65, 15],
          },
          {
            cost: 7074,
            reward: [1545, 775, 260, 65, 15],
          },
          {
            cost: 7250,
            reward: [1565, 785, 260, 65, 15],
          },
          {
            cost: 7432,
            reward: [1585, 795, 265, 65, 15],
          },
          {
            cost: 7618,
            reward: [1610, 805, 270, 70, 15],
          },
          {
            cost: 7808,
            reward: [1630, 815, 270, 70, 15],
          },
          {
            cost: 8003,
            reward: [1650, 825, 275, 70, 15],
          },
          {
            cost: 8203,
            reward: [1675, 840, 280, 70, 15],
          },
          {
            cost: 8408,
            reward: [1695, 850, 285, 70, 15],
          },
          {
            cost: 8618,
            reward: [1720, 860, 285, 70, 15],
          },
          {
            cost: 8834,
            reward: [1740, 870, 290, 75, 15],
          },
          {
            cost: 9055,
            reward: [1765, 885, 295, 75, 15],
          },
          {
            cost: 9281,
            reward: [1785, 895, 300, 75, 15],
          },
          {
            cost: 9513,
            reward: [1810, 905, 300, 75, 15],
          },
          {
            cost: 9751,
            reward: [1830, 915, 305, 75, 15],
          },
          {
            cost: 9995,
            reward: [1855, 930, 310, 80, 15],
          },
          {
            cost: 10245,
            reward: [1875, 940, 315, 80, 15],
          },
          {
            cost: 10501,
            reward: [1900, 950, 315, 80, 15],
          },
          {
            cost: 10763,
            reward: [1920, 960, 320, 80, 15],
          },
          {
            cost: 11032,
            reward: [1945, 975, 325, 80, 15],
          },
          {
            cost: 11308,
            reward: [1965, 985, 330, 85, 15],
          },
          {
            cost: 11591,
            reward: [1990, 995, 330, 85, 15],
          },
          {
            cost: 11880,
            reward: [2015, 1010, 335, 85, 15],
          },
          {
            cost: 12177,
            reward: [2035, 1020, 340, 85, 15],
          },
          {
            cost: 12482,
            reward: [2060, 1030, 345, 85, 15],
          },
          {
            cost: 12794,
            reward: [2080, 1040, 345, 85, 15],
          },
          {
            cost: 13114,
            reward: [2105, 1055, 350, 90, 20],
          },
          {
            cost: 13442,
            reward: [2125, 1065, 355, 90, 20],
          },
          {
            cost: 13778,
            reward: [2150, 1075, 360, 90, 20],
          },
          {
            cost: 14122,
            reward: [2175, 1090, 365, 90, 20],
          },
          {
            cost: 14475,
            reward: [2195, 1100, 365, 90, 20],
          },
          {
            cost: 14837,
            reward: [2220, 1110, 370, 95, 20],
          },
          {
            cost: 15208,
            reward: [2245, 1125, 375, 95, 20],
          },
          {
            cost: 15588,
            reward: [2265, 1135, 380, 95, 20],
          },
          {
            cost: 15978,
            reward: [2290, 1145, 380, 95, 20],
          },
          {
            cost: 16377,
            reward: [2315, 1160, 385, 95, 20],
          },
          {
            cost: 16787,
            reward: [2335, 1170, 390, 100, 20],
          },
          {
            cost: 17206,
            reward: [2360, 1180, 395, 100, 20],
          },
          {
            cost: 17636,
            reward: [2385, 1195, 400, 100, 20],
          },
          {
            cost: 18077,
            reward: [2405, 1205, 400, 100, 20],
          },
          {
            cost: 18529,
            reward: [2430, 1215, 405, 100, 20],
          },
          {
            cost: 18992,
            reward: [2455, 1230, 410, 105, 20],
          },
          {
            cost: 19467,
            reward: [2480, 1240, 415, 105, 20],
          },
          {
            cost: 19954,
            reward: [2500, 1250, 415, 105, 20],
          },
          {
            cost: 20453,
            reward: [2525, 1265, 420, 105, 20],
          },
          {
            cost: 20964,
            reward: [2550, 1275, 425, 105, 20],
          },
          {
            cost: 21488,
            reward: [2575, 1290, 430, 110, 20],
          },
          {
            cost: 22025,
            reward: [2595, 1300, 435, 110, 20],
          },
          {
            cost: 22576,
            reward: [2620, 1310, 435, 110, 20],
          },
          {
            cost: 23140,
            reward: [2645, 1325, 440, 110, 20],
          },
          {
            cost: 23719,
            reward: [2670, 1335, 445, 110, 20],
          },
          {
            cost: 24312,
            reward: [2690, 1345, 450, 115, 25],
          },
          {
            cost: 24919,
            reward: [2715, 1360, 455, 115, 25],
          },
          {
            cost: 25542,
            reward: [2740, 1370, 455, 115, 25],
          },
          {
            cost: 26181,
            reward: [2765, 1385, 460, 115, 25],
          },
          {
            cost: 26836,
            reward: [2790, 1395, 465, 115, 25],
          },
          {
            cost: 27506,
            reward: [2815, 1410, 470, 120, 25],
          },
          {
            cost: 28194,
            reward: [2835, 1420, 475, 120, 25],
          },
          {
            cost: 28899,
            reward: [2860, 1430, 475, 120, 25],
          },
          {
            cost: 29621,
            reward: [2885, 1445, 480, 120, 25],
          },
          {
            cost: 30362,
            reward: [2910, 1455, 485, 120, 25],
          },
          {
            cost: 31121,
            reward: [2935, 1470, 490, 125, 25],
          },
          {
            cost: 31899,
            reward: [2960, 1480, 495, 125, 25],
          },
          {
            cost: 32696,
            reward: [2985, 1495, 500, 125, 25],
          },
          {
            cost: 33514,
            reward: [3010, 1505, 500, 125, 25],
          },
          {
            cost: 34352,
            reward: [3030, 1515, 505, 125, 25],
          },
          {
            cost: 35210,
            reward: [3055, 1530, 510, 130, 25],
          },
          {
            cost: 36091,
            reward: [3080, 1540, 515, 130, 25],
          },
          {
            cost: 36993,
            reward: [3105, 1555, 520, 130, 25],
          },
          {
            cost: 37918,
            reward: [3130, 1565, 520, 130, 25],
          },
          {
            cost: 38866,
            reward: [3155, 1580, 525, 130, 25],
          },
          {
            cost: 39837,
            reward: [3180, 1590, 530, 135, 25],
          },
          {
            cost: 40833,
            reward: [3205, 1605, 535, 135, 25],
          },
          {
            cost: 41854,
            reward: [3230, 1615, 540, 135, 25],
          },
          {
            cost: 42900,
            reward: [3255, 1630, 545, 135, 25],
          },
          {
            cost: 43973,
            reward: [3280, 1640, 545, 135, 25],
          },
          {
            cost: 45072,
            reward: [3305, 1655, 550, 140, 30],
          },
          {
            cost: 46199,
            reward: [3330, 1665, 555, 140, 30],
          },
          {
            cost: 47354,
            reward: [3355, 1680, 560, 140, 30],
          },
          {
            cost: 48538,
            reward: [3380, 1690, 565, 140, 30],
          },
          {
            cost: 49751,
            reward: [3405, 1705, 570, 145, 30],
          },
          {
            cost: 50995,
            reward: [3430, 1715, 570, 145, 30],
          },
          {
            cost: 52270,
            reward: [3455, 1730, 575, 145, 30],
          },
          {
            cost: 53576,
            reward: [3480, 1740, 580, 145, 30],
          },
        ],
      },
      Seed_Vault: {
        levels: [
          {
            cost: 80,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 120,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 230,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 340,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 450,
            reward: [45, 25, 10, 5, 0],
          },
          {
            cost: 580,
            reward: [60, 30, 10, 5, 0],
          },
          {
            cost: 710,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 850,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 980,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 1110,
            reward: [115, 60, 20, 5, 0],
          },
          {
            cost: 1138,
            reward: [130, 65, 20, 5, 0],
          },
          {
            cost: 1167,
            reward: [145, 75, 25, 5, 0],
          },
          {
            cost: 1196,
            reward: [160, 80, 25, 5, 0],
          },
          {
            cost: 1226,
            reward: [170, 85, 30, 10, 0],
          },
          {
            cost: 1256,
            reward: [190, 95, 30, 10, 0],
          },
          {
            cost: 1288,
            reward: [205, 105, 35, 10, 0],
          },
          {
            cost: 1320,
            reward: [220, 110, 35, 10, 0],
          },
          {
            cost: 1353,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 1387,
            reward: [250, 125, 40, 10, 0],
          },
          {
            cost: 1421,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1457,
            reward: [285, 145, 50, 15, 5],
          },
          {
            cost: 1493,
            reward: [300, 150, 50, 15, 5],
          },
          {
            cost: 1531,
            reward: [315, 160, 55, 15, 5],
          },
          {
            cost: 1569,
            reward: [335, 170, 55, 15, 5],
          },
          {
            cost: 1608,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1648,
            reward: [370, 185, 60, 15, 5],
          },
          {
            cost: 1689,
            reward: [385, 195, 65, 15, 5],
          },
          {
            cost: 1732,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1775,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1819,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1865,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1911,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 1959,
            reward: [490, 245, 80, 20, 5],
          },
          {
            cost: 2008,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 2058,
            reward: [525, 265, 90, 25, 5],
          },
          {
            cost: 2110,
            reward: [545, 275, 90, 25, 5],
          },
          {
            cost: 2163,
            reward: [565, 285, 95, 25, 5],
          },
          {
            cost: 2217,
            reward: [585, 295, 100, 25, 5],
          },
          {
            cost: 2272,
            reward: [600, 300, 100, 25, 5],
          },
          {
            cost: 2329,
            reward: [620, 310, 105, 25, 5],
          },
          {
            cost: 2387,
            reward: [640, 320, 105, 25, 5],
          },
          {
            cost: 2447,
            reward: [660, 330, 110, 30, 5],
          },
          {
            cost: 2508,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2571,
            reward: [695, 350, 115, 30, 5],
          },
          {
            cost: 2635,
            reward: [715, 360, 120, 30, 5],
          },
          {
            cost: 2701,
            reward: [735, 370, 125, 30, 5],
          },
          {
            cost: 2768,
            reward: [755, 380, 125, 30, 5],
          },
          {
            cost: 2837,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 2908,
            reward: [795, 400, 135, 35, 5],
          },
          {
            cost: 2981,
            reward: [815, 410, 135, 35, 5],
          },
          {
            cost: 3055,
            reward: [830, 415, 140, 35, 5],
          },
          {
            cost: 3132,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 3210,
            reward: [870, 435, 145, 35, 5],
          },
          {
            cost: 3290,
            reward: [895, 450, 150, 40, 10],
          },
          {
            cost: 3373,
            reward: [910, 455, 150, 40, 10],
          },
          {
            cost: 3457,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 3543,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 3632,
            reward: [970, 485, 160, 40, 10],
          },
          {
            cost: 3723,
            reward: [995, 500, 165, 40, 10],
          },
          {
            cost: 3816,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 3911,
            reward: [1035, 520, 175, 45, 10],
          },
          {
            cost: 4009,
            reward: [1055, 530, 175, 45, 10],
          },
          {
            cost: 4109,
            reward: [1075, 540, 180, 45, 10],
          },
          {
            cost: 4212,
            reward: [1095, 550, 185, 45, 10],
          },
          {
            cost: 4317,
            reward: [1115, 560, 185, 45, 10],
          },
          {
            cost: 4425,
            reward: [1135, 570, 190, 50, 10],
          },
          {
            cost: 4536,
            reward: [1155, 580, 195, 50, 10],
          },
          {
            cost: 4649,
            reward: [1180, 590, 195, 50, 10],
          },
          {
            cost: 4765,
            reward: [1200, 600, 200, 50, 10],
          },
          {
            cost: 4884,
            reward: [1220, 610, 205, 50, 10],
          },
          {
            cost: 5006,
            reward: [1240, 620, 205, 50, 10],
          },
          {
            cost: 5132,
            reward: [1260, 630, 210, 55, 10],
          },
          {
            cost: 5260,
            reward: [1285, 645, 215, 55, 10],
          },
          {
            cost: 5391,
            reward: [1305, 655, 220, 55, 10],
          },
          {
            cost: 5526,
            reward: [1325, 665, 220, 55, 10],
          },
          {
            cost: 5664,
            reward: [1350, 675, 225, 55, 10],
          },
          {
            cost: 5806,
            reward: [1370, 685, 230, 60, 10],
          },
          {
            cost: 5951,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 6100,
            reward: [1410, 705, 235, 60, 10],
          },
          {
            cost: 6252,
            reward: [1435, 720, 240, 60, 10],
          },
          {
            cost: 6408,
            reward: [1455, 730, 245, 60, 10],
          },
          {
            cost: 6569,
            reward: [1475, 740, 245, 60, 10],
          },
          {
            cost: 6733,
            reward: [1500, 750, 250, 65, 15],
          },
          {
            cost: 6901,
            reward: [1520, 760, 255, 65, 15],
          },
          {
            cost: 7074,
            reward: [1545, 775, 260, 65, 15],
          },
          {
            cost: 7250,
            reward: [1565, 785, 260, 65, 15],
          },
          {
            cost: 7432,
            reward: [1585, 795, 265, 65, 15],
          },
          {
            cost: 7618,
            reward: [1610, 805, 270, 70, 15],
          },
          {
            cost: 7808,
            reward: [1630, 815, 270, 70, 15],
          },
          {
            cost: 8003,
            reward: [1650, 825, 275, 70, 15],
          },
          {
            cost: 8203,
            reward: [1675, 840, 280, 70, 15],
          },
          {
            cost: 8408,
            reward: [1695, 850, 285, 70, 15],
          },
          {
            cost: 8618,
            reward: [1720, 860, 285, 70, 15],
          },
          {
            cost: 8834,
            reward: [1740, 870, 290, 75, 15],
          },
          {
            cost: 9055,
            reward: [1765, 885, 295, 75, 15],
          },
          {
            cost: 9281,
            reward: [1785, 895, 300, 75, 15],
          },
          {
            cost: 9513,
            reward: [1810, 905, 300, 75, 15],
          },
          {
            cost: 9751,
            reward: [1830, 915, 305, 75, 15],
          },
          {
            cost: 9995,
            reward: [1855, 930, 310, 80, 15],
          },
          {
            cost: 10245,
            reward: [1875, 940, 315, 80, 15],
          },
          {
            cost: 10501,
            reward: [1900, 950, 315, 80, 15],
          },
          {
            cost: 10763,
            reward: [1920, 960, 320, 80, 15],
          },
          {
            cost: 11032,
            reward: [1945, 975, 325, 80, 15],
          },
          {
            cost: 11308,
            reward: [1965, 985, 330, 85, 15],
          },
          {
            cost: 11591,
            reward: [1990, 995, 330, 85, 15],
          },
          {
            cost: 11880,
            reward: [2015, 1010, 335, 85, 15],
          },
          {
            cost: 12177,
            reward: [2035, 1020, 340, 85, 15],
          },
          {
            cost: 12482,
            reward: [2060, 1030, 345, 85, 15],
          },
          {
            cost: 12794,
            reward: [2080, 1040, 345, 85, 15],
          },
          {
            cost: 13114,
            reward: [2105, 1055, 350, 90, 20],
          },
          {
            cost: 13442,
            reward: [2125, 1065, 355, 90, 20],
          },
          {
            cost: 13778,
            reward: [2150, 1075, 360, 90, 20],
          },
          {
            cost: 14122,
            reward: [2175, 1090, 365, 90, 20],
          },
          {
            cost: 14475,
            reward: [2195, 1100, 365, 90, 20],
          },
          {
            cost: 14837,
            reward: [2220, 1110, 370, 95, 20],
          },
          {
            cost: 15208,
            reward: [2245, 1125, 375, 95, 20],
          },
          {
            cost: 15588,
            reward: [2265, 1135, 380, 95, 20],
          },
          {
            cost: 15978,
            reward: [2290, 1145, 380, 95, 20],
          },
          {
            cost: 16377,
            reward: [2315, 1160, 385, 95, 20],
          },
          {
            cost: 16787,
            reward: [2335, 1170, 390, 100, 20],
          },
          {
            cost: 17206,
            reward: [2360, 1180, 395, 100, 20],
          },
          {
            cost: 17636,
            reward: [2385, 1195, 400, 100, 20],
          },
          {
            cost: 18077,
            reward: [2405, 1205, 400, 100, 20],
          },
          {
            cost: 18529,
            reward: [2430, 1215, 405, 100, 20],
          },
          {
            cost: 18992,
            reward: [2455, 1230, 410, 105, 20],
          },
          {
            cost: 19467,
            reward: [2480, 1240, 415, 105, 20],
          },
          {
            cost: 19954,
            reward: [2500, 1250, 415, 105, 20],
          },
          {
            cost: 20453,
            reward: [2525, 1265, 420, 105, 20],
          },
          {
            cost: 20964,
            reward: [2550, 1275, 425, 105, 20],
          },
          {
            cost: 21488,
            reward: [2575, 1290, 430, 110, 20],
          },
          {
            cost: 22025,
            reward: [2595, 1300, 435, 110, 20],
          },
          {
            cost: 22576,
            reward: [2620, 1310, 435, 110, 20],
          },
          {
            cost: 23140,
            reward: [2645, 1325, 440, 110, 20],
          },
          {
            cost: 23719,
            reward: [2670, 1335, 445, 110, 20],
          },
          {
            cost: 24312,
            reward: [2690, 1345, 450, 115, 25],
          },
          {
            cost: 24919,
            reward: [2715, 1360, 455, 115, 25],
          },
          {
            cost: 25542,
            reward: [2740, 1370, 455, 115, 25],
          },
          {
            cost: 26181,
            reward: [2765, 1385, 460, 115, 25],
          },
          {
            cost: 26836,
            reward: [2790, 1395, 465, 115, 25],
          },
          {
            cost: 27506,
            reward: [2815, 1410, 470, 120, 25],
          },
          {
            cost: 28194,
            reward: [2835, 1420, 475, 120, 25],
          },
          {
            cost: 28899,
            reward: [2860, 1430, 475, 120, 25],
          },
          {
            cost: 29621,
            reward: [2885, 1445, 480, 120, 25],
          },
          {
            cost: 30362,
            reward: [2910, 1455, 485, 120, 25],
          },
          {
            cost: 31121,
            reward: [2935, 1470, 490, 125, 25],
          },
          {
            cost: 31899,
            reward: [2960, 1480, 495, 125, 25],
          },
          {
            cost: 32696,
            reward: [2985, 1495, 500, 125, 25],
          },
          {
            cost: 33514,
            reward: [3010, 1505, 500, 125, 25],
          },
          {
            cost: 34352,
            reward: [3030, 1515, 505, 125, 25],
          },
          {
            cost: 35210,
            reward: [3055, 1530, 510, 130, 25],
          },
          {
            cost: 36091,
            reward: [3080, 1540, 515, 130, 25],
          },
          {
            cost: 36993,
            reward: [3105, 1555, 520, 130, 25],
          },
          {
            cost: 37918,
            reward: [3130, 1565, 520, 130, 25],
          },
          {
            cost: 38866,
            reward: [3155, 1580, 525, 130, 25],
          },
          {
            cost: 39837,
            reward: [3180, 1590, 530, 135, 25],
          },
          {
            cost: 40833,
            reward: [3205, 1605, 535, 135, 25],
          },
          {
            cost: 41854,
            reward: [3230, 1615, 540, 135, 25],
          },
          {
            cost: 42900,
            reward: [3255, 1630, 545, 135, 25],
          },
          {
            cost: 43973,
            reward: [3280, 1640, 545, 135, 25],
          },
          {
            cost: 45072,
            reward: [3305, 1655, 550, 140, 30],
          },
          {
            cost: 46199,
            reward: [3330, 1665, 555, 140, 30],
          },
          {
            cost: 47354,
            reward: [3355, 1680, 560, 140, 30],
          },
          {
            cost: 48538,
            reward: [3380, 1690, 565, 140, 30],
          },
          {
            cost: 49751,
            reward: [3405, 1705, 570, 145, 30],
          },
          {
            cost: 50995,
            reward: [3430, 1715, 570, 145, 30],
          },
          {
            cost: 52270,
            reward: [3455, 1730, 575, 145, 30],
          },
          {
            cost: 53576,
            reward: [3480, 1740, 580, 145, 30],
          },
        ],
      },
      Atlantis_Museum: {
        levels: [
          {
            cost: 80,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 130,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 240,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 350,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 470,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 610,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 740,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 880,
            reward: [90, 45, 15, 5, 0],
          },
          {
            cost: 1020,
            reward: [105, 55, 20, 5, 0],
          },
          {
            cost: 1160,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 1189,
            reward: [135, 70, 25, 5, 0],
          },
          {
            cost: 1219,
            reward: [150, 75, 25, 5, 0],
          },
          {
            cost: 1250,
            reward: [165, 85, 30, 10, 0],
          },
          {
            cost: 1281,
            reward: [180, 90, 30, 10, 0],
          },
          {
            cost: 1313,
            reward: [195, 100, 35, 10, 0],
          },
          {
            cost: 1346,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 1379,
            reward: [230, 115, 40, 10, 0],
          },
          {
            cost: 1414,
            reward: [245, 125, 40, 10, 0],
          },
          {
            cost: 1449,
            reward: [260, 130, 45, 10, 0],
          },
          {
            cost: 1485,
            reward: [280, 140, 45, 10, 0],
          },
          {
            cost: 1523,
            reward: [295, 150, 50, 15, 5],
          },
          {
            cost: 1561,
            reward: [310, 155, 50, 15, 5],
          },
          {
            cost: 1600,
            reward: [330, 165, 55, 15, 5],
          },
          {
            cost: 1640,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1681,
            reward: [365, 185, 60, 15, 5],
          },
          {
            cost: 1723,
            reward: [385, 195, 65, 15, 5],
          },
          {
            cost: 1766,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1810,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1855,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1901,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1949,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 1998,
            reward: [495, 250, 85, 20, 5],
          },
          {
            cost: 2047,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 2099,
            reward: [530, 265, 90, 25, 5],
          },
          {
            cost: 2151,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2205,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2260,
            reward: [590, 295, 100, 25, 5],
          },
          {
            cost: 2316,
            reward: [605, 305, 100, 25, 5],
          },
          {
            cost: 2374,
            reward: [625, 315, 105, 25, 5],
          },
          {
            cost: 2434,
            reward: [645, 325, 110, 30, 5],
          },
          {
            cost: 2495,
            reward: [665, 335, 110, 30, 5],
          },
          {
            cost: 2557,
            reward: [685, 345, 115, 30, 5],
          },
          {
            cost: 2621,
            reward: [705, 355, 120, 30, 5],
          },
          {
            cost: 2686,
            reward: [725, 365, 120, 30, 5],
          },
          {
            cost: 2753,
            reward: [745, 375, 125, 30, 5],
          },
          {
            cost: 2822,
            reward: [765, 385, 130, 35, 5],
          },
          {
            cost: 2893,
            reward: [785, 395, 130, 35, 5],
          },
          {
            cost: 2965,
            reward: [805, 405, 135, 35, 5],
          },
          {
            cost: 3039,
            reward: [825, 415, 140, 35, 5],
          },
          {
            cost: 3115,
            reward: [845, 425, 140, 35, 5],
          },
          {
            cost: 3193,
            reward: [865, 435, 145, 35, 5],
          },
          {
            cost: 3273,
            reward: [890, 445, 150, 40, 10],
          },
          {
            cost: 3355,
            reward: [910, 455, 150, 40, 10],
          },
          {
            cost: 3439,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 3524,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 3613,
            reward: [970, 485, 160, 40, 10],
          },
          {
            cost: 3703,
            reward: [990, 495, 165, 40, 10],
          },
          {
            cost: 3795,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 3890,
            reward: [1035, 520, 175, 45, 10],
          },
          {
            cost: 3988,
            reward: [1055, 530, 175, 45, 10],
          },
          {
            cost: 4087,
            reward: [1075, 540, 180, 45, 10],
          },
          {
            cost: 4189,
            reward: [1100, 550, 185, 45, 10],
          },
          {
            cost: 4294,
            reward: [1120, 560, 185, 45, 10],
          },
          {
            cost: 4401,
            reward: [1140, 570, 190, 50, 10],
          },
          {
            cost: 4511,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 4624,
            reward: [1185, 595, 200, 50, 10],
          },
          {
            cost: 4740,
            reward: [1205, 605, 200, 50, 10],
          },
          {
            cost: 4858,
            reward: [1225, 615, 205, 50, 10],
          },
          {
            cost: 4980,
            reward: [1250, 625, 210, 55, 10],
          },
          {
            cost: 5104,
            reward: [1270, 635, 210, 55, 10],
          },
          {
            cost: 5232,
            reward: [1295, 650, 215, 55, 10],
          },
          {
            cost: 5363,
            reward: [1315, 660, 220, 55, 10],
          },
          {
            cost: 5497,
            reward: [1335, 670, 225, 55, 10],
          },
          {
            cost: 5634,
            reward: [1360, 680, 225, 55, 10],
          },
          {
            cost: 5775,
            reward: [1380, 690, 230, 60, 10],
          },
          {
            cost: 5919,
            reward: [1405, 705, 235, 60, 10],
          },
          {
            cost: 6067,
            reward: [1425, 715, 240, 60, 10],
          },
          {
            cost: 6219,
            reward: [1450, 725, 240, 60, 10],
          },
          {
            cost: 6374,
            reward: [1470, 735, 245, 60, 10],
          },
          {
            cost: 6534,
            reward: [1495, 750, 250, 65, 15],
          },
          {
            cost: 6697,
            reward: [1515, 760, 255, 65, 15],
          },
          {
            cost: 6864,
            reward: [1540, 770, 255, 65, 15],
          },
          {
            cost: 7036,
            reward: [1560, 780, 260, 65, 15],
          },
          {
            cost: 7212,
            reward: [1585, 795, 265, 65, 15],
          },
          {
            cost: 7392,
            reward: [1605, 805, 270, 70, 15],
          },
          {
            cost: 7577,
            reward: [1630, 815, 270, 70, 15],
          },
          {
            cost: 7766,
            reward: [1650, 825, 275, 70, 15],
          },
          {
            cost: 7961,
            reward: [1675, 840, 280, 70, 15],
          },
          {
            cost: 8160,
            reward: [1700, 850, 285, 70, 15],
          },
          {
            cost: 8364,
            reward: [1720, 860, 285, 70, 15],
          },
          {
            cost: 8573,
            reward: [1745, 875, 290, 75, 15],
          },
          {
            cost: 8787,
            reward: [1770, 885, 295, 75, 15],
          },
          {
            cost: 9007,
            reward: [1790, 895, 300, 75, 15],
          },
          {
            cost: 9232,
            reward: [1815, 910, 305, 75, 15],
          },
          {
            cost: 9463,
            reward: [1835, 920, 305, 75, 15],
          },
          {
            cost: 9699,
            reward: [1860, 930, 310, 80, 15],
          },
          {
            cost: 9942,
            reward: [1885, 945, 315, 80, 15],
          },
          {
            cost: 10190,
            reward: [1905, 955, 320, 80, 15],
          },
          {
            cost: 10445,
            reward: [1930, 965, 320, 80, 15],
          },
          {
            cost: 10706,
            reward: [1955, 980, 325, 80, 15],
          },
          {
            cost: 10974,
            reward: [1980, 990, 330, 85, 15],
          },
          {
            cost: 11248,
            reward: [2000, 1000, 335, 85, 15],
          },
          {
            cost: 11529,
            reward: [2025, 1015, 340, 85, 15],
          },
          {
            cost: 11817,
            reward: [2050, 1025, 340, 85, 15],
          },
          {
            cost: 12113,
            reward: [2070, 1035, 345, 85, 15],
          },
          {
            cost: 12416,
            reward: [2095, 1050, 350, 90, 20],
          },
          {
            cost: 12726,
            reward: [2120, 1060, 355, 90, 20],
          },
          {
            cost: 13044,
            reward: [2145, 1075, 360, 90, 20],
          },
          {
            cost: 13370,
            reward: [2170, 1085, 360, 90, 20],
          },
          {
            cost: 13704,
            reward: [2190, 1095, 365, 90, 20],
          },
          {
            cost: 14047,
            reward: [2215, 1110, 370, 95, 20],
          },
          {
            cost: 14398,
            reward: [2240, 1120, 375, 95, 20],
          },
          {
            cost: 14758,
            reward: [2265, 1135, 380, 95, 20],
          },
          {
            cost: 15127,
            reward: [2290, 1145, 380, 95, 20],
          },
          {
            cost: 15505,
            reward: [2310, 1155, 385, 95, 20],
          },
          {
            cost: 15893,
            reward: [2335, 1170, 390, 100, 20],
          },
          {
            cost: 16290,
            reward: [2360, 1180, 395, 100, 20],
          },
          {
            cost: 16697,
            reward: [2385, 1195, 400, 100, 20],
          },
          {
            cost: 17115,
            reward: [2410, 1205, 400, 100, 20],
          },
          {
            cost: 17543,
            reward: [2435, 1220, 405, 100, 20],
          },
          {
            cost: 17981,
            reward: [2460, 1230, 410, 105, 20],
          },
          {
            cost: 18431,
            reward: [2485, 1245, 415, 105, 20],
          },
          {
            cost: 18891,
            reward: [2505, 1255, 420, 105, 20],
          },
          {
            cost: 19364,
            reward: [2530, 1265, 420, 105, 20],
          },
        ],
      },
      The_Kraken: {
        levels: [
          {
            cost: 80,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 130,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 240,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 350,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 470,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 610,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 740,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 880,
            reward: [90, 45, 15, 5, 0],
          },
          {
            cost: 1020,
            reward: [105, 55, 20, 5, 0],
          },
          {
            cost: 1160,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 1189,
            reward: [135, 70, 25, 5, 0],
          },
          {
            cost: 1219,
            reward: [150, 75, 25, 5, 0],
          },
          {
            cost: 1250,
            reward: [165, 85, 30, 10, 0],
          },
          {
            cost: 1281,
            reward: [180, 90, 30, 10, 0],
          },
          {
            cost: 1313,
            reward: [195, 100, 35, 10, 0],
          },
          {
            cost: 1346,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 1379,
            reward: [230, 115, 40, 10, 0],
          },
          {
            cost: 1414,
            reward: [245, 125, 40, 10, 0],
          },
          {
            cost: 1449,
            reward: [260, 130, 45, 10, 0],
          },
          {
            cost: 1485,
            reward: [280, 140, 45, 10, 0],
          },
          {
            cost: 1523,
            reward: [295, 150, 50, 15, 5],
          },
          {
            cost: 1561,
            reward: [310, 155, 50, 15, 5],
          },
          {
            cost: 1600,
            reward: [330, 165, 55, 15, 5],
          },
          {
            cost: 1640,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1681,
            reward: [365, 185, 60, 15, 5],
          },
          {
            cost: 1723,
            reward: [385, 195, 65, 15, 5],
          },
          {
            cost: 1766,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1810,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1855,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1901,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1949,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 1998,
            reward: [495, 250, 85, 20, 5],
          },
          {
            cost: 2047,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 2099,
            reward: [530, 265, 90, 25, 5],
          },
          {
            cost: 2151,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2205,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2260,
            reward: [590, 295, 100, 25, 5],
          },
          {
            cost: 2316,
            reward: [605, 305, 100, 25, 5],
          },
          {
            cost: 2374,
            reward: [625, 315, 105, 25, 5],
          },
          {
            cost: 2434,
            reward: [645, 325, 110, 30, 5],
          },
          {
            cost: 2495,
            reward: [665, 335, 110, 30, 5],
          },
          {
            cost: 2557,
            reward: [685, 345, 115, 30, 5],
          },
          {
            cost: 2621,
            reward: [705, 355, 120, 30, 5],
          },
          {
            cost: 2686,
            reward: [725, 365, 120, 30, 5],
          },
          {
            cost: 2753,
            reward: [745, 375, 125, 30, 5],
          },
          {
            cost: 2822,
            reward: [765, 385, 130, 35, 5],
          },
          {
            cost: 2893,
            reward: [785, 395, 130, 35, 5],
          },
          {
            cost: 2965,
            reward: [805, 405, 135, 35, 5],
          },
          {
            cost: 3039,
            reward: [825, 415, 140, 35, 5],
          },
          {
            cost: 3115,
            reward: [845, 425, 140, 35, 5],
          },
          {
            cost: 3193,
            reward: [865, 435, 145, 35, 5],
          },
          {
            cost: 3273,
            reward: [890, 445, 150, 40, 10],
          },
          {
            cost: 3355,
            reward: [910, 455, 150, 40, 10],
          },
          {
            cost: 3439,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 3524,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 3613,
            reward: [970, 485, 160, 40, 10],
          },
          {
            cost: 3703,
            reward: [990, 495, 165, 40, 10],
          },
          {
            cost: 3795,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 3890,
            reward: [1035, 520, 175, 45, 10],
          },
          {
            cost: 3988,
            reward: [1055, 530, 175, 45, 10],
          },
          {
            cost: 4087,
            reward: [1075, 540, 180, 45, 10],
          },
          {
            cost: 4189,
            reward: [1100, 550, 185, 45, 10],
          },
          {
            cost: 4294,
            reward: [1120, 560, 185, 45, 10],
          },
          {
            cost: 4401,
            reward: [1140, 570, 190, 50, 10],
          },
          {
            cost: 4511,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 4624,
            reward: [1185, 595, 200, 50, 10],
          },
          {
            cost: 4740,
            reward: [1205, 605, 200, 50, 10],
          },
          {
            cost: 4858,
            reward: [1225, 615, 205, 50, 10],
          },
          {
            cost: 4980,
            reward: [1250, 625, 210, 55, 10],
          },
          {
            cost: 5104,
            reward: [1270, 635, 210, 55, 10],
          },
          {
            cost: 5232,
            reward: [1295, 650, 215, 55, 10],
          },
          {
            cost: 5363,
            reward: [1315, 660, 220, 55, 10],
          },
          {
            cost: 5497,
            reward: [1335, 670, 225, 55, 10],
          },
          {
            cost: 5634,
            reward: [1360, 680, 225, 55, 10],
          },
          {
            cost: 5775,
            reward: [1380, 690, 230, 60, 10],
          },
          {
            cost: 5919,
            reward: [1405, 705, 235, 60, 10],
          },
          {
            cost: 6067,
            reward: [1425, 715, 240, 60, 10],
          },
          {
            cost: 6219,
            reward: [1450, 725, 240, 60, 10],
          },
          {
            cost: 6374,
            reward: [1470, 735, 245, 60, 10],
          },
          {
            cost: 6534,
            reward: [1495, 750, 250, 65, 15],
          },
          {
            cost: 6697,
            reward: [1515, 760, 255, 65, 15],
          },
          {
            cost: 6864,
            reward: [1540, 770, 255, 65, 15],
          },
          {
            cost: 7036,
            reward: [1560, 780, 260, 65, 15],
          },
          {
            cost: 7212,
            reward: [1585, 795, 265, 65, 15],
          },
          {
            cost: 7392,
            reward: [1605, 805, 270, 70, 15],
          },
          {
            cost: 7577,
            reward: [1630, 815, 270, 70, 15],
          },
          {
            cost: 7766,
            reward: [1650, 825, 275, 70, 15],
          },
          {
            cost: 7961,
            reward: [1675, 840, 280, 70, 15],
          },
          {
            cost: 8160,
            reward: [1700, 850, 285, 70, 15],
          },
          {
            cost: 8364,
            reward: [1720, 860, 285, 70, 15],
          },
          {
            cost: 8573,
            reward: [1745, 875, 290, 75, 15],
          },
          {
            cost: 8787,
            reward: [1770, 885, 295, 75, 15],
          },
          {
            cost: 9007,
            reward: [1790, 895, 300, 75, 15],
          },
          {
            cost: 9232,
            reward: [1815, 910, 305, 75, 15],
          },
          {
            cost: 9463,
            reward: [1835, 920, 305, 75, 15],
          },
          {
            cost: 9699,
            reward: [1860, 930, 310, 80, 15],
          },
          {
            cost: 9942,
            reward: [1885, 945, 315, 80, 15],
          },
          {
            cost: 10190,
            reward: [1905, 955, 320, 80, 15],
          },
          {
            cost: 10445,
            reward: [1930, 965, 320, 80, 15],
          },
          {
            cost: 10706,
            reward: [1955, 980, 325, 80, 15],
          },
          {
            cost: 10974,
            reward: [1980, 990, 330, 85, 15],
          },
          {
            cost: 11248,
            reward: [2000, 1000, 335, 85, 15],
          },
          {
            cost: 11529,
            reward: [2025, 1015, 340, 85, 15],
          },
          {
            cost: 11817,
            reward: [2050, 1025, 340, 85, 15],
          },
          {
            cost: 12113,
            reward: [2070, 1035, 345, 85, 15],
          },
          {
            cost: 12416,
            reward: [2095, 1050, 350, 90, 20],
          },
          {
            cost: 12726,
            reward: [2120, 1060, 355, 90, 20],
          },
          {
            cost: 13044,
            reward: [2145, 1075, 360, 90, 20],
          },
          {
            cost: 13370,
            reward: [2170, 1085, 360, 90, 20],
          },
          {
            cost: 13704,
            reward: [2190, 1095, 365, 90, 20],
          },
          {
            cost: 14047,
            reward: [2215, 1110, 370, 95, 20],
          },
          {
            cost: 14398,
            reward: [2240, 1120, 375, 95, 20],
          },
          {
            cost: 14758,
            reward: [2265, 1135, 380, 95, 20],
          },
          {
            cost: 15127,
            reward: [2290, 1145, 380, 95, 20],
          },
          {
            cost: 15505,
            reward: [2310, 1155, 385, 95, 20],
          },
          {
            cost: 15893,
            reward: [2335, 1170, 390, 100, 20],
          },
          {
            cost: 16290,
            reward: [2360, 1180, 395, 100, 20],
          },
          {
            cost: 16697,
            reward: [2385, 1195, 400, 100, 20],
          },
          {
            cost: 17115,
            reward: [2410, 1205, 400, 100, 20],
          },
          {
            cost: 17543,
            reward: [2435, 1220, 405, 100, 20],
          },
          {
            cost: 17981,
            reward: [2460, 1230, 410, 105, 20],
          },
          {
            cost: 18431,
            reward: [2485, 1245, 415, 105, 20],
          },
          {
            cost: 18891,
            reward: [2505, 1255, 420, 105, 20],
          },
          {
            cost: 19364,
            reward: [2530, 1265, 420, 105, 20],
          },
        ],
      },
      The_Blue_Galaxy: {
        levels: [
          {
            cost: 80,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 130,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 240,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 350,
            reward: [35, 20, 5, 0, 0],
          },
          {
            cost: 470,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 610,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 740,
            reward: [75, 40, 15, 5, 0],
          },
          {
            cost: 880,
            reward: [90, 45, 15, 5, 0],
          },
          {
            cost: 1020,
            reward: [105, 55, 20, 5, 0],
          },
          {
            cost: 1160,
            reward: [120, 60, 20, 5, 0],
          },
          {
            cost: 1189,
            reward: [135, 70, 25, 5, 0],
          },
          {
            cost: 1219,
            reward: [150, 75, 25, 5, 0],
          },
          {
            cost: 1250,
            reward: [165, 85, 30, 10, 0],
          },
          {
            cost: 1281,
            reward: [180, 90, 30, 10, 0],
          },
          {
            cost: 1313,
            reward: [195, 100, 35, 10, 0],
          },
          {
            cost: 1346,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 1379,
            reward: [230, 115, 40, 10, 0],
          },
          {
            cost: 1414,
            reward: [245, 125, 40, 10, 0],
          },
          {
            cost: 1449,
            reward: [260, 130, 45, 10, 0],
          },
          {
            cost: 1485,
            reward: [280, 140, 45, 10, 0],
          },
          {
            cost: 1523,
            reward: [295, 150, 50, 15, 5],
          },
          {
            cost: 1561,
            reward: [310, 155, 50, 15, 5],
          },
          {
            cost: 1600,
            reward: [330, 165, 55, 15, 5],
          },
          {
            cost: 1640,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1681,
            reward: [365, 185, 60, 15, 5],
          },
          {
            cost: 1723,
            reward: [385, 195, 65, 15, 5],
          },
          {
            cost: 1766,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1810,
            reward: [420, 210, 70, 20, 5],
          },
          {
            cost: 1855,
            reward: [440, 220, 75, 20, 5],
          },
          {
            cost: 1901,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1949,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 1998,
            reward: [495, 250, 85, 20, 5],
          },
          {
            cost: 2047,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 2099,
            reward: [530, 265, 90, 25, 5],
          },
          {
            cost: 2151,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2205,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2260,
            reward: [590, 295, 100, 25, 5],
          },
          {
            cost: 2316,
            reward: [605, 305, 100, 25, 5],
          },
          {
            cost: 2374,
            reward: [625, 315, 105, 25, 5],
          },
          {
            cost: 2434,
            reward: [645, 325, 110, 30, 5],
          },
          {
            cost: 2495,
            reward: [665, 335, 110, 30, 5],
          },
          {
            cost: 2557,
            reward: [685, 345, 115, 30, 5],
          },
          {
            cost: 2621,
            reward: [705, 355, 120, 30, 5],
          },
          {
            cost: 2686,
            reward: [725, 365, 120, 30, 5],
          },
          {
            cost: 2753,
            reward: [745, 375, 125, 30, 5],
          },
          {
            cost: 2822,
            reward: [765, 385, 130, 35, 5],
          },
          {
            cost: 2893,
            reward: [785, 395, 130, 35, 5],
          },
          {
            cost: 2965,
            reward: [805, 405, 135, 35, 5],
          },
          {
            cost: 3039,
            reward: [825, 415, 140, 35, 5],
          },
          {
            cost: 3115,
            reward: [845, 425, 140, 35, 5],
          },
          {
            cost: 3193,
            reward: [865, 435, 145, 35, 5],
          },
          {
            cost: 3273,
            reward: [890, 445, 150, 40, 10],
          },
          {
            cost: 3355,
            reward: [910, 455, 150, 40, 10],
          },
          {
            cost: 3439,
            reward: [930, 465, 155, 40, 10],
          },
          {
            cost: 3524,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 3613,
            reward: [970, 485, 160, 40, 10],
          },
          {
            cost: 3703,
            reward: [990, 495, 165, 40, 10],
          },
          {
            cost: 3795,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 3890,
            reward: [1035, 520, 175, 45, 10],
          },
          {
            cost: 3988,
            reward: [1055, 530, 175, 45, 10],
          },
          {
            cost: 4087,
            reward: [1075, 540, 180, 45, 10],
          },
          {
            cost: 4189,
            reward: [1100, 550, 185, 45, 10],
          },
          {
            cost: 4294,
            reward: [1120, 560, 185, 45, 10],
          },
          {
            cost: 4401,
            reward: [1140, 570, 190, 50, 10],
          },
          {
            cost: 4511,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 4624,
            reward: [1185, 595, 200, 50, 10],
          },
          {
            cost: 4740,
            reward: [1205, 605, 200, 50, 10],
          },
          {
            cost: 4858,
            reward: [1225, 615, 205, 50, 10],
          },
          {
            cost: 4980,
            reward: [1250, 625, 210, 55, 10],
          },
          {
            cost: 5104,
            reward: [1270, 635, 210, 55, 10],
          },
          {
            cost: 5232,
            reward: [1295, 650, 215, 55, 10],
          },
          {
            cost: 5363,
            reward: [1315, 660, 220, 55, 10],
          },
          {
            cost: 5497,
            reward: [1335, 670, 225, 55, 10],
          },
          {
            cost: 5634,
            reward: [1360, 680, 225, 55, 10],
          },
          {
            cost: 5775,
            reward: [1380, 690, 230, 60, 10],
          },
          {
            cost: 5919,
            reward: [1405, 705, 235, 60, 10],
          },
          {
            cost: 6067,
            reward: [1425, 715, 240, 60, 10],
          },
          {
            cost: 6219,
            reward: [1450, 725, 240, 60, 10],
          },
          {
            cost: 6374,
            reward: [1470, 735, 245, 60, 10],
          },
          {
            cost: 6534,
            reward: [1495, 750, 250, 65, 15],
          },
          {
            cost: 6697,
            reward: [1515, 760, 255, 65, 15],
          },
          {
            cost: 6864,
            reward: [1540, 770, 255, 65, 15],
          },
          {
            cost: 7036,
            reward: [1560, 780, 260, 65, 15],
          },
          {
            cost: 7212,
            reward: [1585, 795, 265, 65, 15],
          },
          {
            cost: 7392,
            reward: [1605, 805, 270, 70, 15],
          },
          {
            cost: 7577,
            reward: [1630, 815, 270, 70, 15],
          },
          {
            cost: 7766,
            reward: [1650, 825, 275, 70, 15],
          },
          {
            cost: 7961,
            reward: [1675, 840, 280, 70, 15],
          },
          {
            cost: 8160,
            reward: [1700, 850, 285, 70, 15],
          },
          {
            cost: 8364,
            reward: [1720, 860, 285, 70, 15],
          },
          {
            cost: 8573,
            reward: [1745, 875, 290, 75, 15],
          },
          {
            cost: 8787,
            reward: [1770, 885, 295, 75, 15],
          },
          {
            cost: 9007,
            reward: [1790, 895, 300, 75, 15],
          },
          {
            cost: 9232,
            reward: [1815, 910, 305, 75, 15],
          },
          {
            cost: 9463,
            reward: [1835, 920, 305, 75, 15],
          },
          {
            cost: 9699,
            reward: [1860, 930, 310, 80, 15],
          },
          {
            cost: 9942,
            reward: [1885, 945, 315, 80, 15],
          },
          {
            cost: 10190,
            reward: [1905, 955, 320, 80, 15],
          },
          {
            cost: 10445,
            reward: [1930, 965, 320, 80, 15],
          },
          {
            cost: 10706,
            reward: [1955, 980, 325, 80, 15],
          },
          {
            cost: 10974,
            reward: [1980, 990, 330, 85, 15],
          },
          {
            cost: 11248,
            reward: [2000, 1000, 335, 85, 15],
          },
          {
            cost: 11529,
            reward: [2025, 1015, 340, 85, 15],
          },
          {
            cost: 11817,
            reward: [2050, 1025, 340, 85, 15],
          },
          {
            cost: 12113,
            reward: [2070, 1035, 345, 85, 15],
          },
          {
            cost: 12416,
            reward: [2095, 1050, 350, 90, 20],
          },
          {
            cost: 12726,
            reward: [2120, 1060, 355, 90, 20],
          },
          {
            cost: 13044,
            reward: [2145, 1075, 360, 90, 20],
          },
          {
            cost: 13370,
            reward: [2170, 1085, 360, 90, 20],
          },
          {
            cost: 13704,
            reward: [2190, 1095, 365, 90, 20],
          },
          {
            cost: 14047,
            reward: [2215, 1110, 370, 95, 20],
          },
          {
            cost: 14398,
            reward: [2240, 1120, 375, 95, 20],
          },
          {
            cost: 14758,
            reward: [2265, 1135, 380, 95, 20],
          },
          {
            cost: 15127,
            reward: [2290, 1145, 380, 95, 20],
          },
          {
            cost: 15505,
            reward: [2310, 1155, 385, 95, 20],
          },
          {
            cost: 15893,
            reward: [2335, 1170, 390, 100, 20],
          },
          {
            cost: 16290,
            reward: [2360, 1180, 395, 100, 20],
          },
          {
            cost: 16697,
            reward: [2385, 1195, 400, 100, 20],
          },
          {
            cost: 17115,
            reward: [2410, 1205, 400, 100, 20],
          },
          {
            cost: 17543,
            reward: [2435, 1220, 405, 100, 20],
          },
          {
            cost: 17981,
            reward: [2460, 1230, 410, 105, 20],
          },
          {
            cost: 18431,
            reward: [2485, 1245, 415, 105, 20],
          },
          {
            cost: 18891,
            reward: [2505, 1255, 420, 105, 20],
          },
          {
            cost: 19364,
            reward: [2530, 1265, 420, 105, 20],
          },
        ],
      },
      Terracotta_Army: {
        levels: [
          {
            cost: 90,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 130,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 240,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 370,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 490,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 630,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 770,
            reward: [80, 40, 15, 5, 0],
          },
          {
            cost: 910,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 1060,
            reward: [110, 55, 20, 5, 0],
          },
          {
            cost: 1210,
            reward: [125, 65, 20, 5, 0],
          },
          {
            cost: 1241,
            reward: [140, 70, 25, 5, 0],
          },
          {
            cost: 1272,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 1304,
            reward: [170, 85, 30, 10, 0],
          },
          {
            cost: 1336,
            reward: [185, 95, 30, 10, 0],
          },
          {
            cost: 1370,
            reward: [205, 105, 35, 10, 0],
          },
          {
            cost: 1404,
            reward: [220, 110, 35, 10, 0],
          },
          {
            cost: 1439,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 1475,
            reward: [255, 130, 45, 10, 0],
          },
          {
            cost: 1512,
            reward: [270, 135, 45, 10, 0],
          },
          {
            cost: 1549,
            reward: [290, 145, 50, 15, 5],
          },
          {
            cost: 1588,
            reward: [305, 155, 50, 15, 5],
          },
          {
            cost: 1628,
            reward: [325, 165, 55, 15, 5],
          },
          {
            cost: 1668,
            reward: [345, 175, 60, 15, 5],
          },
          {
            cost: 1710,
            reward: [360, 180, 60, 15, 5],
          },
          {
            cost: 1753,
            reward: [380, 190, 65, 15, 5],
          },
          {
            cost: 1797,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1842,
            reward: [415, 210, 70, 20, 5],
          },
          {
            cost: 1888,
            reward: [435, 220, 75, 20, 5],
          },
          {
            cost: 1935,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1983,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 2033,
            reward: [495, 250, 85, 20, 5],
          },
          {
            cost: 2084,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 2136,
            reward: [530, 265, 90, 25, 5],
          },
          {
            cost: 2189,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2244,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2300,
            reward: [590, 295, 100, 25, 5],
          },
          {
            cost: 2357,
            reward: [610, 305, 100, 25, 5],
          },
          {
            cost: 2416,
            reward: [630, 315, 105, 25, 5],
          },
          {
            cost: 2477,
            reward: [650, 325, 110, 30, 5],
          },
          {
            cost: 2539,
            reward: [670, 335, 110, 30, 5],
          },
          {
            cost: 2602,
            reward: [690, 345, 115, 30, 5],
          },
          {
            cost: 2667,
            reward: [715, 360, 120, 30, 5],
          },
          {
            cost: 2734,
            reward: [735, 370, 125, 30, 5],
          },
          {
            cost: 2802,
            reward: [755, 380, 125, 30, 5],
          },
          {
            cost: 2872,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 2944,
            reward: [795, 400, 135, 35, 5],
          },
          {
            cost: 3017,
            reward: [815, 410, 135, 35, 5],
          },
          {
            cost: 3093,
            reward: [840, 420, 140, 35, 5],
          },
          {
            cost: 3170,
            reward: [860, 430, 145, 35, 5],
          },
          {
            cost: 3249,
            reward: [880, 440, 145, 35, 5],
          },
          {
            cost: 3331,
            reward: [900, 450, 150, 40, 10],
          },
          {
            cost: 3414,
            reward: [925, 465, 155, 40, 10],
          },
          {
            cost: 3499,
            reward: [945, 475, 160, 40, 10],
          },
          {
            cost: 3587,
            reward: [965, 485, 160, 40, 10],
          },
          {
            cost: 3676,
            reward: [990, 495, 165, 40, 10],
          },
          {
            cost: 3768,
            reward: [1010, 505, 170, 45, 10],
          },
          {
            cost: 3862,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 3959,
            reward: [1055, 530, 175, 45, 10],
          },
          {
            cost: 4058,
            reward: [1075, 540, 180, 45, 10],
          },
          {
            cost: 4159,
            reward: [1095, 550, 185, 45, 10],
          },
          {
            cost: 4263,
            reward: [1120, 560, 185, 45, 10],
          },
          {
            cost: 4370,
            reward: [1140, 570, 190, 50, 10],
          },
          {
            cost: 4479,
            reward: [1165, 585, 195, 50, 10],
          },
          {
            cost: 4591,
            reward: [1185, 595, 200, 50, 10],
          },
          {
            cost: 4706,
            reward: [1210, 605, 200, 50, 10],
          },
          {
            cost: 4824,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 4944,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 5068,
            reward: [1275, 640, 215, 55, 10],
          },
          {
            cost: 5194,
            reward: [1300, 650, 215, 55, 10],
          },
          {
            cost: 5324,
            reward: [1320, 660, 220, 55, 10],
          },
          {
            cost: 5457,
            reward: [1345, 675, 225, 55, 10],
          },
          {
            cost: 5594,
            reward: [1365, 685, 230, 60, 10],
          },
          {
            cost: 5734,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 5877,
            reward: [1415, 710, 235, 60, 10],
          },
          {
            cost: 6024,
            reward: [1435, 720, 240, 60, 10],
          },
          {
            cost: 6174,
            reward: [1460, 730, 245, 60, 10],
          },
          {
            cost: 6329,
            reward: [1485, 745, 250, 65, 15],
          },
          {
            cost: 6487,
            reward: [1505, 755, 250, 65, 15],
          },
          {
            cost: 6649,
            reward: [1530, 765, 255, 65, 15],
          },
          {
            cost: 6815,
            reward: [1555, 780, 260, 65, 15],
          },
          {
            cost: 6986,
            reward: [1575, 790, 265, 65, 15],
          },
          {
            cost: 7160,
            reward: [1600, 800, 265, 65, 15],
          },
          {
            cost: 7339,
            reward: [1625, 815, 270, 70, 15],
          },
          {
            cost: 7523,
            reward: [1645, 825, 275, 70, 15],
          },
          {
            cost: 7711,
            reward: [1670, 835, 280, 70, 15],
          },
          {
            cost: 7904,
            reward: [1695, 850, 285, 70, 15],
          },
          {
            cost: 8101,
            reward: [1720, 860, 285, 70, 15],
          },
          {
            cost: 8304,
            reward: [1745, 875, 290, 75, 15],
          },
          {
            cost: 8511,
            reward: [1765, 885, 295, 75, 15],
          },
          {
            cost: 8724,
            reward: [1790, 895, 300, 75, 15],
          },
          {
            cost: 8942,
            reward: [1815, 910, 305, 75, 15],
          },
          {
            cost: 9166,
            reward: [1840, 920, 305, 75, 15],
          },
          {
            cost: 9395,
            reward: [1860, 930, 310, 80, 15],
          },
          {
            cost: 9630,
            reward: [1885, 945, 315, 80, 15],
          },
          {
            cost: 9870,
            reward: [1910, 955, 320, 80, 15],
          },
          {
            cost: 10117,
            reward: [1935, 970, 325, 80, 15],
          },
          {
            cost: 10370,
            reward: [1960, 980, 325, 80, 15],
          },
          {
            cost: 10629,
            reward: [1985, 995, 330, 85, 15],
          },
          {
            cost: 10895,
            reward: [2010, 1005, 335, 85, 15],
          },
          {
            cost: 11167,
            reward: [2030, 1015, 340, 85, 15],
          },
          {
            cost: 11447,
            reward: [2055, 1030, 345, 85, 15],
          },
          {
            cost: 11733,
            reward: [2080, 1040, 345, 85, 15],
          },
          {
            cost: 12026,
            reward: [2105, 1055, 350, 90, 20],
          },
          {
            cost: 12327,
            reward: [2130, 1065, 355, 90, 20],
          },
          {
            cost: 12635,
            reward: [2155, 1080, 360, 90, 20],
          },
          {
            cost: 12951,
            reward: [2180, 1090, 365, 90, 20],
          },
          {
            cost: 13274,
            reward: [2205, 1105, 370, 95, 20],
          },
          {
            cost: 13606,
            reward: [2230, 1115, 370, 95, 20],
          },
          {
            cost: 13946,
            reward: [2255, 1130, 375, 95, 20],
          },
          {
            cost: 14295,
            reward: [2280, 1140, 380, 95, 20],
          },
          {
            cost: 14652,
            reward: [2305, 1155, 385, 95, 20],
          },
          {
            cost: 15019,
            reward: [2330, 1165, 390, 100, 20],
          },
          {
            cost: 15394,
            reward: [2355, 1180, 395, 100, 20],
          },
          {
            cost: 15779,
            reward: [2380, 1190, 395, 100, 20],
          },
          {
            cost: 16174,
            reward: [2405, 1205, 400, 100, 20],
          },
          {
            cost: 16578,
            reward: [2430, 1215, 405, 100, 20],
          },
          {
            cost: 16992,
            reward: [2455, 1230, 410, 105, 20],
          },
          {
            cost: 17417,
            reward: [2480, 1240, 415, 105, 20],
          },
          {
            cost: 17852,
            reward: [2505, 1255, 420, 105, 20],
          },
          {
            cost: 18299,
            reward: [2530, 1265, 420, 105, 20],
          },
          {
            cost: 18756,
            reward: [2555, 1280, 425, 105, 20],
          },
          {
            cost: 19225,
            reward: [2580, 1290, 430, 110, 20],
          },
          {
            cost: 19706,
            reward: [2610, 1305, 435, 110, 20],
          },
          {
            cost: 20198,
            reward: [2635, 1320, 440, 110, 20],
          },
          {
            cost: 20703,
            reward: [2660, 1330, 445, 110, 20],
          },
          {
            cost: 21221,
            reward: [2685, 1345, 450, 115, 25],
          },
          {
            cost: 21751,
            reward: [2710, 1355, 450, 115, 25],
          },
          {
            cost: 22295,
            reward: [2735, 1370, 455, 115, 25],
          },
          {
            cost: 22853,
            reward: [2760, 1380, 460, 115, 25],
          },
          {
            cost: 23424,
            reward: [2785, 1395, 465, 115, 25],
          },
          {
            cost: 24009,
            reward: [2815, 1410, 470, 120, 25],
          },
          {
            cost: 24610,
            reward: [2840, 1420, 475, 120, 25],
          },
          {
            cost: 25225,
            reward: [2865, 1435, 480, 120, 25],
          },
          {
            cost: 25856,
            reward: [2890, 1445, 480, 120, 25],
          },
          {
            cost: 26502,
            reward: [2915, 1460, 485, 120, 25],
          },
          {
            cost: 27164,
            reward: [2945, 1475, 490, 125, 25],
          },
          {
            cost: 27844,
            reward: [2970, 1485, 495, 125, 25],
          },
          {
            cost: 28540,
            reward: [2995, 1500, 500, 125, 25],
          },
          {
            cost: 29253,
            reward: [3020, 1510, 505, 125, 25],
          },
          {
            cost: 29984,
            reward: [3050, 1525, 510, 130, 25],
          },
        ],
      },
      Himeji_Castle: {
        levels: [
          {
            cost: 90,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 130,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 240,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 370,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 490,
            reward: [50, 25, 10, 5, 0],
          },
          {
            cost: 630,
            reward: [65, 35, 10, 5, 0],
          },
          {
            cost: 770,
            reward: [80, 40, 15, 5, 0],
          },
          {
            cost: 910,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 1060,
            reward: [110, 55, 20, 5, 0],
          },
          {
            cost: 1210,
            reward: [125, 65, 20, 5, 0],
          },
          {
            cost: 1241,
            reward: [140, 70, 25, 5, 0],
          },
          {
            cost: 1272,
            reward: [155, 80, 25, 5, 0],
          },
          {
            cost: 1304,
            reward: [170, 85, 30, 10, 0],
          },
          {
            cost: 1336,
            reward: [185, 95, 30, 10, 0],
          },
          {
            cost: 1370,
            reward: [205, 105, 35, 10, 0],
          },
          {
            cost: 1404,
            reward: [220, 110, 35, 10, 0],
          },
          {
            cost: 1439,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 1475,
            reward: [255, 130, 45, 10, 0],
          },
          {
            cost: 1512,
            reward: [270, 135, 45, 10, 0],
          },
          {
            cost: 1549,
            reward: [290, 145, 50, 15, 5],
          },
          {
            cost: 1588,
            reward: [305, 155, 50, 15, 5],
          },
          {
            cost: 1628,
            reward: [325, 165, 55, 15, 5],
          },
          {
            cost: 1668,
            reward: [345, 175, 60, 15, 5],
          },
          {
            cost: 1710,
            reward: [360, 180, 60, 15, 5],
          },
          {
            cost: 1753,
            reward: [380, 190, 65, 15, 5],
          },
          {
            cost: 1797,
            reward: [400, 200, 65, 15, 5],
          },
          {
            cost: 1842,
            reward: [415, 210, 70, 20, 5],
          },
          {
            cost: 1888,
            reward: [435, 220, 75, 20, 5],
          },
          {
            cost: 1935,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1983,
            reward: [475, 240, 80, 20, 5],
          },
          {
            cost: 2033,
            reward: [495, 250, 85, 20, 5],
          },
          {
            cost: 2084,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 2136,
            reward: [530, 265, 90, 25, 5],
          },
          {
            cost: 2189,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2244,
            reward: [570, 285, 95, 25, 5],
          },
          {
            cost: 2300,
            reward: [590, 295, 100, 25, 5],
          },
          {
            cost: 2357,
            reward: [610, 305, 100, 25, 5],
          },
          {
            cost: 2416,
            reward: [630, 315, 105, 25, 5],
          },
          {
            cost: 2477,
            reward: [650, 325, 110, 30, 5],
          },
          {
            cost: 2539,
            reward: [670, 335, 110, 30, 5],
          },
          {
            cost: 2602,
            reward: [690, 345, 115, 30, 5],
          },
          {
            cost: 2667,
            reward: [715, 360, 120, 30, 5],
          },
          {
            cost: 2734,
            reward: [735, 370, 125, 30, 5],
          },
          {
            cost: 2802,
            reward: [755, 380, 125, 30, 5],
          },
          {
            cost: 2872,
            reward: [775, 390, 130, 35, 5],
          },
          {
            cost: 2944,
            reward: [795, 400, 135, 35, 5],
          },
          {
            cost: 3017,
            reward: [815, 410, 135, 35, 5],
          },
          {
            cost: 3093,
            reward: [840, 420, 140, 35, 5],
          },
          {
            cost: 3170,
            reward: [860, 430, 145, 35, 5],
          },
          {
            cost: 3249,
            reward: [880, 440, 145, 35, 5],
          },
          {
            cost: 3331,
            reward: [900, 450, 150, 40, 10],
          },
          {
            cost: 3414,
            reward: [925, 465, 155, 40, 10],
          },
          {
            cost: 3499,
            reward: [945, 475, 160, 40, 10],
          },
          {
            cost: 3587,
            reward: [965, 485, 160, 40, 10],
          },
          {
            cost: 3676,
            reward: [990, 495, 165, 40, 10],
          },
          {
            cost: 3768,
            reward: [1010, 505, 170, 45, 10],
          },
          {
            cost: 3862,
            reward: [1030, 515, 170, 45, 10],
          },
          {
            cost: 3959,
            reward: [1055, 530, 175, 45, 10],
          },
          {
            cost: 4058,
            reward: [1075, 540, 180, 45, 10],
          },
          {
            cost: 4159,
            reward: [1095, 550, 185, 45, 10],
          },
          {
            cost: 4263,
            reward: [1120, 560, 185, 45, 10],
          },
          {
            cost: 4370,
            reward: [1140, 570, 190, 50, 10],
          },
          {
            cost: 4479,
            reward: [1165, 585, 195, 50, 10],
          },
          {
            cost: 4591,
            reward: [1185, 595, 200, 50, 10],
          },
          {
            cost: 4706,
            reward: [1210, 605, 200, 50, 10],
          },
          {
            cost: 4824,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 4944,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 5068,
            reward: [1275, 640, 215, 55, 10],
          },
          {
            cost: 5194,
            reward: [1300, 650, 215, 55, 10],
          },
          {
            cost: 5324,
            reward: [1320, 660, 220, 55, 10],
          },
          {
            cost: 5457,
            reward: [1345, 675, 225, 55, 10],
          },
          {
            cost: 5594,
            reward: [1365, 685, 230, 60, 10],
          },
          {
            cost: 5734,
            reward: [1390, 695, 230, 60, 10],
          },
          {
            cost: 5877,
            reward: [1415, 710, 235, 60, 10],
          },
          {
            cost: 6024,
            reward: [1435, 720, 240, 60, 10],
          },
          {
            cost: 6174,
            reward: [1460, 730, 245, 60, 10],
          },
          {
            cost: 6329,
            reward: [1485, 745, 250, 65, 15],
          },
          {
            cost: 6487,
            reward: [1505, 755, 250, 65, 15],
          },
          {
            cost: 6649,
            reward: [1530, 765, 255, 65, 15],
          },
          {
            cost: 6815,
            reward: [1555, 780, 260, 65, 15],
          },
          {
            cost: 6986,
            reward: [1575, 790, 265, 65, 15],
          },
          {
            cost: 7160,
            reward: [1600, 800, 265, 65, 15],
          },
          {
            cost: 7339,
            reward: [1625, 815, 270, 70, 15],
          },
          {
            cost: 7523,
            reward: [1645, 825, 275, 70, 15],
          },
          {
            cost: 7711,
            reward: [1670, 835, 280, 70, 15],
          },
          {
            cost: 7904,
            reward: [1695, 850, 285, 70, 15],
          },
          {
            cost: 8101,
            reward: [1720, 860, 285, 70, 15],
          },
          {
            cost: 8304,
            reward: [1745, 875, 290, 75, 15],
          },
          {
            cost: 8511,
            reward: [1765, 885, 295, 75, 15],
          },
          {
            cost: 8724,
            reward: [1790, 895, 300, 75, 15],
          },
          {
            cost: 8942,
            reward: [1815, 910, 305, 75, 15],
          },
          {
            cost: 9166,
            reward: [1840, 920, 305, 75, 15],
          },
          {
            cost: 9395,
            reward: [1860, 930, 310, 80, 15],
          },
          {
            cost: 9630,
            reward: [1885, 945, 315, 80, 15],
          },
          {
            cost: 9870,
            reward: [1910, 955, 320, 80, 15],
          },
          {
            cost: 10117,
            reward: [1935, 970, 325, 80, 15],
          },
          {
            cost: 10370,
            reward: [1960, 980, 325, 80, 15],
          },
          {
            cost: 10629,
            reward: [1985, 995, 330, 85, 15],
          },
          {
            cost: 10895,
            reward: [2010, 1005, 335, 85, 15],
          },
          {
            cost: 11167,
            reward: [2030, 1015, 340, 85, 15],
          },
          {
            cost: 11447,
            reward: [2055, 1030, 345, 85, 15],
          },
          {
            cost: 11733,
            reward: [2080, 1040, 345, 85, 15],
          },
          {
            cost: 12026,
            reward: [2105, 1055, 350, 90, 20],
          },
          {
            cost: 12327,
            reward: [2130, 1065, 355, 90, 20],
          },
          {
            cost: 12635,
            reward: [2155, 1080, 360, 90, 20],
          },
          {
            cost: 12951,
            reward: [2180, 1090, 365, 90, 20],
          },
          {
            cost: 13274,
            reward: [2205, 1105, 370, 95, 20],
          },
          {
            cost: 13606,
            reward: [2230, 1115, 370, 95, 20],
          },
          {
            cost: 13946,
            reward: [2255, 1130, 375, 95, 20],
          },
          {
            cost: 14295,
            reward: [2280, 1140, 380, 95, 20],
          },
          {
            cost: 14652,
            reward: [2305, 1155, 385, 95, 20],
          },
          {
            cost: 15019,
            reward: [2330, 1165, 390, 100, 20],
          },
          {
            cost: 15394,
            reward: [2355, 1180, 395, 100, 20],
          },
          {
            cost: 15779,
            reward: [2380, 1190, 395, 100, 20],
          },
          {
            cost: 16174,
            reward: [2405, 1205, 400, 100, 20],
          },
          {
            cost: 16578,
            reward: [2430, 1215, 405, 100, 20],
          },
          {
            cost: 16992,
            reward: [2455, 1230, 410, 105, 20],
          },
          {
            cost: 17417,
            reward: [2480, 1240, 415, 105, 20],
          },
          {
            cost: 17852,
            reward: [2505, 1255, 420, 105, 20],
          },
          {
            cost: 18299,
            reward: [2530, 1265, 420, 105, 20],
          },
          {
            cost: 18756,
            reward: [2555, 1280, 425, 105, 20],
          },
          {
            cost: 19225,
            reward: [2580, 1290, 430, 110, 20],
          },
          {
            cost: 19706,
            reward: [2610, 1305, 435, 110, 20],
          },
          {
            cost: 20198,
            reward: [2635, 1320, 440, 110, 20],
          },
          {
            cost: 20703,
            reward: [2660, 1330, 445, 110, 20],
          },
          {
            cost: 21221,
            reward: [2685, 1345, 450, 115, 25],
          },
          {
            cost: 21751,
            reward: [2710, 1355, 450, 115, 25],
          },
          {
            cost: 22295,
            reward: [2735, 1370, 455, 115, 25],
          },
          {
            cost: 22853,
            reward: [2760, 1380, 460, 115, 25],
          },
          {
            cost: 23424,
            reward: [2785, 1395, 465, 115, 25],
          },
          {
            cost: 24009,
            reward: [2815, 1410, 470, 120, 25],
          },
          {
            cost: 24610,
            reward: [2840, 1420, 475, 120, 25],
          },
          {
            cost: 25225,
            reward: [2865, 1435, 480, 120, 25],
          },
          {
            cost: 25856,
            reward: [2890, 1445, 480, 120, 25],
          },
          {
            cost: 26502,
            reward: [2915, 1460, 485, 120, 25],
          },
          {
            cost: 27164,
            reward: [2945, 1475, 490, 125, 25],
          },
          {
            cost: 27844,
            reward: [2970, 1485, 495, 125, 25],
          },
          {
            cost: 28540,
            reward: [2995, 1500, 500, 125, 25],
          },
          {
            cost: 29253,
            reward: [3020, 1510, 505, 125, 25],
          },
          {
            cost: 29984,
            reward: [3050, 1525, 510, 130, 25],
          },
        ],
      },
      The_Virgo_Project: {
        levels: [
          {
            cost: 90,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 140,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 250,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 380,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 520,
            reward: [55, 30, 10, 5, 0],
          },
          {
            cost: 650,
            reward: [70, 35, 10, 5, 0],
          },
          {
            cost: 800,
            reward: [80, 40, 15, 5, 0],
          },
          {
            cost: 940,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 1110,
            reward: [115, 60, 20, 5, 0],
          },
          {
            cost: 1250,
            reward: [125, 65, 20, 5, 0],
          },
          {
            cost: 1282,
            reward: [145, 75, 25, 5, 0],
          },
          {
            cost: 1314,
            reward: [160, 80, 25, 5, 0],
          },
          {
            cost: 1347,
            reward: [175, 90, 30, 10, 0],
          },
          {
            cost: 1380,
            reward: [195, 100, 35, 10, 0],
          },
          {
            cost: 1415,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 1450,
            reward: [230, 115, 40, 10, 0],
          },
          {
            cost: 1486,
            reward: [245, 125, 40, 10, 0],
          },
          {
            cost: 1524,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1562,
            reward: [280, 140, 45, 10, 0],
          },
          {
            cost: 1601,
            reward: [300, 150, 50, 15, 5],
          },
          {
            cost: 1641,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1682,
            reward: [335, 170, 55, 15, 5],
          },
          {
            cost: 1724,
            reward: [355, 180, 60, 15, 5],
          },
          {
            cost: 1767,
            reward: [375, 190, 65, 15, 5],
          },
          {
            cost: 1811,
            reward: [395, 200, 65, 15, 5],
          },
          {
            cost: 1856,
            reward: [415, 210, 70, 20, 5],
          },
          {
            cost: 1903,
            reward: [435, 220, 75, 20, 5],
          },
          {
            cost: 1950,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1999,
            reward: [470, 235, 80, 20, 5],
          },
          {
            cost: 2049,
            reward: [490, 245, 80, 20, 5],
          },
          {
            cost: 2100,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 2152,
            reward: [535, 270, 90, 25, 5],
          },
          {
            cost: 2206,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2261,
            reward: [575, 290, 95, 25, 5],
          },
          {
            cost: 2318,
            reward: [595, 300, 100, 25, 5],
          },
          {
            cost: 2376,
            reward: [615, 310, 105, 25, 5],
          },
          {
            cost: 2435,
            reward: [635, 320, 105, 25, 5],
          },
          {
            cost: 2496,
            reward: [655, 330, 110, 30, 5],
          },
          {
            cost: 2559,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2622,
            reward: [700, 350, 115, 30, 5],
          },
          {
            cost: 2688,
            reward: [720, 360, 120, 30, 5],
          },
          {
            cost: 2755,
            reward: [740, 370, 125, 30, 5],
          },
          {
            cost: 2824,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 2895,
            reward: [785, 395, 130, 35, 5],
          },
          {
            cost: 2967,
            reward: [805, 405, 135, 35, 5],
          },
          {
            cost: 3041,
            reward: [825, 415, 140, 35, 5],
          },
          {
            cost: 3117,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 3195,
            reward: [870, 435, 145, 35, 5],
          },
          {
            cost: 3275,
            reward: [890, 445, 150, 40, 10],
          },
          {
            cost: 3357,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 3441,
            reward: [935, 470, 155, 40, 10],
          },
          {
            cost: 3527,
            reward: [960, 480, 160, 40, 10],
          },
          {
            cost: 3615,
            reward: [980, 490, 165, 40, 10],
          },
          {
            cost: 3705,
            reward: [1005, 505, 170, 45, 10],
          },
          {
            cost: 3798,
            reward: [1025, 515, 170, 45, 10],
          },
          {
            cost: 3893,
            reward: [1050, 525, 175, 45, 10],
          },
          {
            cost: 3990,
            reward: [1070, 535, 180, 45, 10],
          },
          {
            cost: 4090,
            reward: [1095, 550, 185, 45, 10],
          },
          {
            cost: 4192,
            reward: [1115, 560, 185, 45, 10],
          },
          {
            cost: 4297,
            reward: [1140, 570, 190, 50, 10],
          },
          {
            cost: 4404,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 4514,
            reward: [1185, 595, 200, 50, 10],
          },
          {
            cost: 4627,
            reward: [1210, 605, 200, 50, 10],
          },
          {
            cost: 4743,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 4861,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 4983,
            reward: [1280, 640, 215, 55, 10],
          },
          {
            cost: 5108,
            reward: [1300, 650, 215, 55, 10],
          },
          {
            cost: 5235,
            reward: [1325, 665, 220, 55, 10],
          },
          {
            cost: 5366,
            reward: [1350, 675, 225, 55, 10],
          },
          {
            cost: 5500,
            reward: [1370, 685, 230, 60, 10],
          },
          {
            cost: 5638,
            reward: [1395, 700, 235, 60, 10],
          },
          {
            cost: 5779,
            reward: [1420, 710, 235, 60, 10],
          },
          {
            cost: 5923,
            reward: [1445, 725, 240, 60, 10],
          },
          {
            cost: 6071,
            reward: [1470, 735, 245, 60, 10],
          },
          {
            cost: 6223,
            reward: [1490, 745, 250, 65, 15],
          },
          {
            cost: 6379,
            reward: [1515, 760, 255, 65, 15],
          },
          {
            cost: 6538,
            reward: [1540, 770, 255, 65, 15],
          },
          {
            cost: 6701,
            reward: [1565, 785, 260, 65, 15],
          },
          {
            cost: 6869,
            reward: [1590, 795, 265, 65, 15],
          },
          {
            cost: 7041,
            reward: [1615, 810, 270, 70, 15],
          },
          {
            cost: 7217,
            reward: [1635, 820, 275, 70, 15],
          },
          {
            cost: 7397,
            reward: [1660, 830, 275, 70, 15],
          },
          {
            cost: 7582,
            reward: [1685, 845, 280, 70, 15],
          },
          {
            cost: 7771,
            reward: [1710, 855, 285, 70, 15],
          },
          {
            cost: 7966,
            reward: [1735, 870, 290, 75, 15],
          },
          {
            cost: 8165,
            reward: [1760, 880, 295, 75, 15],
          },
          {
            cost: 8369,
            reward: [1785, 895, 300, 75, 15],
          },
          {
            cost: 8578,
            reward: [1810, 905, 300, 75, 15],
          },
          {
            cost: 8793,
            reward: [1835, 920, 305, 75, 15],
          },
          {
            cost: 9012,
            reward: [1860, 930, 310, 80, 15],
          },
          {
            cost: 9238,
            reward: [1885, 945, 315, 80, 15],
          },
          {
            cost: 9469,
            reward: [1910, 955, 320, 80, 15],
          },
          {
            cost: 9705,
            reward: [1935, 970, 325, 80, 15],
          },
          {
            cost: 9948,
            reward: [1960, 980, 325, 80, 15],
          },
          {
            cost: 10197,
            reward: [1985, 995, 330, 85, 15],
          },
          {
            cost: 10452,
            reward: [2010, 1005, 335, 85, 15],
          },
          {
            cost: 10713,
            reward: [2035, 1020, 340, 85, 15],
          },
          {
            cost: 10981,
            reward: [2060, 1030, 345, 85, 15],
          },
          {
            cost: 11255,
            reward: [2085, 1045, 350, 90, 20],
          },
          {
            cost: 11537,
            reward: [2110, 1055, 350, 90, 20],
          },
          {
            cost: 11825,
            reward: [2135, 1070, 355, 90, 20],
          },
          {
            cost: 12121,
            reward: [2160, 1080, 360, 90, 20],
          },
          {
            cost: 12424,
            reward: [2185, 1095, 365, 90, 20],
          },
          {
            cost: 12734,
            reward: [2215, 1110, 370, 95, 20],
          },
          {
            cost: 13053,
            reward: [2240, 1120, 375, 95, 20],
          },
          {
            cost: 13379,
            reward: [2265, 1135, 380, 95, 20],
          },
          {
            cost: 13713,
            reward: [2290, 1145, 380, 95, 20],
          },
          {
            cost: 14056,
            reward: [2315, 1160, 385, 95, 20],
          },
        ],
      },
      Star_Gazer: {
        levels: [
          {
            cost: 90,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 140,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 250,
            reward: [25, 15, 5, 0, 0],
          },
          {
            cost: 380,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 520,
            reward: [55, 30, 10, 5, 0],
          },
          {
            cost: 650,
            reward: [70, 35, 10, 5, 0],
          },
          {
            cost: 800,
            reward: [80, 40, 15, 5, 0],
          },
          {
            cost: 940,
            reward: [95, 50, 15, 5, 0],
          },
          {
            cost: 1110,
            reward: [115, 60, 20, 5, 0],
          },
          {
            cost: 1250,
            reward: [125, 65, 20, 5, 0],
          },
          {
            cost: 1282,
            reward: [145, 75, 25, 5, 0],
          },
          {
            cost: 1314,
            reward: [160, 80, 25, 5, 0],
          },
          {
            cost: 1347,
            reward: [175, 90, 30, 10, 0],
          },
          {
            cost: 1380,
            reward: [195, 100, 35, 10, 0],
          },
          {
            cost: 1415,
            reward: [210, 105, 35, 10, 0],
          },
          {
            cost: 1450,
            reward: [230, 115, 40, 10, 0],
          },
          {
            cost: 1486,
            reward: [245, 125, 40, 10, 0],
          },
          {
            cost: 1524,
            reward: [265, 135, 45, 10, 0],
          },
          {
            cost: 1562,
            reward: [280, 140, 45, 10, 0],
          },
          {
            cost: 1601,
            reward: [300, 150, 50, 15, 5],
          },
          {
            cost: 1641,
            reward: [320, 160, 55, 15, 5],
          },
          {
            cost: 1682,
            reward: [335, 170, 55, 15, 5],
          },
          {
            cost: 1724,
            reward: [355, 180, 60, 15, 5],
          },
          {
            cost: 1767,
            reward: [375, 190, 65, 15, 5],
          },
          {
            cost: 1811,
            reward: [395, 200, 65, 15, 5],
          },
          {
            cost: 1856,
            reward: [415, 210, 70, 20, 5],
          },
          {
            cost: 1903,
            reward: [435, 220, 75, 20, 5],
          },
          {
            cost: 1950,
            reward: [455, 230, 75, 20, 5],
          },
          {
            cost: 1999,
            reward: [470, 235, 80, 20, 5],
          },
          {
            cost: 2049,
            reward: [490, 245, 80, 20, 5],
          },
          {
            cost: 2100,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 2152,
            reward: [535, 270, 90, 25, 5],
          },
          {
            cost: 2206,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2261,
            reward: [575, 290, 95, 25, 5],
          },
          {
            cost: 2318,
            reward: [595, 300, 100, 25, 5],
          },
          {
            cost: 2376,
            reward: [615, 310, 105, 25, 5],
          },
          {
            cost: 2435,
            reward: [635, 320, 105, 25, 5],
          },
          {
            cost: 2496,
            reward: [655, 330, 110, 30, 5],
          },
          {
            cost: 2559,
            reward: [675, 340, 115, 30, 5],
          },
          {
            cost: 2622,
            reward: [700, 350, 115, 30, 5],
          },
          {
            cost: 2688,
            reward: [720, 360, 120, 30, 5],
          },
          {
            cost: 2755,
            reward: [740, 370, 125, 30, 5],
          },
          {
            cost: 2824,
            reward: [760, 380, 125, 30, 5],
          },
          {
            cost: 2895,
            reward: [785, 395, 130, 35, 5],
          },
          {
            cost: 2967,
            reward: [805, 405, 135, 35, 5],
          },
          {
            cost: 3041,
            reward: [825, 415, 140, 35, 5],
          },
          {
            cost: 3117,
            reward: [850, 425, 140, 35, 5],
          },
          {
            cost: 3195,
            reward: [870, 435, 145, 35, 5],
          },
          {
            cost: 3275,
            reward: [890, 445, 150, 40, 10],
          },
          {
            cost: 3357,
            reward: [915, 460, 155, 40, 10],
          },
          {
            cost: 3441,
            reward: [935, 470, 155, 40, 10],
          },
          {
            cost: 3527,
            reward: [960, 480, 160, 40, 10],
          },
          {
            cost: 3615,
            reward: [980, 490, 165, 40, 10],
          },
          {
            cost: 3705,
            reward: [1005, 505, 170, 45, 10],
          },
          {
            cost: 3798,
            reward: [1025, 515, 170, 45, 10],
          },
          {
            cost: 3893,
            reward: [1050, 525, 175, 45, 10],
          },
          {
            cost: 3990,
            reward: [1070, 535, 180, 45, 10],
          },
          {
            cost: 4090,
            reward: [1095, 550, 185, 45, 10],
          },
          {
            cost: 4192,
            reward: [1115, 560, 185, 45, 10],
          },
          {
            cost: 4297,
            reward: [1140, 570, 190, 50, 10],
          },
          {
            cost: 4404,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 4514,
            reward: [1185, 595, 200, 50, 10],
          },
          {
            cost: 4627,
            reward: [1210, 605, 200, 50, 10],
          },
          {
            cost: 4743,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 4861,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 4983,
            reward: [1280, 640, 215, 55, 10],
          },
          {
            cost: 5108,
            reward: [1300, 650, 215, 55, 10],
          },
          {
            cost: 5235,
            reward: [1325, 665, 220, 55, 10],
          },
          {
            cost: 5366,
            reward: [1350, 675, 225, 55, 10],
          },
          {
            cost: 5500,
            reward: [1370, 685, 230, 60, 10],
          },
          {
            cost: 5638,
            reward: [1395, 700, 235, 60, 10],
          },
          {
            cost: 5779,
            reward: [1420, 710, 235, 60, 10],
          },
          {
            cost: 5923,
            reward: [1445, 725, 240, 60, 10],
          },
          {
            cost: 6071,
            reward: [1470, 735, 245, 60, 10],
          },
          {
            cost: 6223,
            reward: [1490, 745, 250, 65, 15],
          },
          {
            cost: 6379,
            reward: [1515, 760, 255, 65, 15],
          },
          {
            cost: 6538,
            reward: [1540, 770, 255, 65, 15],
          },
          {
            cost: 6701,
            reward: [1565, 785, 260, 65, 15],
          },
          {
            cost: 6869,
            reward: [1590, 795, 265, 65, 15],
          },
          {
            cost: 7041,
            reward: [1615, 810, 270, 70, 15],
          },
          {
            cost: 7217,
            reward: [1635, 820, 275, 70, 15],
          },
          {
            cost: 7397,
            reward: [1660, 830, 275, 70, 15],
          },
          {
            cost: 7582,
            reward: [1685, 845, 280, 70, 15],
          },
          {
            cost: 7771,
            reward: [1710, 855, 285, 70, 15],
          },
          {
            cost: 7966,
            reward: [1735, 870, 290, 75, 15],
          },
          {
            cost: 8165,
            reward: [1760, 880, 295, 75, 15],
          },
          {
            cost: 8369,
            reward: [1785, 895, 300, 75, 15],
          },
          {
            cost: 8578,
            reward: [1810, 905, 300, 75, 15],
          },
          {
            cost: 8793,
            reward: [1835, 920, 305, 75, 15],
          },
          {
            cost: 9012,
            reward: [1860, 930, 310, 80, 15],
          },
          {
            cost: 9238,
            reward: [1885, 945, 315, 80, 15],
          },
          {
            cost: 9469,
            reward: [1910, 955, 320, 80, 15],
          },
          {
            cost: 9705,
            reward: [1935, 970, 325, 80, 15],
          },
          {
            cost: 9948,
            reward: [1960, 980, 325, 80, 15],
          },
          {
            cost: 10197,
            reward: [1985, 995, 330, 85, 15],
          },
          {
            cost: 10452,
            reward: [2010, 1005, 335, 85, 15],
          },
          {
            cost: 10713,
            reward: [2035, 1020, 340, 85, 15],
          },
          {
            cost: 10981,
            reward: [2060, 1030, 345, 85, 15],
          },
          {
            cost: 11255,
            reward: [2085, 1045, 350, 90, 20],
          },
          {
            cost: 11537,
            reward: [2110, 1055, 350, 90, 20],
          },
          {
            cost: 11825,
            reward: [2135, 1070, 355, 90, 20],
          },
          {
            cost: 12121,
            reward: [2160, 1080, 360, 90, 20],
          },
          {
            cost: 12424,
            reward: [2185, 1095, 365, 90, 20],
          },
          {
            cost: 12734,
            reward: [2215, 1110, 370, 95, 20],
          },
          {
            cost: 13053,
            reward: [2240, 1120, 375, 95, 20],
          },
          {
            cost: 13379,
            reward: [2265, 1135, 380, 95, 20],
          },
          {
            cost: 13713,
            reward: [2290, 1145, 380, 95, 20],
          },
          {
            cost: 14056,
            reward: [2315, 1160, 385, 95, 20],
          },
        ],
      },
      Space_Carrier: {
        levels: [
          {
            cost: 90,
            reward: [10, 5, 0, 0, 0],
          },
          {
            cost: 150,
            reward: [15, 10, 5, 0, 0],
          },
          {
            cost: 260,
            reward: [30, 15, 5, 0, 0],
          },
          {
            cost: 390,
            reward: [40, 20, 5, 0, 0],
          },
          {
            cost: 540,
            reward: [55, 30, 10, 5, 0],
          },
          {
            cost: 670,
            reward: [70, 35, 10, 5, 0],
          },
          {
            cost: 830,
            reward: [85, 45, 15, 5, 0],
          },
          {
            cost: 990,
            reward: [100, 50, 15, 5, 0],
          },
          {
            cost: 1140,
            reward: [115, 60, 20, 5, 0],
          },
          {
            cost: 1300,
            reward: [130, 65, 20, 5, 0],
          },
          {
            cost: 1333,
            reward: [150, 75, 25, 5, 0],
          },
          {
            cost: 1366,
            reward: [165, 85, 30, 10, 0],
          },
          {
            cost: 1400,
            reward: [185, 95, 30, 10, 0],
          },
          {
            cost: 1435,
            reward: [200, 100, 35, 10, 0],
          },
          {
            cost: 1471,
            reward: [220, 110, 35, 10, 0],
          },
          {
            cost: 1508,
            reward: [235, 120, 40, 10, 0],
          },
          {
            cost: 1546,
            reward: [255, 130, 45, 10, 0],
          },
          {
            cost: 1584,
            reward: [275, 140, 45, 10, 0],
          },
          {
            cost: 1624,
            reward: [295, 150, 50, 15, 5],
          },
          {
            cost: 1665,
            reward: [310, 155, 50, 15, 5],
          },
          {
            cost: 1706,
            reward: [330, 165, 55, 15, 5],
          },
          {
            cost: 1749,
            reward: [350, 175, 60, 15, 5],
          },
          {
            cost: 1793,
            reward: [370, 185, 60, 15, 5],
          },
          {
            cost: 1837,
            reward: [390, 195, 65, 15, 5],
          },
          {
            cost: 1883,
            reward: [410, 205, 70, 20, 5],
          },
          {
            cost: 1930,
            reward: [430, 215, 70, 20, 5],
          },
          {
            cost: 1979,
            reward: [450, 225, 75, 20, 5],
          },
          {
            cost: 2028,
            reward: [470, 235, 80, 20, 5],
          },
          {
            cost: 2079,
            reward: [490, 245, 80, 20, 5],
          },
          {
            cost: 2131,
            reward: [510, 255, 85, 20, 5],
          },
          {
            cost: 2184,
            reward: [530, 265, 90, 25, 5],
          },
          {
            cost: 2239,
            reward: [550, 275, 90, 25, 5],
          },
          {
            cost: 2294,
            reward: [575, 290, 95, 25, 5],
          },
          {
            cost: 2352,
            reward: [595, 300, 100, 25, 5],
          },
          {
            cost: 2411,
            reward: [615, 310, 105, 25, 5],
          },
          {
            cost: 2471,
            reward: [635, 320, 105, 25, 5],
          },
          {
            cost: 2533,
            reward: [660, 330, 110, 30, 5],
          },
          {
            cost: 2596,
            reward: [680, 340, 115, 30, 5],
          },
          {
            cost: 2661,
            reward: [700, 350, 115, 30, 5],
          },
          {
            cost: 2727,
            reward: [725, 365, 120, 30, 5],
          },
          {
            cost: 2796,
            reward: [745, 375, 125, 30, 5],
          },
          {
            cost: 2865,
            reward: [770, 385, 130, 35, 5],
          },
          {
            cost: 2937,
            reward: [790, 395, 130, 35, 5],
          },
          {
            cost: 3010,
            reward: [810, 405, 135, 35, 5],
          },
          {
            cost: 3086,
            reward: [835, 420, 140, 35, 5],
          },
          {
            cost: 3163,
            reward: [855, 430, 145, 35, 5],
          },
          {
            cost: 3242,
            reward: [880, 440, 145, 35, 5],
          },
          {
            cost: 3323,
            reward: [905, 455, 150, 40, 10],
          },
          {
            cost: 3406,
            reward: [925, 465, 155, 40, 10],
          },
          {
            cost: 3491,
            reward: [950, 475, 160, 40, 10],
          },
          {
            cost: 3578,
            reward: [970, 485, 160, 40, 10],
          },
          {
            cost: 3668,
            reward: [995, 500, 165, 40, 10],
          },
          {
            cost: 3759,
            reward: [1015, 510, 170, 45, 10],
          },
          {
            cost: 3853,
            reward: [1040, 520, 175, 45, 10],
          },
          {
            cost: 3950,
            reward: [1065, 535, 180, 45, 10],
          },
          {
            cost: 4049,
            reward: [1085, 545, 180, 45, 10],
          },
          {
            cost: 4150,
            reward: [1110, 555, 185, 45, 10],
          },
          {
            cost: 4253,
            reward: [1135, 570, 190, 50, 10],
          },
          {
            cost: 4360,
            reward: [1160, 580, 195, 50, 10],
          },
          {
            cost: 4469,
            reward: [1180, 590, 195, 50, 10],
          },
          {
            cost: 4580,
            reward: [1205, 605, 200, 50, 10],
          },
          {
            cost: 4695,
            reward: [1230, 615, 205, 50, 10],
          },
          {
            cost: 4812,
            reward: [1255, 630, 210, 55, 10],
          },
          {
            cost: 4933,
            reward: [1275, 640, 215, 55, 10],
          },
          {
            cost: 5056,
            reward: [1300, 650, 215, 55, 10],
          },
          {
            cost: 5182,
            reward: [1325, 665, 220, 55, 10],
          },
          {
            cost: 5312,
            reward: [1350, 675, 225, 55, 10],
          },
          {
            cost: 5445,
            reward: [1375, 690, 230, 60, 10],
          },
          {
            cost: 5581,
            reward: [1400, 700, 235, 60, 10],
          },
          {
            cost: 5720,
            reward: [1425, 715, 240, 60, 10],
          },
          {
            cost: 5863,
            reward: [1450, 725, 240, 60, 10],
          },
          {
            cost: 6010,
            reward: [1470, 735, 245, 60, 10],
          },
          {
            cost: 6160,
            reward: [1500, 750, 250, 65, 15],
          },
          {
            cost: 6314,
            reward: [1520, 760, 255, 65, 15],
          },
          {
            cost: 6472,
            reward: [1545, 775, 260, 65, 15],
          },
          {
            cost: 6634,
            reward: [1570, 785, 260, 65, 15],
          },
          {
            cost: 6799,
            reward: [1595, 800, 265, 65, 15],
          },
          {
            cost: 6969,
            reward: [1620, 810, 270, 70, 15],
          },
          {
            cost: 7144,
            reward: [1650, 825, 275, 70, 15],
          },
          {
            cost: 7322,
            reward: [1670, 835, 280, 70, 15],
          },
          {
            cost: 7505,
            reward: [1695, 850, 285, 70, 15],
          },
          {
            cost: 7693,
            reward: [1725, 865, 290, 75, 15],
          },
          {
            cost: 7885,
            reward: [1750, 875, 290, 75, 15],
          },
          {
            cost: 8082,
            reward: [1775, 890, 295, 75, 15],
          },
          {
            cost: 8284,
            reward: [1800, 900, 300, 75, 15],
          },
          {
            cost: 8491,
            reward: [1825, 915, 305, 75, 15],
          },
          {
            cost: 8704,
            reward: [1850, 925, 310, 80, 15],
          },
          {
            cost: 8921,
            reward: [1875, 940, 315, 80, 15],
          },
          {
            cost: 9144,
            reward: [1900, 950, 315, 80, 15],
          },
          {
            cost: 9373,
            reward: [1930, 965, 320, 80, 15],
          },
          {
            cost: 9607,
            reward: [1955, 980, 325, 80, 15],
          },
          {
            cost: 9847,
            reward: [1980, 990, 330, 85, 15],
          },
          {
            cost: 10094,
            reward: [2005, 1005, 335, 85, 15],
          },
          {
            cost: 10346,
            reward: [2030, 1015, 340, 85, 15],
          },
          {
            cost: 10605,
            reward: [2060, 1030, 345, 85, 15],
          },
          {
            cost: 10870,
            reward: [2085, 1045, 350, 90, 20],
          },
          {
            cost: 11141,
            reward: [2110, 1055, 350, 90, 20],
          },
          {
            cost: 11420,
            reward: [2135, 1070, 355, 90, 20],
          },
          {
            cost: 11705,
            reward: [2160, 1080, 360, 90, 20],
          },
          {
            cost: 11998,
            reward: [2190, 1095, 365, 90, 20],
          },
          {
            cost: 12298,
            reward: [2215, 1110, 370, 95, 20],
          },
          {
            cost: 12605,
            reward: [2240, 1120, 375, 95, 20],
          },
          {
            cost: 12921,
            reward: [2265, 1135, 380, 95, 20],
          },
          {
            cost: 13244,
            reward: [2295, 1150, 385, 95, 20],
          },
          {
            cost: 13575,
            reward: [2320, 1160, 385, 95, 20],
          },
          {
            cost: 13914,
            reward: [2350, 1175, 390, 100, 20],
          },
          {
            cost: 14262,
            reward: [2375, 1190, 395, 100, 20],
          },
          {
            cost: 14618,
            reward: [2400, 1200, 400, 100, 20],
          },
          {
            cost: 14984,
            reward: [2430, 1215, 405, 100, 20],
          },
          {
            cost: 15358,
            reward: [2455, 1230, 410, 105, 20],
          },
          {
            cost: 15742,
            reward: [2480, 1240, 415, 105, 20],
          },
          {
            cost: 16136,
            reward: [2510, 1255, 420, 105, 20],
          },
          {
            cost: 16539,
            reward: [2535, 1270, 425, 105, 20],
          },
          {
            cost: 16953,
            reward: [2565, 1285, 430, 110, 20],
          },
          {
            cost: 17376,
            reward: [2590, 1295, 430, 110, 20],
          },
        ],
      },
    },
  },
  mutations: {},
  actions: {},
  modules: {},
})
