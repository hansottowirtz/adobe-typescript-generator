/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class View extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The bounding rectangle of this view. */
			public readonly bounds: any[];
			/** The center point of this view. */
			public centerPoint: any[];
			/** The mode of display. */
			public screenMode: Adobe.Illustrator.ScreenMode;
			/** The zoom factor of this view. */
			public zoom: number;
		}
	}
}