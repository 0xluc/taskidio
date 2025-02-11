import Lara from "@primeng/themes/lara";
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { invoke } from "@tauri-apps/api/core";
import { ButtonModule } from "primeng/button";
import { PrimeNG } from "primeng/config";

@Component({
    selector: "app-root",
    imports: [CommonModule, RouterOutlet, ButtonModule],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
})
export class AppComponent {
    constructor(private primeng: PrimeNG) {
        this.primeng.theme.set({
            preset: Lara,
            options: {
                cssLayer: {
                    name: "primeng",
                    order: "tailwind-utilities, primeng",
                },
            },
        });
    }
    greetingMessage = "";

    greet(event: SubmitEvent, name: string): void {
        event.preventDefault();

        // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
        invoke<string>("greet", { name }).then((text) => {
            this.greetingMessage = text;
        });
    }
}
