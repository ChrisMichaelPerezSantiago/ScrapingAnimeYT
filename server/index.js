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
        const recentChapters = {
            title,
            synopsis,
            image,
            link
        }
        const recentChaptersRef = db.collection('recentchapters').doc();
        promises.push(recentChaptersRef.set(recentChapters));
    });
    await Promise.all(promises);
}

const getRecentSeries = async () =>{
    const url = 'https://www.animeyt.tv';
    const response = await fetch(url);
    const body = await response.text();
    const $ = cheerio.load(body);

    const promises = [];

    $('div.anime__data').each((index , item) =>{
        const $item = $(item);
        const title = $item.find('h3.anime__title').text();
        const type = $item.find('h3.anime__title').find('small').text().replace(/[()]/g , '');
        const date = $item.find('div.anime__date').children().remove().end().text().trim();
        const gender = []
        $item.find('div.anime__genres').children().each((index , item) =>{
            const $item = $(item);
            gender[index] = $item.text();
        });
        const tags = []
        $item.find('div.anime__tags').children().each((index , item) =>{
            const $item = $(item);
            tags[index] = $item.text();
        });
        const recentSeries = {
            title,
            date,
            tags,
            gender,
            type
        }
        const recentSeriesRef = db.collection('recentseries').doc();
        promises.push(recentSeriesRef.set(recentSeries));
    });
    await(Promise.all(promises));
}


// FIX ENTRY POINTS
const getAnimeNews = async () =>{
    const url = 'https://www.animeyt.tv';
    const response = await fetch(url);
    const body = await response.text();
    const $ = cheerio.load(body);

    const promises = [];

    $('div.WdgtCn.capitulos-grid__item').children().each((index , item) =>{
        const $item = $(item);
        const title = $item.find('h3.Title').children().text();        
    });
}
