import axios from "axios";

const globalURL = ''

export default function getData(source){

    if (source == 'local'){
        const data = require('../public/data.json')
        return data
    }else if(source == 'xAPI'){
        const {data} = axios.get(globalURL)
        return data
    }
};