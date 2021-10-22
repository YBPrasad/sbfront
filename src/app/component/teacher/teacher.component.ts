import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/service/teacher.service';
import { Teacher } from 'src/app/teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  id?:number
  name?:string;
  course?:string;
  isUpdate:boolean=false;
  teacher?:Teacher

  displayedColumns: string[] = ['Id', 'Name','Course'];
  dataSource:Teacher[]=[]

  teachers?:Teacher[]
  constructor(private teacherSer:TeacherService) { }

  ngOnInit(): void {
    this.reload();
  }

  reload(){
    this.teacherSer.getAll().subscribe(data=>{
      
      this.teachers=data;
      this.dataSource=this.teachers;
    },error=>{
      console.log(error)
    })
  }

  add(){
    this.teacher={
      teacher_name:this.name,
      course:this.course
    }
    this.teacherSer.addNewTeacher(this.teacher).subscribe(data=>{
      console.log(data);
      this.reload();
    },error=>{
      console.log(error);
    })
    
  }

  edit(id:any,name:any,course:any){
    this.isUpdate=true;
    this.id=id;
    this.name=name;
    this.course=course
  }

  update(){
    this.teacher={
      teacher_name:this.name,
      course:this.course
    }

    this.teacherSer.updateTeacher(this.teacher,this.id).subscribe(data=>{
      console.log(data)
      this.name=""
      this.course=""
      this.isUpdate=false
      this.reload()
    },error=>{
      console.log(error);
      
    })
  }



}
