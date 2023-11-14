import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Directive, Output, Input, NgModule } from '@angular/core';
import { of, fromEvent } from 'rxjs';
import { mergeMap, map, tap, filter, throttleTime } from 'rxjs/operators';

class NgxInfiniteScrollService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxInfiniteScrollService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxInfiniteScrollService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NgxInfiniteScrollService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
    const hasWindow = window && !!window.document && window.document.documentElement;
    let container = hasWindow && scrollWindow ? window : defaultElement;
    if (selector) {
        const containerIsString = selector && hasWindow && typeof selector === 'string';
        container = containerIsString
            ? findElement(selector, defaultElement.nativeElement, fromRoot)
            : selector;
        if (!container) {
            throw new Error('ngx-infinite-scroll {resolveContainerElement()}: selector for');
        }
    }
    return container;
}
function findElement(selector, customRoot, fromRoot) {
    const rootEl = fromRoot ? window.document : customRoot;
    return rootEl.querySelector(selector);
}
function inputPropChanged(prop) {
    return prop && !prop.firstChange;
}
function hasWindowDefined() {
    return typeof window !== 'undefined';
}

const VerticalProps = {
    clientHeight: "clientHeight",
    offsetHeight: "offsetHeight",
    scrollHeight: "scrollHeight",
    pageYOffset: "pageYOffset",
    offsetTop: "offsetTop",
    scrollTop: "scrollTop",
    top: "top"
};
const HorizontalProps = {
    clientHeight: "clientWidth",
    offsetHeight: "offsetWidth",
    scrollHeight: "scrollWidth",
    pageYOffset: "pageXOffset",
    offsetTop: "offsetLeft",
    scrollTop: "scrollLeft",
    top: "left"
};
class AxisResolver {
    constructor(vertical = true) {
        this.vertical = vertical;
        this.propsMap = vertical ? VerticalProps : HorizontalProps;
    }
    clientHeightKey() {
        return this.propsMap.clientHeight;
    }
    offsetHeightKey() {
        return this.propsMap.offsetHeight;
    }
    scrollHeightKey() {
        return this.propsMap.scrollHeight;
    }
    pageYOffsetKey() {
        return this.propsMap.pageYOffset;
    }
    offsetTopKey() {
        return this.propsMap.offsetTop;
    }
    scrollTopKey() {
        return this.propsMap.scrollTop;
    }
    topKey() {
        return this.propsMap.top;
    }
}

function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
    if (alwaysCallback && shouldFireScrollEvent) {
        return true;
    }
    if (!isTriggeredCurrentTotal && shouldFireScrollEvent) {
        return true;
    }
    return false;
}

