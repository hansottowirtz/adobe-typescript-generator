/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A document */
		class Document extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** selected channels for document */
			public activeChannels: any[];
			/**
			 * the current history state to use with the history brush for 
			 * this document
			 */
			public activeHistoryBrushSource: Adobe.Photoshop.HistoryState;
			/** the current history state for this document */
			public activeHistoryState: Adobe.Photoshop.HistoryState;
			/** selected layer for document */
			public activeLayer: Adobe.Photoshop.Layer;
			/** the top level art layers in this document */
			public readonly artLayers: Adobe.Photoshop.ArtLayers;
			/**
			 * The background layer for the document. Only valid for 
			 * documents that have a background layer
			 */
			public readonly backgroundLayer: Adobe.Photoshop.ArtLayer;
			/** number of bits per channel */
			public bitsPerChannel: Adobe.Photoshop.BitsPerChannelType;
			/** the channels in this document */
			public readonly channels: Adobe.Photoshop.Channels;
			/**
			 * Name of color profile for document. Valid when no value is 
			 * specified for color profile kind (to indicate a custom color 
			 * profile).
			 */
			public colorProfileName: string;
			/**
			 * Type of color profile management for document.  Note: If you 
			 * want to set a custom color profile, do not set a value for 
			 * color profile kind; rather, set the appropriate color 
			 * profile name.
			 */
			public colorProfileType: Adobe.Photoshop.ColorProfile;
			/** the current color samplers associated with this document */
			public readonly colorSamplers: Adobe.Photoshop.ColorSamplers;
			/** all color component channels for this document */
			public readonly componentChannels: any[];
			/** the current count items */
			public readonly countItems: Adobe.Photoshop.CountItems;
			/** full path name of document */
			public readonly fullName: File;
			/** the guides in this document */
			public readonly guides: Adobe.Photoshop.Guides;
			/** height of document (unit value) */
			public readonly height: any;
			/**
			 * a histogram of values for the composite document (only for 
			 * RGB, CMYK and 'Indexed colors' documents)
			 */
			public readonly histogram: any[];
			/** the history states associated with this document */
			public readonly historyStates: Adobe.Photoshop.HistoryStates;
			/** the unique ID of this document */
			public readonly id: number;
			/** document information */
			public readonly info: Adobe.Photoshop.DocumentInfo;
			/** the layer comps associated with this document */
			public readonly layerComps: Adobe.Photoshop.LayerComps;
			/** the top level layers in this document */
			public readonly layers: Adobe.Photoshop.Layers;
			/** the top level layer sets in this document */
			public readonly layerSets: Adobe.Photoshop.LayerSets;
			/** is the document a workgroup document? */
			public readonly managed: boolean;
			/** The measurement scale of the document */
			public readonly measurementScale: Adobe.Photoshop.MeasurementScale;
			/** document mode */
			public readonly mode: Adobe.Photoshop.DocumentMode;
			/** the document's name */
			public readonly name: string;
			/** the path of the document */
			public readonly path: File;
			/** the art paths associated with this document */
			public readonly pathItems: Adobe.Photoshop.PathItems;
			/** the pixel aspect ration of the document */
			public pixelAspectRatio: number;
			/** document print settings */
			public readonly printSettings: Adobe.Photoshop.DocumentPrintSettings;
			/** is the document in the quick mask mode? */
			public quickMaskMode: boolean;
			/** the resolution of the document (in pixels per inch) */
			public readonly resolution: number;
			/** has the document been saved since last change? */
			public readonly saved: boolean;
			/** the document's selection */
			public readonly selection: Adobe.Photoshop.Selection;
			/** width of document (unit value) */
			public readonly width: any;
			/** XMP metadata associated with the document */
			public readonly xmpMetadata: Adobe.Photoshop.XmpMetadata;
			/**
			 * automatically counts the objects in an image
			 * @param {Adobe.Photoshop.Channel} channel channel to use for 
			 * counting
			 * @param {number} threshold threshold to use for counting 
			 * (range: 0-255) ( 0 - 255 )
			 */
			public autoCount(channel: Adobe.Photoshop.Channel, threshold: number): void;
			/**
			 * change the mode of the document
			 * @param {Adobe.Photoshop.ChangeMode} destinationMode name of 
			 * mode to change to
			 * @param {Adobe.Photoshop.DocumentConversionOptions} options 
			 * options for changing the mode
			 */
			public changeMode(destinationMode: Adobe.Photoshop.ChangeMode, options: Adobe.Photoshop.DocumentConversionOptions): void;
			/**
			 * close the document
			 * @param {Adobe.Photoshop.SaveOptions} saving specifies 
			 * whether changes should be saved before closing ( default: 
			 * SaveOptions.PROMPTTOSAVECHANGES )
			 */
			public close(saving: Adobe.Photoshop.SaveOptions): void;
			/**
			 * convert the document from using one color profile to using 
			 * an other
			 * @param {string} destinationProfile name of color profile to 
			 * convert to. Either a string specifying a specific color 
			 * profile or 'Working RGB', 'Working CMYK', 'Working Gray', 
			 * 'Lab Color' meaning one of the working color spaces or Lab 
			 * color
			 * @param {Adobe.Photoshop.Intent} intent conversion intent
			 * @param {boolean} blackPointCompensation use black point 
			 * compensation?
			 * @param {boolean} dither use dither? ( default: true )
			 */
			public convertProfile(destinationProfile: string, intent: Adobe.Photoshop.Intent, blackPointCompensation: boolean, dither: boolean): void;
			/**
			 * crop the document
			 * @param {any[]} bounds area to crop (unit value)
			 * @param {number} angle angle of cropping bounds ( default: 
			 * 0.0 )
			 * @param {any} width width of resulting document (unit value)
			 * @param {any} height height of resulting document (unit 
			 * value)
			 */
			public crop(bounds: any[], angle: number, width: any, height: any): void;
			/**
			 * duplicate this document with parameters
			 * @param {string} name name for the new document
			 * @param {boolean} mergeLayersOnly duplicate merged layers 
			 * only
			 */
			public duplicate(name: string, mergeLayersOnly: boolean): Adobe.Photoshop.Document;
			/**
			 * @param {File} exportIn the file to export to
			 * @param {Adobe.Photoshop.ExportType} exportAs the type of 
			 * export ( default: ExportType.ILLUSTRATORPATHS )
			 * @param {Adobe.Photoshop.ExportOptions} options options for 
			 * the export type specified
			 */
			public exportDocument(exportIn: File, exportAs: Adobe.Photoshop.ExportType, options: Adobe.Photoshop.ExportOptions): void;
			/** Flattens all visible layers in the document. */
			public flatten(): void;
			/**
			 * flip the canvas horizontally or vertically
			 * @param {Adobe.Photoshop.Direction} direction which way to 
			 * flip the canvas
			 */
			public flipCanvas(direction: Adobe.Photoshop.Direction): void;
			/**
			 * import annotations into the document
			 * @param {File} file document to import annotations from
			 */
			public importAnnotations(file: File): void;
			/** flatten all visible layers in the document */
			public mergeVisibleLayers(): void;
			/**
			 * paste contents of clipboard into the document
			 * @param {boolean} intoSelection should contents be pasted 
			 * into the current selection? ( default: false )
			 */
			public paste(intoSelection: boolean): Adobe.Photoshop.ArtLayer;
			/**
			 * print the document
			 * @param {Adobe.Photoshop.SourceSpaceType} sourceSpace color 
			 * space for source ( default: SourceSpaceType.DOCUMENT )
			 * @param {string} printSpace color space for printer. Can be 
			 * nothing (meaning same as source) or a string specifying a 
			 * specific color profile
			 * @param {Adobe.Photoshop.Intent} intent if the print space is 
			 * different from the source space, this argument will be used 
			 * as the color conversion intent ( default: 
			 * Intent.RELATIVECOLORIMETRIC )
			 * @param {boolean} blackPointCompensation if the print space 
			 * is different from the source space, this argument indicates 
			 * if the color conversion should use black point compensation 
			 * ( default: true )
			 */
			public print(sourceSpace: Adobe.Photoshop.SourceSpaceType, printSpace: string, intent: Adobe.Photoshop.Intent, blackPointCompensation: boolean): void;
			/** print one copy of the document */
			public printOneCopy(): void;
			/** rasterize all layers */
			public rasterizeAllLayers(): void;
			/**
			 * record measurements of document
			 * @param {Adobe.Photoshop.MeasurementSource} source source of 
			 * the measurements to record
			 * @param {any[]} dataPoints array of identifiers of data 
			 * points to record.  Any data points not appropriate for the 
			 * specified source will be ignored
			 */
			public recordMeasurements(source: Adobe.Photoshop.MeasurementSource, dataPoints: any[]): void;
			/**
			 * change the size of the canvas
			 * @param {any} width desired width of canvas (unit value)
			 * @param {any} height desired height of canvas (unit value)
			 * @param {Adobe.Photoshop.AnchorPosition} anchor anchor to 
			 * resize around ( default: AnchorPosition.MIDDLECENTER )
			 */
			public resizeCanvas(width: any, height: any, anchor: Adobe.Photoshop.AnchorPosition): void;
			/**
			 * change the size of the image
			 * @param {any} width desired width of image (unit value)
			 * @param {any} height desired height of image (unit value)
			 * @param {number} resolution (in pixels per inch)
			 * @param {Adobe.Photoshop.ResampleMethod} resampleMethod what 
			 * method should be used for resampling pixels ( default: 
			 * ResampleMethod.BICUBIC )
			 */
			public resizeImage(width: any, height: any, resolution: number, resampleMethod: Adobe.Photoshop.ResampleMethod): void;
			/** expand document to show clipped sections */
			public revealAll(): void;
			/**
			 * rotate canvas of document
			 * @param {number} angle number of degrees to rotate. A 
			 * positive angle will rotate the canvas clockwise; a negative 
			 * value will rotate the canvas counter-clockwise
			 */
			public rotateCanvas(angle: number): void;
			/** save the document */
			public save(): void;
			/**
			 * save the document with specific save options
			 * @param {File} saveIn the file to save the document in
			 * @param {any} options either a 'SaveDocumentType' value or a 
			 * save options object
			 * @param {boolean} asCopy save as copy leaving original open
			 * @param {Adobe.Photoshop.Extension} extensionType append an 
			 * extension to the document name
			 */
			public saveAs(saveIn: File, options: any, asCopy: boolean, extensionType: Adobe.Photoshop.Extension): void;
			/** split channels of the document */
			public splitChannels(): any[];
			/**
			 * Combine multiple history states into one
			 * @param {string} historyString String to use for the history 
			 * state
			 * @param {string} javaScriptString JavaScriptString to execute 
			 * during the suspension of history
			 */
			public suspendHistory(historyString: string, javaScriptString: string): void;
			/**
			 * apply trap to a CMYK document
			 * @param {number} width trap width in pixels
			 */
			public trap(width: number): void;
			/**
			 * @param {Adobe.Photoshop.TrimType} _type color or type of 
			 * pixels to base trim on ( default: TrimType.TOPLEFT )
			 * @param {boolean} top trim away top of document ( default: 
			 * true )
			 * @param {boolean} left trim away left of document ( default: 
			 * true )
			 * @param {boolean} bottom trim away bottom of document ( 
			 * default: true )
			 * @param {boolean} right trim away right of document ( 
			 * default: true )
			 */
			public trim(_type: Adobe.Photoshop.TrimType, top: boolean, left: boolean, bottom: boolean, right: boolean): void;
		}
	}
}