import { Directive, EventEmitter, Input, Output, } from '@angular/core';
import { hasWindowDefined, inputPropChanged } from './services/ngx-ins-utils';
import { createScroller, InfiniteScrollActions, } from './services/scroll-register';
import * as i0 from "@angular/core";
class InfiniteScrollDirective {
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.scrolled = new EventEmitter();
        this.scrolledUp = new EventEmitter();
        this.infiniteScrollDistance = 2;
        this.infiniteScrollUpDistance = 1.5;
        this.infiniteScrollThrottle = 150;
        this.infiniteScrollDisabled = false;
        this.infiniteScrollContainer = null;
        this.scrollWindow = true;
        this.immediateCheck = false;
        this.horizontal = false;
        this.alwaysCallback = false;
        this.fromRoot = false;
    }
    ngAfterViewInit() {
        if (!this.infiniteScrollDisabled) {
            this.setup();
        }
    }
    ngOnChanges({ infiniteScrollContainer, infiniteScrollDisabled, infiniteScrollDistance, }) {
        const containerChanged = inputPropChanged(infiniteScrollContainer);
        const disabledChanged = inputPropChanged(infiniteScrollDisabled);
        const distanceChanged = inputPropChanged(infiniteScrollDistance);
        const shouldSetup = (!disabledChanged && !this.infiniteScrollDisabled) ||
            (disabledChanged && !infiniteScrollDisabled.currentValue) ||
            distanceChanged;
        if (containerChanged || disabledChanged || distanceChanged) {
            this.destroyScroller();
            if (shouldSetup) {
                this.setup();
            }
        }
    }
    setup() {
        if (hasWindowDefined()) {
            this.zone.runOutsideAngular(() => {
                this.disposeScroller = createScroller({
                    fromRoot: this.fromRoot,
                    alwaysCallback: this.alwaysCallback,
                    disable: this.infiniteScrollDisabled,
                    downDistance: this.infiniteScrollDistance,
                    element: this.element,
                    horizontal: this.horizontal,
                    scrollContainer: this.infiniteScrollContainer,
                    scrollWindow: this.scrollWindow,
                    throttle: this.infiniteScrollThrottle,
                    upDistance: this.infiniteScrollUpDistance,
                }).subscribe((payload) => this.handleOnScroll(payload));
            });
        }
    }
    handleOnScroll({ type, payload }) {
        const emitter = type === InfiniteScrollActions.DOWN ? this.scrolled : this.scrolledUp;
        if (hasObservers(emitter)) {
            this.zone.run(() => emitter.emit(payload));
        }
    }
    ngOnDestroy() {
        this.destroyScroller();
    }
    destroyScroller() {
        if (this.disposeScroller) {
            this.disposeScroller.unsubscribe();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: InfiniteScrollDirective, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: InfiniteScrollDirective, selector: "[infiniteScroll], [infinite-scroll], [data-infinite-scroll]", inputs: { infiniteScrollDistance: "infiniteScrollDistance", infiniteScrollUpDistance: "infiniteScrollUpDistance", infiniteScrollThrottle: "infiniteScrollThrottle", infiniteScrollDisabled: "infiniteScrollDisabled", infiniteScrollContainer: "infiniteScrollContainer", scrollWindow: "scrollWindow", immediateCheck: "immediateCheck", horizontal: "horizontal", alwaysCallback: "alwaysCallback", fromRoot: "fromRoot" }, outputs: { scrolled: "scrolled", scrolledUp: "scrolledUp" }, usesOnChanges: true, ngImport: i0 }); }
}
export { InfiniteScrollDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: InfiniteScrollDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[infiniteScroll], [infinite-scroll], [data-infinite-scroll]',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { scrolled: [{
                type: Output
            }], scrolledUp: [{
                type: Output
            }], infiniteScrollDistance: [{
                type: Input
            }], infiniteScrollUpDistance: [{
                type: Input
            }], infiniteScrollThrottle: [{
                type: Input
            }], infiniteScrollDisabled: [{
                type: Input
            }], infiniteScrollContainer: [{
                type: Input
            }], scrollWindow: [{
                type: Input
            }], immediateCheck: [{
                type: Input
            }], horizontal: [{
                type: Input
            }], alwaysCallback: [{
                type: Input
            }], fromRoot: [{
                type: Input
            }] } });
