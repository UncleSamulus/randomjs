const exec = require('child_process').execSync

function randint(min, max) {
    command = `DIFF=$((${min}-${max}+1))
    RANDOM=$$
    RANDINT=$(($(($RANDOM%$DIFF))+${min}))
    echo $RANDINT`
    let rand =  exec(command)
    return parseInt(rand)
}

module.exports.randint = randint
