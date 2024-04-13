import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useState } from 'react'

async function getResults(searchUrl) {
    const url = `https://google-web-search1.p.rapidapi.com/?query=${searchUrl}&limit=20&related_keywords=true`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '384b899e23mshce51891a615206ep1f146fjsndb38aa451231',
            'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

    const data = await response.json();
}

function Search() {

    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('');

    return(
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 padding-4px">
            <form onSubmit='return false'>
            <Input
                label="Search"
                radius="lg"
                id="search"
                classNames={{
                    label: "text-black/50 dark:text-white/90",
                    input: [
                        "bg-transparent",
                        "text-black/90 dark:text-white/90",
                        "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                    ],
                    innerWrapper: "bg-transparent",
                    inputWrapper: [
                        "shadow-xl",
                        "bg-default-200/50",
                        "dark:bg-default/60",
                        "backdrop-blur-xl",
                        "backdrop-saturate-200",
                        "hover:bg-default-200/70",
                        "dark:hover:bg-default/70",
                        "group-data-[focused=true]:bg-default-200/50",
                        "dark:group-data-[focused=true]:bg-default/60",
                        "!cursor-text",
                    ],
                }}
                placeholder="Type to search..."
                startContent={
                    <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                }
            />
                <Button onClick={getResults.bind(this, document.getElementById('search').value)} type="button" color='primary'>
                Search
            </Button>
            </form>
        </div>
    );

}

export default Search;