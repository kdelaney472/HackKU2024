import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useState, useEffect } from 'react'
import doFetch from "../scraping/scraper";
import Results from "./Results";
import env from '../GoogleCloud_API_KEY.json' //store your key here locally (DO NOT PUSH TO GITHUB)
import { useContext } from "react";
import DataContext from "./DataContext";
import Logo from "./assets/logo.png"

function Search() {

    const domainsToSearch = ['allrecipes.com', 'cookinglight.com', 'eatingwell.com', 'myrecipes.com', 'skinnytaste.com', 'joyfulhealthyeats.com', 'healthyfitnessmeals.com'];
    const siteParameter = domainsToSearch.map(domain => `site:${domain}`).join(' OR ');


    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [urls, setUrls] = useState([]);
    const [stats, setStats] = useState(null);

    const { setDairy, setGluten, setShellfish, toggleData } = useContext(DataContext);

    const apiKey = env.API_KEY;
    const cx = '055b432b27df04bc1';

    useEffect( () => {
        console.log(stats); // This might log an empty array the first time
        if (stats?.length > 0) {
            let d = 0;
            let g = 0;
            let p = 0;
            stats.forEach(item => {
                g = Math.max(g, item.gluten);
                d = Math.max(d, item.dairy);
                p = Math.max(p, item.shellfish);
            });
            setDairy(d);
            setGluten(g);
            setShellfish(p);
            toggleData(true);
        } else {
            toggleData(false);
        }
        
    }, [stats]);
    const scrapeResults = async (result) => {
        let re = result.items;
        re.map((r, index) => {
            let prevResults = results;
            prevResults[index] = r.formattedUrl;
            setUrls(prevResults);
        })
        setStats(await doFetch(urls));
    };

    const getResults = async () => {
        if (document.getElementById('search') != null) {
            setLoading(true);

            const searchUrl = document.getElementById('search').value

            const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${searchUrl}`;

            try {
                const response = await fetch(url);
                const result = await response.json();

                //Call function to do web-scraping
                scrapeResults(result);
                if(result){
                    setLoading(false);
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    return(
        <div>
        <div className="flex mb-10">
            <img src={Logo} style={{ borderRadius: '10px' }} />
        </div>
        <div className="flex justify-center w-100">
            <div className="flex w-100 flex-wrap md:flex-nowrap padding-4px">
                <form onSubmit='return false' className="flex items-center w-80 space-x-4">
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
                <Button onClick={getResults.bind(this)} type="button" size="lg" color='primary' isLoading={loading ? true : false}>
                    Search
                </Button>                    
                </form>
            </div>
        </div>
        </div>
    );

}

export default Search;