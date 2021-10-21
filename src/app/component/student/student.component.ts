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

  id:number=0
  name?:string
  course?:string
  fee?:number
  isUpdate:boolean=false;

  displayedColumns: string[] = ['Id', 'Name', 'Fee', 'Course'];
  dataSource:Student[]=[]
  selectedIndex:number=0;

  student?:Student
  constructor(private studentSer:StudentService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.studentSer.getAllStudents().subscribe(data=>{
      this.students=data
      this.dataSource = this.students;
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
      this.fee=0
      this.course=""
    },error=>{
      console.log(error)
    }
    )
  }

  edit(id:any,name:any,course:any,fee:any){
    this.selectedIndex=1
    this.id=id
    this.name=name;
    this.course=course;
    this.fee=fee;
    this.isUpdate=true;
  }

  update(){
    this.student={
      id:this.id,
      student_name:this.name,
      course:this.course,
      fee:this.fee
    }

    this.studentSer.updateStudent(this.student,this.id).subscribe(data=>{
      this.selectedIndex=3
      console.log(data)
      this.id=0
      this.name="";
      this.course=""
      this.fee=0;
      this.isUpdate=false;
      this.reloadData();

    },error=>{
      console.log(error)
    })
  }

  delete(id:any){
    this.studentSer.deleteStudent(id).subscribe(data=>{
      console.log(data)
      this.reloadData();
    },error=>{
      console.log(error)
    })
  }


}
