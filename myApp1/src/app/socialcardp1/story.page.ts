import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class Story {

    id: number;
    storypic: string;
    title: string;
    content: string;
    likevalue: number;
    commentlist: Array<string>;

    constructor(getId: number, picsrc: string, title: string, content: string) {
        this.id = getId;
        this.storypic = picsrc;
        this.title = title;
        this.content = content;
        this.commentlist = new Array();
        this.likevalue = 0;
    }
}
