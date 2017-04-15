/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XMLExportPreference extends Adobe.Indesign.Preference {
			/** If true, transforms the XML using an XSLT file. */
			public allowTransform: boolean;
			/**
			 * If true, replaces special characters with character 
			 * references.
			 */
			public characterReferences: boolean;
			/** If true, copies formatted images to the images subfolder. */
			public copyFormattedImages: boolean;
			/** If true, copies optimized images to the images subfolder. */
			public copyOptimizedImages: boolean;
			/** If true, copies original images to the images subfolder. */
			public copyOriginalImages: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** If true, excludes the DTD from the exported XML content. */
			public excludeDtd: boolean;
			/**
			 * If true, exports XML content from the selected XML element. 
			 * If false, exports the entire document.
			 */
			public exportFromSelected: boolean;
			/** The export format for untagged tables in tagged stories. */
			public exportUntaggedTablesFormat: Adobe.Indesign.XMLExportUntaggedTablesFormat;
			/** The file encoding type for exporting XML content. */
			public fileEncoding: Adobe.Indesign.XMLFileEncoding;
			/**
			 * If true, generates interlaced GIFs. Note: Not valid  when 
			 * image conversion is JPEG.
			 */
			public gifOptionsInterlaced: boolean;
			/**
			 * The color palette for GIF conversion. Note: Not valid when 
			 * image conversion is JPEG.
			 */
			public gifOptionsPalette: Adobe.Indesign.GIFOptionsPalette;
			/**
			 * The file format to use for converted images. Note: Valid 
			 * only when copy optimized images and/or copy formatted images 
			 * is true.
			 */
			public imageConversion: Adobe.Indesign.ImageConversion;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The formatting method for converted JPEG images. Note: Not 
			 * valid  when image conversion is GIF.
			 */
			public jpegOptionsFormat: Adobe.Indesign.JPEGOptionsFormat;
			/**
			 * The quality of converted JPEG images. Note: Not valid when 
			 * image conversion is GIF.
			 */
			public jpegOptionsQuality: Adobe.Indesign.JPEGOptionsQuality;
			/**
			 * The parent of the XMLExportPreference (a Application or 
			 * Document).
			 */
			public readonly parent: any;
			/**
			 * The preferred browser for viewing XML. Can return: File or 
			 * NothingEnum enumerator.
			 */
			public preferredBrowser: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** If true, includes Ruby text in the exported XML content. */
			public ruby: boolean;
			/**
			 * The name of the XSLT file. Note: Valid when allow transform 
			 * is true. Can return: File or XMLTransformFile enumerator.
			 */
			public transformFilename: any;
			/**
			 * If true, displays exported XML content in a specified 
			 * viewer.
			 */
			public viewAfterExport: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerXMLExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerXMLExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}