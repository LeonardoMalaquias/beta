import { Injectable } from '@angular/core';
import { ClientForm } from './client-form.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClientFormService {
	
	constructor(private firestore: AngularFirestore) { }

	getClient(){
		return this.firestore.collection('client').snapshotChanges();
	}

	postClient(client: ClientForm){
		return this.firestore.collection('client').add(client);
	}
}
