import { PieChart } from '@mui/x-charts/PieChart';
import DataContext from './DataContext';
import { useContext } from 'react';

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
                    slotProps={{
                        legend: {
                            labelStyle: {
                                fontSize: 14,
                                fill: 'white',
                            },
                        },
                    }}
                // height={500}
                
            />
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
                    slotProps={{
                        legend: {
                            labelStyle: {
                                fontSize: 14,
                                fill: 'white',
                            },
                        },
                    }}
                    // height={500}

                />
            </div>
            <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                //backgroundColor:"blue", //testing purposes
                flexWrap: 'nowrap', // Prevent wrapping
                overflowX: 'auto', // Enable horizontal scrolling if content overflows
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
                            endAngle: 360 - (360 * shellfishRisk * 0.1),
                            cx: 150,
                            cy: 150,
                        },
                    ]}
                    slotProps={{
                        legend: {
                            labelStyle: {
                                fontSize: 14,
                                fill: 'white',
                            },
                        },
                    }}
                    height={500}
                    width={250}

                />
            </div>
        </div>
        :
        null}
        </>
    );

}
export default Results