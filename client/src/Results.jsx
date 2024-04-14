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
        <div height={250} display={"flex"} id="pieCharts">
            <PieChart skipAnimation id='1'
            series={[
                {
                    data: [
                        { id: 0, value: dairyRisk, color: "white", label: `Dairy: ${dairyRisk*10}% Risk`},
                        
                    ],
                    fill: 'white',
                    innerRadius: 30,
                    outerRadius: 100,
                    paddingAngle: 10,
                    cornerRadius: 5,
                    startAngle: 360,
                    endAngle: 360 - (360 * dairyRisk * 0.1),
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
            width={400}
            height={500}
            
        />
            <PieChart skipAnimation id='2'
                series={[
                    {
                        data: [
                            { id: 0, value: glutenRisk, color: "brown", label: `Gluten: ${glutenRisk * 10}% Risk` },
                        ],
                        fill: 'white',
                        innerRadius: 30,
                        outerRadius: 100,
                        paddingAngle: 10,
                        cornerRadius: 5,
                        startAngle: 360,
                        endAngle: 360 - (360 * glutenRisk * 0.1),
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
                width={400}
                height={500}

            />
            <PieChart skipAnimation id='3'
                series={[
                    {
                        data: [
                            { id: 0, value: shellfishRisk, color: "orange", label: `Shellfish : ${shellfishRisk * 10}% Risk` },
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
                width={400}
                height={500}

            />
        </div>
        :
        null}
        </>
    );

}
export default Results