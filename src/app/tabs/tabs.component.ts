import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TabsModule } from "primeng/tabs";

@Component({
    selector: "app-tabs",
    imports: [CommonModule, TabsModule],
    templateUrl: "./tabs.component.html",
    styleUrl: "./tabs.component.css",
})
export class TabsComponent {}
