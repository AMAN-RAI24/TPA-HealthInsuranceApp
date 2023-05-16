type role = {
  role: string;
};
type hospital = {
  hospitalName: string;
  tier: string;
  location: string;
  contactInformation: string;
};
type company = {
  companyName: string;
  address: string;
  contactInformation: string;
};

type user = {
  userId: String;
  employeeId: String;
  email: String;
  name: String;
  mobileNumber: String;
  date: Date;
  password: String;
  company: company;
  role: role;
};

type loginRequest = {
  username: string;
  password: string;
};

type policyDetails = {
  policyId: number;
  policyName: String;
  benefits: number;
  coverage: number;
};
type groupPolicy = {
  company?: {
    companyName: string;
  };
  manager?: {
    name: string;
  };
  employeeDistribution: {
    ageGroup1: string;
    ageGroup2: string;
    ageGroup3: string;
    ageGroup4: string;
    males: string;
    females: string;
    others: string;
  };
  maximumClaim: {
    angiography: string;
    bypassSurgery: string;
    covidCoverage: string;
    cataractSurgery: string;
    hospitalization: string;
  };
  familyDetails: {
    adults: string;
    children: string;
  };
  maternityBenefits: {
    csectionDelivery: string;
    normalDelivery: string;
  };
  creationDate: string;
  roomRentLimit: string;
  hospitalTier: string;

  diagnosticTest: boolean;
  coverage: string;
  policyName: string;
  type: string;
  status?: string;
};
type familyDetails = {
  name: String;
  age: number;
  relation: String;
  phoneNumber: String;
  imageUrl: String;
  userFamilyDetailsId: number;
};
type userPolicy = {
  coverage: number;
  userPolicyId: number;
  groupPolicy: groupPolicy;
  user: user;
  userFamilyDetails: Array<familyDetails>;
};

type insuranceCompany = {
  name: string;
  address: string;
  representative: string;
  phoneNumber: string;
};

export type {
  role,
  hospital,
  company,
  user,
  loginRequest,
  groupPolicy,
  policyDetails,
  userPolicy,
  insuranceCompany,
};
