import axios from 'axios';

// instanca axios-a 
let Service = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000
});

// naš objekt 
let Recepti = {

    add(recept) {
        return Service.post('/recepti', recept);
    },
    async getOne(id) {
        console.log("ulazim u backend")
        let response = await Service.get(`/recepti/${id}`);
        let doc = response.data;
        let rezultat = function (item) {
            var fullsastojak = [item.sastojak, ": ", item.kolicina].join("");
            return fullsastojak;
        }
        let popisSastojaka = doc.sastojci.map(rezultat);
        let string_popis_sastojaka = popisSastojaka.toString();
        return {
            id: doc._id,
            url: doc.slika,
            email: doc.postedBy,
            title: doc.naziv,
            kategorija: doc.kategorija,
            sastojci: string_popis_sastojaka,
            priprema: doc.priprema,
            vrijeme: doc.vrijeme
        };
    }, 
    async getAll() {

        let response = await Service.get('/recepti');
        return response.data.map(doc => {
            return {
            id: doc._id,
            url: doc.slika,
            email: doc.postedBy,
            title: doc.naziv,
                
            };
        });
    }
      
}

export { Service, Recepti }; // exportamo Service za ručne pozive ili Recepti za metode