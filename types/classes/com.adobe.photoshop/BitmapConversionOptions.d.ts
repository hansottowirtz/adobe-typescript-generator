/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to changing the document mode to Bitmap */
		class BitmapConversionOptions extends Adobe.Photoshop.DocumentConversionOptions {
			/**
			 * only valid for 'halftone screen' conversions
			 * @type {number}
			 */
			public angle: number;
			/**
			 * only valid for 'halftone screen' conversions
			 * @type {number}
			 */
			public frequency: number;
			/**
			 * ( default: BitmapConversionType.DIFFUSIONDITHER )
			 * @type {Adobe.Photoshop.BitmapConversionType}
			 */
			public method: Adobe.Photoshop.BitmapConversionType;
			/**
			 * only valid for 'custom pattern' conversions
			 * @type {string}
			 */
			public patternName: string;
			/**
			 * output resolution (in pixels per inch) ( default: 72.0 )
			 * @type {number}
			 */
			public resolution: number;
			/**
			 * only valid for 'halftone screen' conversions
			 * @type {Adobe.Photoshop.BitmapHalfToneType}
			 */
			public shape: Adobe.Photoshop.BitmapHalfToneType;
		}
	}
}