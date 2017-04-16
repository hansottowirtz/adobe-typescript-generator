/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class ContourOption extends Adobe.Incopy.Preference {
			/**
			 * A list of the alpha channels stored in the graphic.
			 * @type {any}
			 * @readonly
			 */
			public readonly alphaChannelPathNames: any;
			/**
			 * The alpha channel or Photoshop path to use for the contour 
			 * option. Valid only when the contour options is photoshop 
			 * path or alpha channel.
			 * @type {string}
			 */
			public contourPathName: string;
			/**
			 * The contour type.
			 * @type {Adobe.Incopy.ContourOptionsTypes}
			 */
			public contourType: Adobe.Incopy.ContourOptionsTypes;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Incopy.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Incopy.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * If true, creates interior clipping paths within the 
			 * surrounding clipping path. Note: Valid only when clipping 
			 * type is alpha channel or detect edges.
			 * @type {boolean}
			 */
			public includeInsideEdges: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the ContourOption (a TextWrapPreference).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A list of the clipping paths stored in the graphic.
			 * @type {any}
			 * @readonly
			 */
			public readonly photoshopPathNames: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerContourOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerContourOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}