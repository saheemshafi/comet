import { AfterViewInit, ElementRef, EventEmitter, NgZone, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { IInfiniteScrollEvent, IInfiniteScrollAction } from '../models';
import * as i0 from "@angular/core";
export declare class InfiniteScrollDirective implements OnDestroy, OnChanges, AfterViewInit {
    private element;
    private zone;
    scrolled: EventEmitter<IInfiniteScrollEvent>;
    scrolledUp: EventEmitter<IInfiniteScrollEvent>;
    infiniteScrollDistance: number;
    infiniteScrollUpDistance: number;
    infiniteScrollThrottle: number;
    infiniteScrollDisabled: boolean;
    infiniteScrollContainer: any;
    scrollWindow: boolean;
    immediateCheck: boolean;
    horizontal: boolean;
    alwaysCallback: boolean;
    fromRoot: boolean;
    private disposeScroller?;
    constructor(element: ElementRef, zone: NgZone);
    ngAfterViewInit(): void;
    ngOnChanges({ infiniteScrollContainer, infiniteScrollDisabled, infiniteScrollDistance, }: SimpleChanges): void;
    setup(): void;
    handleOnScroll({ type, payload }: IInfiniteScrollAction): void;
    ngOnDestroy(): void;
    destroyScroller(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InfiniteScrollDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<InfiniteScrollDirective, "[infiniteScroll], [infinite-scroll], [data-infinite-scroll]", never, { "infiniteScrollDistance": { "alias": "infiniteScrollDistance"; "required": false; }; "infiniteScrollUpDistance": { "alias": "infiniteScrollUpDistance"; "required": false; }; "infiniteScrollThrottle": { "alias": "infiniteScrollThrottle"; "required": false; }; "infiniteScrollDisabled": { "alias": "infiniteScrollDisabled"; "required": false; }; "infiniteScrollContainer": { "alias": "infiniteScrollContainer"; "required": false; }; "scrollWindow": { "alias": "scrollWindow"; "required": false; }; "immediateCheck": { "alias": "immediateCheck"; "required": false; }; "horizontal": { "alias": "horizontal"; "required": false; }; "alwaysCallback": { "alias": "alwaysCallback"; "required": false; }; "fromRoot": { "alias": "fromRoot"; "required": false; }; }, { "scrolled": "scrolled"; "scrolledUp": "scrolledUp"; }, never, never, false, never>;
}
