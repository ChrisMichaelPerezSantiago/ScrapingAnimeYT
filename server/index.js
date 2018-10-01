const cheerio = require('cheerio');
const fetch = require('node-fetch');
const db = require('./db');

const getRecentChapters = async () =>{
    const url = 'https://www.animeyt.tv';
    const response = await fetch(url);
    const body = await response.text();
    const $ = cheerio.load(body);
    
    const promises = []

    $('.capitulos-grid__item').each((index , item) => {
        const $item = $(item);
        const title = $item.find('h3.capitulos-grid__item__title').text().trim();
        const link = $item.find('a.capitulos-grid__item__link').attr('href');
        const image = $item.find('img.capitulos-grid__item__img').attr('src');
        const synopsis = $item.find('p.slider-home__synopsis').text().trim();
        const recentSeries = {
            title,
            synopsis,
            image,
            link
        }

        const recentSeriesRef = db.collection('recentseries').doc();
        promises.push(recentSeriesRef.set(recentSeries));
    });
    await Promise.all(promises);
    console.log('done...');
    
}

getRecentChapters();

