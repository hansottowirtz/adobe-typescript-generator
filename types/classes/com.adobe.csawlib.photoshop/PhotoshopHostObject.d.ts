/// <reference path="../../packages/com.adobe.csawlib.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace CsawlibPhotoshop {
		/**
		 * Base for Photoshop classes, which encapsulates host object 
		 * and all interaction with the host through the HBAPI.
		 */
		class PhotoshopHostObject extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * @returns {void}
			 */
			public constructor();
		}
	}
}