/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class EPSExportPreference extends Adobe.Indesign.Preference {
			/**
			 * The transparency flattener preset to use.
			 * @type {Adobe.Indesign.FlattenerPreset}
			 */
			public appliedFlattenerPreset: Adobe.Indesign.FlattenerPreset;
			/**
			 * The height of the bleed area at the bottom of the page. 
			 * Note: Valid only when use document bleed to print is true.
			 * @type {any}
			 */
			public bleedBottom: any;
			/**
			 * The width of the bleed area at the inside of the page. Note: 
			 * Valid only when use document bleed to print is true.
			 * @type {any}
			 */
			public bleedInside: any;
			/**
			 * The width of the bleed area at the outside of the page. 
			 * Note: Valid only when use document bleed to print is true.
			 * @type {any}
			 */
			public bleedOutside: any;
			/**
			 * The height of the bleed area at the top of the page. Note: 
			 * Valid only when use document bleed to print is true.
			 * @type {any}
			 */
			public bleedTop: any;
			/**
			 * The format in which to send image data to the printer.
			 * @type {Adobe.Indesign.DataFormat}
			 */
			public dataFormat: Adobe.Indesign.DataFormat;
			/**
			 * The color space for representing color in the exported EPS.
			 * @type {Adobe.Indesign.EPSColorSpace}
			 */
			public epsColor: Adobe.Indesign.EPSColorSpace;
			/**
			 * If true, exports facing pages as a single page that has the 
			 * width of the spread. If false, exports spread pages as 
			 * separate pages.
			 * @type {boolean}
			 */
			public epsSpreads: boolean;
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
			 * Controls how fonts are embedded in the exported EPS.
			 * @type {Adobe.Indesign.FontEmbedding}
			 */
			public fontEmbedding: Adobe.Indesign.FontEmbedding;
			/**
			 * If true, ignores flattener spread overrides.
			 * @type {boolean}
			 */
			public ignoreSpreadOverrides: boolean;
			/**
			 * The image data to export to the EPS document.
			 * @type {Adobe.Indesign.EPSImageData}
			 */
			public imageData: Adobe.Indesign.EPSImageData;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * If true, replaces bitmap images with OPI links.
			 * @type {boolean}
			 */
			public omitBitmaps: boolean;
			/**
			 * If true, replaces EPS images with OPI links.
			 * @type {boolean}
			 */
			public omitEPS: boolean;
			/**
			 * If true, replaces PDF images with OPI links.
			 * @type {boolean}
			 */
			public omitPDF: boolean;
			/**
			 * If true, prints graphics that are either OPI comments stored 
			 * in imported EPS files or linked using OPI comments. For 
			 * information on linking files using OPI comments, see omit 
			 * EPS, omit PDF, or omit bitmaps.
			 * @type {boolean}
			 */
			public opiImageReplacement: boolean;
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
			 * The parent of the EPSExportPreference (a Application).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * The PostScript level of the printer.
			 * @type {Adobe.Indesign.PostScriptLevels}
			 */
			public postscriptLevel: Adobe.Indesign.PostScriptLevels;
			/**
			 * The file format of the preview image saved with the exported 
			 * EPS file.
			 * @type {Adobe.Indesign.PreviewTypes}
			 */
			public preview: Adobe.Indesign.PreviewTypes;
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
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerEPSExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerEPSExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}