//uses the default activity 'roller-skate' when no arguments are passed
function saturdayFun(activity = 'roller-skate'){
    return(`This Saturday, I want to ${activity}!`);
}
//permits the default activity to be overriden
saturdayFun('bathe my dog');

//uses the default activity 'go to the office' when no arguments are passed

const mondayWork = function(activity = 'go to the office'){
    return(`This Monday, I will ${activity}.`);
}
//permits the default activity to be overriden
mondayWork('work from home');

//when initialized with '*' creates a function that, when called, wraps an adjective in a highlight

function wrapAdjective(visual = '*'){
    return function(adj = "special"){
        return `You are ${visual}${adj}${visual}!`
    }
}