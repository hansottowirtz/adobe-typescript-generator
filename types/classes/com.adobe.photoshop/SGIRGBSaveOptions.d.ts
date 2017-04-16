/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a document in the SGI RGB format */
		class SGIRGBSaveOptions extends Adobe.Photoshop.SaveOptions {
			/** save alpha channels */
			public alphaChannels: boolean;
			/** save spot colors */
			public spotColors: boolean;
		}
	}
}