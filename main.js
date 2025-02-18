console.log("hayyy");
const angka = 1;
console.log(angka)

const mobil = ["Suzuki","Toyota","Inova"];
console.log(mobil[0]);
console.log(mobil.length);
for(let i =0; mobil.length > i ;i ++){
    console.log(mobil[i]);
}
mobil.push("BMW");
console.log(mobil)

mobil.pop();
console.log(mobil)

for(let i = 0; mobil.lenght >= i ; i++){
    console.log(mobil);
    mobil.pop();
    console.log(mobil);
    if (mobil.lenght ===1){
        console.log("data sudah habis")
    };
};