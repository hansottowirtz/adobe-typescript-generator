/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Print settings for a document */
		class DocumentPrintSettings extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * currently selected printer
			 * @type {string}
			 */
			public activePrinter: string;
			/**
			 * background color of page
			 * @type {Adobe.Photoshop.SolidColor}
			 */
			public backgroundColor: Adobe.Photoshop.SolidColor;
			/**
			 * bleed width
			 * @type {any}
			 */
			public bleedWidth: any;
			/**
			 * Description field from File Info
			 * @type {boolean}
			 */
			public caption: boolean;
			/**
			 * Print center crop marks
			 * @type {boolean}
			 */
			public centerCropMarks: boolean;
			/**
			 * Print color calibration bars
			 * @type {boolean}
			 */
			public colorBars: boolean;
			/**
			 * color handling
			 * @type {Adobe.Photoshop.PrintColorHandling}
			 */
			public colorHandling: Adobe.Photoshop.PrintColorHandling;
			/**
			 * number of copies
			 * @type {number}
			 */
			public copies: number;
			/**
			 * Print corner crop marks
			 * @type {boolean}
			 */
			public cornerCropMarks: boolean;
			/**
			 * Position of image when printing
			 * @type {Adobe.Photoshop.DocPositionStyle}
			 * @readonly
			 */
			public readonly docPosition: Adobe.Photoshop.DocPositionStyle;
			/**
			 * Flip the image horizontally
			 * @type {boolean}
			 */
			public flip: boolean;
			/**
			 * Print a hard proof
			 * @type {boolean}
			 */
			public hardProof: boolean;
			/**
			 * @type {boolean}
			 */
			public interpolate: boolean;
			/**
			 * Prints the document title
			 * @type {boolean}
			 */
			public labels: boolean;
			/**
			 * Map blacks
			 * @type {boolean}
			 */
			public mapBlack: boolean;
			/**
			 * Invert the image colors
			 * @type {boolean}
			 */
			public negative: boolean;
			/**
			 * x position of image on page
			 * @type {any}
			 * @readonly
			 */
			public readonly posX: any;
			/**
			 * y position of image on page
			 * @type {any}
			 * @readonly
			 */
			public readonly posY: any;
			/**
			 * width of the print border
			 * @type {any}
			 */
			public printBorder: any;
			/**
			 * name of printer
			 * @type {string}
			 */
			public printerName: string;
			/**
			 * list of available printers
			 * @type {any[]}
			 * @readonly
			 */
			public readonly printers: any[];
			/**
			 * color space for printer. Can be nothing (meaning same as 
			 * source) or a string specifying a specific color profile
			 * @type {string}
			 */
			public printSpace: string;
			/**
			 * Print registration marks
			 * @type {boolean}
			 */
			public registrationMarks: boolean;
			/**
			 * Color conversion intent when print space is different from 
			 * the source space
			 * @type {Adobe.Photoshop.Intent}
			 */
			public renderIntent: Adobe.Photoshop.Intent;
			/**
			 * scale of image on page
			 * @type {number}
			 * @readonly
			 */
			public readonly scale: number;
			/**
			 * Include vector data
			 * @type {boolean}
			 */
			public vectorData: boolean;
			/**
			 * Set the position of the image on the page
			 * @param {Adobe.Photoshop.DocPositionStyle} docPosition 
			 * Position of the image on page when printing. Can be 
			 * centered, scale to fit, or user defined
			 * @param {any} posX x position of image on page
			 * @param {any} posY y position of image on page
			 * @param {number} scale scale of image on page ( default: 
			 * 100.0 )
			 * @returns {void}
			 */
			public setPagePosition(docPosition: Adobe.Photoshop.DocPositionStyle, posX: any, posY: any, scale: number): void;
		}
	}
}