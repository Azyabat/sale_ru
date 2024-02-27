import axios, { AxiosResponse } from "axios";
import { JWT } from "helpers/jwt";
import { Error as CustomError } from "./types";

export const baseUrl = "http://localhost:3001";

const jwtToken = JWT.getJwt() || "";

axios.interceptors.request.use((config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${jwtToken}`;

    return config;
});

export const get = <Response>(url: string): Promise<Response> =>
    axios
        .get<Response>(`${baseUrl}${url}`)
        .then((response) => response.data)
        .catch(({ response }: { response: AxiosResponse<CustomError> }) => {
            if (response.status === 403) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                window.location = "/auth";
            }
            throw new Error(response.data.message);
        });

export const post = <T, Response>(url: string, body: T): Promise<Response> =>
    axios
        .post<Response>(`${baseUrl}${url}`, body)
        .then((response) => response.data)
        .catch(({ response }: { response: AxiosResponse<CustomError> }) => {
            throw new Error(response.data.message);
        });

export const put = <T, Response>(url: string, body: T): Promise<Response> =>
    axios
        .put<Response>(`${baseUrl}${url}`, body)
        .then((response) => response.data)
        .catch(({ response }: { response: AxiosResponse<CustomError> }) => {
            throw new Error(response.data.message);
        });

export const remove = <Response>(url: string): Promise<Response> =>
    axios
        .delete<Response>(`${baseUrl}${url}`)
        .then((response) => response.data)
        .catch(({ response }: { response: AxiosResponse<CustomError> }) => {
            throw new Error(response.data.message);
        });
