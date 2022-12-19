//para respostas da api

export interface Response<T> {
    message?: string;
    data: T;
}