/**
   * Made By Foundzganz 🕴️
   * Subscribe Foundzganz
   * Follow https://instagram.com/aditiapurn_
   * Follow https://github.com/F0undzG4nz
*/

const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.ownerNumber = ['6289664550953','62859110112843','0']
global.ownerName = 'FoundzGanz X All AEW'
global.packname = 'Sagiri Bot'
global.author = 'Whatsapp Bot 2022'
global.prefa = ['','!','.','#','!'] //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'sesi'

//Message Nya Ubah Disini
global.mess = {
admin: 'You Are Not Admin!',
botAdmin: 'Bot Not Admin!',
botOwner: 'You Are Not My Owner!',
group: 'Only Group!',
private: 'Only Private Chat',
wait: 'Loading...',
done: 'Done!'
}


//Sesuaikan
global.thumb = fs.readFileSync('./media/sagiri.jpeg')
global.donasi = fs.readFileSync('./media/donasi.jpg')
global.thumbnail = fs.readFileSync('./media/sagiri.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
