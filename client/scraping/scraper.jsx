//This handles Recipe Scraping.
async function getRecipies(url) {

    try {
        var tmp = encodeURIComponent(JSON.stringify(url));
        const response = await fetch(`https://allergix-107f0744c218.herokuapp.com/scrape-recipe?array=${tmp}`, { //Calls the server
            headers: {
                'Content-Type': 'application/json', //Sends the array of url's from google to the scraper server
            },
        });

        const responseData = await response.json(); // Parse response body as JSON
        return responseData;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

export default getRecipies;