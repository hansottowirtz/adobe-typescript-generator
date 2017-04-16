/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class EPubExportPreference extends Adobe.Indesign.Preference {
			/** apply image alignment to anchored object settings. */
			public applyImageAlignmentToAnchoredObjectSettings: boolean;
			/** Bottom margin of the epub. */
			public bottomMargin: number;
			/**
			 * If  true, break InDesign document into smaller piece when 
			 * generating epub.
			 */
			public breakDocument: boolean;
			/** The bullet export option. */
			public bulletExportOption: Adobe.Indesign.BulletListExportOption;
			/** The epub cover image file path. */
			public coverImageFile: string;
			/** Allows user to select the image size option for conversion */
			public customImageSizeOption: Adobe.Indesign.ImageSizeOption;
			/** If true, embed font in epub. */
			public embedFont: boolean;
			/** The epub cover option. */
			public epubCover: Adobe.Indesign.EpubCover;
			/** The epub publisher. */
			public epubPublisher: string;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The export order. */
			public exportOrder: Adobe.Indesign.ExportOrder;
			/** The file path of external cascading style sheets. */
			public externalStyleSheets: any;
			/** If  true, output footnote immediately after its paragraph. */
			public footnoteFollowParagraph: boolean;
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
			/** The epub unique identifier, like ISBN. */
			public id: string;
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
			/** The export resolution */
			public imageExportResolution: Adobe.Indesign.ImageResolution;
			/** Image page break settings to be used with objects */
			public imagePageBreak: Adobe.Indesign.ImagePageBreakType;
			/** Space After applied to images */
			public imageSpaceAfter: number;
			/** Space Before applied to images */
			public imageSpaceBefore: number;
			/** If true, include CSS definition. */
			public includeCSSDefinition: boolean;
			/** If true, output document metadata into epub. */
			public includeDocumentMetadata: boolean;
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
			/** Left margin of the epub. */
			public leftMargin: number;
			/** The PNG compression level. */
			public level: number;
			/** The numbered list export option. */
			public numberedListExportOption: Adobe.Indesign.NumberedListExportOption;
			/** The name of paragraph style to break InDesign document. */
			public paragraphStyleName: string;
			/**
			 * The parent of the EPubExportPreference (a Book or Document).
			 */
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
			/** Right margin of the epub. */
			public rightMargin: number;
			/** If  true, strip soft return. */
			public stripSoftReturn: boolean;
			/** The name of TOC style to generate epub TOC. */
			public tocStyleName: string;
			/** Top margin of the epub. */
			public topMargin: number;
			/** If true, image page break settings will be used in objects */
			public useImagePageBreak: boolean;
			/** The version of EPUB. */
			public version: Adobe.Indesign.EpubVersion;
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
			public addEventListenerEPubExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
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
			public removeEventListenerEPubExportPreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}