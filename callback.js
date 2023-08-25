function greeting(greetingHandler, name) {
    greetingHandler(name);
}
// const number = [45, 55, 67, 22];
// greeting(number)

function greetingHandler(name) {
    console.log('Good morning', name);
}
greeting(greetingHandler, 'tom hanks')