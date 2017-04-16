/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a PICT document */
		class PICTFileSaveOptions extends Adobe.Photoshop.SaveOptions {
			/**
			 * save alpha channels
			 * @type {boolean}
			 */
			public alphaChannels: boolean;
			/**
			 * ( default: PICTCompression.NONE )
			 * @type {Adobe.Photoshop.PICTCompression}
			 */
			public compression: Adobe.Photoshop.PICTCompression;
			/**
			 * embed color profile in document
			 * @type {boolean}
			 */
			public embedColorProfile: boolean;
			/**
			 * number of bits per pixel
			 * @type {Adobe.Photoshop.PICTBitsPerPixels}
			 */
			public resolution: Adobe.Photoshop.PICTBitsPerPixels;
		}
	}
}