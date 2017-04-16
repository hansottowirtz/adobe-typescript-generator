/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to opening a generic EPS document */
		class EPSOpenOptions extends Adobe.Photoshop.OpenOptions {
			/**
			 * use antialias?
			 * @type {boolean}
			 */
			public antiAlias: boolean;
			/**
			 * constrain proportions of image
			 * @type {boolean}
			 */
			public constrainProportions: boolean;
			/**
			 * height of image (unit value)
			 * @type {any}
			 */
			public height: any;
			/**
			 * the document mode
			 * @type {Adobe.Photoshop.OpenDocumentMode}
			 */
			public mode: Adobe.Photoshop.OpenDocumentMode;
			/**
			 * the resolution of the document (in pixels per inch)
			 * @type {number}
			 */
			public resolution: number;
			/**
			 * width of image (unit value)
			 * @type {any}
			 */
			public width: any;
		}
	}
}