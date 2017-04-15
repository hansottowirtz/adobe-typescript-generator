/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a Target document */
		class TargaSaveOptions extends Adobe.Photoshop.SaveOptions {
			/** save alpha channels */
			public alphaChannels: boolean;
			/**
			 * number of bits per pixel ( default: 
			 * TargaBitsPerPixels.TWENTYFOUR )
			 */
			public resolution: Adobe.Photoshop.TargaBitsPerPixels;
			/** should RLE compression be used? ( default: true ) */
			public rleCompression: boolean;
		}
	}
}