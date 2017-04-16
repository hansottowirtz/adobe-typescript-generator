/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A history state for the document */
		class HistoryState extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * the history state's name
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * is the history state a snapshot?
			 * @type {boolean}
			 * @readonly
			 */
			public readonly snapshot: boolean;
		}
	}
}