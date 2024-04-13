//Recipe Scraping
import { recipeScraper } from 'recipe-scraper'

async function getRecipies(url) {
    return recipe = await recipeScraper(url);
}

export default getRecipies();