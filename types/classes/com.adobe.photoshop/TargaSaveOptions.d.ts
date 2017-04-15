/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
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