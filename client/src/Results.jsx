import { PieChart } from '@mui/x-charts/PieChart';
import DataContext from './DataContext';
import { useContext } from 'react';
import dairyIcon from './assets/dairy.png'
import glutenIcon from './assets/wheat.png'
import shellfishIcon from './assets/shellfish.png'

function Results() {

    const {dairyRisk, glutenRisk, shellfishRisk, isData} = useContext(DataContext);

    console.log(dairyRisk, glutenRisk, shellfishRisk);
    return(
        <>
        {isData
        ?
        <div>
            <div style={{
                display: 'flex',
                height:"50vh",
                //backgroundColor:"yellow", //testing purposes
                flexWrap: 'nowrap', // Prevent wrapping
                overflowX: 'auto', // Enable horizontal scrolling if content overflows
            }} 
            id="pieCharts">
                <PieChart skipAnimation id='1'
                series={[
                    {
                        data: [
                            { id: 0, value: dairyRisk, color: "white", label: `Dairy: ${dairyRisk*10}% Risk`},
                            { id: 1, value: 10-dairyRisk, color: "transparent"}

                        ],
                        fill: 'white',
                        innerRadius: 30,
                        outerRadius: 100,
                        paddingAngle: 10,
                        cornerRadius: 5,
                        startAngle: 360,
                        endAngle: 0,
                        cx: 150,
                        cy: 150,
                    },
                ]}
                margin={{
                    top: 70, bottom: 0, left: 30, right: 0
                }}
                    slotProps={{
                        legend: {
                            position:{
                                vertical: 'bottom',
                                horizontal: 'middle',
                            },
                            labelStyle: {
                                fontSize: 14,
                                fill: 'white',
                            },
                        },
                    }}
                // height={500}
            />
            <img src={dairyIcon} width={44} style={{ position: 'absolute', top: '30%', left: '42.5%', transform: 'translate(-70%, -57.5%)' }} alt="Dairy Icon" />
                <PieChart skipAnimation id='2'
                    series={[
                        {
                            data: [
                                { id: 0, value: glutenRisk, color: "brown", label: `Gluten: ${glutenRisk * 10}% Risk` },
                                { id: 1, value: 10 - glutenRisk , color: "transparent" }
                            ],
                            fill: 'white',
                            innerRadius: 30,
                            outerRadius: 100,
                            paddingAngle: 10,
                            cornerRadius: 5,
                            startAngle: 360,
                            endAngle: 0,
                            cx: 150,
                            cy: 150,
                        },
                    ]}
                    margin={{
                        top: 70, bottom: 0, left: 30, right: 0
                    }}
                    slotProps={{
                        legend: {
                            position:{
                                vertical: 'bottom',
                                horizontal: 'middle',
                            },
                            labelStyle: {
                                fontSize: 14,
                                fill: 'white',
                            },
                        },
                    }}
                    // height={500}

                />
            <img src={glutenIcon} width={44} style={{ position: 'absolute', top: '28%', left: '77.5%', transform: 'translate(-72%, -22.5%)' }} alt="Gluten Icon" />
            </div>
            <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                //backgroundColor:"blue", //testing purposes
            }} 
            id="pieCharts3">
                <PieChart skipAnimation id='3'
                    series={[
                        {
                            data: [
                                { id: 0, value: shellfishRisk, color: "orange", label: `Shellfish : ${shellfishRisk * 10}% Risk` },
                                { id: 1, value: 10 -  shellfishRisk , color: "transparent" }
                            ],
                            fill: 'white',
                            innerRadius: 30,
                            outerRadius: 100,
                            paddingAngle: 10,
                            cornerRadius: 5,
                            startAngle: 360,
                            endAngle: 0,
                            cx: 150,
                            cy: 150,
                        },
                    ]}
                    margin={{
                        top: 0, bottom: 0, left: 0, right: 200
                    }}
                    slotProps={{
                        legend: {
                            position:{
                                vertical: 'bottom',
                                horizontal: 'right',
                            },
                            labelStyle: {
                                fontSize: 14,
                                fill: 'white',
                            },
                        },
                    }}
                    height={300}
                    width={250}

                />
                <img src={shellfishIcon} width={44} style={{ position: 'absolute', top: '69%', left: '66%', transform: 'translate(-31%, -34%)' }} alt="Shell Fish Icon" />
            </div>
        </div>
        :
        null}
        </>
    );

}
export default Results