import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslatorServiceService {

  constructor(private http: HttpClient) { }

  translateToBangla(text: string): Observable<string> {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=bn&dt=t&q=${encodeURIComponent(text)}`;
    return this.http.get<any>(url).pipe(
      map(res => res[0].map((item: any) => item[0]).join('')) // Extract translated text
    );
  }
}
