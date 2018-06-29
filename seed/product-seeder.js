var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://kredido:kredido1@ds217921.mlab.com:17921/kredido');

var  products = [
    new Product({
        imagePath: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/resep-ayam-goreng-kremes-1641742.jpg',
        title: 'Ayam Goreng',
        description: 'Rasanya Maknyus!!!',
        price: 10000
    }),
    new Product({
        imagePath: 'https://2.bp.blogspot.com/--TpTisWjh24/V7J7_4zfX3I/AAAAAAAAKdA/SDOhJtcQNiwuja1Ef2OaD0tT_P8M7lEJwCLcB/s1600/Resep-semur-jengkol.jpg',
        title: 'Semur Jengkol',
        description: 'Rasanya Enak!!!',
        price: 5000
    }),
    new Product({
        imagePath: 'https://selerasa.com/images/sayuran/Tumis-kangkung-belacan.jpg',
        title: 'Tumis Kangkung',
        description: 'Rasanya Mantab!!!',
        price: 2000
    }),
    new Product({
        imagePath: 'http://resepkoki.co/wp-content/uploads/2016/02/telur-dadar-ala-restoran.jpg',
        title: 'Telur Dadar',
        description: 'Rasanya Gokil!!!',
        price: 8000
    }),
    new Product({
        imagePath: 'http://cdn2.tstatic.net/tribunnews/foto/bank/images/kikil-tak-bau_20160507_074921.jpg',
        title: 'Kikil Sapi',
        description: 'Rasanya Lezat!!!',
        price: 7000
    }),
    new Product({
        imagePath: 'https://www.bango.co.id/gfx/recipes/61.jpg',
        title: 'Tempe Oreg',
        description: 'Rasanya Nikmat!!!',
        price: 1000
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
