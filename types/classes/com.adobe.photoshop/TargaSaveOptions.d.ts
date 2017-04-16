/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a Target document */
		class TargaSaveOptions extends Adobe.Photoshop.SaveOptions {
			/**
			 * save alpha channels
			 * @type {boolean}
			 */
			public alphaChannels: boolean;
			/**
			 * number of bits per pixel ( default: 
			 * TargaBitsPerPixels.TWENTYFOUR )
			 * @type {Adobe.Photoshop.TargaBitsPerPixels}
			 */
			public resolution: Adobe.Photoshop.TargaBitsPerPixels;
			/**
			 * should RLE compression be used? ( default: true )
			 * @type {boolean}
			 */
			public rleCompression: boolean;
		}
	}
}