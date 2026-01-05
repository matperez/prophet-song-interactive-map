
import { BookData } from './types';

export const PROPHET_SONG_DATA: BookData = {
  nodes: [
    // --- Characters ---
    { id: 'ailish', label: 'Айлиш Стэк', type: 'character', group: 'family', chapter: [1,2,3,4,5,6,7,8,9], description: 'Мать, жена и микробиолог, пытающаяся сохранить семью в распадающемся обществе.', status: 'escaped', details: 'Ее путь — это путь от отрицания к полному осознанию трагедии.' },
    { id: 'larry', label: 'Ларри Стэк', type: 'character', group: 'family', chapter: [1], description: 'Муж Айлиш, профсоюзный лидер, чей арест запускает цепь событий.', status: 'missing', details: 'Пропал после задержания ГСНБ в самом начале книги.' },
    { id: 'mark', label: 'Марк Стэк', type: 'character', group: 'family', chapter: [1,2,3,4,5,6], description: 'Старший сын, подросток, вынужденный скрываться от призыва.', status: 'missing', details: 'Ушел в сопротивление после месяцев жизни в подполье.' },
    { id: 'molly', label: 'Молли Стэк', type: 'character', group: 'family', chapter: [1,2,3,4,5,6,7,8,9], description: 'Дочь-подросток, страдающая от депрессии и панических атак.', status: 'escaped', details: 'Символ потерянной юности в условиях диктатуры.' },
    { id: 'bailey', label: 'Бейли Стэк', type: 'character', group: 'family', chapter: [1,2,3,4,5,6,7], description: 'Младший сын, чья жизнь трагически обрывается во время войны.', status: 'dead', details: 'Ранен осколком и замучен в переполненном госпитале.' },
    { id: 'ben', label: 'Бен Стэк', type: 'character', group: 'family', chapter: [1,2,3,4,5,6,7,8,9], description: 'Младенец, чье присутствие напоминает Айлиш о хрупкости жизни.', status: 'escaped' },
    { id: 'simon', label: 'Саймон', type: 'character', group: 'family', chapter: [1,2,5,8], description: 'Отец Айлиш, страдающий деменцией ученый.', status: 'missing', details: 'Олицетворяет старую Ирландию, разрушенную новым режимом.' },
    { id: 'aine', label: 'Айне', type: 'character', group: 'family', chapter: [1,4,7,9], description: 'Сестра Айлиш, живущая в Канаде.', details: 'Голос разума извне, призывающий к бегству.' },

    // --- Friends and Colleagues ---
    { id: 'carol', label: 'Кэрол Секстон', type: 'character', group: 'friend', chapter: [3,4,5], description: 'Подруга Айлиш, жена арестованного коллеги Ларри.' },
    { id: 'michael_given', label: 'Майкл Гивен', type: 'character', group: 'support', chapter: [2,3], description: 'Коллега Ларри по профсоюзу.' },
    { id: 'anne_devlin', label: 'Энн Девлин', type: 'character', group: 'support', chapter: [2], description: 'Адвокат, пытающаяся помочь с делом Ларри.' },
    { id: 'felsner', label: 'Пол Фелснер', type: 'character', group: 'authority', chapter: [2,5], description: 'Начальник Айлиш в лаборатории.', details: 'Под давлением ГСНБ увольняет Айлиш.' },
    { id: 'maeve', label: 'Мэйв', type: 'character', group: 'support', chapter: [7,9], description: 'Связная повстанцев, помогающая с побегом.' },

    // --- Authorities ---
    { id: 'stamp', label: 'Инспектор Стэмп', type: 'character', group: 'authority', chapter: [1,5], description: 'Сотрудник ГСНБ, преследующий семью Стэков.' },
    { id: 'gsnb', label: 'ГСНБ', type: 'group', group: 'authority', description: 'Государственная служба надзора и безопасности.', details: 'Секретная полиция нового режима.' },

    // --- Events Chapter 1 ---
    { id: 'e1_visit', label: 'Визит инспекторов', type: 'event', chapter: 1, description: 'Стэмп и его напарник приходят к Айлиш в поисках Ларри.' },
    { id: 'e1_arrest', label: 'Арест на митинге', type: 'event', chapter: 1, description: 'Ларри арестован во время забастовки учителей.' },

    // --- Events Chapter 2 ---
    { id: 'e2_new_law', label: 'Закон о Чрезвычайных Полномочиях', type: 'event', chapter: 2, description: 'Правительство принимает закон, отменяющий гражданские права.' },
    { id: 'e2_work_tension', label: 'Давление на работе', type: 'event', chapter: 2, description: 'Айлиш понимает, что ее коллеги боятся с ней разговаривать из-за мужа.' },
    { id: 'e2_advocate_meeting', label: 'Встреча с Энн Девлин', type: 'event', chapter: 2, description: 'Попытка найти юридический путь спасения Ларри оказывается тупиком.' },

    // --- Events Chapter 3 ---
    { id: 'e3_protest_violence', label: 'Разгон демонстрации', type: 'event', chapter: 3, description: 'Мирный протест на улицах Дублина заканчивается стрельбой и хаосом.' },
    { id: 'e3_propaganda', label: 'Усиление пропаганды', type: 'event', chapter: 3, description: 'Государственные СМИ начинают демонизировать "врагов народа".' },

    // --- Events Chapter 4 ---
    { id: 'e4_summons', label: 'Повестка для Марка', type: 'event', chapter: 4, description: 'Марк получает уведомление о призыве в армию режима.' },
    { id: 'e4_hiding_decision', label: 'Решение прятать сына', type: 'event', chapter: 4, description: 'Айлиш и Саймон обсуждают, как спасти Марка от фронта.' },
    { id: 'e4_family_rift', label: 'Разногласия с Айне', type: 'event', chapter: 4, description: 'Ссора по телефону о необходимости немедленного отъезда.' },

    // --- Events Chapter 5 ---
    { id: 'e5_raid', label: 'Ночной обыск', type: 'event', chapter: 5, description: 'ГСНБ переворачивает дом Стэков в поисках укрывающегося Марка.' },
    { id: 'e5_firing', label: 'Увольнение Айлиш', type: 'event', chapter: 5, description: 'Пол Фелснер вынужден уволить Айлиш, чтобы спасти лабораторию.' },

    // --- Events Chapter 6 ---
    { id: 'e6_rebellion', label: 'Восстание', type: 'event', chapter: 6, description: 'В городе начинаются открытые боевые действия между армией и повстанцами.' },
    { id: 'e6_mark_departure', label: 'Уход Марка', type: 'event', chapter: 6, description: 'Марк тайно покидает дом, чтобы сражаться на стороне сопротивления.' },

    // --- Events Chapter 7 ---
    { id: 'e7_airstrike', label: 'Авиаудар по району', type: 'event', chapter: 7, description: 'Бомбардировка жилых кварталов. Бейли ранен.' },
    { id: 'e7_hospital_horror', label: 'Трагедия в госпитале', type: 'event', chapter: 7, description: 'Айлиш находит Бейли в аду переполненного госпиталя, где он умирает.' },

    // --- Events Chapter 8 ---
    { id: 'e8_siege', label: 'Осада Дублина', type: 'event', chapter: 8, description: 'Город полностью отрезан, нет электричества и воды.' },
    { id: 'e8_cellar_life', label: 'Жизнь в подвале', type: 'event', chapter: 8, description: 'Айлиш, Молли и Бен прячутся от обстрелов в сыром подвале.' },
    { id: 'e8_famine', label: 'Голод', type: 'event', chapter: 8, description: 'Поиск еды становится смертельно опасным квестом.' },
    { id: 'e8_simon_house_loss', label: 'Разрушение дома Саймона', type: 'event', chapter: 8, description: 'Дом отца Айлиш уничтожен, связь с ним окончательно потеряна.' },

    // --- Events Chapter 9 ---
    { id: 'e9_checkpoints', label: 'Дорога к морю', type: 'event', chapter: 9, description: 'Опасный переход через разрушенные блокпосты.' },
    { id: 'e9_the_boat', label: 'Последняя лодка', type: 'event', chapter: 9, description: 'Айлиш отдает последние деньги за место в лодке в неизвестность.' }
  ],
  links: [
    // --- Family ---
    { source: 'ailish', target: 'larry', label: 'Супруги', description: 'Основа семьи, разрушенная режимом.' },
    { source: 'ailish', target: 'mark', label: 'Мать и сын', description: 'Айлиш пытается удержать Марка от войны.' },
    { source: 'ailish', target: 'molly', label: 'Мать и дочь', description: 'Вместе проходят через все ужасы осады.' },
    { source: 'ailish', target: 'bailey', label: 'Мать и сын', description: 'Ее вечная боль и вина.' },
    { source: 'ailish', target: 'simon', label: 'Дочь и отец', description: 'Забота о деменции в условиях войны.' },
    { source: 'ailish', target: 'aine', label: 'Сестры', description: 'Связь с миром, где еще жив закон.' },

    // --- Authority & Conflict ---
    { source: 'stamp', target: 'gsnb', label: 'Сотрудник' },
    { source: 'gsnb', target: 'larry', label: 'Арест' },
    { source: 'gsnb', target: 'mark', label: 'Розыск' },
    { source: 'felsner', target: 'ailish', label: 'Работодатель', description: 'Трагедия конформизма под давлением.' },

    // --- Event Links ---
    { source: 'ailish', target: 'e1_visit', label: 'Участник' },
    { source: 'stamp', target: 'e1_visit', label: 'Инициатор' },
    { source: 'larry', target: 'e1_arrest', label: 'Жертва' },
    
    { source: 'ailish', target: 'e2_work_tension', label: 'Жертва' },
    { source: 'anne_devlin', target: 'e2_advocate_meeting', label: 'Консультант' },
    { source: 'ailish', target: 'e2_advocate_meeting', label: 'Клиент' },

    { source: 'mark', target: 'e4_summons', label: 'Адресат' },
    { source: 'ailish', target: 'e4_hiding_decision', label: 'Инициатор' },
    { source: 'simon', target: 'e4_hiding_decision', label: 'Советник' },

    { source: 'gsnb', target: 'e5_raid', label: 'Исполнитель' },
    { source: 'ailish', target: 'e5_firing', label: 'Жертва' },
    { source: 'felsner', target: 'e5_firing', label: 'Исполнитель' },

    { source: 'mark', target: 'e6_mark_departure', label: 'Участник' },
    
    { source: 'bailey', target: 'e7_airstrike', label: 'Жертва' },
    { source: 'ailish', target: 'e7_hospital_horror', label: 'Свидетель' },

    { source: 'ailish', target: 'e8_cellar_life', label: 'Участник' },
    { source: 'molly', target: 'e8_cellar_life', label: 'Участник' },
    { source: 'simon', target: 'e8_simon_house_loss', label: 'Жертва' },

    { source: 'maeve', target: 'e9_checkpoints', label: 'Проводник' },
    { source: 'ailish', target: 'e9_the_boat', label: 'Пассажир' },
    { source: 'ben', target: 'e9_the_boat', label: 'Пассажир' }
  ]
};

