import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-document',
    templateUrl: 'document.component.html',
    styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
    process = '';
    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.getProcess();
    }
    getProcess() {
        this.process = this.route.snapshot.params.process == null ? '' : this.route.snapshot.params.process;
        console.log(this.process);
    }

}
