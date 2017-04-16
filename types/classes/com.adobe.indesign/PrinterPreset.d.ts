/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PrinterPreset extends Adobe.Csawlib.CSHostObject {
			/**
			 * If true, prints all printer marks. If false, prints 
			 * specified printer marks.
			 * @type {boolean}
			 */
			public allPrinterMarks: boolean;
			/**
			 * If true, uses bitmap printing.
			 * @type {boolean}
			 */
			public bitmapPrinting: boolean;
			/**
			 * The resolution for bitmap printing. (Range: 72 to 1200) 
			 * Note: Valid when bitmap printing is true.
			 * @type {number}
			 */
			public bitmapResolution: number;
			/**
			 * The angle override for black ink. (Range: 0 to 360)
			 * @type {number}
			 */
			public blackAngle: number;
			/**
			 * The frequency override for black ink. (Range: 1 to 500)
			 * @type {number}
			 */
			public blackFrequency: number;
			/**
			 * The height of the bleed area at the bottom of the page. 
			 * Note: Valid only when use document bleed to print is true.
			 * @type {any}
			 */
			public bleedBottom: any;
			/**
			 * If true, forces all bleed area settings to be the same, 
			 * using the most recent bleed measurement setting. If false, 
			 * allows bleed top, bleed bottom, bleed inside, and bleed 
			 * outside to have different measurements.
			 * @type {boolean}
			 */
			public bleedChain: boolean;
			/**
			 * The width of the bleed area at the inside of the page. Note: 
			 * Valid only when use document bleed to print is true.
			 * @type {any}
			 */
			public bleedInside: any;
			/**
			 * If true, print bleed marks.
			 * @type {boolean}
			 */
			public bleedMarks: boolean;
			/**
			 * The width of the bleed area at the outside of the page. 
			 * Note: Valid only when use document bleed to print is true.
			 * @type {any}
			 */
			public bleedOutside: any;
			/**
			 * The height of the bleed area at the top of the page. Note: 
			 * Valid only when use document bleed to print is true.
			 * @type {any}
			 */
			public bleedTop: any;
			/**
			 * If true, collate printed copies.
			 * @type {boolean}
			 */
			public collating: boolean;
			/**
			 * If true, add small squares of color representing the CMYK 
			 * inks and tints of gray in 10% increments.
			 * @type {boolean}
			 */
			public colorBars: boolean;
			/**
			 * The color output mode for composites. Note: Not valid when a 
			 * device-independent PPD is specified.
			 * @type {Adobe.Indesign.ColorOutputModes}
			 */
			public colorOutput: Adobe.Indesign.ColorOutputModes;
			/**
			 * The screen angle to use when printing composites. (Range: 0 
			 * to 360) Note: Valid only for PostScript or PDF files that 
			 * use custom screening.
			 * @type {number}
			 */
			public compositeAngle: number;
			/**
			 * The screen frequency to use when printing composites. 
			 * (Range: 1 to 500) Note: Valid only for PostScript or PDF 
			 * files that use custom screening.
			 * @type {number}
			 */
			public compositeFrequency: number;
			/**
			 * The number of copies to print. Note: Not valid when printer 
			 * is PostScript File.
			 * @type {number}
			 */
			public copies: number;
			/**
			 * The color-rendering dictionary (CRD), specified as a CRD 
			 * name or an enumeration value. Note: Valid only when use 
			 * color management is true. Can return: 
			 * ColorRenderingDictionary enumerator or String.
			 * @type {any}
			 */
			public crd: any;
			/**
			 * Prints crop marks that define where the page should be 
			 * trimmed.
			 * @type {boolean}
			 */
			public cropMarks: boolean;
			/**
			 * The angle override for cyan ink. (Range: 0 to 360)
			 * @type {number}
			 */
			public cyanAngle: number;
			/**
			 * The frequency override for cyan ink. (Range: 1 to 500)
			 * @type {number}
			 */
			public cyanFrequency: number;
			/**
			 * The format in which to send image data to the printer.
			 * @type {Adobe.Indesign.DataFormat}
			 */
			public dataFormat: Adobe.Indesign.DataFormat;
			/**
			 * If true, downloads all fonts listed in the selected PPD. 
			 * Valid only when font downloading is complete or subset.
			 * @type {boolean}
			 */
			public downloadPPDFonts: boolean;
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
			 * The name of the transparency flattener preset.
			 * @type {string}
			 */
			public flattenerPresetName: string;
			/**
			 * The direction in which to flip the printed image.
			 * @type {Adobe.Indesign.Flip}
			 */
			public flip: Adobe.Indesign.Flip;
			/**
			 * Controls how fonts are downloaded to the printer.
			 * @type {Adobe.Indesign.FontDownloading}
			 */
			public fontDownloading: Adobe.Indesign.FontDownloading;
			/**
			 * If true, ignores flattener spread overrides.
			 * @type {boolean}
			 */
			public ignoreSpreadOverrides: boolean;
			/**
			 * If true, includes the slug area in the printed document.
			 * @type {boolean}
			 */
			public includeSlugToPrint: boolean;
			/**
			 * The index of the PrinterPreset within its containing object.
			 * @type {number}
			 * @readonly
			 */
			public readonly index: number;
			/**
			 * The rendering intent. Note: Valid only when use color 
			 * management is true.
			 * @type {Adobe.Indesign.RenderingIntent}
			 */
			public intent: Adobe.Indesign.RenderingIntent;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isValid: boolean;
			/**
			 * The angle override for magenta ink. (Range: 0 to 360)
			 * @type {number}
			 */
			public magentaAngle: number;
			/**
			 * The frequency override for magenta ink. (Range: 1 to 500)
			 * @type {number}
			 */
			public magentaFrequency: number;
			/**
			 * The stroke weight (in points) for printer marks.
			 * @type {Adobe.Indesign.MarkLineWeight}
			 */
			public markLineWeight: Adobe.Indesign.MarkLineWeight;
			/**
			 * The distance to offset the page marks from the edge of the 
			 * page.
			 * @type {any}
			 */
			public markOffset: any;
			/**
			 * The type of printer marks, either an enum value or the name 
			 * of a custom marks file. Can return: MarkTypes enumerator or 
			 * String.
			 * @type {any}
			 */
			public markType: any;
			/**
			 * The name of the PrinterPreset.
			 * @type {string}
			 */
			public name: string;
			/**
			 * If true, prints the document as a negative.
			 * @type {boolean}
			 */
			public negative: boolean;
			/**
			 * If true, replaces bitmap images with OPI links.
			 * @type {boolean}
			 */
			public omitBitmaps: boolean;
			/**
			 * If true, replaces EPS images with OPI links.
			 * @type {boolean}
			 */
			public omitEPS: boolean;
			/**
			 * If true, replaces PDF images with OPI links.
			 * @type {boolean}
			 */
			public omitPDF: boolean;
			/**
			 * If true, prints graphics that are either OPI comments stored 
			 * in imported EPS files or linked using OPI comments. For 
			 * information on linking files using OPI comments, see omit 
			 * EPS, omit PDF, or omit bitmaps.
			 * @type {boolean}
			 */
			public opiImageReplacement: boolean;
			/**
			 * If true, prints the filename, page number, current date and 
			 * time, and color separation name.
			 * @type {boolean}
			 */
			public pageInformationMarks: boolean;
			/**
			 * The position of the page on the printing medium. Note: Valid 
			 * only when tile is false.
			 * @type {Adobe.Indesign.PagePositions}
			 */
			public pagePosition: Adobe.Indesign.PagePositions;
			/**
			 * The space between document pages on the printing medium.
			 * @type {any}
			 */
			public paperGap: any;
			/**
			 * The paper height. Note: Valid only when paper size is custom 
			 * or scale mode is scale width height. Can return: PaperSize 
			 * enumerator or Unit.
			 * @type {any}
			 */
			public paperHeight: any;
			/**
			 * The amount of space to offset the page from the left edge of 
			 * the imageable area.
			 * @type {any}
			 */
			public paperOffset: any;
			/**
			 * The paper size, specified as either a string or an 
			 * enumeration. For information on paper size names, see paper 
			 * size list. Can return: PaperSizes enumerator or String.
			 * @type {any}
			 */
			public paperSize: any;
			/**
			 * A list of the available paper sizes.
			 * @type {any}
			 * @readonly
			 */
			public readonly paperSizeList: any;
			/**
			 * If true, uses transverse orientation.
			 * @type {boolean}
			 */
			public paperTransverse: boolean;
			/**
			 * The paper width. Note: Valid only when paper size is custom 
			 * or scale mode is scale width height. Can return: PaperSize 
			 * enumerator or Unit.
			 * @type {any}
			 */
			public paperWidth: any;
			/**
			 * The parent of the PrinterPreset (a Application).
			 * @type {Adobe.Indesign.Application}
			 * @readonly
			 */
			public readonly parent: Adobe.Indesign.Application;
			/**
			 * The PostScript level of the printer.
			 * @type {Adobe.Indesign.PostScriptLevels}
			 */
			public postscriptLevel: Adobe.Indesign.PostScriptLevels;
			/**
			 * The PPD, specified as a PPD name or an enumeration. Can 
			 * return: PPDValues enumerator or String.
			 * @type {any}
			 */
			public ppd: any;
			/**
			 * Available PPDs.
			 * @type {any}
			 * @readonly
			 */
			public readonly ppdList: any;
			/**
			 * If true, prints the black ink. Note: Valid only when 
			 * trapping is off.
			 * @type {boolean}
			 */
			public printBlack: boolean;
			/**
			 * If true, prints blank pages. Note: Valid only when trapping 
			 * is off.
			 * @type {boolean}
			 */
			public printBlankPages: boolean;
			/**
			 * If true, prints the cyan ink. Note: Valid only when trapping 
			 * is off.
			 * @type {boolean}
			 */
			public printCyan: boolean;
			/**
			 * The current printer. Can return: Printer enumerator or 
			 * String.
			 * @type {any}
			 */
			public printer: any;
			/**
			 * Available printers.
			 * @type {any}
			 * @readonly
			 */
			public readonly printerList: any;
			/**
			 * The PostScript file to print to. Note: Valid only when the 
			 * current printer is defined as postscript file.
			 * @type {File}
			 */
			public printFile: File;
			/**
			 * If true, prints visible guides and baseline grids. Note: 
			 * Valid only when trapping is off.
			 * @type {boolean}
			 */
			public printGuidesGrids: boolean;
			/**
			 * The layers to print.
			 * @type {Adobe.Indesign.PrintLayerOptions}
			 */
			public printLayers: Adobe.Indesign.PrintLayerOptions;
			/**
			 * If true, prints the magenta ink. Note: Valid only when 
			 * trapping is off.
			 * @type {boolean}
			 */
			public printMagenta: boolean;
			/**
			 * If true, prints master pages.
			 * @type {boolean}
			 */
			public printMasterPages: boolean;
			/**
			 * If true, prints non-printing objects. Note: Valid only when 
			 * trapping is off.
			 * @type {boolean}
			 */
			public printNonprinting: boolean;
			/**
			 * The orientation of the printed page.
			 * @type {Adobe.Indesign.PrintPageOrientation}
			 */
			public printPageOrientation: Adobe.Indesign.PrintPageOrientation;
			/**
			 * If true, prints each spread with all spread pages on a 
			 * single sheet. If false, prints spread pages as separate 
			 * pages.
			 * @type {boolean}
			 */
			public printSpreads: boolean;
			/**
			 * If true, prints the yellow ink. Note: Valid only when 
			 * trapping is off.
			 * @type {boolean}
			 */
			public printYellow: boolean;
			/**
			 * The color profile. Can return: Profile enumerator or String.
			 * @type {any}
			 */
			public profile: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 * @type {any}
			 */
			public properties: any;
			/**
			 * If true, prints small targets outside the page area for 
			 * aligning color separations.
			 * @type {boolean}
			 */
			public registrationMarks: boolean;
			/**
			 * If true, prints pages in reverse order.
			 * @type {boolean}
			 */
			public reverseOrder: boolean;
			/**
			 * The amount (as a percentage) that the page height is scaled 
			 * during printing. (Range: 0 to 1000) Note: Valid only when 
			 * scale mode is scale width height.
			 * @type {number}
			 */
			public scaleHeight: number;
			/**
			 * The policy for scaling the page. Note: Valid only when 
			 * printing from Layout view.
			 * @type {Adobe.Indesign.ScaleModes}
			 */
			public scaleMode: Adobe.Indesign.ScaleModes;
			/**
			 * If true, constrains the proportions of the scaling; uses the 
			 * most recent value for either scale width or scale height to 
			 * define both values. Note: Valid only when scale mode is 
			 * scale width height.
			 * @type {boolean}
			 */
			public scaleProportional: boolean;
			/**
			 * The amount (as a percentage)  that the page width is scaled 
			 * during printing. (Range: 0 to 1000) Note: Valid only when 
			 * scale mode is scale width height.
			 * @type {number}
			 */
			public scaleWidth: number;
			/**
			 * The ink screening settings for composite gray output in 
			 * PostScript or PDF format. . Can return: Screeening 
			 * enumerator or String.
			 * @type {any}
			 */
			public screening: any;
			/**
			 * Lists the ink screenings available in the PPD. Note: Valid 
			 * only when color output is separations or in rip separations.
			 * @type {any}
			 * @readonly
			 */
			public readonly screeningList: any;
			/**
			 * The image data sent to the printer or file.
			 * @type {Adobe.Indesign.ImageDataTypes}
			 */
			public sendImageData: Adobe.Indesign.ImageDataTypes;
			/**
			 * The sequence of pages to print.
			 * @type {Adobe.Indesign.Sequences}
			 */
			public sequence: Adobe.Indesign.Sequences;
			/**
			 * If true, simulates the effects of overprinting spot inks 
			 * with different neutral density values by converting spot 
			 * colors to process colors for printing. Note: Not valid when 
			 * the color output mode is defined to leave color profiles 
			 * unchanged.
			 * @type {boolean}
			 */
			public simulateOverprint: boolean;
			/**
			 * The source of the color management system. Note: Valid only 
			 * when use color management is true.
			 * @type {Adobe.Indesign.SourceSpaces}
			 */
			public sourceSpace: Adobe.Indesign.SourceSpaces;
			/**
			 * If true, prints all text as black unless text has the color 
			 * None or Paper or a color value that equals white. If false, 
			 * prints colored text, such as blue hyperlinks, in halftone 
			 * patterns. Note: Valid only when trapping is off.
			 * @type {boolean}
			 */
			public textAsBlack: boolean;
			/**
			 * If true, prints thumbnails. Note: Valid only when trapping 
			 * is off and tile is false.
			 * @type {boolean}
			 */
			public thumbnails: boolean;
			/**
			 * The number of thumbnails per page.
			 * @type {Adobe.Indesign.ThumbsPerPage}
			 */
			public thumbnailsPerPage: Adobe.Indesign.ThumbsPerPage;
			/**
			 * If true, tiles pages.
			 * @type {boolean}
			 */
			public tile: boolean;
			/**
			 * The amount of tiling overlap. Note: Valid only when tiling 
			 * is true and tiling type is not manual.
			 * @type {number}
			 */
			public tilingOverlap: number;
			/**
			 * The tiling type. Note: Valid only when tiling is true.
			 * @type {Adobe.Indesign.TilingTypes}
			 */
			public tilingType: Adobe.Indesign.TilingTypes;
			/**
			 * The type of trapping.
			 * @type {Adobe.Indesign.Trapping}
			 */
			public trapping: Adobe.Indesign.Trapping;
			/**
			 * If true, uses the bleed area set for the document.
			 * @type {boolean}
			 */
			public useDocumentBleedToPrint: boolean;
			/**
			 * The angle override for yellow ink. (Range: 0 to 360)
			 * @type {number}
			 */
			public yellowAngle: number;
			/**
			 * The frequency override for yellow ink. (Range: 1 to 500)
			 * @type {number}
			 */
			public yellowFrequency: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {Adobe.Indesign.EventListener}
			 */
			public addEventListenerPrinterPreset(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Indesign.EventListener;
			/**
			 * Duplicates the PrinterPreset.
			 * @returns {Adobe.Indesign.PrinterPreset}
			 */
			public duplicate(): Adobe.Indesign.PrinterPreset;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 * @returns {any}
			 */
			public getElements(): any;
			/**
			 * Deletes the PrinterPreset.
			 * @returns {void}
			 */
			public remove(): void;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 * @returns {boolean}
			 */
			public removeEventListenerPrinterPreset(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Retrieves the object specifier.
			 * @returns {string}
			 */
			public toSpecifier(): string;
		}
	}
}