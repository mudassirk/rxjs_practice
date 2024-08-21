import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { rejects } from 'node:assert';
import { error } from 'node:console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'rxjs_practice';

  

  ngOnInit(): void {
    let promise  = new Promise((resolve, reject) =>{
      setTimeout(()=>{
        resolve('Promise Resolved')
      },3000)
    })
//for asysn and await
async function getData(){
  let proValue = await promise;
  console.log(proValue)
}

getData();

  }
}
