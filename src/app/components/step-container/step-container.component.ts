import { Component } from '@angular/core';
import { StepComponent } from "../step/step.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-step-container',
    imports: [StepComponent, CommonModule],
    templateUrl: './step-container.component.html',
    styleUrl: './step-container.component.scss'
})
export class StepContainerComponent
{
    data: ([Date, string])[]= [
        [new Date('2025-02-14T18:00:00'), "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nostrum dolore dolorem sit architecto doloremque minus nam aperiam, laborum voluptatum. Atque, aspernatur voluptatibus. Fuga fugiat placeat magnam deserunt ratione dolor?"],
        [new Date('2026-02-14T18:00:00'), "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nostrum dolore dolorem sit architecto doloremque minus nam aperiam, laborum voluptatum. Atque, aspernatur voluptatibus. Fuga fugiat placeat magnam deserunt ratione dolor?"],
        [new Date('2025-02-14T18:00:00'), "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nostrum dolore dolorem sit architecto doloremque minus nam aperiam, laborum voluptatum. Atque, aspernatur voluptatibus. Fuga fugiat placeat magnam deserunt ratione dolor?"],
        [new Date('2026-02-14T18:00:00'), "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nostrum dolore dolorem sit architecto doloremque minus nam aperiam, laborum voluptatum. Atque, aspernatur voluptatibus. Fuga fugiat placeat magnam deserunt ratione dolor?"],
        [new Date('2025-02-14T18:00:00'), "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nostrum dolore dolorem sit architecto doloremque minus nam aperiam, laborum voluptatum. Atque, aspernatur voluptatibus. Fuga fugiat placeat magnam deserunt ratione dolor?"],
        [new Date('2026-02-14T18:00:00'), "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nostrum dolore dolorem sit architecto doloremque minus nam aperiam, laborum voluptatum. Atque, aspernatur voluptatibus. Fuga fugiat placeat magnam deserunt ratione dolor?"],
    ]
}
