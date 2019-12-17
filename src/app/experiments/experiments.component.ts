import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[]=["Mars soil sample","Plant growth in habitat","Human bone density"];
  testBeingEdited: string=null;

  constructor() { }

  ngOnInit() {
  }

  add(testName:string){
    this.experiments.push(testName)
  }

  remove(test:string){
    let index=this.experiments.indexOf(test);
    this.experiments.splice(index,1)
  }

  edit(test:string){
    this.testBeingEdited=test;
  }
  
  save(newTest:string){    
    return newTest;
    this.testBeingEdited=null;
  }
}