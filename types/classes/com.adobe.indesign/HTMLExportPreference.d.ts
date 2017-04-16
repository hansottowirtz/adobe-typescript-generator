/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class HTMLExportPreference extends Adobe.Indesign.Preference {
			/**
			 * apply image alignment to anchored object settings.
			 * @type {boolean}
			 */
			public applyImageAlignmentToAnchoredObjectSettings: boolean;
			/**
			 * The bullet export option.
			 * @type {Adobe.Indesign.BulletListExportOption}
			 */
			public bulletExportOption: Adobe.Indesign.BulletListExportOption;
			/**
			 * The cascading style sheet export option.
			 * @type {Adobe.Indesign.StyleSheetExportOption}
			 */
			public cssExportOption: Adobe.Indesign.StyleSheetExportOption;
			/**
			 * Allows user to select the image size option for conversion
			 * @type {Adobe.Indesign.ImageSizeOption}
			 */
			public customImageSizeOption: Adobe.Indesign.ImageSizeOption;
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
			 * The export order.
			 * @type {Adobe.Indesign.ExportOrder}
			 */
			public exportOrder: Adobe.Indesign.ExportOrder;
			/**
			 * If true and have selection, export selected content to HTML.
			 * @type {boolean}
			 */
			public exportSelection: boolean;
			/**
			 * The file path of external cascading style sheets.
			 * @type {any}
			 */
			public externalStyleSheets: any;
			/**
			 * If true, generates interlaced GIFs. Note: Not valid  when 
			 * image conversion is JPEG.
			 * @type {boolean}
			 */
			public gifOptionsInterlaced: boolean;
			/**
			 * The color palette for GIF conversion. Note: Not valid when 
			 * image conversion is JPEG.
			 * @type {Adobe.Indesign.GIFOptionsPalette}
			 */
			public gifOptionsPalette: Adobe.Indesign.GIFOptionsPalette;
			/**
			 * ignore object level image conversion settings.
			 * @type {boolean}
			 */
			public ignoreObjectConversionSettings: boolean;
			/**
			 * Alignment applied to images
			 * @type {Adobe.Indesign.ImageAlignmentType}
			 */
			public imageAlignment: Adobe.Indesign.ImageAlignmentType;
			/**
			 * The file format to use for converted images. Note: Valid 
			 * only when copy optimized images and/or copy formatted images 
			 * is true.
			 * @type {Adobe.Indesign.ImageConversion}
			 */
			public imageConversion: Adobe.Indesign.ImageConversion;
			/**
			 * The export order.
			 * @type {Adobe.Indesign.ImageExportOption}
			 */
			public imageExportOption: Adobe.Indesign.ImageExportOption;
			/**
			 * The export resolution
			 * @type {Adobe.Indesign.ImageResolution}
			 */
			public imageExportResolution: Adobe.Indesign.ImageResolution;
			/**
			 * The image extension on server.
			 * @type {string}
			 */
			public imageExtension: string;
			/**
			 * Space After applied to images
			 * @type {number}
			 */
			public imageSpaceAfter: number;
			/**
			 * Space Before applied to images
			 * @type {number}
			 */
			public imageSpaceBefore: number;
			/**
			 * If true, include CSS definition.
			 * @type {boolean}
			 */
			public includeCSSDefinition: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The file path of external javascripts.
			 * @type {any}
			 */
			public javascripts: any;
			/**
			 * The formatting method for converted JPEG images. Note: Not 
			 * valid  when image conversion is GIF.
			 * @type {Adobe.Indesign.JPEGOptionsFormat}
			 */
			public jpegOptionsFormat: Adobe.Indesign.JPEGOptionsFormat;
			/**
			 * The quality of converted JPEG images. Note: Not valid when 
			 * image conversion is GIF.
			 * @type {Adobe.Indesign.JPEGOptionsQuality}
			 */
			public jpegOptionsQuality: Adobe.Indesign.JPEGOptionsQuality;
			/**
			 * The PNG compression level.
			 * @type {number}
			 */
			public level: number;
			/**
			 * The numbered list export option.
			 * @type {Adobe.Indesign.NumberedListExportOption}
			 */
			public numberedListExportOption: Adobe.Indesign.NumberedListExportOption;
			/**
			 * The parent of the HTMLExportPreference (a Document).
			 * @type {any}
			 * @readonly
			 */
			public readonly parent: any;
			/**
			 * If true, format image based on layout appearence.
			 * @type {boolean}
			 */
			public preserveLayoutAppearence: boolean;
			/**
			 * If true, output local style override.
			 * @type {boolean}
			 */
			public preserveLocalOverride: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * The server path for image .
			 * @type {string}
			 */
			public serverPath: string;
			/**
			 * If true, open docuemnt in viewer after export.
			 * @type {boolean}
			 */
			public viewDocumentAfterExport: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerHTMLExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerHTMLExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}