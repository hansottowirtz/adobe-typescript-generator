/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * An event-handler object that tells the script to execute 
		 * specified code when a specified event occurs. For notifiers 
		 * to work, they must be enabled. See the 'notifiers enabled' 
		 * property of the Application object. Events that occur within 
		 * scripts do not generally trigger notifiers, because they 
		 * occur inside of a "play script" event.
		 */
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