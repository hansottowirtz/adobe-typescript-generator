/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** the print options */
		class PrintOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the printing color management options
			 * @type {Adobe.Illustrator.PrintColorManagementOptions}
			 */
			public colorManagementOptions: Adobe.Illustrator.PrintColorManagementOptions;
			/**
			 * the printing color separation options
			 * @type {Adobe.Illustrator.PrintColorSeparationOptions}
			 */
			public colorSeparationOptions: Adobe.Illustrator.PrintColorSeparationOptions;
			/**
			 * the printing coordinate options
			 * @type {Adobe.Illustrator.PrintCoordinateOptions}
			 */
			public coordinateOptions: Adobe.Illustrator.PrintCoordinateOptions;
			/**
			 * the printing flattener options
			 * @type {Adobe.Illustrator.PrintFlattenerOptions}
			 */
			public flattenerOptions: Adobe.Illustrator.PrintFlattenerOptions;
			/**
			 * the transparency flattener preset name
			 * @type {string}
			 */
			public flattenerPreset: string;
			/**
			 * the printing font options
			 * @type {Adobe.Illustrator.PrintFontOptions}
			 */
			public fontOptions: Adobe.Illustrator.PrintFontOptions;
			/**
			 * the printing job options
			 * @type {Adobe.Illustrator.PrintJobOptions}
			 */
			public jobOptions: Adobe.Illustrator.PrintJobOptions;
			/**
			 * the printing page marks options
			 * @type {Adobe.Illustrator.PrintPageMarksOptions}
			 */
			public pageMarksOptions: Adobe.Illustrator.PrintPageMarksOptions;
			/**
			 * the paper options
			 * @type {Adobe.Illustrator.PrintPaperOptions}
			 */
			public paperOptions: Adobe.Illustrator.PrintPaperOptions;
			/**
			 * the printing PostScript options
			 * @type {Adobe.Illustrator.PrintPostScriptOptions}
			 */
			public postScriptOptions: Adobe.Illustrator.PrintPostScriptOptions;
			/**
			 * the name of the PPD to use
			 * @type {string}
			 */
			public PPDName: string;
			/**
			 * the name of the printer to print to
			 * @type {string}
			 */
			public printerName: string;
			/**
			 * the name of a print preset to use
			 * @type {string}
			 */
			public printPreset: string;
		}
	}
}