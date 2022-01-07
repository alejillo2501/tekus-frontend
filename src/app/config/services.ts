import { BITCOINT_TODAY, BITCOINT_LAST15DAYS, BITCOINT_BY_DATE} from './endpoints';
import { basic, avance, byDate } from './type';

export class Services {

    bitcointToday = async():Promise<basic> =>{
        return await fetch(BITCOINT_TODAY,{
            method: 'GET'
        }).then((resp) => resp.json());
    }

    bitcointLastFifteenDays = async():Promise<avance> =>{
        return await fetch(BITCOINT_LAST15DAYS,{
            method: 'GET'
        }).then((resp) => resp.json());
    }

    bitcointByDate = async(item:string):Promise<byDate> =>{
        const body = {
            item: item
        }
        return await fetch(BITCOINT_BY_DATE,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then((resp) => resp.json());
    }
}

