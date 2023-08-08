import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {

    try{

        const token = request.cookies.get("token")?.value || "";
        jwt.verify(token, "test");
        return token;
    }catch(error : any){
        throw new Error(error.message);
    }


};