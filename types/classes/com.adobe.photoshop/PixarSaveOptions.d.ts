/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a Pixar document */
		class PixarSaveOptions extends Adobe.Photoshop.SaveOptions {
			/**
			 * save alpha channels
			 * @type {boolean}
			 */
			public alphaChannels: boolean;
		}
	}
}