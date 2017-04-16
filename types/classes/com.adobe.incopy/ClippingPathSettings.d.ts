/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class ClippingPathSettings extends Adobe.Incopy.Preference {
			/**
			 * A list of the alpha channels stored in the graphic.
			 * @type {any}
			 * @readonly
			 */
			public readonly alphaChannelPathNames: any;
			/**
			 * The name of the Photoshop path or alpha channel to use as a 
			 * clipping path.
			 * @type {string}
			 * @readonly
			 */
			public readonly appliedPathName: string;
			/**
			 * The clipping path type.
			 * @type {Adobe.Incopy.ClippingPathType}
			 * @readonly
			 */
			public readonly clippingType: Adobe.Incopy.ClippingPathType;
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
			 * @readonly
			 */
			public readonly includeInsideEdges: boolean;
			/**
			 * Shrinks the area enclosed by the clipping path by the 
			 * specified amount. (Range depends on the unit. For points: 
			 * -10000 to 10000; picas: -833p4 to 833p4; inches: -138.8889 
			 * to 138.8889; mm: -3527.778 to 3527.778; cm: -352.7778 to 
			 * 352.7778; ciceros: -781c11.889 to 781c11.889)
			 * @type {any}
			 * @readonly
			 */
			public readonly insetFrame: any;
			/**
			 * If true, inverts the clipping path.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly invertPath: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the ClippingPathSettings (a Image, EPS, WMF, 
			 * PICT, PDF or ImportedPage).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A collection of paths.
			 * @type {Adobe.Incopy.Paths}
			 * @readonly
			 */
			public readonly paths: Adobe.Incopy.Paths;
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
			 * If true, truncates the clipping path at the edge of the 
			 * frame containing the graphic. Note: Valid only when clipping 
			 * type is alpha channel or detect edges.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly restrictToFrame: boolean;
			/**
			 * The lowest value (darkest) pixel to allow in the image. All 
			 * pixels in the image whose values are greater than (lighter 
			 * than) the threshold value are clipped (obscured). (Range: 0 
			 * to 255) Note: Valid only when clipping type is detect edges 
			 * or alpha channel.
			 * @type {number}
			 * @readonly
			 */
			public readonly threshold: number;
			/**
			 * Specifies how similar a pixel's intensity value can be to 
			 * the threshold value before the pixel is obscured by the 
			 * clipping path. (Range: 0 to 10) Note: Valid only when 
			 * clipping type is detect edges or alpha channel.
			 * @type {number}
			 * @readonly
			 */
			public readonly tolerance: number;
			/**
			 * If true, uses the high-resolution version of the graphic to 
			 * create the clipping path. If false, calculates the clipping 
			 * path based on screen-display resolution. Note: Valid only 
			 * when clipping type is detect edges.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly useHighResolutionImage: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerClippingPathSettings(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerClippingPathSettings(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}