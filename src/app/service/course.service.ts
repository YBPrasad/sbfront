import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl='http://localhost:8080/api/course'
  constructor(private http:HttpClient) { }

  getAllCourses(){
    return this.http.get(this.baseUrl);
  }
}
