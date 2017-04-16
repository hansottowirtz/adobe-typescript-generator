/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to opening a DICOM document */
		class DICOMOpenOptions extends Adobe.Photoshop.OpenOptions {
			/**
			 * Anonymize the patient information
			 * @type {boolean}
			 */
			public anonymize: boolean;
			/**
			 * The number of columns in n-up configuration
			 * @type {number}
			 */
			public columns: number;
			/**
			 * Reverse(Invert) the image
			 * @type {boolean}
			 */
			public reverse: boolean;
			/**
			 * The number of rows in n-up configuration
			 * @type {number}
			 */
			public rows: number;
			/**
			 * Show Overlays (if present)
			 * @type {boolean}
			 */
			public showOverlays: boolean;
			/**
			 * Window Level
			 * @type {number}
			 */
			public windowLevel: number;
			/**
			 * Window Width
			 * @type {number}
			 */
			public windowWidth: number;
		}
	}
}