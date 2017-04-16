/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Settings related to saving a Photoshop document */
		class PhotoshopSaveOptions extends Adobe.Photoshop.SaveOptions {
			/**
			 * save alpha channels
			 * @type {boolean}
			 */
			public alphaChannels: boolean;
			/**
			 * save annotations
			 * @type {boolean}
			 */
			public annotations: boolean;
			/**
			 * embed color profile in document
			 * @type {boolean}
			 */
			public embedColorProfile: boolean;
			/**
			 * save layers
			 * @type {boolean}
			 */
			public layers: boolean;
			/**
			 * save spot colors
			 * @type {boolean}
			 */
			public spotColors: boolean;
		}
	}
}