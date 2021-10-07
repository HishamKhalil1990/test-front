import axios from "axios";

const globalURL = 'https://test-back-media.herokuapp.com/data'

export default async function getData(source){

    if (source == 'local'){
        const data = require('../public/data.json')
        return data
    }else if(source == 'API'){
        const data = await axios.get(globalURL)
        console.log(data.data)
        return data
    }
};