import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course?:Course[]

  displayedColumns: string[] = ['Id', 'Name', '#'];
  dataSource:Course[]=[]

  constructor(private courseSer:CourseService) { }

  ngOnInit(): void {
    this.reloadData()
  }

  

  reloadData(){
    this.courseSer.getAllCourses().subscribe(data=>{
      this.dataSource=data
    },error=>{
      console.log(error)
    })
  }

  
}
