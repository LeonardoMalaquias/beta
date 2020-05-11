import { TestBed } from '@angular/core/testing';

import { environment } from '../../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { ClientFormService } from './client-form.service';
import { ClientForm } from './client-form.model';

describe('ClientFormService', () => {
  let service: ClientFormService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
      ],
    	providers: [ClientFormService]
    });

    service = TestBed.get(ClientFormService);
  
  });

  it('Should be', () => {
    expect(service).toBeTruthy();

  });

  it('Should be list of clients', () =>{
    expect(service.getClient()).toBeTruthy();
  });

  it('Should be client model', () =>{
    

    let cli = 
      {
        id: 'string',
        address: 'string',
        city: 'Date',
        email: 'Date',
        firstName: 'Date',
        lastName: 'string',
        postalCode: 'number',
        state: 'string',
      }

    expect(service.postClient(cli)).toBeTruthy();
  });

});
