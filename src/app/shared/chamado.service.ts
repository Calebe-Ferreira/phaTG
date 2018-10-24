import { Injectable } from '@angular/core'
import { Chamado } from './chamado.model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database' 


@Injectable()
export class ChamadoService {
    
    private dbPath = '/chamados';
    chamadosRef: AngularFireList<Chamado> = null;
    //chamadolist : AngularFireList<any>;
    //selectChamado: Chamado = new Chamado();
    constructor(private db: AngularFireDatabase /*private firebase: AngularFireDatabase*/) {
        this.chamadosRef = db.list(this.dbPath);
    }

    createChamado(chamado: Chamado): void {
        this.chamadosRef.push(chamado);
    }

    getChamadosList(): AngularFireList<Chamado>{
        return this.chamadosRef;
    }
    /*getData(){
        this.chamadolist = this.firebase.list('chamados');
        return this.chamadolist;
    }*/

    /*insertChamado(chamadoC: Chamado){
        this.chamadolist.push({
            nomeHospital: chamadoC.nomeHospital,
            localizacao: chamadoC.localizacao,
            gravidade: chamadoC.gravidade,
            fraturaFerimento: chamadoC.fraturaFerimento,
            infoAdicionais: chamadoC.infoAdicionais
        });
    }*/

    getHospital(){
        return [
            {valor: 'haoc', desc: 'Hospital Haoc'},
            {valor: 'santaIgnes', desc: 'Hospital Santa Ignes'},
            {valor: 'dia', desc: 'Hospital Dia'}
        ];
    }

    getGravidade(){
        return [
            {valor: 'morto', desc: 'Morto'},
            {valor: 'imediato', desc: 'Atendimento imediato'},
            {valor: 'aguardar', desc: 'Pode aguardar'},
            {valor: 'leve', desc: 'Leve'}
        ];
    }

    getParte1(){
        return [
            {valor: 'cranio', desc: 'Crânio'},
            {valor: 'face', desc: 'Face'}
        ];
    }


}

