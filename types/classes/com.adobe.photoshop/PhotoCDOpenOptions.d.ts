/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to opening a PhotoCD document */
		class PhotoCDOpenOptions extends Adobe.Photoshop.OpenOptions {
			/**
			 * profile to use when reading the image
			 * @type {string}
			 */
			public colorProfileName: string;
			/**
			 * colorspace for image
			 * @type {Adobe.Photoshop.PhotoCDColorSpace}
			 */
			public colorSpace: Adobe.Photoshop.PhotoCDColorSpace;
			/**
			 * @type {Adobe.Photoshop.Orientation}
			 */
			public orientation: Adobe.Photoshop.Orientation;
			/**
			 * dimensions of image
			 * @type {Adobe.Photoshop.PhotoCDSize}
			 */
			public pixelSize: Adobe.Photoshop.PhotoCDSize;
			/**
			 * the resolution of the image (in pixels per inch)
			 * @type {number}
			 */
			public resolution: number;
		}
	}
}