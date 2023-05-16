import { Box } from "@mui/system";

export function ViewPolicyDetails(props: { managerInfo: any; info: any }) {
  return (
    <Box className="plans">
      <div className="plan-heading">Plan Details</div>
      <Box sx={{ backgroundColor: "white", margin: "30px", padding: "20px" }}>
        <Box
          sx={{
            display: "flex",
            margin: "5px 0 20px 50px",
            "font-size": "20px",
            "font-weight": "bold",
          }}
        >
          Basic Details
        </Box>
        <Box sx={{ display: "flex", "margin-left": "50px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: "1",
              rowGap: "8px",
            }}
          >
            <Box>Company Name</Box>
            <Box>Date of Creation</Box>
            <Box>Policy Name</Box>
            <Box>Manager Name</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: "1",
              rowGap: "8px",
            }}
          >
            <Box>
              :{" "}
              {props.info.company != undefined
                ? props.info.company.companyName
                : "NA"}
            </Box>
            <Box>: {props.info.creationDate.split("T")[0]}</Box>
            <Box>: {props.info.policyName}</Box>
            <Box>: {props.managerInfo ? props.managerInfo.name : ""}</Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "white", margin: "30px", padding: "20px" }}>
        <Box
          sx={{
            display: "flex",
            margin: "5px 0 20px 50px",
            "font-size": "20px",
            "font-weight": "bold",
          }}
        >
          Benefits
        </Box>
        <Box sx={{ display: "flex", "margin-left": "50px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: "1",
              rowGap: "8px",
            }}
          >
            <Box>Coverage</Box>
            <Box>Hospital Tier</Box>
            <Box>Room rent limit</Box>
            <Box>Family</Box>
            <Box>Diagnostic Test</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: "1",
              rowGap: "8px",
            }}
          >
            <Box>: {props.info.coverage} Lac</Box>
            <Box>: {props.info.hospitalTier} star</Box>
            <Box>: {props.info.roomRentLimit}</Box>
            <Box>
              :{" "}
              {props.info.familyDetails.adults &&
              props.info.familyDetails.children
                ? "YES"
                : "NO"}
            </Box>
            <Box>: {props.info.diagnosticTest ? "YES" : "NO"}</Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "white", margin: "30px", padding: "20px" }}>
        <Box
          sx={{
            display: "flex",
            margin: "5px 0 20px 50px",
            "font-size": "20px",
            "font-weight": "bold",
          }}
        >
          Injury / Surgery Maximum Claims
        </Box>
        <Box sx={{ display: "flex", "margin-left": "50px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: "1",
              rowGap: "8px",
            }}
          >
            <Box>Bypass Surgery</Box>
            <Box>Angiography</Box>
            <Box>Cataract Surgery</Box>
            <Box>Hospitalization</Box>
            <Box>Covid Coverage</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: "1",
              rowGap: "8px",
            }}
          >
            <Box>:{props.info.maximumClaim.bypassSurgery} %</Box>
            <Box>:{props.info.maximumClaim.angiography} %</Box>
            <Box>:{props.info.maximumClaim.cataractSurgery} %</Box>
            <Box>:{props.info.maximumClaim.hospitalization} %</Box>
            <Box>: {props.info.maximumClaim.covidCoverage}%</Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "white", margin: "30px", padding: "20px" }}>
        <Box
          sx={{
            display: "flex",
            margin: "5px 0 20px 50px",
            "font-size": "20px",
            "font-weight": "bold",
          }}
        >
          Maternity Benifits
        </Box>
        <Box sx={{ display: "flex", "margin-left": "50px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: "1",
              rowGap: "8px",
            }}
          >
            <Box>C-section delivery</Box>
            <Box>Normal delivery</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: "1",
              rowGap: "8px",
            }}
          >
            <Box>: {props.info.maternityBenefits.csectionDelivery}%</Box>
            <Box>: {props.info.maternityBenefits.normalDelivery}%</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
