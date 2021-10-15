import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl='http://localhost:8080/api/students'

  constructor(private http:HttpClient) { }

  getAllStudents():Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseUrl}`);
  }

  create(data:Student):Observable<Student>{
    return this.http.post(`${this.baseUrl}`,data);
  }

  updateStudent(std:Student,id:number):Observable<Student>{
    return this.http.put(this.baseUrl+'/'+id,std);
  }

  deleteStudent(id:number):Observable<Student>{
    return this.http.delete(this.baseUrl+'/'+id);
  }
}