function createResolver({ windowElement, axis, }) {
    return createResolverWithContainer({ axis, isWindow: isElementWindow(windowElement) }, windowElement);
}
function createResolverWithContainer(resolver, windowElement) {
    const container = resolver.isWindow || (windowElement && !windowElement.nativeElement)
        ? windowElement
        : windowElement.nativeElement;
    return { ...resolver, container };
}
function isElementWindow(windowElement) {
    const isWindow = ['Window', 'global'].some((obj) => Object.prototype.toString.call(windowElement).includes(obj));
    return isWindow;
}
function getDocumentElement(isContainerWindow, windowElement) {
    return isContainerWindow ? windowElement.document.documentElement : null;
}
function calculatePoints(element, resolver) {
    const height = extractHeightForElement(resolver);
    return resolver.isWindow
        ? calculatePointsForWindow(height, element, resolver)
        : calculatePointsForElement(height, element, resolver);
}
function calculatePointsForWindow(height, element, resolver) {
    const { axis, container, isWindow } = resolver;
    const { offsetHeightKey, clientHeightKey } = extractHeightPropKeys(axis);
    // scrolled until now / current y point
    const scrolled = height +
        getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow);
    // total height / most bottom y point
    const nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
    const totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) +
        nativeElementHeight;
    return { height, scrolled, totalToScroll, isWindow };
}
function calculatePointsForElement(height, element, resolver) {
    const { axis, container } = resolver;
    // perhaps use container.offsetTop instead of 'scrollTop'
    const scrolled = container[axis.scrollTopKey()];
    const totalToScroll = container[axis.scrollHeightKey()];
    return { height, scrolled, totalToScroll, isWindow: false };
}
function extractHeightPropKeys(axis) {
    return {
        offsetHeightKey: axis.offsetHeightKey(),
        clientHeightKey: axis.clientHeightKey(),
    };
}
function extractHeightForElement({ container, isWindow, axis, }) {
    const { offsetHeightKey, clientHeightKey } = extractHeightPropKeys(axis);
    return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
}
function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
    if (isNaN(elem[offsetHeightKey])) {
        const docElem = getDocumentElement(isWindow, elem);
        return docElem ? docElem[clientHeightKey] : 0;
    }
    else {
        return elem[offsetHeightKey];
    }
}
function getElementOffsetTop(elem, axis, isWindow) {
    const topKey = axis.topKey();
    // elem = elem.nativeElement;
    if (!elem.getBoundingClientRect) {
        // || elem.css('none')) {
        return;
    }
    return (elem.getBoundingClientRect()[topKey] +
        getElementPageYOffset(elem, axis, isWindow));
}
function getElementPageYOffset(elem, axis, isWindow) {
    const pageYOffset = axis.pageYOffsetKey();
    const scrollTop = axis.scrollTopKey();
    const offsetTop = axis.offsetTopKey();
    if (isNaN(window.pageYOffset)) {
        return getDocumentElement(isWindow, elem)[scrollTop];
    }
    else if (elem.ownerDocument) {
        return elem.ownerDocument.defaultView[pageYOffset];
    }
    else {
        return elem[offsetTop];
    }
}

