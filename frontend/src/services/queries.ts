import axios from 'axios'
import config from '../config';
import { IQuery } from '../models';
import { AxiosResponse } from 'axios';
const { apiURL } = config

const axiosInstance = axios.create({
    method: 'POST',
    baseURL: `${apiURL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
})

/**
 * Trigger Bright Data collector that fetch price data about {keyword} from several competitors
 */
function triggerCollector(keyword: string): Promise<AxiosResponse<{ success: boolean, errorMessage?: string }>> {
    return axiosInstance.post('/collect', { keyword })
}

function getQuery(keyword: string, top?: number): Promise<AxiosResponse<{ success: boolean, data?: IQuery, errorMessage?: string }>> {
    console.log("TEST")
    return axiosInstance.get(`/query?keyword=${keyword}&top=${top}`)
}

function registration(name: String, email: String, password: String): Promise<AxiosResponse<{ success: boolean, errorMessage?: string }>> {
    console.log("TEST")
    return axiosInstance.post(`/registration`, {
        name,
        email,
        password
    })
}

function login(email: String, password: String): Promise<AxiosResponse<{ success: boolean, errorMessage?: string }>> {
    console.log("LOGIN")
    return axiosInstance.post(`/login`, {
        email,
        password
    })
}

export default {
    registration,
    login,
    triggerCollector,
    getQuery
} as const;