export class ScrollState {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWluZmluaXRlLXNjcm9sbC9zcmMvbGliL3NlcnZpY2VzL3Njcm9sbC1zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQU8sV0FBVztJQVN0QixZQUFZLEVBQUUsYUFBYSxFQUFFO1FBUjdCLHVCQUFrQixHQUFHLENBQUMsQ0FBQztRQUN2QixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsY0FBUyxHQUFzQjtZQUM3QixJQUFJLEVBQUUsQ0FBQztZQUNQLEVBQUUsRUFBRSxDQUFDO1NBQ04sQ0FBQztRQUdBLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxRQUFnQjtRQUNuQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxhQUFxQjtRQUN2QyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxhQUFhLEVBQUU7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLGdCQUF3QixFQUFFLGFBQXFCO1FBQzFELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsbUJBQW1CLENBQUMsTUFBTSxFQUFFLGVBQXdCO1FBQ2xELElBQUksZUFBZSxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztTQUM5QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELGlCQUFpQixDQUFDLGFBQWEsRUFBRSxlQUF3QjtRQUN2RCxPQUFPLGVBQWU7WUFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLGFBQWE7WUFDdkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLGFBQWEsQ0FBQztJQUMxQyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU2Nyb2xsU3RhdGUsIElTY3JvbGxlckRpc3RhbmNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxTdGF0ZSBpbXBsZW1lbnRzIElTY3JvbGxTdGF0ZSB7XHJcbiAgbGFzdFNjcm9sbFBvc2l0aW9uID0gMDtcclxuICBsYXN0VG90YWxUb1Njcm9sbCA9IDA7XHJcbiAgdG90YWxUb1Njcm9sbCA9IDA7XHJcbiAgdHJpZ2dlcmVkOiBJU2Nyb2xsZXJEaXN0YW5jZSA9IHtcclxuICAgIGRvd246IDAsXHJcbiAgICB1cDogMCxcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcih7IHRvdGFsVG9TY3JvbGwgfSkge1xyXG4gICAgdGhpcy50b3RhbFRvU2Nyb2xsID0gdG90YWxUb1Njcm9sbDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIpIHtcclxuICAgIHJldHVybiAodGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPSBwb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb3RhbFRvU2Nyb2xsKHRvdGFsVG9TY3JvbGw6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMubGFzdFRvdGFsVG9TY3JvbGwgIT09IHRvdGFsVG9TY3JvbGwpIHtcclxuICAgICAgdGhpcy5sYXN0VG90YWxUb1Njcm9sbCA9IHRoaXMudG90YWxUb1Njcm9sbDtcclxuICAgICAgdGhpcy50b3RhbFRvU2Nyb2xsID0gdG90YWxUb1Njcm9sbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVNjcm9sbChzY3JvbGxlZFVudGlsTm93OiBudW1iZXIsIHRvdGFsVG9TY3JvbGw6IG51bWJlcikge1xyXG4gICAgdGhpcy51cGRhdGVTY3JvbGxQb3NpdGlvbihzY3JvbGxlZFVudGlsTm93KTtcclxuICAgIHRoaXMudXBkYXRlVG90YWxUb1Njcm9sbCh0b3RhbFRvU2Nyb2xsKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRyaWdnZXJlZEZsYWcoc2Nyb2xsLCBpc1Njcm9sbGluZ0Rvd246IGJvb2xlYW4pIHtcclxuICAgIGlmIChpc1Njcm9sbGluZ0Rvd24pIHtcclxuICAgICAgdGhpcy50cmlnZ2VyZWQuZG93biA9IHNjcm9sbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudHJpZ2dlcmVkLnVwID0gc2Nyb2xsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNUcmlnZ2VyZWRTY3JvbGwodG90YWxUb1Njcm9sbCwgaXNTY3JvbGxpbmdEb3duOiBib29sZWFuKSB7XHJcbiAgICByZXR1cm4gaXNTY3JvbGxpbmdEb3duXHJcbiAgICAgID8gdGhpcy50cmlnZ2VyZWQuZG93biA9PT0gdG90YWxUb1Njcm9sbFxyXG4gICAgICA6IHRoaXMudHJpZ2dlcmVkLnVwID09PSB0b3RhbFRvU2Nyb2xsO1xyXG4gIH1cclxufVxyXG4iXX0=