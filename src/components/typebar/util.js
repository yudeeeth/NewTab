let googleQueryText = 'https://www.google.com/search?channel=fs&q=';
let bingQueryText = 'https://www.bing.com/search?q=';
let duckQueryText = 'https://duckduckgo.com/?q=';
let commands = {
    "!sc":{
        "syntax":"!sc list|add|rem",
        "desc": "view, add or delete shortcuts",
        "func": function ({inpspl,clear,shortcutObj}) {
            console.log("syntax",this.syntax);
            if(inpspl[1]==='add'){
                if(inpspl[2] !== undefined && inpspl[3] !== undefined){
                    shortcutObj[inpspl[2]] = inpspl[3];
                    localStorage.setItem('shortcuts',JSON.stringify(shortcutObj));
                }
            }
            if(inpspl[1]==='rem'){
                if(inpspl[2] !== undefined){
                    delete shortcutObj[inpspl[2]];
                    localStorage.setItem('shortcuts',JSON.stringify(shortcutObj));
                }
            }
            if(inpspl[1]==='list'){
                // retrun the list of shortcuts
                clear();
                return shortcutObj;
            }
            if(inpspl[1]==='help'){
                let ret = {}
                ret[this.syntax] = this.desc;
                console.log(ret);
                clear();
                return ret;
            }
            clear();
            return;
        }
    }, 
    "!caret":{}, 
    "!font":{}, 
    "!bg":{}, 
    "!theme":{},
    "!show":{
        "":""
    },
    "!se":{
        "syntax": "!se google|duck|bing",
        "desc":"change search engine"
    },
    "!cl":{
        "syntax": "!cl",
        "desc": "clears the hints",
        "func":function ({clear,clearHints}){
            clear();
            clearHints(false);
            return;
        }
    }
}

// list of localstorage objs needed


const execute = (inp,clear,clearHints) => {
    inp = inp.slice(0);
    console.log(inp);
    let shortcutObj = localStorage.getItem('shortcuts') ?? "{}";
    shortcutObj = JSON.parse(shortcutObj);
    let inpspl = inp.split(' ');
    console.log(inpspl);
    // if input is sc
    if(Object.keys(commands).includes(inpspl[0])){
        return commands[inpspl[0]].func({inpspl,clear,clearHints,shortcutObj})
    }
    else if (Object.keys(shortcutObj).includes(inp))
        window.location.replace(shortcutObj[inp]);
    else
        window.location.replace(googleQueryText + inp.split(' ').join('+'));
    // default behaviour
}

export default execute