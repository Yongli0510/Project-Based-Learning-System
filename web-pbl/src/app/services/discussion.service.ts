import { Injectable } from '@angular/core';

/* 引入包 */
import { HttpClient} from '@angular/common/http';
/* 回调对象 */
import {Observable} from "rxjs";

import {Discussion} from "../share/dicussion.model";
import {Student} from "../share/student.model";
import {Result} from "../share/common.model";

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {

  constructor(private http:HttpClient/* 依赖注入 */) { }

  getDiscussionList(projectId:number) :Observable<Discussion[]>{
    return this.http.get<Discussion[]>("/assets/data/discussions.json").pipe();
  }

  getAuthorsOfDiscussions():Observable<Student[]>{
    return this.http.get<Student[]>("/assets/data/students.json").pipe();
  }

  publishDiscussion():Observable<Result>{
    return this.http.get<Result>("/assets/data/success.json").pipe();
  }

  getDiscussionChildren(discussion_id:number):Observable<Discussion[]>{
    return this.http.get<Discussion[]>("/assets/data/discussionChildren.json").pipe();
  }
  replyDiscussion():Observable<Result>{
    return this.http.get<Result>("/assets/data/success.json").pipe();
  }
}
