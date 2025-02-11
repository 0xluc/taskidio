import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { invoke } from "@tauri-apps/api/core";

@Component({
    selector: "app-root",
    imports: [CommonModule, RouterOutlet],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
})
export class AppComponent {}
