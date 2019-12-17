import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment: string[] = [ "Habitat dome","Drones","Food containers","Oxygen tanks"] 
  pieceBeingEdited: string= null;

  constructor() { }

  ngOnInit() {
  }

  add(equipmentName:string){
    this.equipment.push(equipmentName)
  }

  remove(pieces:string){
    let index=this.equipment.indexOf(pieces);
    this.equipment.splice(index,1)
  }

  edit(pieces:string){
    this.pieceBeingEdited=pieces;
  }
  
  save(renamedEquipment:string){    
    return renamedEquipment;
    this.pieceBeingEdited=null;
  }
}