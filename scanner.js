
const events = {
    keydown: [],
    keypress: [],
    keyup: []
}

document.addEventListener('keydown', add)
document.addEventListener('keypress', add)
document.addEventListener('keyup', add)


function add(event) {
    events[event.type].push(event);
}

function print() {
    console.log('--- keydown ---')
    events.keydown.forEach(eventOutput)
    console.log('--- keypress ---')
    events.keypress.forEach(eventOutput)
    console.log('--- keyup ---')
    events.keyup.forEach(eventOutput)
}

function eventOutput(event) {
    const { type, key, code, keyCode } = event
    console.log({ type, key, code, keyCode })
}
