/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PrinterPreset extends Adobe.Csawlib.CSHostObject {
			/**
			 * If true, prints all printer marks. If false, prints 
			 * specified printer marks.
			 */
			public allPrinterMarks: boolean;
			/** If true, uses bitmap printing. */
			public bitmapPrinting: boolean;
			/**
			 * The resolution for bitmap printing. (Range: 72 to 1200) 
			 * Note: Valid when bitmap printing is true.
			 */
			public bitmapResolution: number;
			/** The angle override for black ink. (Range: 0 to 360) */
			public blackAngle: number;
			/** The frequency override for black ink. (Range: 1 to 500) */
			public blackFrequency: number;
			/**
			 * The height of the bleed area at the bottom of the page. 
			 * Note: Valid only when use document bleed to print is true.
			 */
			public bleedBottom: any;
			/**
			 * If true, forces all bleed area settings to be the same, 
			 * using the most recent bleed measurement setting. If false, 
			 * allows bleed top, bleed bottom, bleed inside, and bleed 
			 * outside to have different measurements.
			 */
			public bleedChain: boolean;
			/**
			 * The width of the bleed area at the inside of the page. Note: 
			 * Valid only when use document bleed to print is true.
			 */
			public bleedInside: any;
			/** If true, print bleed marks. */
			public bleedMarks: boolean;
			/**
			 * The width of the bleed area at the outside of the page. 
			 * Note: Valid only when use document bleed to print is true.
			 */
			public bleedOutside: any;
			/**
			 * The height of the bleed area at the top of the page. Note: 
			 * Valid only when use document bleed to print is true.
			 */
			public bleedTop: any;
			/** If true, collate printed copies. */
			public collating: boolean;
			/**
			 * If true, add small squares of color representing the CMYK 
			 * inks and tints of gray in 10% increments.
			 */
			public colorBars: boolean;
			/**
			 * The color output mode for composites. Note: Not valid when a 
			 * device-independent PPD is specified.
			 */
			public colorOutput: Adobe.Indesign.ColorOutputModes;
			/**
			 * The screen angle to use when printing composites. (Range: 0 
			 * to 360) Note: Valid only for PostScript or PDF files that 
			 * use custom screening.
			 */
			public compositeAngle: number;
			/**
			 * The screen frequency to use when printing composites. 
			 * (Range: 1 to 500) Note: Valid only for PostScript or PDF 
			 * files that use custom screening.
			 */
			public compositeFrequency: number;
			/**
			 * The number of copies to print. Note: Not valid when printer 
			 * is PostScript File.
			 */
			public copies: number;
			/**
			 * The color-rendering dictionary (CRD), specified as a CRD 
			 * name or an enumeration value. Note: Valid only when use 
			 * color management is true. Can return: 
			 * ColorRenderingDictionary enumerator or String.
			 */
			public crd: any;
			/**
			 * Prints crop marks that define where the page should be 
			 * trimmed.
			 */
			public cropMarks: boolean;
			/** The angle override for cyan ink. (Range: 0 to 360) */
			public cyanAngle: number;
			/** The frequency override for cyan ink. (Range: 1 to 500) */
			public cyanFrequency: number;
			/** The format in which to send image data to the printer. */
			public dataFormat: Adobe.Indesign.DataFormat;
			/**
			 * If true, downloads all fonts listed in the selected PPD. 
			 * Valid only when font downloading is complete or subset.
			 */
			public downloadPPDFonts: boolean;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Indesign.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Indesign.Events;
			/** The name of the transparency flattener preset. */
			public flattenerPresetName: string;
			/** The direction in which to flip the printed image. */
			public flip: Adobe.Indesign.Flip;
			/** Controls how fonts are downloaded to the printer. */
			public fontDownloading: Adobe.Indesign.FontDownloading;
			/** If true, ignores flattener spread overrides. */
			public ignoreSpreadOverrides: boolean;
			/** If true, includes the slug area in the printed document. */
			public includeSlugToPrint: boolean;
			/**
			 * The index of the PrinterPreset within its containing object.
			 */
			public readonly index: number;
			/**
			 * The rendering intent. Note: Valid only when use color 
			 * management is true.
			 */
			public intent: Adobe.Indesign.RenderingIntent;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/** The angle override for magenta ink. (Range: 0 to 360) */
			public magentaAngle: number;
			/** The frequency override for magenta ink. (Range: 1 to 500) */
			public magentaFrequency: number;
			/** The stroke weight (in points) for printer marks. */
			public markLineWeight: Adobe.Indesign.MarkLineWeight;
			/**
			 * The distance to offset the page marks from the edge of the 
			 * page.
			 */
			public markOffset: any;
			/**
			 * The type of printer marks, either an enum value or the name 
			 * of a custom marks file. Can return: MarkTypes enumerator or 
			 * String.
			 */
			public markType: any;
			/** The name of the PrinterPreset. */
			public name: string;
			/** If true, prints the document as a negative. */
			public negative: boolean;
			/** If true, replaces bitmap images with OPI links. */
			public omitBitmaps: boolean;
			/** If true, replaces EPS images with OPI links. */
			public omitEPS: boolean;
			/** If true, replaces PDF images with OPI links. */
			public omitPDF: boolean;
			/**
			 * If true, prints graphics that are either OPI comments stored 
			 * in imported EPS files or linked using OPI comments. For 
			 * information on linking files using OPI comments, see omit 
			 * EPS, omit PDF, or omit bitmaps.
			 */
			public opiImageReplacement: boolean;
			/**
			 * If true, prints the filename, page number, current date and 
			 * time, and color separation name.
			 */
			public pageInformationMarks: boolean;
			/**
			 * The position of the page on the printing medium. Note: Valid 
			 * only when tile is false.
			 */
			public pagePosition: Adobe.Indesign.PagePositions;
			/** The space between document pages on the printing medium. */
			public paperGap: any;
			/**
			 * The paper height. Note: Valid only when paper size is custom 
			 * or scale mode is scale width height. Can return: PaperSize 
			 * enumerator or Unit.
			 */
			public paperHeight: any;
			/**
			 * The amount of space to offset the page from the left edge of 
			 * the imageable area.
			 */
			public paperOffset: any;
			/**
			 * The paper size, specified as either a string or an 
			 * enumeration. For information on paper size names, see paper 
			 * size list. Can return: PaperSizes enumerator or String.
			 */
			public paperSize: any;
			/** A list of the available paper sizes. */
			public readonly paperSizeList: any;
			/** If true, uses transverse orientation. */
			public paperTransverse: boolean;
			/**
			 * The paper width. Note: Valid only when paper size is custom 
			 * or scale mode is scale width height. Can return: PaperSize 
			 * enumerator or Unit.
			 */
			public paperWidth: any;
			/** The parent of the PrinterPreset (a Application). */
			public readonly parent: Adobe.Indesign.Application;
			/** The PostScript level of the printer. */
			public postscriptLevel: Adobe.Indesign.PostScriptLevels;
			/**
			 * The PPD, specified as a PPD name or an enumeration. Can 
			 * return: PPDValues enumerator or String.
			 */
			public ppd: any;
			/** Available PPDs. */
			public readonly ppdList: any;
			/**
			 * If true, prints the black ink. Note: Valid only when 
			 * trapping is off.
			 */
			public printBlack: boolean;
			/**
			 * If true, prints blank pages. Note: Valid only when trapping 
			 * is off.
			 */
			public printBlankPages: boolean;
			/**
			 * If true, prints the cyan ink. Note: Valid only when trapping 
			 * is off.
			 */
			public printCyan: boolean;
			/**
			 * The current printer. Can return: Printer enumerator or 
			 * String.
			 */
			public printer: any;
			/** Available printers. */
			public readonly printerList: any;
			/**
			 * The PostScript file to print to. Note: Valid only when the 
			 * current printer is defined as postscript file.
			 */
			public printFile: File;
			/**
			 * If true, prints visible guides and baseline grids. Note: 
			 * Valid only when trapping is off.
			 */
			public printGuidesGrids: boolean;
			/** The layers to print. */
			public printLayers: Adobe.Indesign.PrintLayerOptions;
			/**
			 * If true, prints the magenta ink. Note: Valid only when 
			 * trapping is off.
			 */
			public printMagenta: boolean;
			/** If true, prints master pages. */
			public printMasterPages: boolean;
			/**
			 * If true, prints non-printing objects. Note: Valid only when 
			 * trapping is off.
			 */
			public printNonprinting: boolean;
			/** The orientation of the printed page. */
			public printPageOrientation: Adobe.Indesign.PrintPageOrientation;
			/**
			 * If true, prints each spread with all spread pages on a 
			 * single sheet. If false, prints spread pages as separate 
			 * pages.
			 */
			public printSpreads: boolean;
			/**
			 * If true, prints the yellow ink. Note: Valid only when 
			 * trapping is off.
			 */
			public printYellow: boolean;
			/**
			 * The color profile. Can return: Profile enumerator or String.
			 */
			public profile: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * If true, prints small targets outside the page area for 
			 * aligning color separations.
			 */
			public registrationMarks: boolean;
			/** If true, prints pages in reverse order. */
			public reverseOrder: boolean;
			/**
			 * The amount (as a percentage) that the page height is scaled 
			 * during printing. (Range: 0 to 1000) Note: Valid only when 
			 * scale mode is scale width height.
			 */
			public scaleHeight: number;
			/**
			 * The policy for scaling the page. Note: Valid only when 
			 * printing from Layout view.
			 */
			public scaleMode: Adobe.Indesign.ScaleModes;
			/**
			 * If true, constrains the proportions of the scaling; uses the 
			 * most recent value for either scale width or scale height to 
			 * define both values. Note: Valid only when scale mode is 
			 * scale width height.
			 */
			public scaleProportional: boolean;
			/**
			 * The amount (as a percentage)  that the page width is scaled 
			 * during printing. (Range: 0 to 1000) Note: Valid only when 
			 * scale mode is scale width height.
			 */
			public scaleWidth: number;
			/**
			 * The ink screening settings for composite gray output in 
			 * PostScript or PDF format. . Can return: Screeening 
			 * enumerator or String.
			 */
			public screening: any;
			/**
			 * Lists the ink screenings available in the PPD. Note: Valid 
			 * only when color output is separations or in rip separations.
			 */
			public readonly screeningList: any;
			/** The image data sent to the printer or file. */
			public sendImageData: Adobe.Indesign.ImageDataTypes;
			/** The sequence of pages to print. */
			public sequence: Adobe.Indesign.Sequences;
			/**
			 * If true, simulates the effects of overprinting spot inks 
			 * with different neutral density values by converting spot 
			 * colors to process colors for printing. Note: Not valid when 
			 * the color output mode is defined to leave color profiles 
			 * unchanged.
			 */
			public simulateOverprint: boolean;
			/**
			 * The source of the color management system. Note: Valid only 
			 * when use color management is true.
			 */
			public sourceSpace: Adobe.Indesign.SourceSpaces;
			/**
			 * If true, prints all text as black unless text has the color 
			 * None or Paper or a color value that equals white. If false, 
			 * prints colored text, such as blue hyperlinks, in halftone 
			 * patterns. Note: Valid only when trapping is off.
			 */
			public textAsBlack: boolean;
			/**
			 * If true, prints thumbnails. Note: Valid only when trapping 
			 * is off and tile is false.
			 */
			public thumbnails: boolean;
			/** The number of thumbnails per page. */
			public thumbnailsPerPage: Adobe.Indesign.ThumbsPerPage;
			/** If true, tiles pages. */
			public tile: boolean;
			/**
			 * The amount of tiling overlap. Note: Valid only when tiling 
			 * is true and tiling type is not manual.
			 */
			public tilingOverlap: number;
			/** The tiling type. Note: Valid only when tiling is true. */
			public tilingType: Adobe.Indesign.TilingTypes;
			/** The type of trapping. */
			public trapping: Adobe.Indesign.Trapping;
			/** If true, uses the bleed area set for the document. */
			public useDocumentBleedToPrint: boolean;
			/** The angle override for yellow ink. (Range: 0 to 360) */
			public yellowAngle: number;
			/** The frequency override for yellow ink. (Range: 1 to 500) */
			public yellowFrequency: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam - The event type.
			 * @param {any} handlerParam - The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerPrinterPreset(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/** Duplicates the PrinterPreset. */
			public duplicate(): Adobe.Indesign.PrinterPreset;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/** Deletes the PrinterPreset. */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam - The registered event type.
			 * @param {any} handlerParam - The registered event handler. 
			 * Can accept: File or JavaScript Function.
			 * @param {boolean} capturesParam - This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerPrinterPreset(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}