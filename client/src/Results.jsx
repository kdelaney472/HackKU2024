import { PieChart } from '@mui/x-charts/PieChart';
import DataContext from './DataContext';
import { useContext } from 'react';

function Results() {

    const {dairyRisk, glutenRisk, peanutRisk, isData} = useContext(DataContext);

    console.log(dairyRisk, glutenRisk, peanutRisk);
    return(
        <>
        {isData
        ?
        <div height={500} display={"flex"}>
            <PieChart skipAnimation id='1'
            series={[
                {
                    data: [
                        { id: 0, value: dairyRisk, color: "white", label: `Dairy: ${dairyRisk*10}% Risk`},
                        { id: 0, value: 10-dairyRisk, color: "transparent"}
                        
                    ],
                    fill: 'white',
                    innerRadius: 30,
                    outerRadius: 100,
                    paddingAngle: 10,
                    cornerRadius: 5,
                    startAngle: 0,
                    endAngle: 360,
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
                            { id: 0, value: 10 - glutenRisk , color: "transparent" }

                        ],
                        fill: 'white',
                        innerRadius: 30,
                        outerRadius: 100,
                        paddingAngle: 10,
                        cornerRadius: 5,
                        startAngle: 0,
                        endAngle: 360,
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
                            { id: 0, value: peanutRisk, color: "orange", label: `Peanuts : ${peanutRisk * 10}% Risk` },
                            { id: 0, value: 10 -  peanutRisk , color: "transparent" }

                        ],
                        fill: 'white',
                        innerRadius: 30,
                        outerRadius: 100,
                        paddingAngle: 10,
                        cornerRadius: 5,
                        startAngle: 0,
                        endAngle: 360,
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