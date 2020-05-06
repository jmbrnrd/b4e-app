import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';


export interface ClientVaults {
  client_vault_client_id: number;
  client_vault_id: number;
  client_vault_password: string;
  client_vault_tag: string;
  client_vault_vault_id: number;
}
export interface Vaults {
  vault_IP_address: string;
  vault_assigned_date: string;
  vault_id: number;
  vault_installed_date: string;
  vault_name: string;
  vault_physical_address: string;
  vault_status: string;
  vault_type: string;
}
export interface Client {
  client_corporate_id: number;
  client_forename: string;
  client_id: number;
  client_initials: string;
  client_password: string;
  client_recovery: string;
  client_reference_number: string;
  client_registration_date: string;
  client_status: string;
  client_surname: string;
  client_title: string;
  client_type: string;
  client_user_name: string;
  client_verified_date: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api = {
    clients: 'assets/data/clients.json',
    clientVaults: 'assets/data/client_vaults.json',
    vaults: 'assets/data/vaults.json'
  };
  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.api.clients);
  }

  getClientVaults(): Observable<ClientVaults[]> {
    return this.http.get<ClientVaults[]>(this.api.clientVaults);
  }

  getVaults(): Observable<Vaults[]> {
    return this.http.get<Vaults[]>(this.api.vaults);
  }
}
