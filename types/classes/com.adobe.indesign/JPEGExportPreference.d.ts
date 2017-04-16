/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class JPEGExportPreference extends Adobe.Indesign.Preference {
			/**
			 * If true, use anti-aliasing for text and vectors during 
			 * export.
			 * @type {boolean}
			 */
			public antiAlias: boolean;
			/**
			 * True to embed the color profile, false otherwise.
			 * @type {boolean}
			 */
			public embedColorProfile: boolean;
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
			 * If true, exports each spread as a single JPEG file. If 
			 * false, exports facing pages as separate files and appends 
			 * sequential numbers to each file name.
			 * @type {boolean}
			 */
			public exportingSpread: boolean;
			/**
			 * The export	resolution expressed as a real number instead of 
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
			 * One of RGB, CMYK or Gray
			 * @type {Adobe.Indesign.JpegColorSpaceEnum}
			 */
			public jpegColorSpace: Adobe.Indesign.JpegColorSpaceEnum;
			/**
			 * The page range to export.
			 * @type {Adobe.Indesign.ExportRangeOrAllPages}
			 */
			public jpegExportRange: Adobe.Indesign.ExportRangeOrAllPages;
			/**
			 * The compression quality.
			 * @type {Adobe.Indesign.JPEGOptionsQuality}
			 */
			public jpegQuality: Adobe.Indesign.JPEGOptionsQuality;
			/**
			 * The rendering style.
			 * @type {Adobe.Indesign.JPEGOptionsFormat}
			 */
			public jpegRenderingStyle: Adobe.Indesign.JPEGOptionsFormat;
			/**
			 * The page(s) to export, specified as a page number or an 
			 * array of page numbers. Note: Valid when JPEG export range is 
			 * not all.
			 * @type {string}
			 */
			public pageString: string;
			/**
			 * The parent of the JPEGExportPreference (a Application).
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
			 * If true, simulates the effects of overprinting spot and 
			 * process colors in the same way they would occur when 
			 * printing.
			 * @type {boolean}
			 */
			public simulateOverprint: boolean;
			/**
			 * If true, uses the document's bleed settings in the exported 
			 * JPEG.
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
			public addEventListenerJPEGExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerJPEGExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}