/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A view */
		class View extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the bounding rectangle of this view
			 * @type {any[]}
			 * @readonly
			 */
			public readonly bounds: any[];
			/**
			 * the center point of this view
			 * @type {any[]}
			 */
			public centerPoint: any[];
			/**
			 * the mode of display
			 * @type {Adobe.Illustrator.ScreenMode}
			 */
			public screenMode: Adobe.Illustrator.ScreenMode;
			/**
			 * the zoom factor of this view
			 * @type {number}
			 */
			public zoom: number;
		}
	}
}