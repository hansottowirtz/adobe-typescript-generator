/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A guide in the document */
		class Guide extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * location of the guide from origin of image
			 * @type {any}
			 */
			public coordinate: any;
			/**
			 * indicates whether the guide is vertical or horizontal
			 * @type {Adobe.Photoshop.Direction}
			 */
			public direction: Adobe.Photoshop.Direction;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
		}
	}
}