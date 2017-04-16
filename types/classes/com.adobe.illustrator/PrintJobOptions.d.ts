/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** the print job options */
		class PrintJobOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * Artboard Range to be printed if PrintAllArtboards is false ( 
			 * default: 1- )
			 * @type {string}
			 */
			public artboardRange: string;
			/**
			 * the bitmap resolution ( minimum 0.0; default: 0.0 )
			 * @type {number}
			 */
			public bitmapResolution: number;
			/**
			 * whether to collate print pages ( default: false )
			 * @type {boolean}
			 */
			public collate: boolean;
			/**
			 * the number of copies to print ( minimum 1; default: 1 )
			 * @type {number}
			 */
			public copies: number;
			/**
			 * the layers/objects to be printed ( default: 
			 * PrintArtworkDesignation.VISIBLEPRINTABLELAYERS )
			 * @type {Adobe.Illustrator.PrintArtworkDesignation}
			 */
			public designation: Adobe.Illustrator.PrintArtworkDesignation;
			/**
			 * the file to be printed to
			 * @type {File}
			 */
			public file: File;
			/**
			 * the print job name
			 * @type {string}
			 */
			public name: string;
			/**
			 * whether to print all artboards ( default: true )
			 * @type {boolean}
			 */
			public printAllArtboards: boolean;
			/**
			 * the printing bounds ( default: PrintingBounds.ARTBOARDBOUNDS 
			 * )
			 * @type {Adobe.Illustrator.PrintingBounds}
			 */
			public printArea: Adobe.Illustrator.PrintingBounds;
			/**
			 * whether to print as bitmap ( default: false )
			 * @type {boolean}
			 */
			public printAsBitmap: boolean;
			/**
			 * print pages in reverse order ( default: false )
			 * @type {boolean}
			 */
			public reversePages: boolean;
		}
	}
}