/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Print color separation options */
		class PrintColorSeparationOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the color separation type ( default: 
			 * PrintColorSeparationMode.COMPOSITE )
			 * @type {Adobe.Illustrator.PrintColorSeparationMode}
			 */
			public colorSeparationMode: Adobe.Illustrator.PrintColorSeparationMode;
			/**
			 * whether to convert all spot colors to process colors ( 
			 * default: false )
			 * @type {boolean}
			 */
			public convertSpotColors: boolean;
			/**
			 * the list of inks for color separation
			 * @type {any[]}
			 */
			public inkList: any[];
			/**
			 * whether to overprint in black ( default: false )
			 * @type {boolean}
			 */
			public overPrintBlack: boolean;
		}
	}
}