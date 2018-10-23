// (function () {

function chackString(str) {
    let elements = [];

    for (let i = 0; i < str.length; i++) {
        const strElement = str[i];
        if (strElement == "(" || strElement == "{" || strElement == "[" || strElement == "\"" || strElement == "`") {
            elements.push(strElement);
        } else if (strElement == ")") {
            if (elements.pop() != "(") {
                return false;
            }
        } else if (strElement == "}") {
            if (elements.pop() != "{") {
                return false;
            }
        } else if (strElement == "]") {
            if (elements.pop() != "[") {
                return false;
            }
        } else if (strElement == "'") {
            if (elements.length && elements.indexOf("'") == elements.length -1) {
                elements.pop();
            } else {
                elements.push("'")
            }
        }
    }
    // } else if (str[i] == "\"" || str[i] == "'" || str[i] == "`") {
    //     quotes.push(str[i]);
    // }
    // else if (str[i] == "\"" || str[i] == "'" || str[i] == "`") {
    //     quotes.push(str[i]);
    // }


    alert(elements);
    // alert(quotes);
    return !elements.length;

    // for (let i = 0; i < str.length; i++) {
    //
    // }
    // alert(quotes);
    // return !quotes.length;
}

// let str = chackString("''['({'})]''");
    let str = chackString("jhgkjgh'hbjhkgkgjkkgj'gvjh()'j'hj{''}hjh");
console.log(str);




