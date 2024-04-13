//Recipe Scraping
const recipeScraper = require("recipe-scraper");

async function getRecipies(url) {
    return recipe = await recipeScraper(url);
}