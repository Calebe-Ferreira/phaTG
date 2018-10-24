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

  order: any;
  lat: number;
  lng: number;

  markers: any;
  //subscription: any;
  
  cabecas = ['Crânio', 'Face', 'Pescoço'];
optionsMap = {
        Crânio: true,
        Face: false,
        Pescoço: false,
};
optionsChecked = [];


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

  /*selectedCabeca: string = '';
  cabecas = [
    {name:"Crânio", id: 1},
    {name:"Face", id: 2},
    {name:"Pescoço", id: 3}
  ];*/

  selectedTronco: string = '';
  troncos: any = [
    'Toráx',
    'Abdomen',
    'Pelve'
  ];
  
  selectedMs: string = '';
  mss: any = [
    'Ombro',
    'Antebraço',
    'Braço',
    'Mão'
  ];
  
  selectedMi: string = '';
  mis: any = [
    'Quadril',
    'Coxa',
    'Perna',
    'Pé'
  ];
  
  chamado:Chamado = new Chamado();
  submitted: false;

  constructor(private chamadoService : ChamadoService /*private geo: GeoService*/) { }

  ngOnInit() {
    this.getUserLocation()
    // this.subscription = this.geo.hits
        // .subscribe(hits => this.markers = hits);
  
  }

  newChamado():void {
    this.submitted = false; 
    this.chamado = new Chamado();
  }

  salvar(){
    this.chamadoService.createChamado(this.chamado);
    this.chamado = new Chamado();
  }

  onSubmit(){
    //this.submitted = true; da problema quando esta sem comentar
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

  /*radioChangeHandler2 (event: any) {
    this.selectedCabeca = event.target.value;
  }*/

  radioChangeHandler3 (event: any) {
    this.selectedTronco = event.target.value;
  }

  radioChangeHandler4 (event: any) {
    this.selectedMs = event.target.value;
  }

  radioChangeHandler5 (event: any) {
    this.selectedMi = event.target.value;
  }

  /*onChange(cab:string, isChecked: boolean) {
    if(isChecked) {
      this.cabecaFormArray.push(cab);
    } else {
      let index = this.cabecaFormArray.indexOf(cab);
      this.cabecaFormArray.splice(index,1);
    }
}*/


////////
initOptionsMap() {
  for (var x = 0; x<this.order.options.length; x++) {
      this.optionsMap[this.cabecas[x]] = true;
  }
}

updateCheckedOptions(cabeca, event) {
  this.optionsMap[cabeca] = event.target.checked;

}

updateOptions() {
  for(var x in this.optionsMap) {
      if(this.optionsMap[x]) {
          this.optionsChecked.push(x);
      }
  }
  this.cabecas = this.optionsChecked;
  this.optionsChecked = [];
}


}

