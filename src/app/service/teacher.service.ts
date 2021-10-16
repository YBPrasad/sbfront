import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseUrl="http://localhost:8080/api/teachers"
  constructor(private http:HttpClient) { }

  addNewTeacher(teacher:Teacher):Observable<Teacher>{
    return this.http.post(`${this.baseUrl}`,teacher);
  }

}
