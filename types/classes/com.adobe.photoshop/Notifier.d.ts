/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The parameters of the notifie */
		class Notifier extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * The id of the event, four characters or a unique string
			 * @type {string}
			 * @readonly
			 */
			public readonly event: string;
			/**
			 * The class id the event applies to, four characters or a 
			 * unique string. Allows you to distinguish between the same 
			 * event applied to different classes.
			 * @type {string}
			 * @readonly
			 */
			public readonly eventClass: string;
			/**
			 * The file to execute when the event occurs
			 * @type {File}
			 * @readonly
			 */
			public readonly eventFile: File;
			/**
			 * delete the object
			 * @returns {void}
			 */
			public remove(): void;
		}
	}
}