import { Request, Response, NextFunction } from "express";


export default class ProductController{

    constructor(){}

    postProduct(request: Request, response: Response) {
        response.json({message: "Post Product"})
    }

    readAllProducts(request: Request, response: Response){
        response.json({message: "Read all Product"})
    }

    readOneProduct(request: Request, response: Response){
        const {id} = request.params
        response.json({message: "Read Product", id: id})
    }

    updateProduct(request: Request, response: Response){
        
    }

    deleteOneProduct(request: Request, response: Response){

    }

    deleteAllProduct(request: Request, response: Response){

    }
}