function shouldFireScrollEvent(container, distance = { down: 0, up: 0 }, scrollingDown) {
    let remaining;
    let containerBreakpoint;
    if (container.totalToScroll <= 0) {
        return false;
    }
    const scrolledUntilNow = container.isWindow
        ? container.scrolled
        : container.height + container.scrolled;
    if (scrollingDown) {
        remaining =
            (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
        const distanceDown = distance?.down ? distance.down : 0;
        containerBreakpoint = distanceDown / 10;
    }
    else {
        const totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
        remaining = container.scrolled / totalHiddenContentHeight;
        const distanceUp = distance?.up ? distance.up : 0;
        containerBreakpoint = distanceUp / 10;
    }
    const shouldFireEvent = remaining <= containerBreakpoint;
    return shouldFireEvent;
}
function isScrollingDownwards(lastScrollPosition, container) {
    return lastScrollPosition < container.scrolled;
}
function getScrollStats(lastScrollPosition, container, distance) {
    const scrollDown = isScrollingDownwards(lastScrollPosition, container);
    return {
        fire: shouldFireScrollEvent(container, distance, scrollDown),
        scrollDown,
    };
}
function updateScrollPosition(position, scrollState) {
    return (scrollState.lastScrollPosition = position);
}
function updateTotalToScroll(totalToScroll, scrollState) {
    if (scrollState.lastTotalToScroll !== totalToScroll) {
        scrollState.lastTotalToScroll = scrollState.totalToScroll;
        scrollState.totalToScroll = totalToScroll;
    }
}
function isSameTotalToScroll(scrollState) {
    return scrollState.totalToScroll === scrollState.lastTotalToScroll;
}
function updateTriggeredFlag(scroll, scrollState, triggered, isScrollingDown) {
    if (isScrollingDown) {
        scrollState.triggered.down = scroll;
    }
    else {
        scrollState.triggered.up = scroll;
    }
}
function isTriggeredScroll(totalToScroll, scrollState, isScrollingDown) {
    return isScrollingDown
        ? scrollState.triggered.down === totalToScroll
        : scrollState.triggered.up === totalToScroll;
}
function updateScrollState(scrollState, scrolledUntilNow, totalToScroll) {
    updateScrollPosition(scrolledUntilNow, scrollState);
    updateTotalToScroll(totalToScroll, scrollState);
    // const isSameTotal = isSameTotalToScroll(scrollState);
    // if (!isSameTotal) {
    //   updateTriggeredFlag(scrollState, false, isScrollingDown);
    // }
}

class ScrollState {
    constructor({ totalToScroll }) {
        this.lastScrollPosition = 0;
        this.lastTotalToScroll = 0;
        this.totalToScroll = 0;
        this.triggered = {
            down: 0,
            up: 0,
        };
        this.totalToScroll = totalToScroll;
    }
    updateScrollPosition(position) {
        return (this.lastScrollPosition = position);
    }
    updateTotalToScroll(totalToScroll) {
        if (this.lastTotalToScroll !== totalToScroll) {
            this.lastTotalToScroll = this.totalToScroll;
            this.totalToScroll = totalToScroll;
        }
    }
    updateScroll(scrolledUntilNow, totalToScroll) {
        this.updateScrollPosition(scrolledUntilNow);
        this.updateTotalToScroll(totalToScroll);
    }
    updateTriggeredFlag(scroll, isScrollingDown) {
        if (isScrollingDown) {
            this.triggered.down = scroll;
        }
        else {
            this.triggered.up = scroll;
        }
    }
    isTriggeredScroll(totalToScroll, isScrollingDown) {
        return isScrollingDown
            ? this.triggered.down === totalToScroll
            : this.triggered.up === totalToScroll;
    }
}

function createScroller(config) {
    const { scrollContainer, scrollWindow, element, fromRoot } = config;
    const resolver = createResolver({
        axis: new AxisResolver(!config.horizontal),
        windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot),
    });
    const scrollState = new ScrollState({
        totalToScroll: calculatePoints(element, resolver),
    });
    const options = {
        container: resolver.container,
        throttle: config.throttle,
    };
    const distance = {
        up: config.upDistance,
        down: config.downDistance,
    };
    return attachScrollEvent(options).pipe(mergeMap(() => of(calculatePoints(element, resolver))), map((positionStats) => toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance)), tap(({ stats }) => scrollState.updateScroll(stats.scrolled, stats.totalToScroll)), filter(({ fire, scrollDown, stats: { totalToScroll } }) => shouldTriggerEvents(config.alwaysCallback, fire, scrollState.isTriggeredScroll(totalToScroll, scrollDown))), tap(({ scrollDown, stats: { totalToScroll } }) => {
        scrollState.updateTriggeredFlag(totalToScroll, scrollDown);
    }), map(toInfiniteScrollAction));
}
function attachScrollEvent(options) {
    let obs = fromEvent(options.container, 'scroll');
    // For an unknown reason calling `sampleTime()` causes trouble for many users, even with `options.throttle = 0`.
    // Let's avoid calling the function unless needed.
    // Replacing with throttleTime seems to solve the problem
    // See https://github.com/orizens/ngx-infinite-scroll/issues/198
    if (options.throttle) {
        obs = obs.pipe(throttleTime(options.throttle, undefined, {
            leading: true,
            trailing: true,
        }));
    }
    return obs;
}
function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
    const { scrollDown, fire } = getScrollStats(lastScrollPosition, stats, distance);
    return {
        scrollDown,
        fire,
        stats,
    };
}
const InfiniteScrollActions = {
    DOWN: '[NGX_ISE] DOWN',
    UP: '[NGX_ISE] UP',
};
function toInfiniteScrollAction(response) {
    const { scrollDown, stats: { scrolled: currentScrollPosition }, } = response;
    return {
        type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
        payload: {
            currentScrollPosition,
        },
    };
}

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

class InfiniteScrollModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: InfiniteScrollModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: InfiniteScrollModule, declarations: [InfiniteScrollDirective], exports: [InfiniteScrollDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: InfiniteScrollModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: InfiniteScrollModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [InfiniteScrollDirective],
                    exports: [InfiniteScrollDirective],
                    imports: [],
                    providers: [],
                }]
        }] });

/*
 * Public API Surface of ngx-infinite-scroll
 */

/**
 * Generated bundle index. Do not edit.
 */

export { InfiniteScrollDirective, InfiniteScrollModule, NgxInfiniteScrollService };
//# sourceMappingURL=ngx-infinite-scroll.mjs.map
