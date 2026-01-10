
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
    { id: 'simon', label: 'Саймон', type: 'character', group: 'family', chapter: [1,2,3,5,6], description: 'Отец Айлиш, страдающий деменцией ученый.', status: 'missing', details: 'Олицетворяет старую Ирландию, разрушенную новым режимом.' },
    { id: 'jean', label: 'Джин', type: 'character', group: 'family', chapter: [], description: 'Мать Айлиш, умерла до начала событий.' },
    { id: 'aine', label: 'Айне', type: 'character', group: 'family', chapter: [2,6], description: 'Сестра Айлиш, живущая в Канаде.', details: 'Голос разума извне, призывающий к бегству.' },
    { id: 'spencer', label: 'Спенсер', type: 'character', group: 'family', chapter: [2,6], description: 'Собака отца Айлиш, боксер темного окраса.' },
    { id: 'sirsha', label: 'Сирша', type: 'character', group: 'family', chapter: [3], description: 'Кузина Айлиш, невеста на свадьбе.' },

    // --- Friends and Colleagues ---
    { id: 'carol', label: 'Кэрол Секстон', type: 'character', group: 'friend', chapter: [1,2,3,4,5], description: 'Подруга Айлиш, жена арестованного коллеги Ларри.' },
    { id: 'jim_sexton', label: 'Джим Секстон', type: 'character', group: 'friend', chapter: [1], description: 'Районный лидер профсоюза, муж Кэрол, арестован ГСНБ.', status: 'missing' },
    { id: 'michael_given', label: 'Майкл Гивен', type: 'character', group: 'support', chapter: [2], description: 'Профсоюзный адвокат, пытается помочь арестованным.' },
    { id: 'anne_devlin', label: 'Энн Девлин', type: 'character', group: 'support', chapter: [4,5], description: 'Адвокат, специализирующаяся на делах о незаконных арестах.' },
    { id: 'felsner', label: 'Пол Фелснер', type: 'character', group: 'authority', chapter: [1,2,3,4,5], description: 'Менеджер по работе с иностранными клиентами, член ПНЕ, увольняет Айлиш.', details: 'Под давлением ГСНБ увольняет Айлиш.' },
    { id: 'maeve', label: 'Мэйв', type: 'character', group: 'support', chapter: [6,8], description: 'Представитель подпольной организации, помогает с побегом.' },
    { id: 'samantha', label: 'Саманта', type: 'character', group: 'friend', chapter: [3,4,5], description: 'Подруга Марка, девушка, с которой он встречался.' },
    { id: 'rory_oconnor', label: 'Рори О\'Коннор', type: 'character', group: 'authority', chapter: [2], description: 'Старый знакомый Айлиш, теперь член ПНЕ.' },
    { id: 'fintan', label: 'Финтан', type: 'character', group: 'friend', chapter: [2], description: 'Сын Рори О\'Коннора.' },

    // --- Colleagues ---
    { id: 'rohit_singh', label: 'Рохит Сингх', type: 'character', group: 'colleague', chapter: [1,3,4], description: 'Коллега Айлиш, менеджер по работе с иностранными клиентами.', status: 'missing' },
    { id: 'colm_perry', label: 'Колм Перри', type: 'character', group: 'colleague', chapter: [1,3], description: 'Коллега Айлиш, предупреждает об опасности.' },
    { id: 'alice_dili', label: 'Элис Дили', type: 'character', group: 'colleague', chapter: [1,3], description: 'Коллега Айлиш, уволена из компании.' },
    { id: 'mary_newton', label: 'Мэри Ньютон', type: 'character', group: 'colleague', chapter: [3], description: 'Коллега Айлиш по работе.' },
    { id: 'michael_ryan', label: 'Майкл Райан', type: 'character', group: 'colleague', chapter: [3], description: 'Коллега Айлиш по работе.' },
    { id: 'sara_horgan', label: 'Сара Хорган', type: 'character', group: 'colleague', chapter: [4], description: 'Коллега Айлиш по работе.' },
    { id: 'stephen_stocker', label: 'Стивен Стокер', type: 'character', group: 'colleague', chapter: [1], description: 'Управляющий директор компании, уволен, заменен Полом Фелснером.' },

    // --- Neighbors ---
    { id: 'jerry_brennan', label: 'Джерри Бреннан', type: 'character', group: 'neighbor', chapter: [5,6], description: 'Сосед Стэков, бывший архитектор, помогает после нападения.' },
    { id: 'betty_brennan', label: 'Бетти Бреннан', type: 'character', group: 'neighbor', chapter: [5,6], description: 'Жена Джерри, соседка, помогает Айлиш.' },
    { id: 'anna_zeijek', label: 'Анна Зэйджек', type: 'character', group: 'neighbor', chapter: [6], description: 'Соседка Стэков, дом разрушен бомбардировкой.' },
    { id: 'mrs_tully', label: 'Миссис Талли', type: 'character', group: 'neighbor', chapter: [6], description: 'Соседка отца Айлиш, наблюдает за улицей.' },
    { id: 'mrs_gaffney', label: 'Миссис Гаффни', type: 'character', group: 'neighbor', chapter: [6], description: 'Соседка отца Айлиш, заботится о собаке Спенсере.' },
    { id: 'gus_carberry', label: 'Гас Карберри', type: 'character', group: 'neighbor', chapter: [6], description: 'Сосед отца Айлиш.' },
    { id: 'mrs_taft', label: 'Миссис Тафт', type: 'character', group: 'neighbor', chapter: [2], description: 'Уборщица отца Айлиш.' },

    // --- Other Characters ---
    { id: 'issam', label: 'Иссам', type: 'character', group: 'other', chapter: [5], description: 'Владелец кафе "Аламод", кафе закрывается из-за репрессий.' },
    { id: 'paddy_pidgeon', label: 'Пэдди Пиджен', type: 'character', group: 'other', chapter: [5], description: 'Мясник, отказывается обслуживать Айлиш.' },
    { id: 'vinny_pidgeon', label: 'Винни Пиджен', type: 'character', group: 'other', chapter: [5], description: 'Сын мясника Пэдди Пиджена.' },
    { id: 'james_jimmy', label: 'Джеймс (Джимми)', type: 'character', group: 'other', chapter: [7], description: 'Клоун, работает в больнице, помогает доставить Бейли в больницу.' },
    { id: 'gary', label: 'Гэри', type: 'character', group: 'other', chapter: [8,9], description: 'Водитель, встречает Айлиш на границе.' },
    { id: 'elder', label: 'Старший', type: 'character', group: 'other', chapter: [8,9], description: 'Организатор переправы беженцев через границу.' },
    { id: 'mona', label: 'Мона', type: 'character', group: 'other', chapter: [8,9], description: 'Беженка, потеряла мужа и брата, помогает Айлиш в лагере.' },
    { id: 'border_official', label: 'Чиновник на границе', type: 'character', group: 'authority', chapter: [9], description: 'Чиновник на британской границе, требует взятку.' },
    { id: 'morgue_keeper', label: 'Хранитель морга', type: 'character', group: 'other', chapter: [7], description: 'Хранитель морга в военном госпитале, показывает Айлиш тело Бейли.' },
    { id: 'hospital_cleaner', label: 'Уборщик в госпитале', type: 'character', group: 'other', chapter: [7], description: 'Уборщик в госпитале Святого Брисина, советует посмотреть в морге.' },
    { id: 'nurse', label: 'Медсестра', type: 'character', group: 'other', chapter: [7], description: 'Медсестра в больнице Святого Иакова, ухаживает за Бейли.' },
    { id: 'senior_nurse', label: 'Старшая медсестра', type: 'character', group: 'other', chapter: [7], description: 'Старшая медсестра, сообщает о переводе Бейли.' },

    // --- Authorities ---
    { id: 'stamp', label: 'Инспектор Стэмп', type: 'character', group: 'authority', chapter: [1], description: 'Инспектор ГСНБ, детектив, допрашивает Ларри.' },
    { id: 'mrs_stamp', label: 'Миссис Стэмп', type: 'character', group: 'authority', chapter: [1], description: 'Жена инспектора Стэмпа, защищает мужа.' },
    { id: 'burke', label: 'Детектив Берк', type: 'character', group: 'authority', chapter: [1], description: 'Молодой детектив ГСНБ, участвует в допросе Ларри.' },
    { id: 'garda_ferris', label: 'Гарда Феррис', type: 'character', group: 'authority', chapter: [4], description: 'Полицейская, ищет Марка.' },
    { id: 'garda_timmons', label: 'Гарда Тиммонс', type: 'character', group: 'authority', chapter: [4], description: 'Полицейский, ищет Марка, сочувствует семье.' },
    { id: 'dermot_connolly', label: 'Дермот Конноли', type: 'character', group: 'authority', chapter: [2], description: 'Чиновник паспортного стола, отказывает в выдаче паспортов.' },
    { id: 'ruth_nolan', label: 'Рут Нолан', type: 'character', group: 'authority', chapter: [3], description: 'Новая учительница Бейли, назначена партией.' },
    { id: 'mrs_egan', label: 'Миссис Иган', type: 'character', group: 'friend', chapter: [3], description: 'Любимая учительница Бейли, отправлена в отпуск режимом.' },
    { id: 'gsnb', label: 'ГСНБ', type: 'group', group: 'authority', description: 'Государственная служба национальной безопасности.', details: 'Секретная полиция нового режима.' },
    { id: 'pne', label: 'ПНЕ', type: 'group', group: 'authority', description: 'Партия национального единства.', details: 'Правящая партия, установившая тоталитарный режим.' },

    // --- Events Chapter 1 ---
    { id: 'e1_visit', label: 'Визит инспекторов', type: 'event', chapter: 1, description: 'Визит двух сотрудников ГСНБ к дому Айлиш поздним вечером.' },
    { id: 'e1_interrogation', label: 'Допрос Ларри', type: 'event', chapter: 1, description: 'Ларри вызывают на допрос в участок "Гарда Шихана" на Кевин-стрит, допрашивают инспектор Стэмп и детектив Берк.' },
    { id: 'e1_jim_arrest', label: 'Арест Джима Секстона', type: 'event', chapter: 1, description: 'Айлиш узнает об аресте Джима Секстона, районного лидера профсоюза.' },
    { id: 'e1_simon_talk', label: 'Разговор с отцом', type: 'event', chapter: 1, description: 'Разговор с отцом Саймоном о ситуации в стране и Партии национального единства (ПНЕ).' },
    { id: 'e1_supermarket', label: 'Встреча в супермаркете', type: 'event', chapter: 1, description: 'Айлиш встречает инспектора Стэмпа в супермаркете и решает навестить его дома.' },
    { id: 'e1_nightmare', label: 'Ночной кошмар', type: 'event', chapter: 1, description: 'Ночной кошмар: инспектор Стэмп приходит в спальню Айлиш.' },
    { id: 'e1_arrest', label: 'Арест на демонстрации', type: 'event', chapter: 1, description: 'Демонстрация учителей, на которой Ларри арестовывают.' },

    // --- Events Chapter 2 ---
    { id: 'e2_explaining', label: 'Объяснение детям', type: 'event', chapter: 2, description: 'Айлиш пытается объяснить детям отсутствие отца.' },
    { id: 'e2_given_visit', label: 'Визит адвоката', type: 'event', chapter: 2, description: 'Визит адвоката Майкла Гивена, который сообщает, что адвокатов тоже арестовывают.' },
    { id: 'e2_carol_visit', label: 'Визит Кэрол', type: 'event', chapter: 2, description: 'Визит Кэрол Секстон с выпечкой, разговор о пропавших мужьях.' },
    { id: 'e2_rory_meeting', label: 'Встреча с Рори', type: 'event', chapter: 2, description: 'Встреча с Рори О\'Коннором, бывшим знакомым, который теперь член ПНЕ.' },
    { id: 'e2_passport', label: 'Проблемы с паспортами', type: 'event', chapter: 2, description: 'Проблемы с получением паспортов для детей - требуется проверка биографических данных.' },
    { id: 'e2_christmas', label: 'Рождество на побережье', type: 'event', chapter: 2, description: 'Рождество на побережье с детьми.' },
    { id: 'e2_spencer', label: 'Проблемы с отцом и собакой', type: 'event', chapter: 2, description: 'Проблемы с отцом Саймоном, который заводит собаку Спенсера.' },
    { id: 'e2_canada_offer', label: 'Предложение переехать', type: 'event', chapter: 2, description: 'Визит к отцу, который предлагает переехать в Канаду.' },

    // --- Events Chapter 3 ---
    { id: 'e3_summons', label: 'Повестка Марку', type: 'event', chapter: 3, description: 'Марк получает повестку о призыве в армию через неделю после семнадцатилетия.' },
    { id: 'e3_water', label: 'Проблемы с водой', type: 'event', chapter: 3, description: 'Проблемы с водой - из крана течет коричневая вода.' },
    { id: 'e3_medical', label: 'Медицинский осмотр', type: 'event', chapter: 3, description: 'Марк проходит медицинский осмотр в школе.' },
    { id: 'e3_firing', label: 'Увольнение Айлиш', type: 'event', chapter: 3, description: 'Айлиш теряет работу - Пол Фелснер увольняет ее.' },
    { id: 'e3_wedding', label: 'Свадьба кузины', type: 'event', chapter: 3, description: 'Визит к отцу на свадьбу кузины Сирши.' },
    { id: 'e3_videos', label: 'Жестокие видео', type: 'event', chapter: 3, description: 'Марк смотрит жестокие видео обезглавливаний.' },
    { id: 'e3_protest', label: 'Протесты на Колледж-Грин', type: 'event', chapter: 3, description: 'Протесты на Колледж-Грин - массовая демонстрация против режима.' },
    { id: 'e3_white_clothes', label: 'Протест в белой одежде', type: 'event', chapter: 3, description: 'Айлиш с детьми присоединяется к протестам в белой одежде.' },
    { id: 'e3_night_breakup', label: 'Ночной разгон протестов', type: 'event', chapter: 3, description: 'Ночной разгон протестов силами безопасности.' },
    { id: 'e3_mark_disappears', label: 'Исчезновение Марка', type: 'event', chapter: 3, description: 'Марк исчезает после протестов.' },

    // --- Events Chapter 4 ---
    { id: 'e4_birthday', label: 'День рождения Марка', type: 'event', chapter: 4, description: 'День рождения Марка в ресторане.' },
    { id: 'e4_boarding_school', label: 'Решение об интернате', type: 'event', chapter: 4, description: 'Айлиш решает отправить Марка в школу-интернат за границу.' },
    { id: 'e4_carol_apartment', label: 'Марк переезжает к Кэрол', type: 'event', chapter: 4, description: 'Марк переезжает в квартиру Кэрол Секстон, скрываясь от призыва.' },
    { id: 'e4_phones', label: 'Покупка телефонов', type: 'event', chapter: 4, description: 'Айлиш покупает предоплаченные телефоны для связи с Марком.' },
    { id: 'e4_work_exclusion', label: 'Исключение из совещаний', type: 'event', chapter: 4, description: 'Проблемы на работе - Айлиш исключают из совещаний.' },
    { id: 'e4_rohit_arrest', label: 'Арест Рохита', type: 'event', chapter: 4, description: 'Арест Рохита Сингха.' },
    { id: 'e4_police_visit', label: 'Визит полиции', type: 'event', chapter: 4, description: 'Визит полиции к дому Айлиш - поиски Марка.' },
    { id: 'e4_lie', label: 'Ложь полиции', type: 'event', chapter: 4, description: 'Айлиш лжет полиции, что Марк уехал учиться в Северную Ирландию.' },
    { id: 'e4_newspaper', label: 'Марк в списке', type: 'event', chapter: 4, description: 'Марк появляется в списке уклоняющихся от призыва в газете.' },
    { id: 'e4_mark_leaves', label: 'Марк уходит к повстанцам', type: 'event', chapter: 4, description: 'Марк исчезает из квартиры Кэрол, присоединяется к повстанцам.' },

    // --- Events Chapter 5 ---
    { id: 'e5_vandalism', label: 'Ночное нападение', type: 'event', chapter: 5, description: 'Ночное нападение на дом Айлиш - вандалы разбивают машину и пишут "ПРИДАТЕЛЬ" на стенах.' },
    { id: 'e5_bedwetting', label: 'Энурез Бейли', type: 'event', chapter: 5, description: 'Бейли начинает мочиться в постель.' },
    { id: 'e5_firing', label: 'Увольнение Айлиш', type: 'event', chapter: 5, description: 'Айлиш увольняют с работы.' },
    { id: 'e5_anne_visit', label: 'Визит Энн Девлин', type: 'event', chapter: 5, description: 'Визит Энн Девлин, которая сообщает, что не может найти Ларри.' },
    { id: 'e5_car_sale', label: 'Продажа машины', type: 'event', chapter: 5, description: 'Айлиш продает машину из-за финансовых проблем.' },
    { id: 'e5_food_shortage', label: 'Проблемы с продуктами', type: 'event', chapter: 5, description: 'Проблемы с продуктами - очереди, дефицит.' },
    { id: 'e5_carol_cafe', label: 'Встреча с Кэрол в кафе', type: 'event', chapter: 5, description: 'Встреча с Кэрол Секстон в кафе, где та показывает фотографии пропавших мужей.' },
    { id: 'e5_carol_revelation', label: 'Откровение Кэрол', type: 'event', chapter: 5, description: 'Кэрол говорит, что мужья мертвы и что Марк присоединился к повстанцам.' },
    { id: 'e5_water_cans', label: 'Кража канистр', type: 'event', chapter: 5, description: 'Бейли ворует канистры для воды.' },
    { id: 'e5_butcher', label: 'Проблемы с мясником', type: 'event', chapter: 5, description: 'Проблемы с мясной лавкой - мясник игнорирует Айлиш.' },

    // --- Events Chapter 6 ---
    { id: 'e6_war_begins', label: 'Начало войны', type: 'event', chapter: 6, description: 'Начало боевых действий - обстрелы, авианалеты.' },
    { id: 'e6_simon_dementia', label: 'Проблемы с отцом', type: 'event', chapter: 6, description: 'Проблемы с отцом Саймоном - он теряет память, курит снова.' },
    { id: 'e6_maeve_visit', label: 'Визит Мэйв', type: 'event', chapter: 6, description: 'Визит Мэйв - женщины, которая предлагает вывезти семью из страны (от Айне).' },
    { id: 'e6_money_refusal', label: 'Отказ от денег', type: 'event', chapter: 6, description: 'Айлиш получает деньги от сестры, но отказывается уезжать.' },
    { id: 'e6_checkpoint', label: 'Переход через блокпост', type: 'event', chapter: 6, description: 'Переход через блокпост на правительственную сторону за продуктами.' },
    { id: 'e6_mark_visit', label: 'Марк у отца', type: 'event', chapter: 6, description: 'Марк появляется у отца, помогает в саду.' },
    { id: 'e6_shelling', label: 'Артобстрелы', type: 'event', chapter: 6, description: 'Артобстрелы города, обстрелы дома.' },
    { id: 'e6_power_out', label: 'Отключение электричества', type: 'event', chapter: 6, description: 'Электричество отключается.' },
    { id: 'e6_simon_disappears', label: 'Исчезновение отца', type: 'event', chapter: 6, description: 'Отец Саймон исчезает - звонит, говорит, что мать ушла.' },
    { id: 'e6_simon_search', label: 'Поиски отца', type: 'event', chapter: 6, description: 'Айлиш не может найти отца.' },

    // --- Events Chapter 7 ---
    { id: 'e7_airstrike', label: 'Авиаудар по району', type: 'event', chapter: 7, description: 'Авианалет на улицу - разрушение домов, в том числе дома Зэйджеков.' },
    { id: 'e7_bailey_wounded', label: 'Ранение Бейли', type: 'event', chapter: 7, description: 'Бейли ранен осколком в голову во время авианалета.' },
    { id: 'e7_hospital_ride', label: 'Поездка в больницу', type: 'event', chapter: 7, description: 'Айлиш везет Бейли в больницу Святого Иакова.' },
    { id: 'e7_surgery', label: 'Операция', type: 'event', chapter: 7, description: 'Операция по удалению осколка.' },
    { id: 'e7_transfer', label: 'Перевод в военный госпиталь', type: 'event', chapter: 7, description: 'Бейли переводят в военный госпиталь Святого Брисина.' },
    { id: 'e7_search', label: 'Поиски Бейли', type: 'event', chapter: 7, description: 'Айлиш не может найти Бейли в госпитале.' },
    { id: 'e7_morgue', label: 'Морг', type: 'event', chapter: 7, description: 'Айлиш идет в морг и находит тело Бейли - он был замучен до смерти.' },
    { id: 'e7_torture', label: 'Следы пыток', type: 'event', chapter: 7, description: 'Айлиш видит следы пыток на теле сына.' },

    // --- Events Chapter 8 ---
    { id: 'e8_escape_decision', label: 'Решение бежать', type: 'event', chapter: 8, description: 'Айлиш решает бежать из страны с Молли и Беном.' },
    { id: 'e8_border_crossing', label: 'Переход через границу', type: 'event', chapter: 8, description: 'Переход через границу - множество блокпостов, взятки.' },
    { id: 'e8_gary_meeting', label: 'Встреча с Гэри', type: 'event', chapter: 8, description: 'Встреча с Гэри, который должен переправить их.' },
    { id: 'e8_factory', label: 'Переезд на заводской двор', type: 'event', chapter: 8, description: 'Переезд в фургоне на заводской двор.' },
    { id: 'e8_refugee_camp', label: 'Лагерь для беженцев', type: 'event', chapter: 8, description: 'Жизнь в лагере для беженцев - сорок семь человек в одном цехе.' },
    { id: 'e8_camp_problems', label: 'Проблемы в лагере', type: 'event', chapter: 8, description: 'Проблемы с едой, туалетом, гигиеной.' },
    { id: 'e8_sick_baby', label: 'Больной младенец', type: 'event', chapter: 8, description: 'Больной младенец, родители которого не могут получить помощь.' },
    { id: 'e8_mona', label: 'Встреча с Моной', type: 'event', chapter: 8, description: 'Мона - женщина, которая потеряла мужа и брата.' },
    { id: 'e8_preparation', label: 'Подготовка к отъезду', type: 'event', chapter: 8, description: 'Подготовка к отъезду - нужно оставить большую часть багажа.' },
    { id: 'e8_departure', label: 'Отъезд ночью', type: 'event', chapter: 8, description: 'Отъезд ночью в контейнере на тягаче.' },
    { id: 'e8_beach', label: 'Прибытие на пляж', type: 'event', chapter: 8, description: 'Прибытие на пляж для переправы через море.' },

    // --- Events Chapter 9 ---
    { id: 'e9_waiting', label: 'Ожидание на автостраде', type: 'event', chapter: 9, description: 'Ожидание на автостраде - гуманитарный коридор закрыт.' },
    { id: 'e9_walk', label: 'Пеший переход к границе', type: 'event', chapter: 9, description: 'Пеший переход к границе.' },
    { id: 'e9_british_checkpoint', label: 'Британский КПП', type: 'event', chapter: 9, description: 'Прохождение британского контрольно-пропускного пункта.' },
    { id: 'e9_interview', label: 'Собеседование с чиновником', type: 'event', chapter: 9, description: 'Собеседование с чиновником, требующим взятку.' },
    { id: 'e9_haircut', label: 'Стрижка волос', type: 'event', chapter: 9, description: 'Айлиш стрижет волосы себе и Молли, чтобы защитить дочь.' },
    { id: 'e9_crossing', label: 'Переправа через море', type: 'event', chapter: 9, description: 'Переправа через море на надувных лодках.' },
    { id: 'e9_final', label: 'Финал', type: 'event', chapter: 9, description: 'Айлиш с детьми отправляется в новую жизнь.' }
  ],
  links: [
    // --- Family ---
    { source: 'ailish', target: 'larry', label: 'Супруги', description: 'Основа семьи, разрушенная режимом.' },
    { source: 'ailish', target: 'mark', label: 'Мать и сын', description: 'Айлиш пытается удержать Марка от войны.' },
    { source: 'ailish', target: 'molly', label: 'Мать и дочь', description: 'Вместе проходят через все ужасы осады.' },
    { source: 'ailish', target: 'bailey', label: 'Мать и сын', description: 'Ее вечная боль и вина.' },
    { source: 'ailish', target: 'ben', label: 'Мать и сын', description: 'Младенец, символ надежды.' },
    { source: 'ailish', target: 'simon', label: 'Дочь и отец', description: 'Забота о деменции в условиях войны.' },
    { source: 'ailish', target: 'jean', label: 'Дочь и мать', description: 'Воспоминания об умершей матери.' },
    { source: 'ailish', target: 'aine', label: 'Сестры', description: 'Связь с миром, где еще жив закон.' },
    { source: 'simon', target: 'spencer', label: 'Хозяин и собака', description: 'Собака для защиты от незваных гостей.' },
    { source: 'mark', target: 'samantha', label: 'Парень и девушка', description: 'Подруга Марка.' },

    // --- Authority & Conflict ---
    { source: 'stamp', target: 'gsnb', label: 'Сотрудник' },
    { source: 'stamp', target: 'mrs_stamp', label: 'Муж и жена' },
    { source: 'burke', target: 'gsnb', label: 'Сотрудник' },
    { source: 'garda_ferris', target: 'gsnb', label: 'Сотрудник' },
    { source: 'garda_timmons', target: 'gsnb', label: 'Сотрудник' },
    { source: 'gsnb', target: 'larry', label: 'Арест' },
    { source: 'gsnb', target: 'jim_sexton', label: 'Арест' },
    { source: 'gsnb', target: 'mark', label: 'Розыск' },
    { source: 'gsnb', target: 'rohit_singh', label: 'Арест' },
    { source: 'felsner', target: 'pne', label: 'Член партии' },
    { source: 'felsner', target: 'ailish', label: 'Работодатель', description: 'Трагедия конформизма под давлением.' },
    { source: 'rory_oconnor', target: 'pne', label: 'Член партии' },
    { source: 'rory_oconnor', target: 'fintan', label: 'Отец и сын' },
    { source: 'dermot_connolly', target: 'gsnb', label: 'Сотрудник' },
    { source: 'ruth_nolan', target: 'pne', label: 'Назначена партией' },

    // --- Event Links ---
    { source: 'ailish', target: 'e1_visit', label: 'Участник' },
    { source: 'stamp', target: 'e1_visit', label: 'Инициатор' },
    { source: 'burke', target: 'e1_visit', label: 'Участник' },
    { source: 'larry', target: 'e1_interrogation', label: 'Допрашиваемый' },
    { source: 'stamp', target: 'e1_interrogation', label: 'Допрашивающий' },
    { source: 'larry', target: 'e1_arrest', label: 'Жертва' },
    { source: 'gsnb', target: 'e1_arrest', label: 'Арестовывает' },
    
    { source: 'ailish', target: 'e2_explaining', label: 'Объясняет' },
    { source: 'ailish', target: 'e2_work_tension', label: 'Жертва' },
    { source: 'rohit_singh', target: 'e2_work_tension', label: 'Коллега' },
    { source: 'colm_perry', target: 'e2_work_tension', label: 'Коллега' },
    { source: 'alice_dili', target: 'e2_work_tension', label: 'Коллега' },
    { source: 'anne_devlin', target: 'e2_advocate_meeting', label: 'Консультант' },
    { source: 'ailish', target: 'e2_advocate_meeting', label: 'Клиент' },

    { source: 'mark', target: 'e3_summons', label: 'Получает повестку' },
    { source: 'mark', target: 'e3_medical', label: 'Проходит осмотр' },
    { source: 'ailish', target: 'e3_white_clothes', label: 'Участник протеста' },
    { source: 'molly', target: 'e3_white_clothes', label: 'Участник протеста' },
    { source: 'bailey', target: 'e3_white_clothes', label: 'Участник протеста' },
    { source: 'gsnb', target: 'e3_night_breakup', label: 'Разгоняет' },

    { source: 'mark', target: 'e4_birthday', label: 'Именинник' },
    { source: 'ailish', target: 'e4_boarding_school', label: 'Решает' },
    { source: 'ailish', target: 'e4_phones', label: 'Покупает' },
    { source: 'ailish', target: 'e4_work_exclusion', label: 'Исключена' },
    { source: 'ailish', target: 'e4_lie', label: 'Лжет' },

    { source: 'ailish', target: 'e5_vandalism', label: 'Жертва' },
    { source: 'jerry_brennan', target: 'e5_vandalism', label: 'Помогает' },
    { source: 'ailish', target: 'e5_car_sale', label: 'Продает' },
    { source: 'ailish', target: 'e5_food_shortage', label: 'Страдает' },

    { source: 'ailish', target: 'e6_war_begins', label: 'Свидетель' },
    { source: 'ailish', target: 'e6_checkpoint', label: 'Переходит' },
    { source: 'ailish', target: 'e6_shelling', label: 'Страдает' },
    { source: 'ailish', target: 'e6_power_out', label: 'Страдает' },
    { source: 'ailish', target: 'e6_simon_search', label: 'Ищет' },

    { source: 'ailish', target: 'e7_hospital_ride', label: 'Везет' },
    { source: 'ailish', target: 'e7_search', label: 'Ищет' },
    { source: 'ailish', target: 'e7_morgue', label: 'Находит тело' },
    { source: 'ailish', target: 'e7_torture', label: 'Видит следы' },

    { source: 'ailish', target: 'e8_escape_decision', label: 'Решает' },
    { source: 'ailish', target: 'e8_border_crossing', label: 'Переходит' },
    { source: 'ailish', target: 'e8_factory', label: 'Переезжает' },
    { source: 'ailish', target: 'e8_refugee_camp', label: 'В лагере' },
    { source: 'molly', target: 'e8_refugee_camp', label: 'В лагере' },
    { source: 'ben', target: 'e8_refugee_camp', label: 'В лагере' },
    { source: 'ailish', target: 'e8_preparation', label: 'Готовится' },
    { source: 'ailish', target: 'e8_departure', label: 'Уезжает' },
    { source: 'ailish', target: 'e8_beach', label: 'Прибывает' },

    { source: 'ailish', target: 'e9_waiting', label: 'Ожидает' },
    { source: 'ailish', target: 'e9_walk', label: 'Идет' },
    { source: 'molly', target: 'e9_walk', label: 'Идет' },
    { source: 'ben', target: 'e9_walk', label: 'Идет' },
    { source: 'ailish', target: 'e9_british_checkpoint', label: 'Проходит' },
    { source: 'ailish', target: 'e9_interview', label: 'Собеседуется' },
    { source: 'ailish', target: 'e9_haircut', label: 'Стрижется' },
    { source: 'ailish', target: 'e9_crossing', label: 'Переправляется' },
    { source: 'molly', target: 'e9_crossing', label: 'Переправляется' },
    { source: 'ben', target: 'e9_crossing', label: 'Переправляется' },
    { source: 'ailish', target: 'e9_final', label: 'Участник' },
    { source: 'molly', target: 'e9_final', label: 'Участник' },
    { source: 'ben', target: 'e9_final', label: 'Участник' },

    // --- Friends and Support ---
    { source: 'carol', target: 'jim_sexton', label: 'Муж и жена' },
    { source: 'michael_given', target: 'larry', label: 'Коллеги по профсоюзу' },
    { source: 'anne_devlin', target: 'ailish', label: 'Адвокат и клиент' },
    { source: 'maeve', target: 'aine', label: 'Работает на Айне' },
    { source: 'carol', target: 'mark', label: 'Предоставляет убежище' },

    // --- Colleagues ---
    { source: 'rohit_singh', target: 'ailish', label: 'Коллеги' },
    { source: 'colm_perry', target: 'ailish', label: 'Коллеги' },
    { source: 'alice_dili', target: 'ailish', label: 'Коллеги' },
    { source: 'mary_newton', target: 'ailish', label: 'Коллеги' },
    { source: 'michael_ryan', target: 'ailish', label: 'Коллеги' },
    { source: 'sara_horgan', target: 'ailish', label: 'Коллеги' },
    { source: 'stephen_stocker', target: 'felsner', label: 'Заменен' },

    // --- Neighbors ---
    { source: 'jerry_brennan', target: 'betty_brennan', label: 'Муж и жена' },
    { source: 'jerry_brennan', target: 'ailish', label: 'Помогает соседке' },
    { source: 'betty_brennan', target: 'ailish', label: 'Помогает соседке' },
    { source: 'mrs_tully', target: 'simon', label: 'Соседка' },
    { source: 'mrs_gaffney', target: 'simon', label: 'Соседка' },
    { source: 'mrs_gaffney', target: 'spencer', label: 'Заботится о собаке' },
    { source: 'gus_carberry', target: 'simon', label: 'Сосед' },

    // --- Event Links Chapter 1 ---
    { source: 'burke', target: 'e1_interrogation', label: 'Участник допроса' },
    { source: 'jim_sexton', target: 'e1_jim_arrest', label: 'Жертва' },
    { source: 'simon', target: 'e1_simon_talk', label: 'Участник' },
    { source: 'mrs_stamp', target: 'e1_supermarket', label: 'Участник' },
    { source: 'stamp', target: 'e1_nightmare', label: 'В кошмаре' },

    // --- Event Links Chapter 2 ---
    { source: 'michael_given', target: 'e2_given_visit', label: 'Визитер' },
    { source: 'carol', target: 'e2_carol_visit', label: 'Визитер' },
    { source: 'rory_oconnor', target: 'e2_rory_meeting', label: 'Участник' },
    { source: 'dermot_connolly', target: 'e2_passport', label: 'Отказывает' },
    { source: 'spencer', target: 'e2_spencer', label: 'Новая собака' },
    { source: 'simon', target: 'e2_canada_offer', label: 'Предлагает' },

    // --- Event Links Chapter 3 ---
    { source: 'mark', target: 'e3_summons', label: 'Получает повестку' },
    { source: 'felsner', target: 'e3_firing', label: 'Увольняет' },
    { source: 'sirsha', target: 'e3_wedding', label: 'Невеста' },
    { source: 'mark', target: 'e3_videos', label: 'Смотрит' },
    { source: 'ailish', target: 'e3_white_clothes', label: 'Участник протеста' },
    { source: 'molly', target: 'e3_white_clothes', label: 'Участник протеста' },
    { source: 'bailey', target: 'e3_white_clothes', label: 'Участник протеста' },
    { source: 'mark', target: 'e3_mark_disappears', label: 'Исчезает' },

    // --- Event Links Chapter 4 ---
    { source: 'mark', target: 'e4_birthday', label: 'Именинник' },
    { source: 'carol', target: 'e4_carol_apartment', label: 'Предоставляет квартиру' },
    { source: 'rohit_singh', target: 'e4_rohit_arrest', label: 'Арестован' },
    { source: 'garda_ferris', target: 'e4_police_visit', label: 'Ищет Марка' },
    { source: 'garda_timmons', target: 'e4_police_visit', label: 'Ищет Марка' },
    { source: 'mark', target: 'e4_mark_leaves', label: 'Уходит к повстанцам' },

    // --- Event Links Chapter 5 ---
    { source: 'bailey', target: 'e5_bedwetting', label: 'Страдает' },
    { source: 'felsner', target: 'e5_firing', label: 'Увольняет' },
    { source: 'anne_devlin', target: 'e5_anne_visit', label: 'Визитер' },
    { source: 'carol', target: 'e5_carol_cafe', label: 'Встреча' },
    { source: 'carol', target: 'e5_carol_revelation', label: 'Откровение' },
    { source: 'bailey', target: 'e5_water_cans', label: 'Ворует' },
    { source: 'paddy_pidgeon', target: 'e5_butcher', label: 'Игнорирует' },
    { source: 'issam', target: 'e5_carol_cafe', label: 'Владелец кафе' },

    // --- Event Links Chapter 6 ---
    { source: 'simon', target: 'e6_simon_dementia', label: 'Теряет память' },
    { source: 'maeve', target: 'e6_maeve_visit', label: 'Визитер' },
    { source: 'aine', target: 'e6_money_refusal', label: 'Отправляет деньги' },
    { source: 'mark', target: 'e6_mark_visit', label: 'Появляется' },
    { source: 'simon', target: 'e6_simon_disappears', label: 'Исчезает' },
    { source: 'anna_zeijek', target: 'e7_airstrike', label: 'Дом разрушен' },

    // --- Event Links Chapter 7 ---
    { source: 'bailey', target: 'e7_bailey_wounded', label: 'Ранен' },
    { source: 'james_jimmy', target: 'e7_hospital_ride', label: 'Помогает' },
    { source: 'nurse', target: 'e7_surgery', label: 'Ухаживает' },
    { source: 'senior_nurse', target: 'e7_transfer', label: 'Сообщает о переводе' },
    { source: 'hospital_cleaner', target: 'e7_search', label: 'Советует' },
    { source: 'morgue_keeper', target: 'e7_morgue', label: 'Показывает тело' },
    { source: 'bailey', target: 'e7_torture', label: 'Замучен' },

    // --- Event Links Chapter 8 ---
    { source: 'gary', target: 'e8_gary_meeting', label: 'Встречает' },
    { source: 'elder', target: 'e8_refugee_camp', label: 'Организует' },
    { source: 'mona', target: 'e8_mona', label: 'Встреча' },
    { source: 'mona', target: 'e8_refugee_camp', label: 'В лагере' },
    { source: 'elder', target: 'e8_departure', label: 'Организует отъезд' },

    // --- Event Links Chapter 9 ---
    { source: 'gary', target: 'e9_walk', label: 'Проводник' },
    { source: 'border_official', target: 'e9_interview', label: 'Проводит собеседование' },
    { source: 'mona', target: 'e9_haircut', label: 'Помогает стричь' },
    { source: 'elder', target: 'e9_crossing', label: 'Организует переправу' },
    { source: 'molly', target: 'e9_haircut', label: 'Стрижется' },
    { source: 'molly', target: 'e9_crossing', label: 'Переправляется' }
  ]
};

