import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-load-panel",
  templateUrl: "./load-panel.component.html",
  styleUrls: ["./load-panel.component.scss"],
})
export class LoadPanelComponent implements OnInit, OnDestroy {
  @ViewChild("loader", { static: false }) loader!: ElementRef;
  constructor() {}
  
  ngOnInit() {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }
  ngOnDestroy(): void {
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }
}
