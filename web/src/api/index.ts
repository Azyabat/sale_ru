import axios, { AxiosResponse } from "axios";
import { Error } from "./types";

export const baseUrl = "http://localhost:3001";

export const get = <Response>(url: string): Promise<Response | Error> =>
    axios
        .get<Response>(`${baseUrl}${url}`)
        .then((response) => response.data)
        .catch(
            ({ response }: { response: AxiosResponse<Error> }) => response.data
        );

export const post = <T, Response>(
    url: string,
    body: T
): Promise<Response | Error> =>
    axios
        .post<Response>(`${baseUrl}${url}`, body)
        .then((response) => response.data)
        .catch(
            ({ response }: { response: AxiosResponse<Error> }) => response.data
        );

export const put = <T, Response>(
    url: string,
    body: T
): Promise<Response | Error> =>
    axios
        .put<Response>(`${baseUrl}${url}`, body)
        .then((response) => response.data)
        .catch(
            ({ response }: { response: AxiosResponse<Error> }) => response.data
        );

export const remove = <Response>(url: string): Promise<Response | Error> =>
    axios
        .delete<Response>(`${baseUrl}${url}`)
        .then((response) => response.data)
        .catch(
            ({ response }: { response: AxiosResponse<Error> }) => response.data
        );
