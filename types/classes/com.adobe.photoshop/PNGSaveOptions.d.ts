/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a PNG document */
		class PNGSaveOptions extends Adobe.Photoshop.SaveOptions {
			/** compression used on the image. ( 0 - 9; default: 0 ) */
			public compression: number;
			/** should rows be interlaced? ( default: false ) */
			public interlaced: boolean;
		}
	}
}