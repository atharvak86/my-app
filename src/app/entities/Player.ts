export class Player
{
    pId:number
    pName:string
    pRank:number
    pCountry:string

    constructor(pId:number, pName:string, pRank:number, pCountry:string)
    {
        this.pId = pId
        this.pName = pName
        this.pRank = pRank
        this.pCountry = pCountry
    }
}