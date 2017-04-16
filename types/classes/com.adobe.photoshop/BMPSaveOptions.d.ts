/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a BMP document */
		class BMPSaveOptions extends Adobe.Photoshop.SaveOptions {
			/**
			 * save alpha channels
			 * @type {boolean}
			 */
			public alphaChannels: boolean;
			/**
			 * number of bits per sample ( default: BMPDepthType.TWENTYFOUR 
			 * )
			 * @type {Adobe.Photoshop.BMPDepthType}
			 */
			public depth: Adobe.Photoshop.BMPDepthType;
			/**
			 * @type {boolean}
			 */
			public flipRowOrder: boolean;
			/**
			 * target OS. Windows or OS/2 ( default: 
			 * OperatingSystem.WINDOWS )
			 * @type {Adobe.Photoshop.OperatingSystem}
			 */
			public osType: Adobe.Photoshop.OperatingSystem;
			/**
			 * should RLE compression be used?
			 * @type {boolean}
			 */
			public rleCompression: boolean;
		}
	}
}