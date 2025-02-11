import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { TabsComponent } from "./tabs/tabs.component";

@Component({
    selector: "app-root",
    imports: [CommonModule, RouterOutlet, ButtonModule, TabsComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
})
export class AppComponent {}
