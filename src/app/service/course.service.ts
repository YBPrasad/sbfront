import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl='http://localhost:8080/api/course'
  constructor(private http:HttpClient) { }

  getAllCourses():Observable<Course[]>{
    return this.http.get<Course[]>(`${this.baseUrl}`);
  }
}
