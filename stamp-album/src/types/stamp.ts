export enum EStampUsage {
    GreenLetter = "Lettre Verte",
    PriorityLetter = "Lettre Prioritaire",
    Other = "Autres",
}

export type TStamp = {

    uuid : string
    name : string,
    year : number,
    numberOfCopies : number,
    usage : EStampUsage

}