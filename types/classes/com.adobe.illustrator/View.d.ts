/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A view */
		class View extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** the bounding rectangle of this view */
			public readonly bounds: any[];
			/** the center point of this view */
			public centerPoint: any[];
			/** the mode of display */
			public screenMode: Adobe.Illustrator.ScreenMode;
			/** the zoom factor of this view */
			public zoom: number;
		}
	}
}