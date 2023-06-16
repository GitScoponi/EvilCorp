import { AfterContentInit, Component, ContentChild, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'spw-form',
  templateUrl: './spw-form.component.html',
  styleUrls: ['./spw-form.component.scss']
})
export class SpwFormComponent implements OnInit, AfterContentInit {
  @Input() error!: string;
  @Input() titulo!: string;
  @Input() gerarClasse: boolean = true;
  @Input() formG: FormGroup
  @Input() readonly: boolean = false;
  @ContentChild('input', { read: ElementRef }) myInput: ElementRef;
  data!: string;
  length = 0;
  type: any;
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    var aux = this.myInput?.nativeElement;
    this.data = aux.getAttribute('ng-reflect-name');
    this.length = aux?.getAttribute('maxlength') ?? 0;
    this.type = aux.getAttribute('type');
    if (this.type != 'text') this.length = 20;
    else this.length = this.length != 0 ? this.length : 500;
    this.length = this.titulo?.length > this.length ? this.titulo.length : this.length;
    if (this.gerarClasse) this.gerarClasseBootstrap();
  }
  isRequiredField() {
    var field = this.data;
    const form_field = this.formG.get(field);
    if (!form_field?.validator) {
      return false;
    }
    const validator = form_field.validator({} as AbstractControl);
    return (validator && validator.required);
  }
  obterValorInput() {
    var meuCampo = this.formG.get(this.data)

  }


  @HostBinding('class.col-lg-1') col_lg_1: boolean = false;
  @HostBinding('class.col-lg-2') col_lg_2: boolean = false;
  @HostBinding('class.col-lg-3') col_lg_3: boolean = false;
  @HostBinding('class.col-lg-4') col_lg_4: boolean = false;
  @HostBinding('class.col-lg-5') col_lg_5: boolean = false;
  @HostBinding('class.col-lg-6') col_lg_6: boolean = false;
  @HostBinding('class.col-lg-7') col_lg_7: boolean = false;
  @HostBinding('class.col-lg-8') col_lg_8: boolean = false;
  @HostBinding('class.col-lg-9') col_lg_9: boolean = false;
  @HostBinding('class.col-lg-10') col_lg_10: boolean = false;
  @HostBinding('class.col-lg-11') col_lg_11: boolean = false;
  @HostBinding('class.col-lg-12') col_lg_12: boolean = false;
  @HostBinding('class.col-md-1') col_md_1: boolean = false;
  @HostBinding('class.col-md-2') col_md_2: boolean = false;
  @HostBinding('class.col-md-3') col_md_3: boolean = false;
  @HostBinding('class.col-md-4') col_md_4: boolean = false;
  @HostBinding('class.col-md-5') col_md_5: boolean = false;
  @HostBinding('class.col-md-6') col_md_6: boolean = false;
  @HostBinding('class.col-md-7') col_md_7: boolean = false;
  @HostBinding('class.col-md-8') col_md_8: boolean = false;
  @HostBinding('class.col-md-9') col_md_9: boolean = false;
  @HostBinding('class.col-md-10') col_md_10: boolean = false;
  @HostBinding('class.col-md-11') col_md_11: boolean = false;
  @HostBinding('class.col-md-12') col_md_12: boolean = false;
  @HostBinding('class.col-sm-1') col_sm_1: boolean = false;
  @HostBinding('class.col-sm-2') col_sm_2: boolean = false;
  @HostBinding('class.col-sm-3') col_sm_3: boolean = false;
  @HostBinding('class.col-sm-4') col_sm_4: boolean = false;
  @HostBinding('class.col-sm-5') col_sm_5: boolean = false;
  @HostBinding('class.col-sm-6') col_sm_6: boolean = false;
  @HostBinding('class.col-sm-7') col_sm_7: boolean = false;
  @HostBinding('class.col-sm-8') col_sm_8: boolean = false;
  @HostBinding('class.col-sm-9') col_sm_9: boolean = false;
  @HostBinding('class.col-sm-10') col_sm_10: boolean = false;
  @HostBinding('class.col-sm-11') col_sm_11: boolean = false;
  @HostBinding('class.col-sm-12') col_sm_12: boolean = false;

  gerarClasseBootstrap() {
    var valor = this.length;
    var valoraux = 5;
    var aux = 0
    this.col_sm_1 = valor > 0 && valor <= aux;
    aux = aux + valoraux;
    this.col_sm_2 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_sm_3 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_sm_4 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_sm_5 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_sm_6 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_sm_7 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_sm_8 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_sm_9 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_sm_10 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_sm_11 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_sm_12 = valor > aux - valoraux || valor == 0;

    valoraux = 7;
    aux = 0;
    this.col_md_1 = valor > 0 && valor <= aux;
    aux = aux + valoraux;
    this.col_md_2 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_md_3 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_md_4 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_md_5 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_md_6 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_md_7 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_md_8 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_md_9 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_md_10 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_md_11 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_md_12 = valor > aux - valoraux || valor == 0;


    valoraux = 10;
    aux = 0;
    this.col_lg_1 = valor > 0 && valor <= aux;
    aux = aux + valoraux;
    this.col_lg_2 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_lg_3 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_lg_4 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_lg_5 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_lg_6 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_lg_7 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_lg_8 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_lg_9 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_lg_10 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_lg_11 = valor <= aux && valor > aux - valoraux;
    aux = aux + valoraux;
    this.col_lg_12 = valor > aux - valoraux || valor == 0;
  }
  atribuir(x: number, y: number) {
    var r = x;
    x = x + y;
    return r;
  }

}
