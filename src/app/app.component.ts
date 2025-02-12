import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { ButtonModule } from "primeng/button";

@Component({
    selector: "app-root",
    imports: [CommonModule, RouterOutlet, ButtonModule],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
})
export class AppComponent {}
