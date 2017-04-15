/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PNGSaveOptions extends Adobe.Photoshop.SaveOptions {
			/** should rows be interlaced? ( default: false ) */
			public interlaced: boolean;
		}
	}
}