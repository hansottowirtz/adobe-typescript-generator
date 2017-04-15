/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PICTResourceSaveOptions extends Adobe.Photoshop.SaveOptions {
			/** save alpha channels */
			public alphaChannels: boolean;
			/** ( default: PICTCompression.NONE ) */
			public compression: Adobe.Photoshop.PICTCompression;
			/** embed color profile in document */
			public embedColorProfile: boolean;
			/** name of PICT resource ( default: \"\" ) */
			public name: string;
			/** number of bits per pixel */
			public resolution: Adobe.Photoshop.PICTBitsPerPixels;
			/** ID of PICT resource ( default: 128 ) */
			public resourceID: number;
		}
	}
}