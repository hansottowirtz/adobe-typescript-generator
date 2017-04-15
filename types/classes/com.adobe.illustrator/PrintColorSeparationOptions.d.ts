/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Print color separation options */
		class PrintColorSeparationOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the color separation type ( default: 
			 * PrintColorSeparationMode.COMPOSITE )
			 */
			public colorSeparationMode: Adobe.Illustrator.PrintColorSeparationMode;
			/**
			 * whether to convert all spot colors to process colors ( 
			 * default: false )
			 */
			public convertSpotColors: boolean;
			/** the list of inks for color separation */
			public inkList: any;
			/** whether to overprint in black ( default: false ) */
			public overPrintBlack: boolean;
		}
	}
}