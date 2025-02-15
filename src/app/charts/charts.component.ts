import { Component, ViewChild } from "@angular/core";

import {
    ChartComponent,
    ApexNonAxisChartSeries,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexTitleSubtitle,
    NgApexchartsModule,
    ApexPlotOptions,
} from "ng-apexcharts";

export type BarsChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
    theme: ApexTheme;
};

export type RadialChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    labels: string[];
    title: ApexTitleSubtitle;
    theme: ApexTheme;
    plotOptions: ApexPlotOptions;
};

@Component({
    selector: "app-charts",
    imports: [NgApexchartsModule],
    templateUrl: "./charts.component.html",
    styleUrl: "./charts.component.css",
})
export class ChartsComponent {
    @ViewChild("barsChart") barsChart: ChartComponent;
    @ViewChild("radialChart") radialChart: ChartComponent;
    public barsChartOptions: BarsChartOptions;
    public radialChartOptions: RadialChartOptions;

    constructor() {
        this.radialChartOptions = {
            title: {
                text: "This chart will show the percentage of the overall completion",
            },
            series: [70],
            chart: {
                height: 400,
                type: "radialBar",
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: "70%",
                    },
                },
            },
            labels: ["Overall Completion"],
            theme: {
                mode: "dark",
                palette: "palette1",
            },
        };
        this.barsChartOptions = {
            series: [
                {
                    name: "My-series",
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                },
            ],
            chart: {
                height: 350,
                type: "bar",
            },
            title: {
                text: "This chart will load the percentages of each folder",
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                ],
            },

            theme: {
                mode: "dark",
                palette: "palette1",
            },
        };
    }
}
