import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Services } from '../config/services';
import { byDate, currency } from '../config/type';

@Component({
  selector: 'app-infobitcoint',
  templateUrl: './infobitcoint.page.html',
  styleUrls: ['./infobitcoint.page.scss'],
})
export class InfobitcointPage implements OnInit {

  id:any;
  info:any = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router, 
    private loadingController: LoadingController,
    private apirest: Services
  ) { 
    this.id = this.activeRoute.snapshot.paramMap.get('item');
    this.loadInfo();
  }

  ngOnInit() {
   
  }

  async loadInfo(){
    const loading = await this.loadingController.create({
      message: 'Cargando BitCoint...'
    });
    await loading.present();
    await this.apirest.bitcointByDate(this.id).then((resp:byDate) => {
      
      if(resp.status == 200){
        this.info = resp.data;
      }

      loading.dismiss();
    })
  }

  return(){
    this.router.navigate(['home']);
  }

}
