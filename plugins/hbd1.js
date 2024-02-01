let handler = async (m, { conn, usedPrefix }) => {
	let jelajah = `Halo Sayang,, Happy Birthdayyy🎂🎂🎂🎉,, its your special day,, semogaaa kmu panjang umur, sehat truss, di lancarkan rezeki nya,, di jauhkan badmood nya, ovt nya, nethink nya, krna bahaya heheheh,, gagaa becanda yahh syang,, keep being yourself oteyyy💕,, semogaa kedepanny apa yang kamu mau di tahun ini bisa terkabul,, maaf yahh dannt cuman bisa bikin ginian aja buat kado kamu, danny belum bisa give u somethink special for u yang bisa kmu ingat, ya mksd aku barang sih hehheh,, malah cerita aku maafff,,, emm apalgi yahhh aku bingung nihh😖,,, emmm yahhhh selamat ulang tahunnnn🎉🎂ଘ(੭◌ˊᵕˋ)੭* ੈ♡‧₊˚
	jangan lupa klik link iniiii🎉
	
	https://33b827f3-6102-47ab-8e47-cbe025d2268f-00-1fhmityvkqhd0.spock.replit.dev/`
    let img = "./src/hbd.jpg"
   await conn.sendFile(m.chat, img, "img.jpg", jelajah, m )
}
handler.command = /^(hbd)$/i
handler.tags = ['info']
handler.help = ['hbd']

module.exports = handler
