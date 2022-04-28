let language = {
    'ru': {
        "main-text": "Быстро и безопасно проведём вашу сделку в сфере криптовалют",
    
        "advantage-1-header": "Безопасность",
        "advantage-1-text": "При использовании нашего сервиса, ваши деньги будут в безопасности на протяжении всей сделки.",
        "advantage-2-header": "Доверие",
        "advantage-2-text": "За 4 года работы мы успешно провели более 13000 сделок. Нам доверяет более 58000 человек.",
        "advantage-3-header": "Стоимость и качество",
        "advantage-3-text": "За проведение сделки мы берём минимальную фиксированную плату — 1%.",
        "advantage-4-header": "Скорость",
        "advantage-4-text": "Наши профессиональные гаранты проведут вашу сделку максимально быстро и качественно.",
        "advantage-5-header": "Выбор криптовалюты",
        "advantage-5-text": "Мы работаем со всеми популярными криптовалютами.",
    
        "review-1": "Покупал кроссы для STEPN, всё прошло гладко",
        "review-2": "Гарант суперский! Большая сумма, комиссия очень маленькая, советую 👍🏻",
        "review-3": "Из всех известных мне гарантских сервисов в крипте, этот самый качественный",
        "review-4": "Сделку провели качественно, подход профессиональный. Обращался уже 3 раза и буду обращаться в дальнейшем. Спасибо!",
        "review-5": "Это была моя первая сделка. Всё показали и объяснили, за что им огромная благодарность.",
        "review-6": "Было очень волнительно, но всё прошло хорошо благодаря гаранту",
    
        "button-1": "Безопасная сделка",
        "button-2": "Безопасная сделка",

        "up": "Наверх",
        "copyright": "<a href='http://t.me/cryptoguarantorbot'>Support</a>"
    },
    'en': {
        "main-text": "We will quickly and safely conduct your deal in the field of cryptocurrencies",
    
        "advantage-1-header": "Safety",
        "advantage-1-text": "When using our service, your money will be safe throughout the deal.",
        "advantage-2-header": "Confidence",
        "advantage-2-text": "For 4 years of work, we have successfully completed more than 13,000 transactions. We are trusted by more than 58,000 people.",
        "advantage-3-header": "Price",
        "advantage-3-text": "For the deal, we charge a minimum fixed fee - 1%.",
        "advantage-4-header": "Speed and quality",
        "advantage-4-text": "Our professional guarantors will carry out your transaction as quickly and efficiently as possible.",
        "advantage-5-header": "Choice of cryptocurrencies",
        "advantage-5-text": "We work with all popular cryptocurrencies.",
    
        "review-1": "My sneakers came to the STEPN:)",
        "review-2": "As promised, everything went quickly and safely.",
        "review-3": "I chose them because they have a good reputation and did not regret it",
        "review-4": "It was necessary to carry out the deal as quickly as possible, and the guys coped with it!",
        "review-5": "Thanks for the fast deal",
        "review-6": "Thanks guys for saving my cryptocurrency 😊",
    
        "button-1": "Secure transaction",
        "button-2": "Secure transaction",

        "up": "Up",
        "copyright": "<a href='http://t.me/cryptoguarantorbot'>Support</a>"
    }
}
let languageNow = 'ru';
function switchLanguage(lang){
    if(lang === 'en'){
        languageNow = 'en';
        document.getElementById('language-name').innerHTML = 'EN';
    } else {
        languageNow = 'ru';
        document.getElementById('language-name').innerHTML = 'РУ';
    }

    for(let i in language[languageNow]){
        document.getElementById(i).innerHTML = language[languageNow][i];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('en');
});