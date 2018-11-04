import { Component, OnInit } from '@angular/core';
import { ChamadoService } from '../shared/chamado.service';
import { Chamado } from '../shared/chamado.model';
import { NgForm, FormGroup, FormControl, FormArray } from '@angular/forms'
//import { GeoService } from '../geo.service';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css'],
  providers: [ChamadoService]
})
export class ConfirmacaoComponent implements OnInit {

  lat: number;
  lng: number;

  markers: any;
  //subscription: any;

  selectedHospital: string = '';
  hospitais: any = [
    'Hospital Haoc',
    'Hospital Santa Ignês',
    'Hospital Dia'
  ];

  selectedGravidade: string = '';
  gravidades: any = [
    'Morto',
    'Atendimento Imediato',
    'Pode aguardar',
    'Leve'
  ];

  partesFormArray: Array<any> = [];

  cabecas = [ 
    {name:"Crânio", id: 1},
    {name:"Face", id: 2},
    {name:"Pescoço", id: 3}
  ];

  ts = [ 
    {name:"Toráx", id: 1},
    {name:"Abdomen", id: 2},
    {name:"Pelve", id: 3}
  ];

  mss = [ 
    {name:"Ombro", id: 1},
    {name:"Antebraço", id: 2},
    {name:"Braço", id: 3},
    {name:"Mão", id: 4}
  ];

  mis = [ 
    {name:"Quadril", id: 1},
    {name:"Coxa", id: 2},
    {name:"Perna", id: 3},
    {name: "Pé", id: 4}
  ];
  
  chamado:Chamado = new Chamado();
  submitted: false;

  constructor(private chamadoService : ChamadoService /*private geo: GeoService*/) {}
  ngOnInit() {
    this.getUserLocation()
    // this.subscription = this.geo.hits
        // .subscribe(hits => this.markers = hits);
  
  }

  mydate = Date.now();

  onChange(partes:string, isChecked: boolean) {
  if(isChecked) {
    this.partesFormArray.push(partes);
  } else {
    let index = this.partesFormArray.indexOf(partes);
    this.partesFormArray.splice(index,1);
  }
  console.log(this.partesFormArray)
  } 

  newChamado():void {
    this.submitted = false; 
    this.chamado = new Chamado();
  }

  salvar(){
    this.chamadoService.createChamado(this.chamado);
  }

  onSubmit(){
    //this.submitted = true; //da problema quando esta sem comentar
    this.chamado.localizacao = this.lat;
    this.chamado.localizacao = this.lng;
    this.chamado.fraturaFerimento = this.partesFormArray;
    this.chamado.dataEhora = this.mydate.toString();
    this.salvar()
  }

  
  /*private seedDatabase () {
    let dummyPoints =[
      [37.9, -122.1]
    ]
    dummyPoints.forEach((val, idx) =>{
      let name = `dummy-location-${idx}`
      console.log(idx)
      this.geo.setLocation(name,val)
    })
  }*/

  private getUserLocation(){
    //localizar ocorrencia
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
         this.lat = position.coords.latitude;
         this.lng = position.coords.longitude;

        //this.geo.getLocations(500, [this.lat, this.lng])
      });
    }

  }

  location(){
    console.log(event);
  }
  
  radioChangeHandler (event: any){
    this.selectedHospital = event.target.value;
  }

  radioChangeHandler1 (event: any){
    this.selectedGravidade = event.target.value;
  }
}

