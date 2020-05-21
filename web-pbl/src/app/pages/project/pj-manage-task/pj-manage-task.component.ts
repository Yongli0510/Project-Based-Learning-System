import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CommonValidators } from '../../../share/CommonValidator'

import { Task } from '../../../share/task.model';
import { TaskService } from '../../../services/task.service';
import { Student } from '../../../share/student.model';
import { StudentService } from '../../../services/student.service';
import { NzModalService } from 'ng-zorro-antd/modal';

import endOfMonth from 'date-fns/endOfMonth';
import { da } from 'date-fns/locale';

@Component({
  selector: 'app-pj-manage-task',
  templateUrl: './pj-manage-task.component.html',
  styleUrls: ['./pj-manage-task.component.css']
})
export class PjManageTaskComponent implements OnInit {
  projectId:number;
  public tasks:Task[] = [];
  validateForm;
  students:Student[]=[];

  isSubmit:boolean;

  ranges1 = { Today: [new Date(), new Date()], 'This Month': [new Date(), endOfMonth(new Date())] };
  ranges2 = { Today: [new Date(), new Date()], 'This Month': [new Date(), endOfMonth(new Date())] };

  autoTips: Record<string, Record<string, string>> = {
    'zh-cn': {
      required: '必填项',
      email: '邮箱格式不正确'
    },
    en: {
      required: 'Input is required',
      email: 'The input is not valid email'
    }
  };

  public listOfColumn = [
    {
      title: '任务名称',
    },
    {
      title: '负责人',
      compare: (a: Task, b: Task) => a.user_name.localeCompare(b.user_name),
      priority: 1
    },
    {
      title: '开始时间',
      compare: (a: Task, b: Task) => a.start_time.localeCompare(b.start_time),
      priority: 2
    },
    {
      title: '结束时间',
      compare: (a: Task, b: Task) => a.end_time.localeCompare(b.end_time),
      priority: 4
    },
    {
      title: '任务进度',
      compare: (a: Task, b: Task) => a.state - b.state,
      priority: 3
    },
    {
      title: '任务描述',
    },
    {
      title: '操作'
    }
  ];

  constructor(
    public fb: FormBuilder,
    private taskService:TaskService,
    private modal: NzModalService,
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
  ){
    activatedRoute.params.subscribe(params => {
      this.projectId = params['projectId'];
    });
  }

  ngOnInit(): void {
    this.taskService.getTaskList(123).subscribe(result=>{
      this.tasks = result;
    });
    const { required, maxLength, minLength } = CommonValidators;
    this.validateForm = this.fb.group({
      task_name: [null, [required]],
      user_id:[null, [required]],
      rangePicker: [[], [required]],
      content:[null, [required]]
    });
    this.studentService.getStudentsOfProject(this.projectId).subscribe(result=>{
      this.students=result;
    })
  }

  onDelete(index:number){
    this.taskService.deleteTask(index).subscribe(result=>{
      if(result.state=="true"){
        this.modal.success({
          nzTitle: '删除任务',
          nzContent: '任务删除成功',
          nzOnOk:() => {
            this.tasks = this.tasks.filter((task) => task.task_id != index);
          }
        });
      }
      else{
        this.modal.error({
          nzTitle: '任务删除失败，请稍后再试',
          nzContent: result.message,
        });
      }
    });
  }

  submitForm(data){
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
      this.validateForm.controls[key].updateValueAndValidity();
    }
    if(!this.validateForm.valid){
      return;
    }
    let date0:Date = data.rangePicker[0];
    let date1:Date = data.rangePicker[0];
    if(!this.isSubmit){
      this.isSubmit = !this.isSubmit;
      this.taskService.addTask({
        task_id:0,
        task_name:data.task_name,
        project_id:this.projectId,
        user_id:data.user_id,
        start_time:date0.toDateString(),
        end_time:date1.toDateString(),
        content:data.content,
      }).subscribe(result => {
        if(result.state == "true"){
          this.isSubmit = !this.isSubmit;
        }
      })
    }
  }

  onChange(result: Date[]): void {
    console.log('From: ', result[0], ', to: ', result[1]);
  }

}
