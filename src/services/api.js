export async function fetchApi(url) {
    const response = await fetch(url);
    if (response.ok) {
        return await response.json();
    } else {
        return null;
    }
}

export async function fetchChimShopChai() {
    return await fetchApi('https://panjs.com/ywc.json');
    
}
