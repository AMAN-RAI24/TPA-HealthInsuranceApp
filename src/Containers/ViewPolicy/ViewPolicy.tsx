import { Container, Grid, Paper, styled } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cell, Pie, PieChart } from "recharts";
import { Loading } from "../../Components/Loading/loading";
import { ViewPolicyDetails } from "../../Components/View Policy Details/ViewPolicyDetails";
import { groupPolicy, user } from "../../Utitlity/Models/models";
import { getPolicy } from "../../Utitlity/Services/policy";
import "./viewpolicy.scss";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ViewPolicy = () => {
  const [info, setInfo] = useState<groupPolicy>({
    employeeDistribution: {
      ageGroup1: "",
      ageGroup2: "",
      ageGroup3: "",
      ageGroup4: "",
      males: "",
      females: "",
      others: "",
    },
    maximumClaim: {
      angiography: "",
      bypassSurgery: "",
      covidCoverage: "",
      cataractSurgery: "",
      hospitalization: "",
    },
    familyDetails: {
      adults: "0",
      children: "0",
    },
    maternityBenefits: {
      csectionDelivery: "",
      normalDelivery: "",
    },
    creationDate: "",
    roomRentLimit: "",
    hospitalTier: "",

    diagnosticTest: false,
    coverage: "0",
    policyName: " ",
    type: " ",
  });
  const [managerInfo, setManagerInfo] = useState<user>({
    userId: "",
    employeeId: "",
    email: "",
    name: "",
    mobileNumber: "",
    date: new Date(),
    password: "",
    company: {
      companyName: "",
      contactInformation: "",
      address: "",
    },
    role: {
      role: "",
    },
  });
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(info);
    getPolicy(parseInt("" + id)).then((resp) => {
      console.log(resp);
      setInfo(resp);
      setManagerInfo(resp.manager);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    });
  }, []);
  return (
    <Container>
      {/* <Box className="view-policy-container">
        <Box className="box1">
          <div className="gender">Male : Female</div>
          <div className="chart1">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                // label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </Box>
        <Box className="box2">
          <div className="age">EMPLOYEE distribution by AGE</div>
          <div className="chart2">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </Box>
      </Box> */}
      {isLoading ? (
        <div
          style={{
            width: "100%",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loading />
        </div>
      ) : (
        <ViewPolicyDetails managerInfo={managerInfo} info={info} />
      )}
    </Container>
  );
};

export default ViewPolicy;

// import "./viewpolicy.scss";
// import { PieChart, Pie, Cell } from "recharts";

// const data = [
//     { name: "Group A", value: 400 },
//     { name: "Group B", value: 300 },
//     { name: "Group C", value: 300 },
//     { name: "Group D", value: 200 }
// ];

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//     cx,
//     cy,
//     midAngle,
//     innerRadius,
//     outerRadius,
//     percent,
//     index
// }: any) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);

//     return (
//         <text
//             x={x}
//             y={y}
//             fill="white"
//             textAnchor={x > cx ? "start" : "end"}
//             dominantBaseline="central"
//         >
//             {`${(percent * 100).toFixed(0)}%`}
//         </text>
//     );
// };
// export default function ViewPolicy() {
//     return (
// <PieChart width={400} height={400}>
//     <Pie
//         data={data}
//         cx={200}
//         cy={200}
//         labelLine={false}
//         label={renderCustomizedLabel}
//         outerRadius={80}
//         fill="#8884d8"
//         dataKey="value"
//     >
//         {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//         ))}
//     </Pie>
// </PieChart>
//     );
// }
