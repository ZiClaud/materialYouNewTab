// Translation data
const translations = {
    "en": {
        // Menu Itens
        "shortcutsText": "Shortcuts",
        "enableShortcutsText": "Enable/disable shortcuts",
        "ai_tools_button": "AI-Tools",
        "enable_ai_tools": "Enable/disable AI Tools shortcuts",
        "fahrenheitCelciusCheckbox": "Switch to Fahrenheit",
        "fahrenheitCelciusText": "Refresh the page to see the updates",
        "WeatherApiText": "Enter your own WeatherAPI key",
        "WeatherApiSubtext": "If the weather functionality isn't working",
        "LearnMoreButton": "Learn More",
        "saveAPI": "Enter",
        // End of Menu Itens

        // Body Itens
        // Calendar
        "days": ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        "months": ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        // End of Calendar

        // Weather
        "humidityText": "Humidity",
        "feelsLike": "seems",
        // End of Weather

        // End of Weather

        "conditionText": "Hello! How are you today?",
        "enterBtn": "Enter",
        "searchPlaceholder": "Your query...",
        "searchWithHint": "Search With",
        "ai_tools": "AI Tools",
        "userText": "Double tap to edit",
        // End of Body Itens

    },
    "pt": {
        // Menu Itens
        "shortcutsText": "Atalhos",
        "enableShortcutsText": "Ativar/desativar atalhos",
        "ai_tools_button": "Ferramentas de IA",
        "enable_ai_tools": "Ativar/desativar atalhos de ferramentas de IA",
        "fahrenheitCelciusCheckbox": "Alternar para Fahrenheit",
        "fahrenheitCelciusText": "Atualize a página para ver as atualizações",
        "WeatherApiText": "Insira sua propria API de Clima",
        "WeatherApiSubtext": "Se a funcionalidade de clima não estiver funcionando",
        "LearnMoreButton": "Saiba Mais",
        "saveAPI": "Salvar API",
        // End of Menu Itens

        // Body Itens
        // Calendar
        "days": ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
        "months": ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        // End of Calendar

        // Weather
        "humidityText": "Umidade",
        "feelsLike": "Temperatura",
        // End of Weather

        "conditionText": "Olá! Como está hoje?",
        "enterBtn": "Pesquisar",
        "searchPlaceholder": "Digite sua pesquisa...",
        "searchWithHint": "Pesquisar Com",
        "ai_tools": "Ferramentas de IA",
        "userText": "Toque para editar",
        // End of Body Itens
    },
    "zh": {
        // Menu Itens
        "shortcutsText": "快捷方式",
        "enableShortcutsText": "启用/禁用快捷方式",
        "ai_tools_button": "AI工具",
        "enable_ai_tools": "启用/禁用AI工具快捷方式",
        "fahrenheitCelciusCheckbox": "切换到华氏温度",
        "fahrenheitCelciusText": "刷新页面以查看更新",
        "WeatherApiText": "输入您自己的天气API密钥",
        "WeatherApiSubtext": "如果天气功能无法正常工作",
        "LearnMoreButton": "了解更多",
        "saveAPI": "输入",
        // End of Menu Itens

        // Body Itens
        "conditionText": "你好！今天怎么样？",
        "enterBtn": "输入",
        "searchWithHint": "搜索",
        "ai_tools": "AI工具",
        // End of Body Itens
    },
    "hi": {
        // Menu Itens
        "shortcutsText": "शॉर्टकट्स",
        "enableShortcutsText": "शॉर्टकट्स सक्षम/अक्षम करें",
        "ai_tools_button": "AI-उपकरण",
        "enable_ai_tools": "AI उपकरणों के शॉर्टकट्स सक्षम/अक्षम करें",
        "fahrenheitCelciusCheckbox": "फारेनहाइट में स्विच करें",
        "fahrenheitCelciusText": "अपडेट देखने के लिए पृष्ठ को Refresh करें",
        "WeatherApiText": "अपनी खुद की मौसम API कुंजी दर्ज करें",
        "WeatherApiSubtext": "यदि मौसम कार्यक्षमता काम नहीं कर रही है",
        "LearnMoreButton": "और जानें",
        "saveAPI": "दर्ज करें",
        // End of Menu Itens

        // Body Itens
        "conditionText": "नमस्ते! आप आज कैसे हैं?",
        "enterBtn": "दर्ज करें",
        "searchWithHint": "सर्च करें",
        "ai_tools": "AI उपकरण",
        // End of Body Itens
    },
    "cs": {
        // Menu Itens
        "shortcutsText": "Zkratky",
        "enableShortcutsText": "Povolí/zakáže zkratky",
        "ai_tools_button": "AI nástroje",
        "enable_ai_tools": "Povolí/zakáže zkratky nástrojů AI",
        "fahrenheitCelciusCheckbox": "Přepnout na stupně Fahrenheita",
        "fahrenheitCelciusText": "Změny se projeví po obnovení stránky",
        "WeatherApiText": "Zadejte svůj klíč k WeatherAPI",
        "WeatherApiSubtext": "Pokud nefunguje funkce počasí",
        "LearnMoreButton": "Zjistit více",
        "saveAPI": "Uložit",
        // End of Menu Itens

        // Body Itens
        "conditionText": "Dobrý den! Jak se máte?",
        "enterBtn": "Vyhledat",
        "searchWithHint": "Vyhledávat prostřednictvím",
        "ai_tools": "AI nástroje",
        // End of Body Itens
    }
};

