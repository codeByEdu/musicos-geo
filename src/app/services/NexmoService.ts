import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NexmoService {
    private apiUrl = 'https://rest.nexmo.com/sms/json';

    constructor(private http: HttpClient) { }

    sendSMS(textBody: string): Observable<any> {

        const apiKey = '700c09ad';
        const apiSecret = 'ziFmg2VdS0OhK00B';

        const from = 'AcmeInc';
        const to = '5511981120937';
        const text = textBody;



        const url = `${this.apiUrl}?api_key=${apiKey}&api_secret=${apiSecret}&from=${from}&to=${to}&text=${text}`;

        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': '396'
        });

        return this.http.post(url, {}, { headers });
    }
}
