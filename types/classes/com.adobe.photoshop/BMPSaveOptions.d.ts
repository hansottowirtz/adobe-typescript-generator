/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a BMP document */
		class BMPSaveOptions extends Adobe.Photoshop.SaveOptions {
			/** save alpha channels */
			public alphaChannels: boolean;
			/**
			 * number of bits per sample ( default: BMPDepthType.TWENTYFOUR 
			 * )
			 */
			public depth: Adobe.Photoshop.BMPDepthType;
			public flipRowOrder: boolean;
			/**
			 * target OS. Windows or OS/2 ( default: 
			 * OperatingSystem.WINDOWS )
			 */
			public osType: Adobe.Photoshop.OperatingSystem;
			/** should RLE compression be used? */
			public rleCompression: boolean;
		}
	}
}