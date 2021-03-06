/*import { Injectable } from '@angular/core'
import { AngularFireDatabase } from '@angular/fire/database';
import GeoFire from 'geofire';

import { BehaviorSubject } from 'rxjs';



@Injectable()
 export class GeoService {

    dbRef: any;
    geoFire: any;

    hits = new BehaviorSubject([])
     
    constructor(private db: AngularFireDatabase){

        ///reference database location for GeoFire
        this.dbRef = this.db.list('/locations');
        this.geoFire = new GeoFire(this.dbRef.$ref);
    }

    /// Adds GeoFire data do database
    setLocation(key: string, coords: Array<number>){
        this.geoFire.set(key, coords)
            .then(_ => console.log('Localização atualizada.'))
            .catch(err => console.log(err))
    }

    ///Queries database for nearby locations, then maps to BehaviorSubject
    getLocations(radius: number, coords: Array<number>){
        this.geoFire.query({
            center: coords,
            radius: radius
        })
        .on('key_entered', (key, location, distance) => {
            let hit = {
                location: location,
                distance: distance
            }

            let currentHits = this.hits.value
            currentHits.push(hit)
            this.hits.next(currentHits)
        })
    }

 }*/