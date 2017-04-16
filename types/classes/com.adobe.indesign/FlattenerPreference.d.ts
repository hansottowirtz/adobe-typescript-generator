/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class FlattenerPreference extends Adobe.Indesign.Preference {
			/**
			 * If true, ensures that the boundaries between vector and 
			 * rasterized artwork fall along object paths.
			 * @type {boolean}
			 */
			public clipComplexRegions: boolean;
			/**
			 * If true, converts all strokes to outlines and ensures that 
			 * stroke widths remain constant during flattening. Note: Can 
			 * cause thin strokes to appear slightly thicker than their 
			 * original width. Affects all strokes, not only strokes 
			 * involved in the transparency.
			 * @type {boolean}
			 */
			public convertAllStrokesToOutlines: boolean;
			/**
			 * If true, converts all text to outlines and discards all type 
			 * glyph information on spreads with transparency; ensures that 
			 * the width of text strokes remains constant during 
			 * flattening. Note: Can cause small fonts to appear slightly 
			 * thicker when viewed in Acrobat or printed on low-quality 
			 * desktop printers, but does not affect type quality when 
			 * printed on high-resolution printers or imagesetters.
			 * @type {boolean}
			 */
			public convertAllTextToOutlines: boolean;
			/**
			 * A collection of event listeners.
			 * @type {Adobe.Indesign.EventListeners}
			 * @readonly
			 */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/**
			 * A collection of events.
			 * @type {Adobe.Indesign.Events}
			 * @readonly
			 */
			public readonly events: Adobe.Indesign.Events;
			/**
			 * The resolution for gradients rasterized as a result of 
			 * flattening and for drop shadow and feathers when printed or 
			 * exported. (Range: 0 to 1200) Note: Resolutions higher than 
			 * 300 ppi increase file size and printing time but generally 
			 * do not improve the image quality.
			 * @type {number}
			 */
			public gradientAndMeshResolution: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The resolution for vector objects rasterized as a result of 
			 * flattening. (Range: 1 to 9600) For information, see raster 
			 * vector balance.
			 * @type {number}
			 */
			public lineArtAndTextResolution: number;
			/**
			 * The parent of the FlattenerPreference (a Spread).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The amount of vector artwork to rasterize during flattening, 
			 * specified as an enumerator or as a percentage in the range 0 
			 * to 100. Can return: FlattenerLevel enumerator or Real (0 - 
			 * 100).
			 * @type {any}
			 */
			public rasterVectorBalance: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerFlattenerPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerFlattenerPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}