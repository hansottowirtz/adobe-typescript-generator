/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** the printing color management options */
			public colorManagementOptions: Adobe.Illustrator.PrintColorManagementOptions;
			/** the printing color separation options */
			public colorSeparationOptions: Adobe.Illustrator.PrintColorSeparationOptions;
			/** the printing coordinate options */
			public coordinateOptions: Adobe.Illustrator.PrintCoordinateOptions;
			/** the printing flattener options */
			public flattenerOptions: Adobe.Illustrator.PrintFlattenerOptions;
			/** the transparency flattener preset name */
			public flattenerPreset: string;
			/** the printing font options */
			public fontOptions: Adobe.Illustrator.PrintFontOptions;
			/** the printing job options */
			public jobOptions: Adobe.Illustrator.PrintJobOptions;
			/** the printing page marks options */
			public pageMarksOptions: Adobe.Illustrator.PrintPageMarksOptions;
			/** the paper options */
			public paperOptions: Adobe.Illustrator.PrintPaperOptions;
			/** the printing PostScript options */
			public postScriptOptions: Adobe.Illustrator.PrintPostScriptOptions;
			/** the name of the PPD to use */
			public PPDName: string;
			/** the name of the printer to print to */
			public printerName: string;
			/** the name of a print preset to use */
			public printPreset: string;
		}
	}
}