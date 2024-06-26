import axios, {AxiosInstance, AxiosResponse} from 'axios';


const baseUrl: string = process.env.API_URL || '';

// Create an Axios instance with the defined base URL and default headers
const axiosInstance: AxiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Create a wrapper object for making different types of requests
export const AxiosWrapper = {
    get: async <T>(url: string): Promise<T> => {
        try {
            const response = await axiosInstance.get<T>(url);
            return response.data;
        } catch (error) {
            handleRequestError(error);
        }
    },

    post: async <T>(url: string, body: object): Promise<T> => {
        try {
            const response = await axiosInstance.post<T>(url, body);
            return response.data;
        } catch (error) {
            handleRequestError(error);
        }
    },

    put: async (url: string, body: object): Promise<AxiosResponse> => {
        try {
            return await axiosInstance.put(url, body);
        } catch (error) {
            handleRequestError(error);
        }
    },

    del: async (url: string): Promise<AxiosResponse> => {
        try {
            return await axiosInstance.delete(url);
        } catch (error) {
            handleRequestError(error);
        }
    },

    normalPost: async <T>(url: string, body: object): Promise<T> => {
        try {
            const response = await axiosInstance.post<T>(url, body);
            return response.data;
        } catch (error) {
            handleRequestError(error);
        }
    },
};

// Handle request errors
function handleRequestError(error: any): never {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            throw {
                status: error.response.status,
                message: error.response.data || error.response.statusText,
            };
        } else {
            throw {
                status: 500,
                message: 'Unknown error occurred',
            };
        }
    } else {
        throw error;
    }
}
