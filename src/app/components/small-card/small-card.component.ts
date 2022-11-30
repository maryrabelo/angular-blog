import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string ="https://viagemeturismo.abril.com.br/wp-content/uploads/2016/11/thinkstockphotos-4549879531.jpeg"
  
  @Input()
  cardTitle:string = "MARY EM PARIS: DICAS E INSPIRAÇÕES"
  constructor() { }

  ngOnInit(): void {
    }
}