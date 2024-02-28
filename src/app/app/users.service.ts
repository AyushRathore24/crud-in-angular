import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './Iuser';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  url='https://jsonplaceholder.typicode.com/posts'

  getdata():Observable<IUser[]>{
return this.http.get<IUser[]>(this.url)
  }
  deletedata(id: number): Observable<any> {
    return this.http.delete<IUser>(`${this.url}/${id}`);
  }
  postdata(data:IUser[]): Observable<any> {
    return this.http.post(this.url,data);
  }
  edit(foredit:IUser ,ide:Number): Observable<any> {
    return this.http.put(`${this.url}/${ide}`,foredit);
  }
}
