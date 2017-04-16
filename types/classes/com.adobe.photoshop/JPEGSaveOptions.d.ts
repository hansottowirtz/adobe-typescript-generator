/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a JPEG document */
		class JPEGSaveOptions extends Adobe.Photoshop.SaveOptions {
			/** embed color profile in document */
			public embedColorProfile: boolean;
			/** ( default: FormatOptions.STANDARDBASELINE ) */
			public formatOptions: Adobe.Photoshop.FormatOptions;
			public matte: Adobe.Photoshop.MatteType;
			/** quality of produced image ( 0 - 12; default: 3 ) */
			public quality: number;
			/**
			 * number of scans. Only valid for progressive type JPEG files 
			 * ( 3 - 5 )
			 */
			public scans: number;
		}
	}
}