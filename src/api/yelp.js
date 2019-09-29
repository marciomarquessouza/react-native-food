import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer mhd8bSGbv0QZrSO3Pxt7cWxLZoWUhrzmMP9nBFf3hhAMDvs8RHB6-5CS1EJDO27dDtfiQqhVmcYNA7qtOlol0_GswBeomO--QAOhL5GHWYfPqCv8fiwcKda70i2QXXYx'
    }
})