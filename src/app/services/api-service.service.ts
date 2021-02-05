import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    getPatients() {
        const params = new HttpParams()
            .append('birthdate', 'ge1960-01-01')
            .append('birthdate', 'le1965-12-31');
        return this.httpClient.get(environment.queryURI + '/Patient',
            {params, headers: this.getHeaders()});
    }

    getSearchPatients(name: string, birthDate: string) {
        let params = new HttpParams();
        if (name) {
            params = params.set('name:contains', name);
        }
        if (birthDate) {
            params = params
                .append('birthdate', 'le' + birthDate)
                .append('birthdate', 'ge' + birthDate);
        }
        return this.httpClient.get(environment.queryURI + '/Patient',
            {params, headers: this.getHeaders()});
    }

    private getHeaders(): HttpHeaders {
        const headers = new HttpHeaders({
            'Content-Type': 'application/fhir+json'
        });
        return headers;
    }
}


