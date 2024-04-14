import { useState, useEffect } from "react";
import {Image, Listbox, ListboxItem} from "@nextui-org/react";
import axios from 'axios' //for making call to vision api
import DataContext from "./DataContext";
import { useContext } from "react";
import env from '../HuggingFace_API_KEY.json' //store your key here locally (DO NOT PUSH TO GITHUB)
const API_KEY = env.API_KEY;


function ImageSubmit() {
    const [imgFile, setFile] = useState(null);
    const [foodLabels, setLabels] = useState([]);
    const {setDairy, setGluten, setShellfish, toggleData} = useContext(DataContext);

    const aiVisionScan = async (img) => {
        const apiURL = `https://api-inference.huggingface.co/models/Kaludi/food-category-classification-v2.0`;
        const base64Img = img.split(',')[1]; //gets the base64 content from the base64 encoded url (the first portion is the header "data:image/png;base64," and the second portion at index 1 has the data we need to send)
        const data = {
            image: base64Img,
        };
        const param = {
            headers: { 
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
        };
        const response = await axios.post(apiURL, data, param);
        setLabels(response.data);
    }

    if (foodLabels != []) {
        foodLabels.map((foodInfo, id) => {
            if(foodInfo.label == "Bread"){
                setGluten(Math.min(2 * Math.round(foodInfo.score * 10), 10));
            }
            if(foodInfo.label == "Seafood"){
                setShellfish(Math.min(2 * Math.round(foodInfo.score * 10), 10));
            }
            if(foodInfo.label == "Dairy"){
                setDairy(Math.min(2 * Math.round(foodInfo.score * 10), 10));
            }
        })
        toggleData(true);
    }

    useEffect( () => { //only runs when the image changes
        if(imgFile){
            aiVisionScan(imgFile);
        }
    }, [imgFile])
 
    return (
        <div>
            <div className="imageSel" onClick={()=>{document.getElementById("fileInput").click();}}>
                <input id="fileInput" type="file" style={{ display: "none" }} onChange={(e)=>{
                    console.log(e.target.files);
                    const file = e.target.files[0];
                    const reader = new FileReader(); //sets to base64 format for being able to input into api later

                    reader.onloadend = () => {
                        setFile(reader.result);
                    };

                    if (file) {
                    reader.readAsDataURL(file);
                    }

                    setDairy(0);
                    setGluten(0);
                    setShellfish(0);
                    toggleData(false);
                    setLabels([]);
                }} />
                {imgFile && (
                    <div>
                        <Image src={imgFile} style={{ maxHeight: '45vh' }}/>
                    </div>
                )}
                {!imgFile && (
                    <div className="placeholder">
                        <p>Click or drop an image file here</p>
                    </div>
                )}
                <style>{`
                    .imageSel {
                    border: 2px dashed #ccc;
                    border-radius: 8px;
                    padding: 40px 10px 40px 10px;
                    text-align: center;
                    cursor: pointer;
                    position: relative;
                    overflow: hidden;
                    margin: 0% 5% 0% 5%;
                    background: rgba(70,92,118,0.2);
                    transition: background-color 0.2s ease-in-out;
                }
                .imageSel:hover{
                    background-color: rgba(100,122,148,0.4);
                }
                    .placeholder {
                    color: #444;
                    }
                    .placeholder p {
                    margin: 0;
                    }
                `}</style>
            </div>
        </div>
    );
}

export default ImageSubmit;