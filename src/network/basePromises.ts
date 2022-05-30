import axios from "axios";

interface Response {
  data: string;
}

export const readValue = <ResponseType>(response: Response): ResponseType => {
  if (typeof response.data === "object") {
    return response.data;
  }

  return JSON.parse(response.data) as ResponseType;
};

export const getEmptyPromise = async <ResponseType>(path: string): Promise<ResponseType> => {
  return axios.get(path).then(response => readValue<ResponseType>(response));
};

export const getPromise = async <PayloadType, ResponseType>(path: string, payload: PayloadType): Promise<ResponseType> => {
  return axios.get(path, { params: { ...payload } }).then(response => readValue<ResponseType>(response));
};

export const postPromise = async <PayloadType>(path: string, payload: PayloadType) => {
  return axios.post(path, { params: { ...payload } });
};

export const deletePromise = async <PayloadType>(path: string, payload: PayloadType) => {
  return axios.delete(path, { data: { ...payload } });
};
