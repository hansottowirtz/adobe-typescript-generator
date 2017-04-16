/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class XFLExportPreference extends Adobe.Indesign.Preference {
			/**
			 * If true, each spread in the exported document is combined 
			 * into a single page that has spread's original width.
			 * @type {boolean}
			 */
			public dynamicDocumentExportReaderSpreads: boolean;
			/**
			 * The dynamic media handling options.
			 * @type {Adobe.Indesign.DynamicMediaHandlingOptions}
			 */
			public dynamicMediaHandling: Adobe.Indesign.DynamicMediaHandlingOptions;
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
			 * The fitting method to use.
			 * @type {Adobe.Indesign.FitMethodSettings}
			 */
			public fitMethod: Adobe.Indesign.FitMethodSettings;
			/**
			 * The options for fitting to predefined dimension.
			 * @type {Adobe.Indesign.FitDimension}
			 */
			public fitOption: Adobe.Indesign.FitDimension;
			/**
			 * The size fits to given scale percentage.
			 * @type {number}
			 */
			public fitScale: number;
			/**
			 * The size fits to given width and height.
			 * @type {any}
			 */
			public fitWidthAndHeight: any;
			/**
			 * Flatten transparency when exporting.
			 * @type {boolean}
			 */
			public flattenTransparency: boolean;
			/**
			 * If true, discretionary hyphenation points are inserted when 
			 * TLF text is used.
			 * @type {boolean}
			 */
			public insertHyphens: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The JPEG quality options.
			 * @type {Adobe.Indesign.DynamicDocumentsJPEGQualityOptions}
			 */
			public jpegQualityOptions: Adobe.Indesign.DynamicDocumentsJPEGQualityOptions;
			/**
			 * The pages to print, specified either as an enumeration or a 
			 * string. To specify a range, separate page numbers in the 
			 * string with a hyphen (-). To specify separate pages, 
			 * separate page numbers in the string with a comma (,). Can 
			 * return: PageRange enumerator or String.
			 * @type {any}
			 */
			public pageRange: any;
			/**
			 * The parent of the XFLExportPreference (a Application).
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
			 * The raster format options.
			 * @type {Adobe.Indesign.XFLRasterizeFormatOptions}
			 */
			public rasterFormat: Adobe.Indesign.XFLRasterizeFormatOptions;
			/**
			 * If true, all the pages in the exported document will be 
			 * rasterized.
			 * @type {boolean}
			 */
			public rasterizePages: boolean;
			/**
			 * The raster resolution.
			 * @type {number}
			 */
			public rasterResolution: number;
			/**
			 * The resampling threshold.
			 * @type {number}
			 */
			public resamplingThreshold: number;
			/**
			 * The resampling type.
			 * @type {Adobe.Indesign.Sampling}
			 */
			public resamplingType: Adobe.Indesign.Sampling;
			/**
			 * The text export policy.
			 * @type {Adobe.Indesign.DynamicDocumentsTextExportPolicy}
			 */
			public textExportPolicy: Adobe.Indesign.DynamicDocumentsTextExportPolicy;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerXFLExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerXFLExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}