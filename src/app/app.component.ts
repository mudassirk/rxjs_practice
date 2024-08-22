import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { response } from 'express';
import { fromEvent, interval, of, Subscription, timer } from 'rxjs';
import internal from 'stream';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit{
  title: any;
subscriptions : Subscription | undefined;
   @ViewChild('addBtn') addBtn!:ElementRef;
  result:any ='';
  ngOnInit(): void {  
  //   const timers = timer(5000, 2000);
  //  this.subscriptions =  timers.subscribe(re =>{
  //     console.log(re)

  //     if(re > 5){
  //       this.subscriptions?.unsubscribe()
  //     }
  //   })

    const offStream =  of('Angular', 'Javascript', 'mongoDB');

    offStream.subscribe(res =>{
           console.log(res)
    })

  }

  ngAfterViewInit(): void {
    
  }
}
