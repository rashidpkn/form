import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  primary:{
    title:'',
    lastName:'',
    firstName:'',
    address:'',
    city:'',
    prov:'',
    postCode:'',
    sin:'',
    birthDay:'',
    country:'',
    citizenship:'',
    USPerson:'',
    USTin:'',
  },
  secondary:{
    title:'',
    lastName:'',
    firstName:'',
    address:'',
    city:'',
    prov:'',
    postCode:'',
    sin:'',
    birthDay:'',
    country:'',
    citizenship:'',
    USPerson:'',
    USTin:'',
  },
  registrationInformation:{
    
  },
  investment:{
    GICType:'',
    principalAmount:'',
    rate:'',
    team:{
      years:'',
      days:''
    },
    issueDate:'',
    maturityDate:'',
    interestFrequency:''
  },
  PEFP:{
    PEFP:'',
    text:''
  },
  thirdPartyDeclaration:{
    thirdParty:'',
    name:'',
    birthDay:{
      
    },
    relationship:'',
    occupation:'',
    address:'',

  },
  declaration:{
    signature:{
      primary:'',
      secondary:'',
      agent:'',
    },
    agencyNo:'',
    agentName:'',
    date:'',
    instuctions:''
  }
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPrimary({primary},{payload}){
      const {type,value} = payload
      primary[type] = value
    },
    setSecondary({secondary},{payload}){
      const {type,value} = payload
      secondary[type] = value
    },
    setInvestment({investment},{payload}){
      const {type,value} = payload
      investment[type] = value
    },
    setPEFP({PEFP},{payload}){
      const {type,value} = payload
      PEFP[type] = value
    }
  }
});

export const {setPrimary,setSecondary,setInvestment,setPEFP} = formSlice.actions

export default formSlice.reducer