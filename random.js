const exec = require('child_process').execSync


function randint(min, max) {
    command = `./random.sh ${min} ${max}`
    let rand =  exec(command)
    return parseInt(rand)
}

console.log(`randint: ${randint(1, 100)}`)

module.exports.randint = randint