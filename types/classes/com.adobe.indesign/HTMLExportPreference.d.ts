/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class HTMLExportPreference extends Adobe.Indesign.Preference {
			/** apply image alignment to anchored object settings. */
			public applyImageAlignmentToAnchoredObjectSettings: boolean;
			/** The bullet export option. */
			public bulletExportOption: Adobe.Indesign.BulletListExportOption;
			/** The cascading style sheet export option. */
			public cssExportOption: Adobe.Indesign.StyleSheetExportOption;
			/** Allows user to select the image size option for conversion */
			public customImageSizeOption: Adobe.Indesign.ImageSizeOption;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The export order. */
			public exportOrder: Adobe.Indesign.ExportOrder;
			/**
			 * If true and have selection, export selected content to HTML.
			 */
			public exportSelection: boolean;
			/** The file path of external cascading style sheets. */
			public externalStyleSheets: any;
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
			/** ignore object level image conversion settings. */
			public ignoreObjectConversionSettings: boolean;
			/** Alignment applied to images */
			public imageAlignment: Adobe.Indesign.ImageAlignmentType;
			/**
			 * The file format to use for converted images. Note: Valid 
			 * only when copy optimized images and/or copy formatted images 
			 * is true.
			 */
			public imageConversion: Adobe.Indesign.ImageConversion;
			/** The export order. */
			public imageExportOption: Adobe.Indesign.ImageExportOption;
			/** The export resolution */
			public imageExportResolution: Adobe.Indesign.ImageResolution;
			/** The image extension on server. */
			public imageExtension: string;
			/** Space After applied to images */
			public imageSpaceAfter: number;
			/** Space Before applied to images */
			public imageSpaceBefore: number;
			/** If true, include CSS definition. */
			public includeCSSDefinition: boolean;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The file path of external javascripts. */
			public javascripts: any;
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
			/** The PNG compression level. */
			public level: number;
			/** The numbered list export option. */
			public numberedListExportOption: Adobe.Indesign.NumberedListExportOption;
			/** The parent of the HTMLExportPreference (a Document). */
			public readonly parent: any;
			/** If true, format image based on layout appearence. */
			public preserveLayoutAppearence: boolean;
			/** If true, output local style override. */
			public preserveLocalOverride: boolean;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The server path for image . */
			public serverPath: string;
			/** If true, open docuemnt in viewer after export. */
			public viewDocumentAfterExport: boolean;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerHTMLExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerHTMLExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}