import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Injectable,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { response } from 'express';
import {
  from,
  fromEvent,
  interval,
  map,
  of,
  retry,
  retryWhen,
  Subscription,
  take,
  timer,
  toArray,
} from 'rxjs';
import internal from 'stream';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
@Injectable({providedIn: 'root'})

export class AppComponent implements OnInit, AfterViewInit {
  title: any;
  subscriptions: Subscription | undefined;
  @ViewChild('addBtn') addBtn!: ElementRef;
  result: any = '';
  sourceObs!: Subscription;

  constructor(private http : HttpClient){}

  ngOnInit(): void {

    this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
  // retry(3)
    )
    .subscribe((res:any) =>{
      console.log(res)
    })

  }

  ngAfterViewInit(): void {}
}
