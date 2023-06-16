import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-button-file',
  templateUrl: './button-file.component.html',
  styleUrls: ['./button-file.component.scss']
})
export class ButtonFileComponent implements OnInit {
  @ViewChild('labelUpl', { static: false }) lblUpl: ElementRef;
  @ViewChild('spanUpl', { static: false }) spanUpl: ElementRef;
  @ViewChild('inputUpl', { static: false }) inputUpl: ElementRef;
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  response: string;
  fileArrayByte: any;
  fileArrayByte64: any;

  @Input() readonly: boolean;
  @Input() nomeArquivo: string;
  @Input() perguntaArquivo: string = "";
  @Input() accept: string = "";
  @Output() OnChange: EventEmitter<any> = new EventEmitter();
  classe = "btn-success";
  constructor() {
  }

  ngOnInit(): void {

  }

  changeBtn(e: any) {
    this.OnChange.emit(e);
    const reader = new FileReader();
    const fileByteArray: any = [];
    if (e.target.files[0] != null) {
      reader.readAsArrayBuffer(e.target.files[0]);
      reader.onloadend = (evt: any) => {
        if (evt.target.readyState === FileReader.DONE) {
          const arrayBuffer = evt.target.result,
            array = new Uint8Array(arrayBuffer);
          for (const a of array) {
            fileByteArray.push(a);
          }
          this.fileArrayByte = fileByteArray;
          this.fileArrayByte64 = this.arrayBufferToBase64(fileByteArray);
        }
      }
    }

    const path = this.inputUpl.nativeElement.value.split('\\');
    const fileName = path[path.length - 1];
    this.spanUpl.nativeElement.innerHTML = fileName ? fileName.length > 10 ? fileName.substring(0, 10) + '..' : fileName : this.perguntaArquivo;
    this.nomeArquivo = fileName;
    if (fileName) {
      this.lblUpl.nativeElement.classList.add(this.classe);
    } else {
      this.lblUpl.nativeElement.classList.remove(this.classe);
    }
  }

  clear() {
    this.inputUpl.nativeElement.value = "";
    this.spanUpl.nativeElement.innerHTML = this.perguntaArquivo;
    this.lblUpl.nativeElement.classList.remove(this.classe);
    this.fileArrayByte = '';
    this.fileArrayByte64 = '';
    this.nomeArquivo = '';
  }
  enviarNome(nome: string) {
    nome = nome != "" ? nome.length > 10 ? nome.substring(0, 10) + '..' : nome : this.perguntaArquivo
    this.spanUpl.nativeElement.innerHTML = nome;
    if (nome != this.perguntaArquivo) {
      this.lblUpl.nativeElement.classList.add(this.classe);
    }
    else {
      this.lblUpl.nativeElement.classList.remove(this.classe);
    }
  }
  arrayBufferToBase64(buffer: any) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);

  }
  getExtension() {
    var path = this.nomeArquivo;
    let baseName = path.split(/[\\/]/).pop(), // extracts file name from full path
      // (supports separators `\\` and `/`)
      pos = baseName?.lastIndexOf(".") || 0; // gets the last position of `.`
    if (baseName === "" || pos < 1) // if the file name is empty or ...
      return ""; // the dot not found (-1) or comes first (0)
    return baseName?.slice(pos + 1); // extracts extension ignoring "."
  }
  getNomeArquivoSemExtensao() {
    var path = this.nomeArquivo;
    let baseName = path.split(/[\\/]/).pop(), // extracts file name from full path
      // (supports separators `\\` and `/`)
      pos = baseName?.lastIndexOf(".") || 0; // gets the last position of `.`
    if (baseName === "" || pos < 1) // if the file name is empty or ...
      return ""; // the dot not found (-1) or comes first (0)
    return baseName?.slice(0, pos); // extracts extension ignoring "."
  }


}