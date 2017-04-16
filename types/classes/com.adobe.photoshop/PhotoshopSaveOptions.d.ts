/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a Photoshop document */
		class PhotoshopSaveOptions extends Adobe.Photoshop.SaveOptions {
			/** save alpha channels */
			public alphaChannels: boolean;
			/** save annotations */
			public annotations: boolean;
			/** embed color profile in document */
			public embedColorProfile: boolean;
			/** save layers */
			public layers: boolean;
			/** save spot colors */
			public spotColors: boolean;
		}
	}
}