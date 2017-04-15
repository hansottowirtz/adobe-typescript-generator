/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a PNG document */
		class PNGSaveOptions extends Adobe.Photoshop.SaveOptions {
			/** should rows be interlaced? ( default: false ) */
			public interlaced: boolean;
		}
	}
}