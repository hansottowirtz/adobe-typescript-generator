/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to changing the document mode to Bitmap */
		class BitmapConversionOptions extends Adobe.Photoshop.DocumentConversionOptions {
			/** only valid for 'halftone screen' conversions */
			public angle: number;
			/** only valid for 'halftone screen' conversions */
			public frequency: number;
			/** ( default: BitmapConversionType.DIFFUSIONDITHER ) */
			public method: Adobe.Photoshop.BitmapConversionType;
			/** only valid for 'custom pattern' conversions */
			public patternName: string;
			/** output resolution (in pixels per inch) ( default: 72.0 ) */
			public resolution: number;
			/** only valid for 'halftone screen' conversions */
			public shape: Adobe.Photoshop.BitmapHalfToneType;
		}
	}
}