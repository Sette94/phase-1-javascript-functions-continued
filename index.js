// code your solution here

function saturdayFun(activity) {

    const defaultVal = 'roller-skate'

    if (activity == undefined) {
        return (`This Saturday, I want to ${defaultVal}!`)

    } else {
        return (`This Saturday, I want to ${activity}!`)
    }

}

function mondayWork(activity) {
    const defaultVal = 'go to the office.'

    if (activity == undefined) {
        return (`This Monday, I will ${defaultVal}`)

    } else {
        return (`This Monday, I will ${activity}.`)
    }
}

function outer(greeting, msg = "It's a fine day to learn") {
    const innerFunction = function (name, lang = "Python") {
        return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction;
}
outer("Hello")("student", "JavaScript");

function wrapAdjective(string) {
    const innerFunciton = function (ajective = "special") {
        return `You are ${string}${ajective}${string}!`
    }
    return innerFunciton

}
console.log(wrapAdjective("%")("a dedicated programmer"))
console.log(wrapAdjective("%")())