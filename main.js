class kendaraan {
    constructor(model, merk, harga ){
        this.model = model ;
        this.merk = merk ;
        this.harga = harga ;
    }

    maju(){
        return `mesin ${this.merk} ${this.model} berjalan maju`;
    }

    berhenti(){
        return `mesin ${this.merk} ${this.model} berhenti`
    }
}
let mobil = new kendaraan("gtr 5", "skyline", 200);
let motor = new kendaraan("r6", "yamaha" , 500);

console.log(mobil. maju());
console.log(motor. berhenti());











// class siswa {
//     constructor(nama, kelas, absen ){
//         this.nama = nama ;
//         this.kelas = kelas ;
//         this.absen = absen ;
//     }

//     maju(){
//         return `siswa ${this.kelas} ${this.nama} berjalan maju`;
//     }

//     berhenti(){
//         return `siswa ${this.kelas} ${this.nama} berhenti`
//     }
// }
// let mobil = new siswa("wayik", "pplg", 20);
// let motor = new siswa("lanan", "masak" , 50);

// console.log(mobil. maju());
// console.log(motor. berhenti());