function hasObservers(emitter) {
    // Note: The `observed` property is available only in RxJS@7.2.0, which means it's
    // not available for users running the lower version.
    return emitter.observed ?? emitter.observers.length > 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWluZmluaXRlLXNjcm9sbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtaW5maW5pdGUtc2Nyb2xsL3NyYy9saWIvbmd4LWluZmluaXRlLXNjcm9sbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM5RSxPQUFPLEVBQ0wsY0FBYyxFQUNkLHFCQUFxQixHQUN0QixNQUFNLDRCQUE0QixDQUFDOztBQUVwQyxNQUdhLHVCQUF1QjtJQW1CbEMsWUFBb0IsT0FBbUIsRUFBVSxJQUFZO1FBQXpDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBaEJuRCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQXdCLENBQUM7UUFDcEQsZUFBVSxHQUFHLElBQUksWUFBWSxFQUF3QixDQUFDO1FBRXZELDJCQUFzQixHQUFXLENBQUMsQ0FBQztRQUNuQyw2QkFBd0IsR0FBVyxHQUFHLENBQUM7UUFDdkMsMkJBQXNCLEdBQVcsR0FBRyxDQUFDO1FBQ3JDLDJCQUFzQixHQUFZLEtBQUssQ0FBQztRQUN4Qyw0QkFBdUIsR0FBUSxJQUFJLENBQUM7UUFDcEMsaUJBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxhQUFRLEdBQVksS0FBSyxDQUFDO0lBSTZCLENBQUM7SUFFakUsZUFBZTtRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUss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c0JBQS9CLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csY0FBYztzQkFBdEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLOztBQXdFUixTQUFTLFlBQVksQ0FBSSxPQUF3QjtJQUMvQyxrRkFBa0Y7SUFDbEYscURBQXFEO0lBQ3JELE9BQU8sT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDMUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSUluZmluaXRlU2Nyb2xsRXZlbnQsIElJbmZpbml0ZVNjcm9sbEFjdGlvbiB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IGhhc1dpbmRvd0RlZmluZWQsIGlucHV0UHJvcENoYW5nZWQgfSBmcm9tICcuL3NlcnZpY2VzL25neC1pbnMtdXRpbHMnO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZVNjcm9sbGVyLFxyXG4gIEluZmluaXRlU2Nyb2xsQWN0aW9ucyxcclxufSBmcm9tICcuL3NlcnZpY2VzL3Njcm9sbC1yZWdpc3Rlcic7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tpbmZpbml0ZVNjcm9sbF0sIFtpbmZpbml0ZS1zY3JvbGxdLCBbZGF0YS1pbmZpbml0ZS1zY3JvbGxdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEluZmluaXRlU2Nyb2xsRGlyZWN0aXZlXHJcbiAgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdFxyXG57XHJcbiAgQE91dHB1dCgpIHNjcm9sbGVkID0gbmV3IEV2ZW50RW1pdHRlcjxJSW5maW5pdGVTY3JvbGxFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgc2Nyb2xsZWRVcCA9IG5ldyBFdmVudEVtaXR0ZXI8SUluZmluaXRlU2Nyb2xsRXZlbnQ+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGluZmluaXRlU2Nyb2xsRGlzdGFuY2U6IG51bWJlciA9IDI7XHJcbiAgQElucHV0KCkgaW5maW5pdGVTY3JvbGxVcERpc3RhbmNlOiBudW1iZXIgPSAxLjU7XHJcbiAgQElucHV0KCkgaW5maW5pdGVTY3JvbGxUaHJvdHRsZTogbnVtYmVyID0gMTUwO1xyXG4gIEBJbnB1dCgpIGluZmluaXRlU2Nyb2xsRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBpbmZpbml0ZVNjcm9sbENvbnRhaW5lcjogYW55ID0gbnVsbDtcclxuICBASW5wdXQoKSBzY3JvbGxXaW5kb3c6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGltbWVkaWF0ZUNoZWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaG9yaXpvbnRhbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGFsd2F5c0NhbGxiYWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZnJvbVJvb3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBkaXNwb3NlU2Nyb2xsZXI/OiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSB6b25lOiBOZ1pvbmUpIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICghdGhpcy5pbmZpbml0ZVNjcm9sbERpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuc2V0dXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKHtcclxuICAgIGluZmluaXRlU2Nyb2xsQ29udGFpbmVyLFxyXG4gICAgaW5maW5pdGVTY3JvbGxEaXNhYmxlZCxcclxuICAgIGluZmluaXRlU2Nyb2xsRGlzdGFuY2UsXHJcbiAgfTogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgY29uc3QgY29udGFpbmVyQ2hhbmdlZCA9IGlucHV0UHJvcENoYW5nZWQoaW5maW5pdGVTY3JvbGxDb250YWluZXIpO1xyXG4gICAgY29uc3QgZGlzYWJsZWRDaGFuZ2VkID0gaW5wdXRQcm9wQ2hhbmdlZChpbmZpbml0ZVNjcm9sbERpc2FibGVkKTtcclxuICAgIGNvbnN0IGRpc3RhbmNlQ2hhbmdlZCA9IGlucHV0UHJvcENoYW5nZWQoaW5maW5pdGVTY3JvbGxEaXN0YW5jZSk7XHJcbiAgICBjb25zdCBzaG91bGRTZXR1cCA9XHJcbiAgICAgICghZGlzYWJsZWRDaGFuZ2VkICYmICF0aGlzLmluZmluaXRlU2Nyb2xsRGlzYWJsZWQpIHx8XHJcbiAgICAgIChkaXNhYmxlZENoYW5nZWQgJiYgIWluZmluaXRlU2Nyb2xsRGlzYWJsZWQuY3VycmVudFZhbHVlKSB8fFxyXG4gICAgICBkaXN0YW5jZUNoYW5nZWQ7XHJcblxyXG4gICAgaWYgKGNvbnRhaW5lckNoYW5nZWQgfHwgZGlzYWJsZWRDaGFuZ2VkIHx8IGRpc3RhbmNlQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLmRlc3Ryb3lTY3JvbGxlcigpO1xyXG4gICAgICBpZiAoc2hvdWxkU2V0dXApIHtcclxuICAgICAgICB0aGlzLnNldHVwKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldHVwKCkge1xyXG4gICAgaWYgKGhhc1dpbmRvd0RlZmluZWQoKSkge1xyXG4gICAgICB0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZGlzcG9zZVNjcm9sbGVyID0gY3JlYXRlU2Nyb2xsZXIoe1xyXG4gICAgICAgICAgZnJvbVJvb3Q6IHRoaXMuZnJvbVJvb3QsXHJcbiAgICAgICAgICBhbHdheXNDYWxsYmFjazogdGhpcy5hbHdheXNDYWxsYmFjayxcclxuICAgICAgICAgIGRpc2FibGU6IHRoaXMuaW5maW5pdGVTY3JvbGxEaXNhYmxlZCxcclxuICAgICAgICAgIGRvd25EaXN0YW5jZTogdGhpcy5pbmZpbml0ZVNjcm9sbERpc3RhbmNlLFxyXG4gICAgICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgaG9yaXpvbnRhbDogdGhpcy5ob3Jpem9udGFsLFxyXG4gICAgICAgICAgc2Nyb2xsQ29udGFpbmVyOiB0aGlzLmluZmluaXRlU2Nyb2xsQ29udGFpbmVyLFxyXG4gICAgICAgICAgc2Nyb2xsV2luZG93OiB0aGlzLnNjcm9sbFdpbmRvdyxcclxuICAgICAgICAgIHRocm90dGxlOiB0aGlzLmluZmluaXRlU2Nyb2xsVGhyb3R0bGUsXHJcbiAgICAgICAgICB1cERpc3RhbmNlOiB0aGlzLmluZmluaXRlU2Nyb2xsVXBEaXN0YW5jZSxcclxuICAgICAgICB9KS5zdWJzY3JpYmUoKHBheWxvYWQpID0+IHRoaXMuaGFuZGxlT25TY3JvbGwocGF5bG9hZCkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZU9uU2Nyb2xsKHsgdHlwZSwgcGF5bG9hZCB9OiBJSW5maW5pdGVTY3JvbGxBY3Rpb24pIHtcclxuICAgIGNvbnN0IGVtaXR0ZXIgPVxyXG4gICAgICB0eXBlID09PSBJbmZpbml0ZVNjcm9sbEFjdGlvbnMuRE9XTiA/IHRoaXMuc2Nyb2xsZWQgOiB0aGlzLnNjcm9sbGVkVXA7XHJcblxyXG4gICAgaWYgKGhhc09ic2VydmVycyhlbWl0dGVyKSkge1xyXG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IGVtaXR0ZXIuZW1pdChwYXlsb2FkKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGVzdHJveVNjcm9sbGVyKCk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95U2Nyb2xsZXIoKSB7XHJcbiAgICBpZiAodGhpcy5kaXNwb3NlU2Nyb2xsZXIpIHtcclxuICAgICAgdGhpcy5kaXNwb3NlU2Nyb2xsZXIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc09ic2VydmVyczxUPihlbWl0dGVyOiBFdmVudEVtaXR0ZXI8VD4pOiBib29sZWFuIHtcclxuICAvLyBOb3RlOiBUaGUgYG9ic2VydmVkYCBwcm9wZXJ0eSBpcyBhdmFpbGFibGUgb25seSBpbiBSeEpTQDcuMi4wLCB3aGljaCBtZWFucyBpdCdzXHJcbiAgLy8gbm90IGF2YWlsYWJsZSBmb3IgdXNlcnMgcnVubmluZyB0aGUgbG93ZXIgdmVyc2lvbi5cclxuICByZXR1cm4gZW1pdHRlci5vYnNlcnZlZCA/PyBlbWl0dGVyLm9ic2VydmVycy5sZW5ndGggPiAwO1xyXG59XHJcbiJdfQ==