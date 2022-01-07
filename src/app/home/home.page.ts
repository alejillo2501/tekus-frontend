import { Component, OnInit } from '@angular/core';
import { Services } from '../config/services';
import { avance, basic } from '../config/type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  dateNow: String;
  currency:String;
  viewBitcoint:boolean = false;
  time:number = 59;
  intervalTime:any;
  lastDate:any;
  listLastFifteenDays:any = [];
  viewLoadList: boolean = true;

  constructor(
    private apirest: Services,
    public router: Router
  ) {
    this.loadDay();
    this.loadLastDays();
  }

  ngOnInit() {

    this.intervalTime = setInterval(() => {
      if(this.time == 0){
        this.time = 59;
        this.loadDay();
      }else{
        this.time--;
      }
    },1000)

  }

  async loadDay(){
    this.viewBitcoint = false;
    const response = await this.apirest.bitcointToday().then((resp:basic) => {
      
      if(resp.status == 200){
        const result:any = resp.data;
        localStorage.setItem('lastBitCointDay', JSON.stringify(resp));
        this.dateNow = result.amount;
        this.currency = result.currency;
        this.lastDate = resp.date;
      }else{
        const lastStorage = JSON.parse(localStorage.getItem('lastBitCointDay'));
        const result:any = lastStorage.data;
        this.dateNow = result.amount;
        this.currency = result.currency;
        this.lastDate = lastStorage.date;
      }

      this.viewBitcoint = true;
    }).catch((err) => {
      this.viewBitcoint = true;
      console.log('Error en service TODAY: ', err);
      const lastStorage = JSON.parse(localStorage.getItem('lastBitCointDay'));
      const result:any = lastStorage.data;
      this.dateNow = result.amount;
      this.currency = result.currency;
      this.lastDate = lastStorage.date;
    })
    
  }

  async loadLastDays(){
    this.viewLoadList = false;
    await this.apirest.bitcointLastFifteenDays().then((resp:avance) => {
      this.listLastFifteenDays = resp.data;
      this.viewLoadList = true;
    }).catch((err) => {
      console.log('Error cargando BitCoint últimos 15 días: ', err);
      this.viewLoadList = true;
    })
  }

  async loadByDate(item){
    this.router.navigate(['infobitcoint/', item]);
  }

}
