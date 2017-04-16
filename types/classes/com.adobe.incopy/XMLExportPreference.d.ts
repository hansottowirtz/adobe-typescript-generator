/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class XMLExportPreference extends Adobe.Incopy.Preference {
			/**
			 * If true, transforms the XML using an XSLT file.
			 * @type {boolean}
			 */
			public allowTransform: boolean;
			/**
			 * If true, replaces special characters with character 
			 * references.
			 * @type {boolean}
			 */
			public characterReferences: boolean;
			/**
			 * If true, copies formatted images to the images subfolder.
			 * @type {boolean}
			 */
			public copyFormattedImages: boolean;
			/**
			 * If true, copies optimized images to the images subfolder.
			 * @type {boolean}
			 */
			public copyOptimizedImages: boolean;
			/**
			 * If true, copies original images to the images subfolder.
			 * @type {boolean}
			 */
			public copyOriginalImages: boolean;
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
			 * If true, excludes the DTD from the exported XML content.
			 * @type {boolean}
			 */
			public excludeDtd: boolean;
			/**
			 * If true, exports XML content from the selected XML element. 
			 * If false, exports the entire document.
			 * @type {boolean}
			 */
			public exportFromSelected: boolean;
			/**
			 * The export format for untagged tables in tagged stories.
			 * @type {Adobe.Incopy.XMLExportUntaggedTablesFormat}
			 */
			public exportUntaggedTablesFormat: Adobe.Incopy.XMLExportUntaggedTablesFormat;
			/**
			 * The file encoding type for exporting XML content.
			 * @type {Adobe.Incopy.XMLFileEncoding}
			 */
			public fileEncoding: Adobe.Incopy.XMLFileEncoding;
			/**
			 * If true, generates interlaced GIFs. Note: Not valid  when 
			 * image conversion is JPEG.
			 * @type {boolean}
			 */
			public gifOptionsInterlaced: boolean;
			/**
			 * The color palette for GIF conversion. Note: Not valid when 
			 * image conversion is JPEG.
			 * @type {Adobe.Incopy.GIFOptionsPalette}
			 */
			public gifOptionsPalette: Adobe.Incopy.GIFOptionsPalette;
			/**
			 * The file format to use for converted images. Note: Valid 
			 * only when copy optimized images and/or copy formatted images 
			 * is true.
			 * @type {Adobe.Incopy.ImageConversion}
			 */
			public imageConversion: Adobe.Incopy.ImageConversion;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The formatting method for converted JPEG images. Note: Not 
			 * valid  when image conversion is GIF.
			 * @type {Adobe.Incopy.JPEGOptionsFormat}
			 */
			public jpegOptionsFormat: Adobe.Incopy.JPEGOptionsFormat;
			/**
			 * The quality of converted JPEG images. Note: Not valid when 
			 * image conversion is GIF.
			 * @type {Adobe.Incopy.JPEGOptionsQuality}
			 */
			public jpegOptionsQuality: Adobe.Incopy.JPEGOptionsQuality;
			/**
			 * The parent of the XMLExportPreference (a Application or 
			 * Document).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * The preferred browser for viewing XML. Can return: File or 
			 * NothingEnum enumerator.
			 * @type {any}
			 */
			public preferredBrowser: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * If true, includes Ruby text in the exported XML content.
			 * @type {boolean}
			 */
			public ruby: boolean;
			/**
			 * The name of the XSLT file. Note: Valid when allow transform 
			 * is true. Can return: File or XMLTransformFile enumerator.
			 * @type {any}
			 */
			public transformFilename: any;
			/**
			 * If true, displays exported XML content in a specified 
			 * viewer.
			 * @type {boolean}
			 */
			public viewAfterExport: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Incopy.EventListener}
			 */
			public addEventListenerXMLExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
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
			public removeEventListenerXMLExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}