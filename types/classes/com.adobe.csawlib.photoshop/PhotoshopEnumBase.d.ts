/// <reference path="../../packages/com.adobe.csawlib.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace CsawlibPhotoshop {
		/** Base for all enum-representing classes */
		class PhotoshopEnumBase extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Returns the object value
			 * @type {any}
			 * @readonly
			 */
			public readonly value: any;
			/**
			 * @returns {void}
			 */
			public constructor();
		}
	}
}