/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** an artboard object */
		class Artboard extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * size and position of artboard
			 * @type {any[]}
			 */
			public artboardRect: any[];
			/**
			 * The name of the artboard
			 * @type {string}
			 */
			public name: string;
			/**
			 * Ruler origin of artboard.It is relative to left-bottom 
			 * corner of the Artboard.
			 * @type {any[]}
			 */
			public rulerOrigin: any[];
			/**
			 * Pixel aspect ratio, used in ruler visualization if the units 
			 * are pixels ( 0.1 - 10.0 )
			 * @type {number}
			 */
			public rulerPAR: number;
			/**
			 * Show center mark
			 * @type {boolean}
			 */
			public showCenter: boolean;
			/**
			 * Show cross hairs
			 * @type {boolean}
			 */
			public showCrossHairs: boolean;
			/**
			 * Show title and action safe areas (for video)
			 * @type {boolean}
			 */
			public showSafeAreas: boolean;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
		}
	}
}