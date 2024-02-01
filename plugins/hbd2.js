let handler = async (m, { conn, usedPrefix }) => {
	let jelajah = `Haiiiii sayangkuuuu,, Happy Anniversary yang ke 17 Month or 1 Years 5 Month sayangkuu🎉🎉🎉,, Makasihh sayang, kamu udah buat hari² aku jadi lebih berwarna, karena adany kamu di hidup aku,, aku jdi ada tujuan hidup buat sekarang, meski di hubungan ini, sempet terjadi bnyk masalah :' aku harap kita bisa lewatin truss secara baik²,, semoga gada kejadian hal lama terulang/kamu ingat lgi eheheheh,, i love you sayang♡, aku harap hubungan ini emmm terus berlanjut seterusnya sampe kita ke jenjang serius,, truss... yahh semoga ada hari dimana kita berdua memperbaiki sifat diri kita masing², i love youuuu, alabyuuuu more more moreeer alabyuuuuu♡♡♡♡♡♡♡`
    let img = "./src/anniv.jpg"
   await conn.sendFile(m.chat, img, "img.jpg", jelajah, m )
}
handler.command = /^(anniv)$/i
handler.tags = ['info']
handler.help = ['anniv']

module.exports = handler
