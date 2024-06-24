export default class HttpException extends Error{

    #statusCode: number;
   
    constructor(statusCode: number, message: string){
        super(message)
        this.#statusCode = statusCode;
    }

    getStatusCode(): number {
        return this.#statusCode;
    }
}