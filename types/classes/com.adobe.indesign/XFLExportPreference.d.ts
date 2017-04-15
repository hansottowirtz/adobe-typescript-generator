/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XFLExportPreference extends Adobe.Indesign.Preference {
			/**
			 * If true, each spread in the exported document is combined 
			 * into a single page that has spread's original width.
			 */
			public dynamicDocumentExportReaderSpreads: boolean;
			/** The dynamic media handling options. */
			public dynamicMediaHandling: Adobe.Indesign.DynamicMediaHandlingOptions;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The fitting method to use. */
			public fitMethod: Adobe.Indesign.FitMethodSettings;
			/** The options for fitting to predefined dimension. */
			public fitOption: Adobe.Indesign.FitDimension;
			/** The size fits to given scale percentage. */
			public fitScale: number;
			/** The size fits to given width and height. */
			public fitWidthAndHeight: any;
			/** Flatten transparency when exporting. */
			public flattenTransparency: boolean;
			/**
			 * If true, discretionary hyphenation points are inserted when 
			 * TLF text is used.
			 */
			public insertHyphens: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The JPEG quality options. */
			public jpegQualityOptions: Adobe.Indesign.DynamicDocumentsJPEGQualityOptions;
			/**
			 * The pages to print, specified either as an enumeration or a 
			 * string. To specify a range, separate page numbers in the 
			 * string with a hyphen (-). To specify separate pages, 
			 * separate page numbers in the string with a comma (,). Can 
			 * return: PageRange enumerator or String.
			 */
			public pageRange: any;
			/** The parent of the XFLExportPreference (a Application). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The raster format options. */
			public rasterFormat: Adobe.Indesign.XFLRasterizeFormatOptions;
			/**
			 * If true, all the pages in the exported document will be 
			 * rasterized.
			 */
			public rasterizePages: boolean;
			/** The raster resolution. */
			public rasterResolution: number;
			/** The resampling threshold. */
			public resamplingThreshold: number;
			/** The resampling type. */
			public resamplingType: Adobe.Indesign.Sampling;
			/** The text export policy. */
			public textExportPolicy: Adobe.Indesign.DynamicDocumentsTextExportPolicy;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerXFLExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerXFLExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}