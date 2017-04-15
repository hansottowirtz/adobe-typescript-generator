/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** An artboard object. */
		class Artboard extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** Size and position of artboard. */
			public artboardRect: any[];
			/**
			 * Ruler origin of artboard.It is relative to left-bottom 
			 * corner of the Artboard.
			 */
			public rulerOrigin: any[];
			/**
			 * Pixel aspect ratio, used in ruler visualization if the units 
			 * are pixels. ( 0.1 - 10.0 )
			 */
			public rulerPAR: number;
			/** Show center mark. */
			public showCenter: boolean;
			/** Show cross hairs. */
			public showCrossHairs: boolean;
			/** Show title and action safe areas (for video) */
			public showSafeAreas: boolean;
			/** delete the object */
			public remove(): void;
		}
	}
}