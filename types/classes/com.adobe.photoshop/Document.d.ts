/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A document */
		class Document extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * selected channels for document
			 * @type {any[]}
			 */
			public activeChannels: any[];
			/**
			 * the current history state to use with the history brush for 
			 * this document
			 * @type {Adobe.Photoshop.HistoryState}
			 */
			public activeHistoryBrushSource: Adobe.Photoshop.HistoryState;
			/**
			 * the current history state for this document
			 * @type {Adobe.Photoshop.HistoryState}
			 */
			public activeHistoryState: Adobe.Photoshop.HistoryState;
			/**
			 * selected layer for document
			 * @type {Adobe.Photoshop.Layer}
			 */
			public activeLayer: Adobe.Photoshop.Layer;
			/**
			 * the top level art layers in this document
			 * @type {Adobe.Photoshop.ArtLayers}
			 * @readonly
			 */
			public readonly artLayers: Adobe.Photoshop.ArtLayers;
			/**
			 * The background layer for the document. Only valid for 
			 * documents that have a background layer
			 * @type {Adobe.Photoshop.ArtLayer}
			 * @readonly
			 */
			public readonly backgroundLayer: Adobe.Photoshop.ArtLayer;
			/**
			 * number of bits per channel
			 * @type {Adobe.Photoshop.BitsPerChannelType}
			 */
			public bitsPerChannel: Adobe.Photoshop.BitsPerChannelType;
			/**
			 * the channels in this document
			 * @type {Adobe.Photoshop.Channels}
			 * @readonly
			 */
			public readonly channels: Adobe.Photoshop.Channels;
			/**
			 * Name of color profile for document. Valid when no value is 
			 * specified for color profile kind (to indicate a custom color 
			 * profile).
			 * @type {string}
			 */
			public colorProfileName: string;
			/**
			 * Type of color profile management for document.  Note: If you 
			 * want to set a custom color profile, do not set a value for 
			 * color profile kind; rather, set the appropriate color 
			 * profile name.
			 * @type {Adobe.Photoshop.ColorProfile}
			 */
			public colorProfileType: Adobe.Photoshop.ColorProfile;
			/**
			 * the current color samplers associated with this document
			 * @type {Adobe.Photoshop.ColorSamplers}
			 * @readonly
			 */
			public readonly colorSamplers: Adobe.Photoshop.ColorSamplers;
			/**
			 * all color component channels for this document
			 * @type {any[]}
			 * @readonly
			 */
			public readonly componentChannels: any[];
			/**
			 * the current count items
			 * @type {Adobe.Photoshop.CountItems}
			 * @readonly
			 */
			public readonly countItems: Adobe.Photoshop.CountItems;
			/**
			 * full path name of document
			 * @type {File}
			 * @readonly
			 */
			public readonly fullName: File;
			/**
			 * the guides in this document
			 * @type {Adobe.Photoshop.Guides}
			 * @readonly
			 */
			public readonly guides: Adobe.Photoshop.Guides;
			/**
			 * height of document (unit value)
			 * @type {any}
			 * @readonly
			 */
			public readonly height: any;
			/**
			 * a histogram of values for the composite document (only for 
			 * RGB, CMYK and 'Indexed colors' documents)
			 * @type {any[]}
			 * @readonly
			 */
			public readonly histogram: any[];
			/**
			 * the history states associated with this document
			 * @type {Adobe.Photoshop.HistoryStates}
			 * @readonly
			 */
			public readonly historyStates: Adobe.Photoshop.HistoryStates;
			/**
			 * the unique ID of this document
			 * @type {number}
			 * @readonly
			 */
			public readonly id: number;
			/**
			 * document information
			 * @type {Adobe.Photoshop.DocumentInfo}
			 * @readonly
			 */
			public readonly info: Adobe.Photoshop.DocumentInfo;
			/**
			 * the layer comps associated with this document
			 * @type {Adobe.Photoshop.LayerComps}
			 * @readonly
			 */
			public readonly layerComps: Adobe.Photoshop.LayerComps;
			/**
			 * the top level layers in this document
			 * @type {Adobe.Photoshop.Layers}
			 * @readonly
			 */
			public readonly layers: Adobe.Photoshop.Layers;
			/**
			 * the top level layer sets in this document
			 * @type {Adobe.Photoshop.LayerSets}
			 * @readonly
			 */
			public readonly layerSets: Adobe.Photoshop.LayerSets;
			/**
			 * is the document a workgroup document?
			 * @type {boolean}
			 * @readonly
			 */
			public readonly managed: boolean;
			/**
			 * The measurement scale of the document
			 * @type {Adobe.Photoshop.MeasurementScale}
			 * @readonly
			 */
			public readonly measurementScale: Adobe.Photoshop.MeasurementScale;
			/**
			 * document mode
			 * @type {Adobe.Photoshop.DocumentMode}
			 * @readonly
			 */
			public readonly mode: Adobe.Photoshop.DocumentMode;
			/**
			 * the document's name
			 * @type {string}
			 * @readonly
			 */
			public readonly name: string;
			/**
			 * the path of the document
			 * @type {File}
			 * @readonly
			 */
			public readonly path: File;
			/**
			 * the art paths associated with this document
			 * @type {Adobe.Photoshop.PathItems}
			 * @readonly
			 */
			public readonly pathItems: Adobe.Photoshop.PathItems;
			/**
			 * the pixel aspect ration of the document
			 * @type {number}
			 */
			public pixelAspectRatio: number;
			/**
			 * document print settings
			 * @type {Adobe.Photoshop.DocumentPrintSettings}
			 * @readonly
			 */
			public readonly printSettings: Adobe.Photoshop.DocumentPrintSettings;
			/**
			 * is the document in the quick mask mode?
			 * @type {boolean}
			 */
			public quickMaskMode: boolean;
			/**
			 * the resolution of the document (in pixels per inch)
			 * @type {number}
			 * @readonly
			 */
			public readonly resolution: number;
			/**
			 * has the document been saved since last change?
			 * @type {boolean}
			 * @readonly
			 */
			public readonly saved: boolean;
			/**
			 * the document's selection
			 * @type {Adobe.Photoshop.Selection}
			 * @readonly
			 */
			public readonly selection: Adobe.Photoshop.Selection;
			/**
			 * width of document (unit value)
			 * @type {any}
			 * @readonly
			 */
			public readonly width: any;
			/**
			 * XMP metadata associated with the document
			 * @type {Adobe.Photoshop.XmpMetadata}
			 * @readonly
			 */
			public readonly xmpMetadata: Adobe.Photoshop.XmpMetadata;
			/**
			 * automatically counts the objects in an image
			 * @param {Adobe.Photoshop.Channel} channel channel to use for 
			 * counting
			 * @param {number} threshold threshold to use for counting 
			 * (range: 0-255) ( 0 - 255 )
			 * @returns {void}
			 */
			public autoCount(channel: Adobe.Photoshop.Channel, threshold: number): void;
			/**
			 * change the mode of the document
			 * @param {Adobe.Photoshop.ChangeMode} destinationMode name of 
			 * mode to change to
			 * @param {Adobe.Photoshop.DocumentConversionOptions} options 
			 * options for changing the mode
			 * @returns {void}
			 */
			public changeMode(destinationMode: Adobe.Photoshop.ChangeMode, options: Adobe.Photoshop.DocumentConversionOptions): void;
			/**
			 * close the document
			 * @param {Adobe.Photoshop.SaveOptions} saving specifies 
			 * whether changes should be saved before closing ( default: 
			 * SaveOptions.PROMPTTOSAVECHANGES )
			 * @returns {void}
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
			 * @returns {void}
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
			 * @returns {void}
			 */
			public crop(bounds: any[], angle: number, width: any, height: any): void;
			/**
			 * duplicate this document with parameters
			 * @param {string} name name for the new document
			 * @param {boolean} mergeLayersOnly duplicate merged layers 
			 * only
			 * @returns {Adobe.Photoshop.Document}
			 */
			public duplicate(name: string, mergeLayersOnly: boolean): Adobe.Photoshop.Document;
			/**
			 * @param {File} exportIn the file to export to
			 * @param {Adobe.Photoshop.ExportType} exportAs the type of 
			 * export ( default: ExportType.ILLUSTRATORPATHS )
			 * @param {Adobe.Photoshop.ExportOptions} options options for 
			 * the export type specified
			 * @returns {void}
			 */
			public exportDocument(exportIn: File, exportAs: Adobe.Photoshop.ExportType, options: Adobe.Photoshop.ExportOptions): void;
			/**
			 * Flattens all visible layers in the document.
			 * @returns {void}
			 */
			public flatten(): void;
			/**
			 * flip the canvas horizontally or vertically
			 * @param {Adobe.Photoshop.Direction} direction which way to 
			 * flip the canvas
			 * @returns {void}
			 */
			public flipCanvas(direction: Adobe.Photoshop.Direction): void;
			/**
			 * import annotations into the document
			 * @param {File} file document to import annotations from
			 * @returns {void}
			 */
			public importAnnotations(file: File): void;
			/**
			 * flatten all visible layers in the document
			 * @returns {void}
			 */
			public mergeVisibleLayers(): void;
			/**
			 * paste contents of clipboard into the document
			 * @param {boolean} intoSelection should contents be pasted 
			 * into the current selection? ( default: false )
			 * @returns {Adobe.Photoshop.ArtLayer}
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
			 * @returns {void}
			 */
			public print(sourceSpace: Adobe.Photoshop.SourceSpaceType, printSpace: string, intent: Adobe.Photoshop.Intent, blackPointCompensation: boolean): void;
			/**
			 * print one copy of the document
			 * @returns {void}
			 */
			public printOneCopy(): void;
			/**
			 * rasterize all layers
			 * @returns {void}
			 */
			public rasterizeAllLayers(): void;
			/**
			 * record measurements of document
			 * @param {Adobe.Photoshop.MeasurementSource} source source of 
			 * the measurements to record
			 * @param {any[]} dataPoints array of identifiers of data 
			 * points to record.  Any data points not appropriate for the 
			 * specified source will be ignored
			 * @returns {void}
			 */
			public recordMeasurements(source: Adobe.Photoshop.MeasurementSource, dataPoints: any[]): void;
			/**
			 * change the size of the canvas
			 * @param {any} width desired width of canvas (unit value)
			 * @param {any} height desired height of canvas (unit value)
			 * @param {Adobe.Photoshop.AnchorPosition} anchor anchor to 
			 * resize around ( default: AnchorPosition.MIDDLECENTER )
			 * @returns {void}
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
			 * @returns {void}
			 */
			public resizeImage(width: any, height: any, resolution: number, resampleMethod: Adobe.Photoshop.ResampleMethod): void;
			/**
			 * expand document to show clipped sections
			 * @returns {void}
			 */
			public revealAll(): void;
			/**
			 * rotate canvas of document
			 * @param {number} angle number of degrees to rotate. A 
			 * positive angle will rotate the canvas clockwise; a negative 
			 * value will rotate the canvas counter-clockwise
			 * @returns {void}
			 */
			public rotateCanvas(angle: number): void;
			/**
			 * save the document
			 * @returns {void}
			 */
			public save(): void;
			/**
			 * save the document with specific save options
			 * @param {File} saveIn the file to save the document in
			 * @param {any} options either a 'SaveDocumentType' value or a 
			 * save options object
			 * @param {boolean} asCopy save as copy leaving original open
			 * @param {Adobe.Photoshop.Extension} extensionType append an 
			 * extension to the document name
			 * @returns {void}
			 */
			public saveAs(saveIn: File, options: any, asCopy: boolean, extensionType: Adobe.Photoshop.Extension): void;
			/**
			 * split channels of the document
			 * @returns {any[]}
			 */
			public splitChannels(): any[];
			/**
			 * Combine multiple history states into one
			 * @param {string} historyString String to use for the history 
			 * state
			 * @param {string} javaScriptString JavaScriptString to execute 
			 * during the suspension of history
			 * @returns {void}
			 */
			public suspendHistory(historyString: string, javaScriptString: string): void;
			/**
			 * apply trap to a CMYK document
			 * @param {number} width trap width in pixels
			 * @returns {void}
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
			 * @returns {void}
			 */
			public trim(_type: Adobe.Photoshop.TrimType, top: boolean, left: boolean, bottom: boolean, right: boolean): void;
		}
	}
}