import {Component, OnInit, ElementRef, ViewChild, HostListener} from '@angular/core';
import {IPerson, IPersonDrawParams} from "../../interfaces/forest.interface";

@Component({
  selector: 'app-forest-detail',
  templateUrl: './forest-detail.component.html',
  styleUrls: ['./forest-detail.component.scss']
})
export class ForestDetailComponent implements OnInit {
  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;

  private configDraw = {
    widthRect: 100,
    heightRect: 100,
    startPointX: 400,
    startPointY: 500,
    marginVert: 80,
    marginHor: 80,
  }

  private currentDraw = {
    currentX: this.configDraw.startPointX,
    currentY: this.configDraw.startPointY,
    scrollParam: 1,
  }

  private mouseX;
  private mouseY;
  private isMove = false;

  private ctx: CanvasRenderingContext2D;

  private readonly persons: IPerson[] = [
    {
      id: 1,
      name: 'Егор',
      mother: 4,
      father: 3,
      sex: 'man',
    },
    {
      id: 2,
      name: 'Мария',
      mother: 4,
      father: 3,
      sex: 'woman',
      children: [5, 6],
    },
    {
      id: 3,
      name: 'Андрей',
      sex: 'man',
      children: [1, 2],
    },
    {
      id: 4,
      name: 'Наталья',
      sex: 'woman',
      mother: 7,
      father: 8,
      children: [1, 2],
    },
    {
      id: 5,
      name: 'Михаил',
      mother: 2,
      sex: 'man',
    },
    {
      id: 6,
      name: 'Григорий',
      mother: 2,
      sex: 'man',
    },
    {
      id: 7,
      name: 'Лариса',
      sex: 'woman',
      children: [4]
    },
    {
      id: 8,
      name: 'Виталий',
      sex: 'man',
      children: [4]
    }
  ]

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');

    this.treeTraver(this.persons[5]);
  }

  treeTraver(startPerson: IPerson){
    let drawPerson: IPersonDrawParams[] = [
      {
        person: startPerson,
        coordX: this.configDraw.startPointX,
        coordY: this.configDraw.startPointY,
      }
    ];
    while(drawPerson.length) {
      let personParam = drawPerson[0];

      // рисуем элемент
      this.drawElement(personParam.coordX, personParam.coordY, personParam.person);

      // смотрим количество сестер/братьев

      //смотрим сколько сестер и братьев
      if(personParam.person.father){
        drawPerson.push(
          {
            person: this.persons.find((person) => {
              return person.id === personParam.person.father;
            }),
            coordY: personParam.coordY - this.configDraw.marginVert * this.currentDraw.scrollParam - this.configDraw.heightRect * this.currentDraw.scrollParam,
            coordX: personParam.coordX - this.configDraw.marginHor * this.currentDraw.scrollParam,
          })
      }
      if(personParam.person.mother){
        drawPerson.push(
          {
            person: this.persons.find((person) => {
              return person.id === personParam.person.mother;
            }),
            coordY: personParam.coordY - this.configDraw.marginVert * this.currentDraw.scrollParam - this.configDraw.heightRect * this.currentDraw.scrollParam,
            coordX: personParam.coordX + this.configDraw.marginHor * this.currentDraw.scrollParam,
          })
      }

      drawPerson.splice(0, 1);
    }
  }

  @HostListener('mousedown', ['$event'])
  mousedown(e){
    this.mouseX = e.offsetX;
    this.mouseY = e.offsetY;
    this.isMove = true;
  }

  @HostListener('mousemove', ['$event'])
  mousemove(e){
    if (this.isMove){
      this.ctx.clearRect(0, 0, 1000, 1000);
      this.configDraw.startPointY += e.offsetY - this.mouseY;
      this.configDraw.startPointX += e.offsetX - this.mouseX;
      this.treeTraver(this.persons[5]);
      this.mouseX = e.offsetX;
      this.mouseY = e.offsetY;
    }
  }

  @HostListener('mouseup', ['$event'])
  mouseup(e){
    this.isMove = false;
    this.mouseX = null;
    this.mouseY = null;
  }

  @HostListener('mousewheel', ['$event'])
  scroll(e){
    this.ctx.clearRect(0, 0, 1000, 1000);
    e.wheelDelta > 0 ? this.currentDraw.scrollParam /= .9 : this.currentDraw.scrollParam *= .9;
    this.treeTraver(this.persons[5]);
  }

  drawElement(x: number, y: number, person: IPerson){
    this.drawAvatar(x, y, person.name);
  }

  drawAvatar(x: number, y: number, name: string): void {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(x, y, this.configDraw.widthRect * this.currentDraw.scrollParam, this.configDraw.heightRect * this.currentDraw.scrollParam);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(x + 1, y + 1, this.configDraw.widthRect * this.currentDraw.scrollParam - 2, this.configDraw.heightRect * this.currentDraw.scrollParam - 2);
    this.drawText(name, x + (10 * this.currentDraw.scrollParam), y + (20 * this.currentDraw.scrollParam));
  }

  drawLine(x: number, y: number, x2: number, y2: number): void {
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
  }

  drawBind(x: number, y: number, x2: number, y2: number): void {
    this.drawLine(x, y, x2, y - this.configDraw.marginVert / 2);
  }

  drawText(text: string, x: number, y: number): void{
    this.ctx.fillStyle = "black";
    this.ctx.font = `${20 * this.currentDraw.scrollParam}px serif`;
    this.ctx.fillText(text, x, y);
  }
}
