let googleQueryText = 'https://www.google.com/search?channel=fs&q=';
let commands = {
    "!set":{}, 
    "!caret":{}, 
    "!font":{}, 
    "!show":{}
}

const execute = (inp) => {
    let shortcutObj = localStorage.getItem('shortcuts') ?? "{}";
    shortcutObj = JSON.parse(shortcutObj);
    if (Object.keys(shortcutObj).includes(inp))
        window.location.replace(shortcutObj[inp]);
    window.location.replace(googleQueryText + inp.split(' ').join('+'));
}

export default execute