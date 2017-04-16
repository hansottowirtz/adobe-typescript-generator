/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class GuidePreference extends Adobe.Incopy.Preference {
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * If true, places guides behind all other objects on the 
			 * spread.
			 */
			public guidesInBack: boolean;
			/** If true, guides cannot be moved, added, or deleted. */
			public guidesLocked: boolean;
			/** If true, displays the guides. */
			public guidesShown: boolean;
			/**
			 * If true, an object within the specified range snaps to the 
			 * nearest guide when the object is created, moved, or resized. 
			 * For range information, see guide snapto zone.
			 */
			public guidesSnapto: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the GuidePreference (a Application or 
			 * Document).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The color of the guide, specified either as an array of 
			 * three doubles, each in the range 0 to 255 and representing 
			 * R, G, and B values, or as a UI color. . Can return: Array of 
			 * 3 Reals (0 - 255) or UIColors enumerator.
			 */
			public rulerGuidesColor: any;
			/**
			 * The magnification (as a percentage) less than which ruler 
			 * guides do not appear. (Range: 5 to 4000)
			 */
			public rulerGuidesViewThreshold: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerGuidePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerGuidePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}