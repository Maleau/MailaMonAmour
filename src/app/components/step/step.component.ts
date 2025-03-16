import { Component, Input } from '@angular/core';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';

@Component({
    selector: 'app-step',
    imports: [CommonModule],
    templateUrl: './step.component.html',
    styleUrl: './step.component.scss',
    animations : [
        trigger("arrowAnimation", [
            state("default", style({
                transform: "rotate(0deg)"
            })),
            state("rotate", style([{
                transform: "rotate(90deg)"
            }]))
        ]),
        trigger("stepContentAnimation", [
            state("close", style({
                height: '0',
                overflow: 'hidden',
                "padding-top": 0,
                "padding-bottom": 0
            })),
            state("open", style({
                height: "*",
                overflow: 'hidden',
                "padding-top": "*",
                "padding-bottom": "*"
            })),
            transition("close <=> open", [
                animate("500ms ease-out")
            ])
        ]),
        trigger("borderRadiusAnimation", [
            state("rounded", style({
                "border-radius": "*"
            })),
            state("expend", style({
                "border-radius": "25px 25px 0 0"
            })),
            transition("rounded => expend", [
                group([
                    animate("500ms ease-out"),
                    query("span", style({
                        transform: "rotate(0deg)"
                    })),
                    query("span", [
                        animate("500ms ease-out", style({
                            transform: "rotate(90deg)"
                        }))
                    ])
                ])
            ]),
            transition("expend => rounded", [
                group([
                    animate("500ms ease-out"),
                    query("span", style({
                        transform: "rotate(90deg)"
                    })),
                    query("span", [
                        animate("500ms ease-out", style({
                            transform: "rotate(0deg)"
                        }))
                    ])
                ])
            ])
        ])
    ]
})
export class StepComponent
{
    @Input() title!: string;
    @Input() txt!: string;
    @Input() date!: Date;

    timer!: string;

    showContent: boolean = false;
    showTimer: boolean = true;

    arrowState: "default" | "rotate" = "default";
    stepContentState: "close" | "open" = "close";
    borderRadiusState: "rounded" | "expend" = "rounded";

    
    ngOnInit(): void
    {
        this.setValues();

        const interval$ = interval(1000);
        interval$.subscribe(value =>{
            this.setValues();
        });
    }


    setValues(): void
    {
        this.timer = this.setTimer(this.date);
        this.showTimer = this.checkTimer();
    }


    onClickShowContent(): void
    {
        this.showContent = !this.showContent;

        if(this.showContent)
        {
            this.arrowState = "rotate";
            this.stepContentState = "open"
            this.borderRadiusState = "expend";
        }

        else
        {
            this.arrowState = "default";
            this.stepContentState = "close";
            this.borderRadiusState = "rounded";
        }
    }


    setTimer(date: Date): string
    {
        const now = new Date();
        let diff = Math.max(0, date.getTime() - now.getTime());
    
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        diff -= days * (1000 * 60 * 60 * 24);
    
        const hours = Math.floor(diff / (1000 * 60 * 60));
        diff -= hours * (1000 * 60 * 60);
    
        const minutes = Math.floor(diff / (1000 * 60));
        diff -= minutes * (1000 * 60);
    
        const seconds = Math.floor(diff / 1000);
        
        return `${days}j ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }


    checkTimer(): boolean
    {
        if(this.timer === "0j 00:00:00")
        {
            return false;
        }

        return true;
    }
}
