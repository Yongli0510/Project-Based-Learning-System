import {Component, OnInit} from '@angular/core';
import {Student} from "../../../share/student.model";
import {StudentService} from "../../../services/student.service";
import {ActivatedRoute} from "@angular/router";
import {Score} from "../../../share/score.model";
import {ScoreService} from "../../../services/score.service";
import {NzModalService} from "ng-zorro-antd/modal";
import {Task} from "../../../share/task.model";
import {TaskService} from "../../../services/task.service";

@Component({
  selector: 'app-pj-mark-score',
  templateUrl: './pj-mark-score.component.html',
  styleUrls: ['./pj-mark-score.component.css']
})
export class PjMarkScoreComponent implements OnInit {
  students: Student[] = [];
  projectId: number;
  scores: Score[] = [];
  tasksOfStudent: Map<number,Task[]> = new Map<number, Task[]>();

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private scoreService: ScoreService,
    private modal: NzModalService,
    private taskService: TaskService,
  ) {
    activatedRoute.params.subscribe(params => {
      this.projectId = params['projectId'];
    });
  }

  ngOnInit(): void {
    this.studentService.getStudentsOfProject(this.projectId).subscribe(result => {
      this.students = result;
      for (let student of this.students){
        this.taskService.getTaskListOfUser(this.projectId, student.sId).subscribe(res => {
          // this.tasks = res;
          this.tasksOfStudent.set(student.sId,res);
        });
      }
    });

    this.scoreService.getScores().subscribe(result => {
      this.scores = result;
    })
  }

  onSubmit() {
    this.scoreService.submitScore().subscribe(result => {
      if (result.state == "true") {
        this.modal.success({
          nzTitle: '提交互评',
          nzContent: '提交成功',
        })
      } else {
        this.modal.error({
          nzTitle: '提交失败',
          nzContent: result.message,
        });
      }
    })
  }

}
