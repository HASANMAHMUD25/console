const Class_DBW  = {
    "nama" : "Drive by Wire",
    "jumlah" : 15,
    "istilah" :"mesin yang menjalankan mobil",
    "fokus" : "mesiin"
}

const class_perawatan = {
    "nama" : "perawatan",
    "jumlah" : 13,
    "istilah" : "menjaga",
    "fokus" : "kesah keluh konsumen"
}

const class_tkj= {
    "nama" : "Teknik Komputer dan Jaringan)",
    "jumlah" : 11,
    "fokus" : "keamana jaringan"
}

const class_tatabusana= {
    "nama" : "tatabusana",
    "jumlah" : 21,
    "istilah" : "busanah",
    "fokus" : "jual online"
}

const  class_tataboga= {
    "nama" : "tataboga culinary",
    "jumlah" : 9,
    "fokus" : "kuliner menarik"
}
const hasan = [Class_DBW,class_perawatan,class_tkj,class_tatabusana,class_tataboga]
for (nama of hasan) {
    console.log(nama)
}

for (nama in Class_DBW){
    console.log(nama + '=' + Class_DBW[nama])
}


for (nama in class_perawatan){
    console.log(nama + '=' + class_perawatan[nama])
}


for (nama in class_tkj){
    console.log(nama + '=' + class_tkj[nama])
}


for (nama in class_tatabusana){
    console.log(nama + '=' + class_tatabusana[nama])
}


for (nama in class_tataboga){
    console.log(nama + '=' + class_tataboga[nama])
}