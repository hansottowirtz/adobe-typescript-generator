/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a document in the SGI RGB format */
		class SGIRGBSaveOptions extends Adobe.Photoshop.SaveOptions {
			/**
			 * save alpha channels
			 * @type {boolean}
			 */
			public alphaChannels: boolean;
			/**
			 * save spot colors
			 * @type {boolean}
			 */
			public spotColors: boolean;
		}
	}
}