// Function to apply the language to the page
function applyLanguage(lang) {
    if (translations[lang]) {
        // Menu Itens
        document.getElementById('shortcutsText').innerText = translations[lang].shortcutsText;
        document.getElementById('enableShortcutsText').innerText = translations[lang].enableShortcutsText;
        document.getElementById('ai_tools_button').innerText = translations[lang].ai_tools_button;
        document.getElementById('enable_ai_tools').innerText = translations[lang].enable_ai_tools;
        document.getElementById('fahrenheitCelciusCheckbox').innerText = translations[lang].fahrenheitCelciusCheckbox;
        document.getElementById('fahrenheitCelciusText').innerText = translations[lang].fahrenheitCelciusText;
        document.getElementById('WeatherApiText').innerText = translations[lang].WeatherApiText;
        document.getElementById('WeatherApiSubtext').innerText = translations[lang].WeatherApiSubtext;
        document.getElementById('LearnMoreButton').innerText = translations[lang].LearnMoreButton;
        document.getElementById('saveAPI').innerText = translations[lang].saveAPI;
        // End of Menu Itens

        // Body Itens
        document.getElementById('conditionText').innerText = translations[lang].conditionText;
        document.getElementById('enterBtn').innerText = translations[lang].enterBtn;
        document.getElementById('searchQ').placeholder = translations[lang].searchPlaceholder;
        document.getElementById('searchWithHint').innerText = translations[lang].searchWithHint;
        document.getElementById('ai_tools').innerText = translations[lang].ai_tools;
        document.getElementById('userText').innerText = translations[lang].userText;

        // Weather
        // document.getElementById("humidityText").textContent = translations[lang].humidityText;
        document.getElementById("feelsLike").textContent = translations[lang].feelsLike;
        // End of Weather

        // End of Body Itens

        // Save the selected language in localStorage
        saveLanguageStatus('selectedLanguage', lang);
    } else {
        console.error('Language not found');
    }
}

// Detect language from navigator.language
document.getElementById('languageSelector').addEventListener('change', (event) => {
    applyLanguage(event.target.value);
    location.reload();
});

// Function to apply the language when the page loads
window.onload = function () {
    const savedLanguage = getLanguageStatus('selectedLanguage') || 'en'; // Default language is English
    if (savedLanguage) {
        document.getElementById("languageSelector").value = savedLanguage;
    }
    applyLanguage(savedLanguage);
};

// Function to save the language status in localStorage
function saveLanguageStatus(key, languageStatus) {
    localStorage.setItem(key, languageStatus);
}

// Function to get the language status from localStorage
function getLanguageStatus(key) {
    return localStorage.getItem(key);
}