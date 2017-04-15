/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Notifier extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * The event ID in four characters or a unique string that the 
			 * notifier is associated with.
			 */
			public readonly event: string;
			/**
			 * The class ID associated with the event for the Notifier 
			 * object, four characters or a unique string.
			 */
			public readonly eventClass: string;
			/**
			 * The path to the file to execute when the event 
			 * occurs/activates the notifier.
			 */
			public readonly eventFile: File;
			/** delete the object */
			public remove(): void;
		}
	}
}