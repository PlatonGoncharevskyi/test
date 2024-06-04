import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 308,
          title: 'Серветка з мікрофібри MF-01',
          img: '000308.jpg',
          desc: '35x40 см; колір: блакитний; арт: 0308',
          category: 'napkincar',
          price: '36.78'
        },
        {
          id: 315,
          title: 'Серветка з мікрофібри MF-02',
          img: '000315.jpg',
          desc: '35x40 см; колір: рожевий; арт: 0315',
          category: 'napkincar',
          price: '36.78'
        },
        {
          id: 322,
          title: 'Серветка з мікрофібри MF-03',
          img: '000322.jpg',
          desc: '35x40 см; колір: помаранчевий; арт: 0322',
          category: 'napkincar',
          price: '36.78'
        },
        {
          id: 339,
          title: 'Серветка для скла MF-04',
          img: '000339.jpg',
          desc: '35x40 см; колір: блакитний; арт: 0339',
          category: 'napkincar',
          price: '41.58'
        },
        {
          id: 346,
          title: 'Серветка з мікрофібри для полірування MF-05',
          img: '000346.jpg',
          desc: '35x40 см; колір: зелений; арт: 0346',
          category: 'napkincar',
          price: '45.90'
        },
        {
          id: 353,
          title: 'Серветка замша штучна MF-06',
          img: '000353.jpg',
          desc: '35x40 см; колір: жовтий; арт: 0353',
          category: 'napkincar',
          price: '72.30'
        },
        {
          id: 360,
          title: 'Комплект мікрофібрових серветок 3шт MFS-02',
          img: '000360.jpg',
          desc: '35x40, 35x30, 35x35 см; колір: жовтий, блакитний, рожеивй; арт: 0360',
          category: 'napkincar',
          price: '122.04'
        },
        {
          id: 377,
          title: 'Комплект мікрофібрових серветок 6шт MFS-03',
          img: '000377.jpg',
          desc: '30x30 см; колір: жовтий, блакитний, рожеивй; арт: 0377',
          category: 'napkincar',
          price: '145.62'
        },
        {
          id: 384,
          title: 'Серветка штучна замша (волоага) в тубусі CH-01',
          img: '000384.jpg',
          desc: '66x43 см; тип А; арт: 0384',
          category: 'napkincar',
          price: '170.40'
        },
        {
          id: 391,
          title: 'Губка для миття і полірування SP-01',
          img: '000391.jpg',
          desc: 'двостороння; колір: салатовий; арт: 0391',
          category: 'napkincar',
          price: '141.78'
        },
        {
          id: 407,
          title: 'Комплект мікрофібрових серветок 3шт MFS-01',
          img: '000407.jpg',
          desc: '30х30 см; арт: 0407',
          category: 'napkincar',
          price: '72,96'
        },
        {
          id: 414,
          title: 'Серветка штучна замша (волоага) в тубусі CH-02',
          img: '000414.jpg',
          desc: '43х32 см тип А; арт: 0414',
          category: 'napkincar',
          price: '99,18'
        },
        {
          id: 124,
          title: 'Компресор металевий 12В, 14А, 100 PSI ProSwisscar AC-01',
          img: '000124.jpg',
          desc: 'Тип: Портативні; Продуктивність за 0 бар: 35 л/хв; Максимальний тиск: 7 Атм',
          category: 'compresor',
          price: '1238,34'
        },
        {
          id: 285,
          title: 'Домкрат ромбоподібний 1т ProSwisscar SJ-01',
          img: '000285.jpg',
          desc: 'Тип: Механічні Вид: Ромбоподібні: Вантажопідйомність 1 т',
          category: 'compresor',
          price: '569,64'
        },
        {
          id: 148,
          title: 'Компресор металевий 12В, 10А, 100 PSI ProSwisscar AC-03',
          img: '000148.jpg',
          desc: 'Тип: Портативні; Продуктивність за 0 бар: 35 л/хв; Максимальний тиск: 7 Атм',
          category: 'compresor',
          price: '1172,52'
        },
        {
          id: 155,
          title: 'Компресор металевий 12В, 14А, 100 PSI ProSwisscar AC-04',
          img: '000155.jpg',
          desc: 'Тип: Портативні; Продуктивність за 0 бар: 35 л/хв; Максимальний тиск: 7 Атм',
          category: 'compresor',
          price: '1395,06'
        },
        {
          id: 49,
          title: 'Водозгін силіконовий Swisscar SCB-04',
          img: '000049.jpg',
          desc: '20 см з подовженою ручкою',
          category: 'water',
          price: '120'
        },
        {
          id: 56,
          title: 'Водозгін силіконовий Swisscar SCB-05',
          img: '000056.jpg',
          desc: '31 см  з стаціонарною ручкою',
          category: 'water',
          price: '125,46'
        },
        {
          id: 728,
          title: ' Щітка телескопічна для скла з водозгоном ProSwisscar SCB-06',
          img: '000728.jpg',
          desc: '',
          category: 'water',
          price: '227,34'
        },
        {
          id: 742,
          title: 'Хомут пластиковий ТW-001',
          img: '000742.jpg',
          desc: '2,5х100 мм 100 шт білий ProSwisscar ',
          category: 'hamut',
          price: '28,14'
        },
        {
          id: 759,
          title: 'Хомут пластиковий ТW-002',
          img: '000759.jpg',
          desc: '2,5х100 мм 150 шт білий ProSwisscar',
          category: 'hamut',
          price: '28,62'
        },
        {
          id: 766,
          title: 'Хомут пластиковий ТW-003',
          img: '000766.jpg',
          desc: '2,5х200 мм 100 шт білий ProSwisscar',
          category: 'hamut',
          price: '37,80'
        },
        {
          id: 773,
          title: 'Хомут пластиковий ТW-004',
          img: '000773.jpg',
          desc: '3,6х200 мм 100 шт білий ProSwisscar',
          category: 'hamut',
          price: '102,42'
        },
        {
          id: 780,
          title: 'Хомут пластиковий ТW-008',
          img: '000780.jpg',
          desc: '7,6х400 мм 100 шт білий ProSwisscar',
          category: 'hamut',
          price: '298,74'
        },
        {
          id: 797,
          title: 'Хомут пластиковий ТW-005',
          img: '000797.jpg',
          desc: '3,6х300 мм 100 шт білий ProSwisscar',
          category: 'hamut',
          price: '165,78'
        },
        {
          id: 803,
          title: 'Хомут пластиковий ТW-006',
          img: '000803.jpg',
          desc: '4,8x250 мм 100 шт білий ProSwisscar',
          category: 'hamut',
          price: '101,46'
        },
        {
          id: 810,
          title: 'Хомут пластиковий ТW-007',
          img: '000810.jpg',
          desc: '4,8x300 мм 100 шт білий ProSwisscar',
          category: 'hamut',
          price: '119,64'
        },
        {
          id: 827,
          title: 'Хомут пластиковий ТB-001',
          img: '000827.jpg',
          desc: '2,5x100 мм 100 шт чорний ProSwisscar',
          category: 'hamut',
          price: '34,86'
        },
        {
          id: 834,
          title: 'Хомут пластиковий ТB-002',
          img: '000834.jpg',
          desc: '2,5x150 мм 100 шт чорний ProSwisscar',
          category: 'hamut',
          price: '28,62'
        },
        {
          id: 841,
          title: 'Хомут пластиковий ТB-003',
          img: '000841.jpg',
          desc: '2,5x200 мм 100 шт чорний ProSwisscar',
          category: 'hamut',
          price: '52,20'
        },
        {
          id: 858,
          title: 'Хомут пластиковий ТB-004',
          img: '000858.jpg',
          desc: '3,6x200 мм 100 шт чорний ProSwisscar',
          category: 'hamut',
          price: '102,42'
        },
       /* {
          id: 865,
          title: 'Хомут пластиковий ТB-005',
          img: '000865.jpg',
          desc: '3,6x300 мм 100 шт чорний ProSwisscar',
          category: 'hamut',
          price: '138,60'
        }, */
        {
          id: 872,
          title: 'Хомут пластиковий ТB-006',
          img: '000872.jpg',
          desc: '4,8x250 мм 100 шт чорний ProSwisscar',
          category: 'hamut',
          price: '101,46'
        },
        {
          id: 889,
          title: 'Хомут пластиковий ТB-007',
          img: '000889.jpg',
          desc: '4,8x300 мм 100 шт чорний ProSwisscar',
          category: 'hamut',
          price: '119,64'
        },
       /* {
          id: 896,
          title: 'Хомут пластиковий ТB-008',
          img: '000896.jpg',
          desc: '7,6x400 мм 100 шт чорний ProSwisscar',
          category: 'hamut',
          price: '268,80'
        },*/
        {
          id: 902,
          title: 'Хомут пластиковий ТB-009',
          img: '000902.jpg',
          desc: '7,6x400 мм 50 шт чорний ProSwisscar',
          category: 'hamut',
          price: '168,60'
        },
        {
          id: 926,
          title: 'Килимок силіконовий фіксуючий SM-001',
          img: '000926.jpg',
          desc: '140х80х2 мм ProSwisscar',
          category: 'carmats',
          price: '48,90'
        },
        {
          id: 964,
          title: 'Килимок силіконовий фіксуючий SM-005',
          img: '000964.jpg',
          desc: '150x90x2 мм ProSwisscar',
          category: 'carmats',
          price: '74,94'
        },
        {
          id: 971,
          title: 'Килимок силіконовий фіксуючий SM-006',
          img: '000971.jpg',
          desc: '145x90x2 мм ProSwisscar',
          category: 'carmats',
          price: '61,68'
        },
        {
          id: 988,
          title: 'Килимок силіконовий фіксуючий SM-007',
          img: '000988.jpg',
          desc: '140x85x2 мм ProSwisscar',
          category: 'carmats',
          price: '61,68'
        },
        {
          id: 1008,
          title: 'Килимок силіконовий фіксуючий SM-009',
          img: '001008.jpg',
          desc: '180x120x2 мм ProSwisscar',
          category: 'carmats',
          price: '65,46'
        },
        {
          id: 1015,
          title: 'Килимок силіконовий фіксуючий SM-010',
          img: '001015.jpg',
          desc: '180x120x2 мм ProSwisscar',
          category: 'carmats',
          price: '61,68'
        },
        {
          id: 1022,
          title: 'Килимок силіконовий фіксуючий SM-011',
          img: '001022.jpg',
          desc: '280x90x2 мм ProSwisscar',
          category: 'carmats',
          price: '102,60'
        },
        {
          id: 1046,
          title: 'Трос з 2метал гаками та фіксатор WS-001',
          img: '001046.jpg',
          desc: 'навант4,5т шир50мм довж5м ProSwisscar',
          category: 'ropes',
          price: '421,14'
        },
        {
          id: 1053,
          title: 'Ремінь стяжний BS-001',
          img: '001053.jpg',
          desc: 'навант 245кг 25мм шир, 2,5м довж, 2шт в упак ProSwisscar ',
          category: 'ropes',
          price: '171,18'
        },
        {
          id: 1060,
          title: 'Ремінь стяжний з храповим механізмом BS-002',
          img: '001060.jpg',
          desc: 'навант 245кг шир25мм  довж5м 1шт в упак ProSwisscar',
          category: 'ropes',
          price: '198,42'
        },
        {
          id: 1107,
          title: 'Фіксатор вантажу еластичний BT-001',
          img: '001107.jpg',
          desc: 'з 2метал гаками 60см, навантаж до 7кг 8мм діам ProSwisscar',
          category: 'ropes',
          price: '73,74'
        },
        {
          id: 1114,
          title: 'Фіксатор вантажу еластичний BT-002',
          img: '001114.jpg',
          desc: 'з 2метал гаками 80см, навантаж до 7кг 8мм діам ProSwisscar',
          category: 'ropes',
          price: '76,68'
        },
        {
          id: 1176,
          title: 'Чохол для 2 х місного водяного мотоцикла JS-001',
          img: '001176.jpg',
          desc: '336*72*77 см. ProSwisscar',
          category: 'covers',
          price: '940,68'
        },
        {
          id: 1183,
          title: 'Чохол для 3 х місного водяного мотоцикла JS-002',
          img: '001183.jpg',
          desc: '296*160*83см ProSwisscar ',
          category: 'covers',
          price: '985,32'
        },
        {
          id: 1190,
          title: 'Чохол зовнішній для квадроцикла ATV; AT-001',
          img: '001190.jpg',
          desc: 'Розмір: XL-251х125х85см срібл ProSwisscar',
          category: 'covers',
          price: '711,24'
        },
        {
          id: 1206,
          title: 'Чохол зовнішній для квадроцикла ATV; AT-002',
          img: '001206.jpg',
          desc: 'Розмір: XL-251х125х85см камуфляж ProSwisscar',
          category: 'covers',
          price: '1164,54'
        },
        {
          id: 1237,
          title: 'Чохол зовнішній для баггі UTV; UT-003',
          img: '001237.jpg',
          desc: 'Розмір: XХL-301*138*175 см. срібл. ProSwisscar',
          category: 'covers',
          price: '880,50'
        },
        {
          id: 1244,
          title: 'Чохол зовнішній для баггі UTV; UT-004',
          img: '001244.jpg',
          desc: 'Розмір: XХL-301*138*175 см. камуфляж ProSwisscar',
          category: 'covers',
          price: '1102,68'
        },
       /* {
          id: 1336,
          title: 'Чохол зовнішній седан. CC-001',
          img: '001336.jpg',
          desc: 'Розмір: М 432х165х119 см.  ProSwisscar',
          category: 'covers',
          price: '1015,2'
        },*/
        {
          id: 1213,
          title: 'Набір автомобільних запобіжників FS-01',
          img: '001213.jpg',
          desc: '5-30А, стандарт (10 шт)',
          category: 'fuses',
          price: '42,42'
        },
        {
          id: 1220,
          title: 'Набір автомобільних запобіжників FS-02',
          img: '001220.jpg',
          desc: '5-30А, міні (10 шт)',
          category: 'fuses',
          price: '42,42'
        },
       /* {
          id: 1558,
          title: 'Термопокривало',
          img: '001558.jpg',
          desc: '160см х 210см',
          category: 'different',
          price: '40,02'
        },*/
        {
          id: 1657,
          title: 'Жилет сигнальний WV-004',
          img: '001657.jpg',
          desc: 'Помаранчевий XL',
          category: 'reflectives',
          price: '168'
        },
        {
          id: 1664,
          title: 'Жилет сигнальний WV-005',
          img: '001664.jpg',
          desc: 'Жовтий XL',
          category: 'reflectives',
          price: '168'
        },
        {
          id: 1695,
          title: 'Жилет сигнальний дитячий WVK-01',
          img: '001695.jpg',
          desc: 'Жовтий з помаранчевим кантом S',
          category: 'reflectives',
          price: '120,6'
        },
        {
          id: 1701,
          title: 'Жилет сигнальний дитячий WVK-02',
          img: '001701.jpg',
          desc: 'Жовтий з помаранчевим кантом M',
          category: 'reflectives',
          price: '136,32'
        },
        {
          id: 1718,
          title: 'Жилет сигнальний дитячий WVK-03',
          img: '001718.jpg',
          desc: 'Рожевий з чорним кантом S',
          category: 'reflectives',
          price: '136,32'
        },
        {
          id: 1725,
          title: 'Жилет сигнальний дитячий WVK-04',
          img: '001725.jpg',
          desc: 'Рожевий з чорним кантом M',
          category: 'reflectives',
          price: '108,18'
        },
        {
          id: 1749,
          title: 'Трос буксирувальний WS-002',
          img: '001749.jpg',
          desc: ' 1500 кг/3000 кг 50мм х 4м ',
          category: 'ropes',
          price: '180,30'
        },
        {
          id: 1756,
          title: 'Трос буксирувальний WS-003',
          img: '001756.jpg',
          desc: ' 2500 кг/5000 кг 50мм х 4м ',
          category: 'ropes',
          price: '266,46'
        },
        {
          id: 1763,
          title: 'Трос буксирувальний WS-004',
          img: '001763.jpg',
          desc: ' 5000 кг/8000 кг 50мм х 4м ',
          category: 'ropes',
          price: '484,38'
        },
       /* {
          id: 1947,
          title: 'Рушник із мікрофібри SH-987 ProSwissHome',
          img: '001947.jpg',
          desc: '90*150см синє (пляж+басейн)',
          category: 'napkinhome',
          price: '559,98'
        },*/
        {
          id: 3651,
          title: 'Аптечка медична "Євростандарт" АР-001',
          img: '003651.jpg',
          desc: 'ТМ "ProSwissCar"',
          category: 'aidkit',
          price: '543,18'
        },
        {
          id: 3668,
          title: 'Аптечка медична "Автобусна" АР-004',
          img: '003668.jpg',
          desc: 'ТМ "ProSwissCar"',
          category: 'aidkit',
          price: '1138,5'
        },
        {
          id: 3675,
          title: 'Аптечка медична "Автомобільна" АР-005',
          img: '003675.jpg',
          desc: 'ТМ "ProSwissCar"',
          category: 'aidkit',
          price: '247,92'
        },
        {
          id: 3682,
          title: 'Аптечка медична "Автоплюс" АР-003',
          img: '003682.jpg',
          desc: 'ТМ "ProSwissCar"',
          category: 'aidkit',
          price: '325,14'
        },
        {
          id: 3699,
          title: 'Аптечка медична "Універсальна" АР-002',
          img: '003699.jpg',
          desc: 'ТМ "ProSwissCar"',
          category: 'aidkit',
          price: '301,32'
        },
        {
          id: 3316,
          title: 'Воронка паливна розбірна з фільтром і гнучким носиком FF-01,',
          img: '003316.jpg',
          desc: 'D-145мм ТМ "ProSwissCar"',
          category: 'funnels',
          price: '103,08'
        },
        {
          id: 3323,
          title: 'Воронка паливна розбірна з фільтром і гнучким носиком FF-02,',
          img: '003323.jpg',
          desc: 'D-130мм ТМ "ProSwissCar"',
          category: 'funnels',
          price: '89,58'
        },
        {
          id: 3361,
          title: 'Ключ балонний L подібний оцинкований з викруткою WL-01',
          img: '003361.jpg',
          desc: 'L=300 мм, D=14 мм, 17 мм ',
          category: 'carkeys',
          price: '147,96'
        },
        {
          id: 3378,
          title: 'Ключ балонний L подібний оцинкований з викруткою WL-02',
          img: '003378.jpg',
          desc: 'L=300 мм, D=14 мм, 19 мм ',
          category: 'carkeys',
          price: '147,96'
        },
        {
          id: 3385,
          title: 'Ключ балонний L подібний телескопічний хромований WL-03',
          img: '003385.jpg',
          desc: 'L=350-530 мм D=14 мм',
          category: 'carkeys',
          price: '370,44'
        },
        {
          id: 3392 ,
          title: 'Свічковий ключ Т-подібний з шарніром WS-01',
          img: '003392.jpg',
          desc: '16х250 мм ',
          category: 'carkeys',
          price: '147,96'
        },
        {
          id: 3408 ,
          title: 'Ключ-знімач масляного фільтра серповидний WO-01 ',
          img: '003408.jpg',
          desc: 'D = 65-110мм',
          category: 'carkeys',
          price: '147,96'
        },
        {
          id: 3415 ,
          title: 'Свічковий ключ Т-подібний з шарніром WS-02',
          img: '003415.jpg',
          desc: '21х250 мм',
          category: 'carkeys',
          price: '147,96'
        },
        {
          id: 325706 ,
          title: 'Автомобільна наліпка "Інвалід" NL-001',
          img: '325706.jpg',
          desc: 'ТМ "ProSwissCar"',
          category: 'carstickers',
          price: '20,28'
        },
        {
          id: 325713,
          title: 'Автомобільна наліпка  "Обмеження швидкості 70 км/год" NL-002',
          img: '325713.jpg',
          desc: 'ТМ "ProSwissCar"',
          category: 'carstickers',
          price: '20,28'
        },
      /*  {
          id: 325737,
          title: 'Автомобільна наліпка  "Учбовий" NL-004',
          img: '325737.jpg',
          desc: 'ТМ "ProSwissCar"',
          category: 'carstickers',
          price: '20,28'
        },*/
        {
          id: 325744,
          title: 'Автомобільна наліпка  "Газ"  NL-005',
          img: '325744.jpg',
          desc: 'ТМ "ProSwissCar"',
          category: 'carstickers',
          price: '20,28'
        },
        {
          id: 325768,
          title: 'Автомобільна наліпка  "Об’єкт під охороною"  NL-007',
          img: '325768.jpg',
          desc: 'ТМ "ProSwissCar"',
          category: 'carstickers',
          price: '20,28'
        },
        {
          id: 325775,
          title: 'Автомобільна наліпка  "Увага! Ведеться відеоспостереження" NL-008',
          img: '325775.jpg',
          desc: 'ТМ "ProSwissCar"',
          category: 'carstickers',
          price: '20,28'
        },
        {
          id: 325782 ,
          title: 'Автомобільна наліпка  "Продам" NL-009',
          img: '325782.jpg',
          desc: 'ТМ "ProSwissCar"',
          category: 'carstickers',
          price: '20,28'
        },
        {
          id: 325799  ,
          title: 'Автомобільна наліпка  "Діти в авто"  NL-010',
          img: '325799.jpg',
          desc: 'ТМ "ProSwissCar"',
          category: 'carstickers',
          price: '20,28'
        },
        {
          id: 325805,
          title: 'Автомобільна наліпка  "UA" NL-011',
          img: '325805.jpg',
          desc: 'ТМ "ProSwissCar"',
          category: 'carstickers',
          price: '20,28'
        },
        {
          id: 325812 ,
          title: 'Автомобільна наліпка  "Туфля"  NL-012',
          img: '325812.jpg',
          desc: 'ТМ "ProSwissCar"',
          category: 'carstickers',
          price: '20,28'
        },
        {
          id: 325881 ,
          title: 'Автомобільна наліпка "Вхід"  NL-019',
          img: '325881.jpg',
          desc: 'ТМ "ProSwissCar"',
          category: 'carstickers',
          price: '20,28'
        },
        {
          id: 325898,
          title: 'Автомобільна наліпка "Вихід" NL-020',
          img: '325898.jpg',
          desc: 'ТМ "ProSwissCar"',
          category: 'carstickers',
          price: '20,28'
        },
        {
          id: 3576,
          title: 'Щітка склоочисника каркасна FW-01',
          img: '003576-1.jpg',
          desc: '300 мм. 2 перехідників ProSwisscar',
          category: 'wiperblades',
          price: '105'
        },
        {
          id: 3552  ,
          title: 'Щітка склоочисника каркасна FW-02',
          img: '003552-1.jpg',
          desc: '350 мм. 2 перехідників ProSwisscar',
          category: 'wiperblades',
          price: '105'
        },
        {
          id: 3569,
          title: 'Щітка склоочисника каркасна FW-03',
          img: '003569-1.jpg',
          desc: '400 мм. 2 перехідників ProSwisscar',
          category: 'wiperblades',
          price: '105'
        },
        {
          id: 3583,
          title: 'Щітка склоочисника каркасна FW-04',
          img: '003583-1.jpg',
          desc: '450 мм. 2 перехідників ProSwisscar',
          category: 'wiperblades',
          price: '105'
        },
        {
          id: 3590,
          title: 'Щітка склоочисника каркасна FW-05',
          img: '003590-1.jpg',
          desc: '500 мм. 2 перехідників ProSwisscar',
          category: 'wiperblades',
          price: '112,86'
        },
        {
          id: 3606,
          title: 'Щітка склоочисника каркасна FW-06',
          img: '003606-1.jpg',
          desc: '550 мм. 2 перехідників ProSwisscar',
          category: 'wiperblades',
          price: '112,86'
        },
        {
          id: 3613,
          title: 'Щітка склоочисника каркасна FW-07',
          img: '003613-1.jpg',
          desc: '600 мм. 2 перехідників ProSwisscar',
          category: 'wiperblades',
          price: '123,90'
        },
        {
          id: 3620,
          title: 'Щітка склоочисника каркасна FW-08',
          img: '003620-2.jpg',
          desc: '650 мм. 2 перехідників ProSwisscar',
          category: 'wiperblades',
          price: '123,90'
        },
        {
          id: 3637,
          title: 'Щітка склоочисника каркасна FW-09',
          img: '003637-2.jpg',
          desc: '700 мм. 2 перехідників ProSwisscar',
          category: 'wiperblades',
          price: '123,90'
        },
        {
          id: 3712,
          title: 'Щітка склоочисника безкаркасна GW-R1',
          img: '003712-1.jpg',
          desc: '300 мм. 8 в 1(мультікріплення) ProSwisscar',
          category: 'wiperblades',
          price: '120,60'
        },
        
        {
          id: 2326,
          title: 'Набір серветок з мікрофібри для протирання пилу SH-999 ',
          img: '002326.jpg',
          desc: 'ProSwissHome 35х40',
          category: 'napkinhome',
          price: '84,60'
        },
        {
          id: 2333,
          title: 'Набір серветок з мікрофібри для полірування пластику,дерева,шкіри SH-998',
          img: '002333.jpg',
          desc: 'ProSwissHome 35х40',
          category: 'napkinhome',
          price: '92,64'
        },
        {
          id: 2340,
          title: 'Набір серветок з мікрофібри для хромованих та глянцевих поверхонь SH-997 ',
          img: '002340.jpg',
          desc: 'ProSwissHome 35х40',
          category: 'napkinhome',
          price: '102,24'
        },
        {
          id: 1961,
          title: 'Серветка вафельна універсальна SH-993',
          img: '001961.jpg',
          desc: 'ProSwissHome  35х40см',
          category: 'napkinhome',
          price: '64,20'
        },
        {
          id: 1978,
          title: 'Серветка вафельна універсальна SH-992',
          img: '001978.jpg',
          desc: 'ProSwissHome  40x70см',
          category: 'napkinhome',
          price: '126,84'
        },
        {
          id: 2081,
          title: 'Серветка з мікрофібри  для протирання пилу  SH-991',
          img: '002081.jpg',
          desc: 'ProSwissHome 35х40см',
          category: 'napkinhome',
          price: '35,52'
        },
       
        {
          id: 2319,
          title: 'Рушник вафельний  Універсальний MF-16',
          img: '002319.jpg',
          desc: 'ProSwissHome  40x70',
          category: 'napkinhome',
          price: '118,68'
        },
        {
          id: 2104,
          title: ' Серветка з  мікрофібри для хромованих та глянцевих поверхонь SH-989 ',
          img: '002104.png',
          desc: 'ProSwissHome  35х40',
          category: 'napkinhome',
          price: '43,68'
        },
        {
          id: 2135,
          title: 'Серветка для скла та моніторів SH-994',
          img: '002135.jpg',
          desc: 'ProSwissHome  35х40',
          category: 'napkinhome',
          price: '46,26'
        },
        {
          id: 2098,
          title: 'Серветка з мікрофібри для полірування пластику, дерева,шкіри SH-990',
          img: '002098.jpg',
          desc: 'ProSwissHome  35х40',
          category: 'napkinhome',
          price: '38,22'
        },
        {
          id: 2357,
          title: 'Серветка з  мікрофібри універсальна SH-996',
          img: '002357.jpg',
          desc: 'ProSwissHome  35х40',
          category: 'napkinhome',
          price: '29,76'
        },
        {
          id: 2418,
          title: 'Серветка з мікрофібри для протирання скла  SH-995',
          img: '002418.jpg',
          desc: 'ProSwissHome  35x35см',
          category: 'napkinhome',
          price: '43,68'
        },
        {
          id: 2203,
          title: 'Тарілка «Цукрова тростина»',
          img: '002203.jpg',
          desc: 'Тарілки 5 шт 26х26 см ',
          category: 'dishes',
          price: '92,70'
        },
        {
          id: 2388,
          title: 'Комплект «Пікнік» для двох «Цукрова тростина» ',
          img: '002388.jpg',
          desc: 'Тарілки 2 шт 26х26,  2 шт 20х20; Виделка 2 шт 16,5 см; Ніж 2 шт 16,5 см',
          category: 'dishes',
          price: '72,12'
        },
        {
          id: 2531,
          title: 'Виделка  «Дерев’яна» ',
          img: '002531.jpg',
          desc: 'Виделка 5 шт 16,5 см ',
          category: 'dishes',
          price: '20,88'
        },
        {
          id: 2227,
          title: 'Ніж  «Дерев’яний» ',
          img: '002227.jpg',
          desc: 'Ніж 5 шт 16,5 см ',
          category: 'dishes',
          price: '17,28'
        },
        {
          id: 3071,
          title: 'Ложка  «Дерев’яна» ',
          img: '003071.jpg',
          desc: 'Ложка 5 шт 16,5 см ',
          category: 'dishes',
          price: '20,88'
        },
        {
          id: 1299,
          title: 'Стаканчик «Цукрова тростина» ',
          img: '001299.jpg',
          desc: 'Стаканчик 5 шт 450 мл',
          category: 'dishes',
          price: '46,44'
        },
        {
          id: 3333,
          title: 'Стаканчик "Пластик" ',
          img: '003333.jpg',
          desc: 'Стакан пластиковий 4 шт. ',
          category: 'dishes',
          price: '180'
        },
        {
          id: 11,
          title: 'Універсальний наір серветок для прибирання MF-11',
          img: '0011.jpg',
          desc: 'Серветка з мікрофібри 30х30; Серветка для скла 35х40; Рушник вафельний 50х40;',
          category: 'napkincar',
          price: '210'
        },
        {
          id: 12,
          title: 'Подушка підголовник, для подорожей',
          img: '0012.jpg',
          desc: 'Велика, рожева "ProSwissCar"',
          category: 'different',
          price: '450'
        },
        {
          id: 13,
          title: 'Подушка підголовник, для подорожей',
          img: '0013.jpg',
          desc: 'Велика, зелена "ProSwissCar"',
          category: 'different',
          price: '450'
        },
        {
          id: 14,
          title: 'Подушка підголовник, для подорожей',
          img: '0012.jpg',
          desc: 'Маленька, рожева "ProSwissCar"',
          category: 'different',
          price: '350'
        },
        {
          id: 15,
          title: 'Подушка підголовник, для подорожей',
          img: '0013.jpg',
          desc: 'Маленька, зелена "ProSwissCar"',
          category: 'different',
          price: '350'
        },
        {
          id: 17,
          title: 'Подушка підголовник, для подорожей',
          img: '0014.jpg',
          desc: 'Велика, жовто-блакитна "ProSwissCar"',
          category: 'different',
          price: '450'
        },
        {
          id: 16,
          title: 'Подушка підголовник, для подорожей',
          img: '0014.jpg',
          desc: 'Маленька, жовто-блакитна "ProSwissCar"',
          category: 'different',
          price: '350'
        },
        {
          id: 22,
          title: 'Брелок світловідбивний, з карабіном',
          img: '0022.jpg',
          desc: '"ProSwissCar"',
          category: 'reflectives',
          price: '40'
        },
        {
          id: 23,
          title: 'Пов`язка світловідбивна, на липучці',
          img: '0023.jpg',
          desc: '"ProSwissCar"',
          category: 'reflectives',
          price: '40'
        },
       
        
        
      ],
      showFullItem: false,
      fullItem: {},
      displayedItemCount: 9,
      message: ""
    };
    this.itemsRef = React.createRef();
    this.state.currentItems = this.state.items.slice(0, this.state.displayedItemCount);
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.showMoreItems = this.showMoreItems.bind(this);
    this.clearMessage = this.clearMessage.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <div ref={this.itemsRef}>
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        </div>
        {this.state.currentItems.length < this.state.items.length && (
          <button className="show-more-button" onClick={this.showMoreItems}>Показати ще</button>
        )}
        <AboutUs />
        <ContactForm orders={this.state.orders} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        {this.state.message && <div className="message">{this.state.message}</div>}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
    } else {
      this.setState({
        currentItems: this.state.items.filter(el => el.category === category)
      });
    }
    this.itemsRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) });
  }

  addToOrder(item) {
    const existingOrder = this.state.orders.find(order => order.id === item.id);

    if (existingOrder) {
      const updatedOrders = this.state.orders.map(order =>
        order.id === item.id ? { ...order, quantity: order.quantity + 1 } : order
      );
      this.setState({ orders: updatedOrders }, () => {
        this.setState({ message: "Товар додано до кошику" });
        setTimeout(this.clearMessage, 3000);
      });
    } else {
      const newItem = { ...item, quantity: 1 };
      this.setState({ orders: [...this.state.orders, newItem] }, () => {
        this.setState({ message: "Товар додано до кошику" });
        setTimeout(this.clearMessage, 3000);
      });
    }
  }

  clearMessage() {
    this.setState({ message: "" });
  }

  showMoreItems() {
    const { displayedItemCount, items } = this.state;
    const newDisplayedItemCount = displayedItemCount + 9;
    this.setState({
      currentItems: items.slice(0, newDisplayedItemCount),
      displayedItemCount: newDisplayedItemCount
    });
  }
}

export default App;



