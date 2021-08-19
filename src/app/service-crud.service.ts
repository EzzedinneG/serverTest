import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCRUDService {

  constructor(private http:HttpClient) { }
 
  findAllUser():Observable<any>
  {
    return this.http.get('http://localhost:8080/api/',{observe:'response'});
  }
  UPDATE(user :any):Observable<any>
  {
    return (this.http.put('http://localhost:8080/api/update',user));
}
delete(id:any):Observable<any>
{
  return (this.http.delete('http://localhost:8080/api/delete/'+id));
}

}