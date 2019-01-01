import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous-event',
  templateUrl: './marvellous-event.component.html',
  styleUrls: ['./marvellous-event.component.css']
})
export class MarvellousEventComponent implements OnInit 
{
  constructor() { }

  ngOnInit() 
  {
  }

  public str="";
  public serverstatus = "Not created";
  public UserName;
  // It is condiderd as our event handler
  public MarvellousEvent()
  {
    console.log('Button pressed');
  }

  public MarvellousNewEvent()
  {
    this.str = 'Button clicked';
  }

  public MarvellousEventInfo(value)
  {
    console.log(value);
  }

  public onservercreation()
  {
    this.serverstatus = "Server created";
  }

  public userinfo(event: any) {
     // console.log(event);
     this.UserName = event.target.value;
  }
}
