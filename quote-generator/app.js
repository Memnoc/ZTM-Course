
const getData = async(url = "", data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        getQuote();
        console.log("error", error);
    }
}

const getQuote = async() => {
    const proxyUrl = 'https://salty-hollows-61024.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const data = await getData(proxyUrl + apiUrl);
        console.log(data);
        return data;
    } catch (error) {
        console.log("error", error);
    }
}

getQuote();