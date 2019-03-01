import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector:    'app-text-input',
    templateUrl: './text-input.component.html',
    styleUrls:  ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

    @Output()  inputTextChange = new EventEmitter<string>();
    @Input()   inputText = '';

    constructor() { }

    ngOnInit() {
    }

}
