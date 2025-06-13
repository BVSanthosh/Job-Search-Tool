import { Request, Response } from "express";

export const getInsights = async (req : Request, res: Response) => {
    const { name } = req.params;
    res.send("no information");
}