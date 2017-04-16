/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class PNGExportPreference extends Adobe.Indesign.Preference {
			/**
			 * If true, use anti-aliasing for text and vectors during 
			 * export.
			 * @type {boolean}
			 */
			public antiAlias: boolean;
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
			 * If true, exports each spread as a single PNG file. If false, 
			 * exports facing pages as separate files and appends 
			 * sequential numbers to each file name.
			 * @type {boolean}
			 */
			public exportingSpread: boolean;
			/**
			 * The export resolution expressed as a real number instead of 
			 * an integer. (Range: 1.0 to 2400.0)
			 * @type {number}
			 */
			public exportResolution: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The page(s) to export, specified as a page number or an 
			 * array of page numbers. Note: Valid when PNG export range is 
			 * not all.
			 * @type {string}
			 */
			public pageString: string;
			/**
			 * The parent of the PNGExportPreference (a Application).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * RGB or Gray
			 * @type {Adobe.Indesign.PNGColorSpaceEnum}
			 */
			public pngColorSpace: Adobe.Indesign.PNGColorSpaceEnum;
			/**
			 * The page range to export.
			 * @type {Adobe.Indesign.PNGExportRangeEnum}
			 */
			public pngExportRange: Adobe.Indesign.PNGExportRangeEnum;
			/**
			 * The compression quality.
			 * @type {Adobe.Indesign.PNGQualityEnum}
			 */
			public pngQuality: Adobe.Indesign.PNGQualityEnum;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * If true, simulates the effects of overprinting spot and 
			 * process colors in the same way they would occur when 
			 * printing.
			 * @type {boolean}
			 */
			public simulateOverprint: boolean;
			/**
			 * If true, use a transparent background for the exported PNG.
			 * @type {boolean}
			 */
			public transparentBackground: boolean;
			/**
			 * If true, uses the document's bleed settings in the exported 
			 * PNG.
			 * @type {boolean}
			 */
			public useDocumentBleeds: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerPNGExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerPNGExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}