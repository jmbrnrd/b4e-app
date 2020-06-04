import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

// Models
export interface ClientVault {
  client_vault_client_id: number;
  client_vault_id: number;
  client_vault_password: string;
  client_vault_tag: string;
  client_vault_vault_id: number;
}
export interface Vault {
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
  id: number;
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
export interface VaultFile {
  vault_file_id: number;
  vault_file_vault_id: number;
  vault_file_filename: string;
  vault_file_filedate: string;
  vault_file_filesize: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api = 'http://localhost:3000';
  constructor(
    private http: HttpClient
  ) {}

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.api + '/clients');
  }

  getClient(username: string): Observable<Client[]> {
    return this.http.get<Client[]>(this.api + '/clients?client_user_name=' + username);
  }

  getAllClientVaults(id): Observable<ClientVault[]> {
    return this.http.get<ClientVault[]>(this.api + '/client_vaults?client_vault_client_id=' + id);
  }

  getVault(id): Observable<Vault[]> {
    return this.http.get<Vault[]>(this.api + '/vaults/?vault_id=' + id);
  }

  getVaultFiles(id): Observable<VaultFile[]> {
    return this.http.get<VaultFile[]>(this.api + '/vaultfiles/?vault_file_vault_id=' + id);
  }

}
