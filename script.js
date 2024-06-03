let mehsul1 = {
    Ad: "ACER Aspire",
    category: "texnoloji",
    Qiymeti: 1200

}
let mehsul2 = {
    Ad: "LENOVO Nb E16 ",
    category: "texnoloji",
    Qiymeti: 899
    
}
let mehsul3 = {
    Ad: "Apple Macbook Air M3 ",
    category: "texnoloji",
    Qiymeti: 1999
    
}
let mehsul4 = {
    Ad: "Apple 15-inch MacBook Air",
    category: "texnoliji",
    Qiymet: 2005
}
let mehsul5 = {
    Ad: "Apple MacBook Pro 14",
    category:"texnoloji",
    Qiymet: 1722
}

let mehsullar = [mehsul1,mehsul2,mehsul3,mehsul4,mehsul5];
let filtireliMehsullar = [];
let istifadecininMehsulAd = prompt("Bir mehsul girin:");

filtreliMehsulariDoldur(mehsullar);
filtreliMehsulariYazdir(filtireliMehsullar);
mehsullar.forEach(function(mehsul){
    if(mehsul.Ad.toUpperCase().includes(istifadecininMehsulAd.toUpperCase() ,0)){
        filtireliMehsullar.push(mehsul);

    }
});

function filtreliMehsulariDoldur(mehsullar){
    mehsullar.forEach(function(mehsul){
        if(mehsul.Ad.toUpperCase().includes(istifadecininMehsulAd.toUpperCase() ,0)){
            filtireliMehsullar.push(mehsul);
    
        }
    });

}

function filtreliMehsulariYazdir(mehsullar){
    mehsullar.forEach(function(mehsul){
        console.log("-------------------------------------------------");
        console.log("|" + mehsul.Ad + "|" + mehsul.Qiymet + "|" + mehsul.category);
        console.log("-------------------------------------------------");

    });

}



