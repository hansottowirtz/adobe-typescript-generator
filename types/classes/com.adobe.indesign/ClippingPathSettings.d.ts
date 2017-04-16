/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class ClippingPathSettings extends Adobe.Indesign.Preference {
			/** A list of the alpha channels stored in the graphic. */
			public readonly alphaChannelPathNames: any;
			/**
			 * The name of the Photoshop path or alpha channel to use as a 
			 * clipping path.
			 */
			public appliedPathName: string;
			/** The clipping path type. */
			public clippingType: Adobe.Indesign.ClippingPathType;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * If true, creates interior clipping paths within the 
			 * surrounding clipping path. Note: Valid only when clipping 
			 * type is alpha channel or detect edges.
			 */
			public includeInsideEdges: boolean;
			/**
			 * Shrinks the area enclosed by the clipping path by the 
			 * specified amount. (Range depends on the unit. For points: 
			 * -10000 to 10000; picas: -833p4 to 833p4; inches: -138.8889 
			 * to 138.8889; mm: -3527.778 to 3527.778; cm: -352.7778 to 
			 * 352.7778; ciceros: -781c11.889 to 781c11.889)
			 */
			public insetFrame: any;
			/** If true, inverts the clipping path. */
			public invertPath: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The parent of the ClippingPathSettings (a Image, EPS, WMF, 
			 * PICT, PDF or ImportedPage).
			 */
			public readonly parent: any;
			/** A collection of paths. */
			public readonly paths: Adobe.Indesign.Paths;
			/** A list of the clipping paths stored in the graphic. */
			public readonly photoshopPathNames: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * If true, truncates the clipping path at the edge of the 
			 * frame containing the graphic. Note: Valid only when clipping 
			 * type is alpha channel or detect edges.
			 */
			public restrictToFrame: boolean;
			/**
			 * The lowest value (darkest) pixel to allow in the image. All 
			 * pixels in the image whose values are greater than (lighter 
			 * than) the threshold value are clipped (obscured). (Range: 0 
			 * to 255) Note: Valid only when clipping type is detect edges 
			 * or alpha channel.
			 */
			public threshold: number;
			/**
			 * Specifies how similar a pixel's intensity value can be to 
			 * the threshold value before the pixel is obscured by the 
			 * clipping path. (Range: 0 to 10) Note: Valid only when 
			 * clipping type is detect edges or alpha channel.
			 */
			public tolerance: number;
			/**
			 * If true, uses the high-resolution version of the graphic to 
			 * create the clipping path. If false, calculates the clipping 
			 * path based on screen-display resolution. Note: Valid only 
			 * when clipping type is detect edges.
			 */
			public useHighResolutionImage: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerClippingPathSettings(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Converts the clipping path to a frame. */
			public convertToFrame(): Adobe.Indesign.PageItem;
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
			public removeEventListenerClippingPathSettings(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}