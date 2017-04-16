/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class ObjectExportOption extends Adobe.Indesign.Preference {
			/**
			 * The metadata property to use as source of actual text. Can 
			 * return: Ordered array containing namespacePrefix:String, 
			 * propertyPath:String.
			 * @type {any}
			 */
			public actualMetadataProperty: any;
			/**
			 * The source type of actual text
			 * @type {Adobe.Indesign.SourceType}
			 */
			public actualTextSourceType: Adobe.Indesign.SourceType;
			/**
			 * The metadata property to use as source of alternate text. 
			 * Can return: Ordered array containing namespacePrefix:String, 
			 * propertyPath:String.
			 * @type {any}
			 */
			public altMetadataProperty: any;
			/**
			 * The source type of alternate text
			 * @type {Adobe.Indesign.SourceType}
			 */
			public altTextSourceType: Adobe.Indesign.SourceType;
			/**
			 * The tag type of page item
			 * @type {Adobe.Indesign.TagType}
			 */
			public applyTagType: Adobe.Indesign.TagType;
			/**
			 * The custom actual text entered by the user
			 * @type {string}
			 */
			public customActualText: string;
			/**
			 * The custom alternate text entered by the user
			 * @type {string}
			 */
			public customAltText: string;
			/**
			 * If true, custom image conversion is enabled for object
			 * @type {boolean}
			 */
			public customImageConversion: boolean;
			/**
			 * Allows user to select the image size option for conversion
			 * @type {Adobe.Indesign.ImageSizeOption}
			 */
			public customImageSizeOption: Adobe.Indesign.ImageSizeOption;
			/**
			 * If true, custom layout is enabled for object
			 * @type {boolean}
			 */
			public customLayout: boolean;
			/**
			 * Custom Layout settings to be used for object
			 * @type {Adobe.Indesign.CustomLayoutTypeEnum}
			 */
			public customLayoutType: Adobe.Indesign.CustomLayoutTypeEnum;
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
			 * Alignment applied to images
			 * @type {Adobe.Indesign.ImageAlignmentType}
			 */
			public imageAlignment: Adobe.Indesign.ImageAlignmentType;
			/**
			 * Allows user to select the image format for conversion
			 * @type {Adobe.Indesign.ImageFormat}
			 */
			public imageConversionType: Adobe.Indesign.ImageFormat;
			/**
			 * The export resolution
			 * @type {Adobe.Indesign.ImageResolution}
			 */
			public imageExportResolution: Adobe.Indesign.ImageResolution;
			/**
			 * Image page break settings to be used with objects
			 * @type {Adobe.Indesign.ImagePageBreakType}
			 */
			public imagePageBreak: Adobe.Indesign.ImagePageBreakType;
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
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
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
			 * The parent of the ObjectExportOption (a SplineItem, Polygon, 
			 * GraphicLine, Rectangle, Oval, Group or TextFrame).
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
			 * If true, image page break settings will be used in objects
			 * @type {boolean}
			 */
			public useImagePageBreak: boolean;
			/**
			 * Provides the actual text for the object
			 * @returns {string}
			 */
			public actualText(): string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerObjectExportOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Provides the alternate text for the object
			 * @returns {string}
			 */
			public altText(): string;
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
			public removeEventListenerObjectExportOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}