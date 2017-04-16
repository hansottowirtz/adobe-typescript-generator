/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Print settings for a document */
		class DocumentPrintSettings extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** currently selected printer */
			public activePrinter: string;
			/** background color of page */
			public backgroundColor: Adobe.Photoshop.SolidColor;
			/** bleed width */
			public bleedWidth: any;
			/** Description field from File Info */
			public caption: boolean;
			/** Print center crop marks */
			public centerCropMarks: boolean;
			/** Print color calibration bars */
			public colorBars: boolean;
			/** color handling */
			public colorHandling: Adobe.Photoshop.PrintColorHandling;
			/** number of copies */
			public copies: number;
			/** Print corner crop marks */
			public cornerCropMarks: boolean;
			/** Position of image when printing */
			public readonly docPosition: Adobe.Photoshop.DocPositionStyle;
			/** Flip the image horizontally */
			public flip: boolean;
			/** Print a hard proof */
			public hardProof: boolean;
			public interpolate: boolean;
			/** Prints the document title */
			public labels: boolean;
			/** Map blacks */
			public mapBlack: boolean;
			/** Invert the image colors */
			public negative: boolean;
			/** x position of image on page */
			public readonly posX: any;
			/** y position of image on page */
			public readonly posY: any;
			/** width of the print border */
			public printBorder: any;
			/** name of printer */
			public printerName: string;
			/** list of available printers */
			public readonly printers: any[];
			/**
			 * color space for printer. Can be nothing (meaning same as 
			 * source) or a string specifying a specific color profile
			 */
			public printSpace: string;
			/** Print registration marks */
			public registrationMarks: boolean;
			/**
			 * Color conversion intent when print space is different from 
			 * the source space
			 */
			public renderIntent: Adobe.Photoshop.Intent;
			/** scale of image on page */
			public readonly scale: number;
			/** Include vector data */
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
			 */
			public setPagePosition(docPosition: Adobe.Photoshop.DocPositionStyle, posX: any, posY: any, scale: number): void;
		}
	}
}