/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintOptions extends IllustratorHostObject {
			/** the printing color management options */
			public colorManagementOptions: PrintColorManagementOptions;
			/** the printing color separation options */
			public colorSeparationOptions: PrintColorSeparationOptions;
			/** the printing coordinate options */
			public coordinateOptions: PrintCoordinateOptions;
			/** the printing flattener options */
			public flattenerOptions: PrintFlattenerOptions;
			/** the transparency flattener preset name */
			public flattenerPreset: string;
			/** the printing font options */
			public fontOptions: PrintFontOptions;
			/** the printing job options */
			public jobOptions: PrintJobOptions;
			/** the printing page marks options */
			public pageMarksOptions: PrintPageMarksOptions;
			/** the paper options */
			public paperOptions: PrintPaperOptions;
			/** the printing PostScript options */
			public postScriptOptions: PrintPostScriptOptions;
			/** the name of the PPD to use */
			public PPDName: string;
			/** the name of the printer to print to */
			public printerName: string;
			/** the name of a print preset to use */
			public printPreset: string;
		}
	}
}