/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a PNG document */
		class PNGSaveOptions extends Adobe.Photoshop.SaveOptions {
			/**
			 * compression used on the image. ( 0 - 9; default: 0 )
			 * @type {number}
			 */
			public compression: number;
			/**
			 * should rows be interlaced? ( default: false )
			 * @type {boolean}
			 */
			public interlaced: boolean;
		}
	}
}