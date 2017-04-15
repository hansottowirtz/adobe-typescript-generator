/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Print settings for a document. */
		class DocumentPrintSettings extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** Currently selected printer. */
			public activePrinter: string;
			/** Background color of page. */
			public backgroundColor: Adobe.Photoshop.SolidColor;
			/** Bleed width. */
			public bleedWidth: string;
			/** Description field from File Info. */
			public caption: boolean;
			/** Print center crop marks. */
			public centerCropMarks: boolean;
			/** Print color calibration bars. */
			public colorBars: boolean;
			/** Color handling. */
			public colorHandling: Adobe.Photoshop.PrintColorHandling;
			/** Number of copies. */
			public copies: number;
			/** Print corner crop marks. */
			public cornerCropMarks: boolean;
			/** Position of image when printing. */
			public readonly docPosition: Adobe.Photoshop.DocPositionStyle;
			/** Flip the image horizontally. */
			public flip: boolean;
			/** Print a hard proof. */
			public hardProof: boolean;
			public interpolate: boolean;
			/** Prints the document title. */
			public labels: boolean;
			/** Map blacks. */
			public mapBlack: boolean;
			/** Invert the image colors. */
			public negative: boolean;
			/** X position of image on page. */
			public readonly posX: string;
			/** Y position of image on page. */
			public readonly posY: string;
			/** Width of the print border. */
			public printBorder: string;
			/** name of printer */
			public printerName: string;
			/** List of available printers. */
			public readonly printers: any[];
			/**
			 * Color space for printer. Can be nothing (meaning same as 
			 * source); 'Working RGB', 'Working CMYK', 'Working Gray', 'Lab 
			 * Color' (meaning one of the working spaces or Lab color); or 
			 * a string specifying a specific colorspace (default is same 
			 * as source).
			 */
			public printSpace: string;
			/** Print registration marks. */
			public registrationMarks: boolean;
			/**
			 * Color conversion intent when print space is different from 
			 * the source space.
			 */
			public renderIntent: Adobe.Photoshop.Intent;
			/** Scale of image on page. */
			public readonly scale: number;
			/** Include vector data. */
			public vectorData: boolean;
			/**
			 * Set the position of the image on the page.
			 * @param {Adobe.Photoshop.DocPositionStyle} docPosition - 
			 * Position of the image on page when printing. Can be 
			 * centered, scale to fit, or user defined.
			 * @param {string} posX - X position of image on page.
			 * @param {string} posY - Y position of image on page.
			 * @param {number} scale - Position of the image on page when 
			 * printing. Can be centered, scale to fit, or user defined. ( 
			 * default: 100.0 )
			 */
			public setPagePosition(docPosition: Adobe.Photoshop.DocPositionStyle, posX: string, posY: string, scale: number): void;
		}
	}
}