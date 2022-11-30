import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6fJcPjivBXyvm1VAXs8uCeD-LGlbtoFfeAA&usqp=CAU"
  cardTitle:string= "LOOK DO DIA: MIX DE PEÇAS"
  cardDescription:string =" Bom dia meus amores! Semana bem relax por aqui! Muito delicioso um lookinho fresh né? Principalmente quando as peças são super descoladas."

  constructor() { }

  ngOnInit(): void {
  }
}
