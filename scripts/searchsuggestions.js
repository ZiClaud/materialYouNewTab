async function getAutocompleteSuggestions(query) {
    const defaultProxyURL = "https://mynt-proxy.rhythmcorehq.com"; 
    let proxyurl;
    const savedProxy = localStorage.getItem("proxy");
    proxyurl = savedProxy || defaultProxyURL;
    const clientParam = getClientParam(); // Get the browser client parameter dynamically
    var selectedOption = document.querySelector('input[name="search-engine"]:checked').value;
    var searchEnginesapi = {
        engine1: `https://www.google.com/complete/search?client=${clientParam}&q=${encodeURIComponent(query)}`,
        engine2: `https://duckduckgo.com/ac/?q=${encodeURIComponent(query)}&type=list`,
        engine3: `https://www.google.com/complete/search?client=${clientParam}&q=${encodeURIComponent(query)}`,
        engine4: `https://search.brave.com/api/suggest?q=${encodeURIComponent(query)}&rich=true&source=web`,
        engine5: `https://www.google.com/complete/search?client=${clientParam}&ds=yt&q=${encodeURIComponent(query)}`
    };
    const useproxyCheckbox = document.getElementById("useproxyCheckbox");
    let apiUrl = searchEnginesapi[selectedOption];
    if (useproxyCheckbox.checked) {
        apiUrl = `${proxyurl}/proxy?url=${encodeURIComponent(apiUrl)}`;
    }

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (selectedOption === "engine4") {
            const suggestions = data[1].map(item => {
                if (item.is_entity) {
                    return `${item.q} - ${item.name} (${item.category ? item.category : "No category"})`;
                } else {
                    return item.q;
                }
            });
            return suggestions;
        } else {

            return data[1];
        }
    } catch (error) {
        console.error("Error fetching autocomplete suggestions:", error);
        return [];
    }
}

window.getAutocompleteSuggestions = getAutocompleteSuggestions;