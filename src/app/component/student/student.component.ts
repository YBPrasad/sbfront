import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from 'src/app/service/student.service';
import { Student } from 'src/app/student';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students?:Student[];

  name?:string
  course?:string
  fee?:number

  student?:Student
  constructor(private studentSer:StudentService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.studentSer.getAllStudents().subscribe(data=>{
      this.students=data
      console.log(this.students)
    },error=>{
      console.log(error)
    });
  }

  add(){
    this.student={
      student_name:this.name,
      course:this.course,
      fee:this.fee
    }

    this.studentSer.create(this.student).subscribe(data=>{
      this.reloadData();
      this.name=""
      this.fee
      this.course=""
    },error=>{
      console.log(error)
    }
    )
  }


}
