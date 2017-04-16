/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a JPEG document */
		class JPEGSaveOptions extends Adobe.Photoshop.SaveOptions {
			/**
			 * embed color profile in document
			 * @type {boolean}
			 */
			public embedColorProfile: boolean;
			/**
			 * ( default: FormatOptions.STANDARDBASELINE )
			 * @type {Adobe.Photoshop.FormatOptions}
			 */
			public formatOptions: Adobe.Photoshop.FormatOptions;
			/**
			 * @type {Adobe.Photoshop.MatteType}
			 */
			public matte: Adobe.Photoshop.MatteType;
			/**
			 * quality of produced image ( 0 - 12; default: 3 )
			 * @type {number}
			 */
			public quality: number;
			/**
			 * number of scans. Only valid for progressive type JPEG files 
			 * ( 3 - 5 )
			 * @type {number}
			 */
			public scans: number;
		}
	}
}