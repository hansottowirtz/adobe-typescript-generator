/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A counted item in a document. See the counting tool. */
		class CountItem extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * position of count item (unit value)
			 * @type {any[]}
			 * @readonly
			 */
			public readonly position: any[];
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
		}
	}
}