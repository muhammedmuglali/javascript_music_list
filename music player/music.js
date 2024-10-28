class Music{
    constructor(title, singer, img, file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }
    getName(){
    return this.title + "-" + this.singer;
    }
}

const musicList=[
    new Music("Onlar Anlamaz Halden", "Semicenk", "OnlarAnlamazHalden.png", "OnlarAnlamazHalden.mp3"),
    new Music("Rastgele", "Burak Bulut", "Rastgele.png", "Rastgele.mp3"),
    new Music("İçime Ata Ata", "Burak Bulut", "icimeAtaAta.png", "icimeAtaAta.mp3"),
]

