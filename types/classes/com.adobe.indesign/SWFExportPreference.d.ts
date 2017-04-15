/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class SWFExportPreference extends Adobe.Indesign.Preference {
			/** The SWF curve quality. */
			public curveQuality: Adobe.Indesign.SWFCurveQualityValue;
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
			/** The frame rate in frames per second. */
			public frameRate: number;
			/** Flag indicates whether to generate HTML. */
			public generateHTML: boolean;
			/**
			 * Flag indicates whether to include interactive page curl when 
			 * export to SWF.
			 */
			public includeInteractivePageCurl: boolean;
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
			/** The name of the page transition to use for all pages. */
			public pageTransitionOverride: Adobe.Indesign.PageTransitionOverrideOptions;
			/** The parent of the SWFExportPreference (a Application). */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The SWF raster compression options. */
			public rasterCompression: Adobe.Indesign.RasterCompressionOptions;
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
			/** SWF background setting */
			public swfBackground: Adobe.Indesign.SWFBackgroundOptions;
			/** The text export policy. */
			public textExportPolicy: Adobe.Indesign.DynamicDocumentsTextExportPolicy;
			/**
			 * Flag indicates whether to allow to use network access when 
			 * export to SWF.
			 */
			public useNetworkAccess: boolean;
			/** Flag indicates to whether to view the SWF after exporting. */
			public viewSWFAfterExporting: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerSWFExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerSWFExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}