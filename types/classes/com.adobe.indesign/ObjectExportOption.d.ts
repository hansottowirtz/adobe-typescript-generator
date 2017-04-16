/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		/** Preference */
		class ObjectExportOption extends Adobe.Indesign.Preference {
			/**
			 * The metadata property to use as source of actual text. Can 
			 * return: Ordered array containing namespacePrefix:String, 
			 * propertyPath:String.
			 */
			public actualMetadataProperty: any;
			/** The source type of actual text */
			public actualTextSourceType: Adobe.Indesign.SourceType;
			/**
			 * The metadata property to use as source of alternate text. 
			 * Can return: Ordered array containing namespacePrefix:String, 
			 * propertyPath:String.
			 */
			public altMetadataProperty: any;
			/** The source type of alternate text */
			public altTextSourceType: Adobe.Indesign.SourceType;
			/** The tag type of page item */
			public applyTagType: Adobe.Indesign.TagType;
			/** The custom actual text entered by the user */
			public customActualText: string;
			/** The custom alternate text entered by the user */
			public customAltText: string;
			/** If true, custom image conversion is enabled for object */
			public customImageConversion: boolean;
			/** Allows user to select the image size option for conversion */
			public customImageSizeOption: Adobe.Indesign.ImageSizeOption;
			/** If true, custom layout is enabled for object */
			public customLayout: boolean;
			/** Custom Layout settings to be used for object */
			public customLayoutType: Adobe.Indesign.CustomLayoutTypeEnum;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
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
			/** Alignment applied to images */
			public imageAlignment: Adobe.Indesign.ImageAlignmentType;
			/** Allows user to select the image format for conversion */
			public imageConversionType: Adobe.Indesign.ImageFormat;
			/** The export resolution */
			public imageExportResolution: Adobe.Indesign.ImageResolution;
			/** Image page break settings to be used with objects */
			public imagePageBreak: Adobe.Indesign.ImagePageBreakType;
			/** Space After applied to images */
			public imageSpaceAfter: number;
			/** Space Before applied to images */
			public imageSpaceBefore: number;
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
			 * The parent of the ObjectExportOption (a SplineItem, Polygon, 
			 * GraphicLine, Rectangle, Oval, Group or TextFrame).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** If true, image page break settings will be used in objects */
			public useImagePageBreak: boolean;
			/** Provides the actual text for the object */
			public actualText(): string;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerObjectExportOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Provides the alternate text for the object */
			public altText(): string;
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
			public removeEventListenerObjectExportOption(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}