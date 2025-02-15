import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TabsModule } from "primeng/tabs";
import { ChartsComponent } from "../charts/charts.component";

@Component({
    selector: "app-tabs",
    imports: [CommonModule, TabsModule, ChartsComponent],
    templateUrl: "./tabs.component.html",
    styleUrl: "./tabs.component.css",
})
export class TabsComponent {}
