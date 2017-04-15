/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * The active containment object for the layers and all other 
		 * objects in the script; the basic canvas for the file.
		 */
		class Document extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** The selected channels. */
			public activeChannels: any[];
			/** The history state to use with the history brush. */
			public activeHistoryBrushSource: Adobe.Photoshop.HistoryState;
			/** The current history state for this document. */
			public activeHistoryState: Adobe.Photoshop.HistoryState;
			/** The selected layer. */
			public activeLayer: Adobe.Photoshop.Layer;
			/** The art layers collection in the document. */
			public readonly artLayers: Adobe.Photoshop.ArtLayers;
			/** The background layer for the document. */
			public readonly backgroundLayer: Adobe.Photoshop.ArtLayer;
			/** The number of bits per channel. */
			public bitsPerChannel: Adobe.Photoshop.BitsPerChannelType;
			/** The channels collection in this document. */
			public readonly channels: Adobe.Photoshop.Channels;
			/**
			 * The name of the color profile. Valid only when no value is 
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
			/** The current color samplers associated with the document. */
			public readonly colorSamplers: Adobe.Photoshop.ColorSamplers;
			/** The color component channels for this document. */
			public readonly componentChannels: any[];
			/** The current count items in the document. */
			public readonly countItems: Adobe.Photoshop.CountItems;
			/** The full path name of the document. */
			public readonly fullName: File;
			/** the guides in this document */
			public readonly guides: Adobe.Photoshop.Guides;
			/** The height of the document. */
			public readonly height: string;
			/**
			 * A histogram showing the number of pixels at each color 
			 * intensity level for the composite channel. Valid only when 
			 * 'mode' = RGB, CMYK, or indexed.
			 */
			public readonly histogram: any[];
			/** The history states collection in this document. */
			public readonly historyStates: Adobe.Photoshop.HistoryStates;
			/** Metadata about the document. */
			public readonly info: Adobe.Photoshop.DocumentInfo;
			/** The layer comps collection in this document. */
			public readonly layerComps: Adobe.Photoshop.LayerComps;
			/** The layers collection in the document. */
			public readonly layers: Adobe.Photoshop.Layers;
			/** The layer sets collection in the document. */
			public readonly layerSets: Adobe.Photoshop.LayerSets;
			/** If true, the document is a workgroup document. */
			public readonly managed: boolean;
			/** The measurement scale of the document. */
			public readonly measurementScale: Adobe.Photoshop.MeasurementScale;
			/** The color profile. */
			public readonly mode: Adobe.Photoshop.DocumentMode;
			/** The document name. */
			public readonly name: string;
			/** The path to the document. */
			public readonly path: File;
			/** The path items collection in this document. */
			public readonly pathItems: Adobe.Photoshop.PathItems;
			/**
			 * The (custom) pixel aspect ratio of the document. Range: 
			 * 0.100 to 10.000.
			 */
			public pixelAspectRatio: number;
			/** Document print settings. */
			public readonly printSettings: Adobe.Photoshop.DocumentPrintSettings;
			/** If true, the document is in Quick Mask mode. */
			public quickMaskMode: boolean;
			/** The resolution of the document (in pixels per inch) */
			public readonly resolution: number;
			/** If true, the document been saved since the last change. */
			public readonly saved: boolean;
			/** The selected area of the document. */
			public readonly selection: Adobe.Photoshop.Selection;
			/** The width of the document. */
			public readonly width: string;
			/**
			 * The XMP properties of the document. The Camera RAW settings 
			 * are stored here.
			 */
			public readonly xmpMetadata: Adobe.Photoshop.XmpMetadata;
			/**
			 * Counts the objects in the document.
			 * @param {Adobe.Photoshop.Channel} channel - The channel to 
			 * use for counting.
			 * @param {number} threshold - Threshold to use for counting. 
			 * Range: 0 to 255. ( 0 - 255 )
			 */
			public autoCount(channel: Adobe.Photoshop.Channel, threshold: number): void;
			/**
			 * Changes the mode of the document.
			 * @param {Adobe.Photoshop.ChangeMode} destinationMode - The 
			 * mode to change to.
			 * @param {Adobe.Photoshop.DocumentConversionOptions} options - 
			 * Options for changing the mode.
			 */
			public changeMode(destinationMode: Adobe.Photoshop.ChangeMode, options: Adobe.Photoshop.DocumentConversionOptions): void;
			/**
			 * Closes the document.
			 * @param {Adobe.Photoshop.SaveOptions} saving - Specifies 
			 * whether changes should be saved before closing. ( default: 
			 * SaveOptions.PROMPTTOSAVECHANGES )
			 */
			public close(saving: Adobe.Photoshop.SaveOptions): void;
			/**
			 * Converts the document from using one color profile to using 
			 * another.
			 * @param {string} destinationProfile - The color profile to 
			 * convert to. Either a string specifying a color profile, one 
			 * of the working color spaces, or Lab color.
			 * @param {Adobe.Photoshop.Intent} intent - The conversion 
			 * intent.
			 * @param {boolean} blackPointCompensation - If true, black 
			 * point compensation is used.
			 * @param {boolean} dither - If true, dither is used. ( 
			 * default: true )
			 */
			public convertProfile(destinationProfile: string, intent: Adobe.Photoshop.Intent, blackPointCompensation: boolean, dither: boolean): void;
			/**
			 * Crops the document.
			 * @param {any[]} bounds - The area to crop.
			 * @param {number} angle - The angle of cropping bounds. ( 
			 * default: 0.0 )
			 * @param {string} width - The width of the resulting document.
			 * @param {string} height - The height of the resulting 
			 * document.
			 */
			public crop(bounds: any[], angle: number, width: string, height: string): void;
			/**
			 * Duplicate this object.
			 * @param {string} name - The name of the new document.
			 * @param {boolean} mergeLayersOnly - If ture, duplicates 
			 * merged layers only.
			 */
			public duplicate(name: string, mergeLayersOnly: boolean): Adobe.Photoshop.Document;
			/**
			 * Exports the document.
			 * @param {Adobe.Flash.Filesystem.File} exportIn - The file to 
			 * export to.
			 * @param {Adobe.Photoshop.ExportType} exportAs - The type of 
			 * export. ( default: ExportType.ILLUSTRATORPATHS )
			 * @param {Adobe.Photoshop.ExportOptions} options - Options for 
			 * the specified export type.
			 */
			public exportDocument(exportIn: Adobe.Flash.Filesystem.File, exportAs: Adobe.Photoshop.ExportType, options: Adobe.Photoshop.ExportOptions): void;
			/** Flattens all layers. */
			public flatten(): void;
			/**
			 * Flips the canvas horizontally or vertically.
			 * @param {Adobe.Photoshop.Direction} direction - The direction 
			 * in which to flip the canvas.
			 */
			public flipCanvas(direction: Adobe.Photoshop.Direction): void;
			/**
			 * Imports annotations into the document.
			 * @param {Adobe.Flash.Filesystem.File} file - The document to 
			 * import annotations from.
			 */
			public importAnnotations(file: Adobe.Flash.Filesystem.File): void;
			/** Flattens all visible layers in the document. */
			public mergeVisibleLayers(): void;
			/**
			 * Pastes contents of the clipboard into the document.
			 * @param {boolean} intoSelection - If true, contents are 
			 * pasted into the current selection. ( default: false )
			 */
			public paste(intoSelection: boolean): Adobe.Photoshop.ArtLayer;
			/**
			 * Prints the document.
			 * @param {Adobe.Photoshop.SourceSpaceType} sourceSpace - The 
			 * color space for the source. ( default: 
			 * SourceSpaceType.DOCUMENT )
			 * @param {string} printSpace - The color space for the 
			 * printer. Can be "nothing" (meaning same as source); one of 
			 * the working spaces or Lab color; or a string specifying a 
			 * color space. Default: nothing.
			 * @param {Adobe.Photoshop.Intent} intent - The color 
			 * conversion intent. ( default: Intent.RELATIVECOLORIMETRIC )
			 * @param {boolean} blackPointCompensation - If true, black 
			 * point compensation is used. ( default: true )
			 */
			public print(sourceSpace: Adobe.Photoshop.SourceSpaceType, printSpace: string, intent: Adobe.Photoshop.Intent, blackPointCompensation: boolean): void;
			/** Print one copy of the document. */
			public printOneCopy(): void;
			/** Rasterizes all layers. */
			public rasterizeAllLayers(): void;
			/**
			 * Records the measurements of document.
			 * @param {Adobe.Photoshop.MeasurementSource} source - The 
			 * source of the measurements to record.
			 * @param {any} dataPoints - An array of identifiers of data 
			 * points to record. Any data points not appropriate for the 
			 * specified source are ignored.
			 */
			public recordMeasurements(source: Adobe.Photoshop.MeasurementSource, dataPoints: any): void;
			/**
			 * Changes the size of the canvas.
			 * @param {string} width - The desired width of the canvas.
			 * @param {string} height - The desired height of the canvas.
			 * @param {Adobe.Photoshop.AnchorPosition} anchor - The anchor 
			 * point to resize around. ( default: 
			 * AnchorPosition.MIDDLECENTER )
			 */
			public resizeCanvas(width: string, height: string, anchor: Adobe.Photoshop.AnchorPosition): void;
			/**
			 * Changes the size of the image.
			 * @param {string} width - The desired width of the image.
			 * @param {string} height - The desired height of the image.
			 * @param {number} resolution - The resolution (in pixels per 
			 * inch)
			 * @param {Adobe.Photoshop.ResampleMethod} resampleMethod - The 
			 * downsample method. ( default: ResampleMethod.BICUBIC )
			 */
			public resizeImage(width: string, height: string, resolution: number, resampleMethod: Adobe.Photoshop.ResampleMethod): void;
			/** Expands the document to show clipped sections. */
			public revealAll(): void;
			/**
			 * Rotates the canvas.
			 * @param {number} angle - The number of degrees to rotate. A 
			 * positive angle rotates the canvas clockwise; a negative 
			 * value rotates the canvas counter-clockwise.
			 */
			public rotateCanvas(angle: number): void;
			/** Saves the document. */
			public save(): void;
			/**
			 * Saves the document with the specified save options.
			 * @param {Adobe.Flash.Filesystem.File} saveIn - The file to 
			 * save to, specified as a string containing the full file path 
			 * or an alias. If not specified, the document is saved to its 
			 * existing file.
			 * @param {any} options - Options for the specified file type.
			 * @param {boolean} asCopy - Saves the document as a copy, 
			 * leaving the original open.
			 * @param {Adobe.Photoshop.Extension} extensionType - Appends 
			 * the specified extension to the file name.
			 */
			public saveAs(saveIn: Adobe.Flash.Filesystem.File, options: any, asCopy: boolean, extensionType: Adobe.Photoshop.Extension): void;
			/** Splits the channels of the document. */
			public splitChannels(): any;
			/**
			 * Provides a single history state for the entire script. 
			 * Allows a single undo for all actions taken in the script.
			 * @param {string} historyString - The string to use for the 
			 * history state.
			 * @param {string} javaScriptString - A string of JavaScript 
			 * code to execute during the suspension of history.
			 */
			public suspendHistory(historyString: string, javaScriptString: string): void;
			/**
			 * Applies trapping to a CMYK document. Valid only when 'mode' 
			 * = CMYK.
			 * @param {number} width - The trap width in pixels.
			 */
			public trap(width: number): void;
			/**
			 * Trims the transparent area around the image on the specified 
			 * sides of the canvas.
			 * @param {Adobe.Photoshop.TrimType} _type - The color or type 
			 * of pixels to base the trim on. ( default: TrimType.TOPLEFT )
			 * @param {boolean} top - If true, trims away the top of the 
			 * document. ( default: true )
			 * @param {boolean} left - If true, trims away the left of the 
			 * document. ( default: true )
			 * @param {boolean} bottom - If true, trims away the bottom of 
			 * the document. ( default: true )
			 * @param {boolean} right - If true, trims away the right of 
			 * the document. ( default: true )
			 */
			public trim(_type: Adobe.Photoshop.TrimType, top: boolean, left: boolean, bottom: boolean, right: boolean): void;
		}
	}
}