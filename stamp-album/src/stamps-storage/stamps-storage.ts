import { TStamp } from "../types/stamp";

export class StampsStorage {


    private static readonly STAMPS_LOCALSTORAGE_KEY : string = "STAMPS"

    

    public static getCurrent() : TStamp[]
    {
        const saved = localStorage.getItem(StampsStorage.STAMPS_LOCALSTORAGE_KEY)
        if (!saved) return []
        return JSON.parse(saved)
    }



    public static save(stamp : TStamp)
    {
        localStorage.setItem(this.STAMPS_LOCALSTORAGE_KEY, JSON.stringify([...this.getCurrent(), stamp]))
    }
    
    public static update(stamp : TStamp)
    {
        localStorage.setItem(this.STAMPS_LOCALSTORAGE_KEY, JSON.stringify([...this.getCurrent().filter(stp => stp.uuid !== stamp.uuid), stamp]))
    }

    public static delete(stamp : TStamp)
    {
        localStorage.setItem(this.STAMPS_LOCALSTORAGE_KEY, JSON.stringify(this.getCurrent().filter(stp => stp.uuid !== stamp.uuid)))
    }
    

}