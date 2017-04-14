/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Preferences extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** Options to use when opening or placing a AutoCAD file. */
			public readonly AutoCADFileOptions: Adobe.Illustrator.AutoCADFileOptions;
			/** Options to use when opening or placing a FreeHand file. */
			public readonly FreeHandFileOptions: Adobe.Illustrator.FreeHandFileOptions;
			/** Options to use when opening or placing a PDF file. */
			public readonly PDFFileOptions: Adobe.Illustrator.PDFFileOptions;
			/** Options to use when opening or placing a Photoshop file. */
			public readonly photoshopFileOptions: Adobe.Illustrator.PhotoshopFileOptions;
			/**
			 * Retrieve the value of the application preference key as 
			 * boolean.
			 */
			public getBooleanPreference(key: string): boolean;
			/**
			 * Retrieve the value of the application preference key as 
			 * integer.
			 */
			public getIntegerPreference(key: string): number;
			/**
			 * Retrieve the value of the application preference key as real 
			 * number.
			 */
			public getRealPreference(key: string): number;
			/**
			 * Retrieve the value of the application preference key as 
			 * string type.
			 */
			public getStringPreference(key: string): string;
			/** Delete the application preference key. */
			public removePreference(key: string): void;
			/** Set the value of the application preference key as boolean. */
			public setBooleanPreference(key: string, value: boolean): void;
			/** Set the value of the application preference key as integer. */
			public setIntegerPreference(key: string, value: number): void;
			/**
			 * Set the value of the application preference key as real 
			 * number.
			 */
			public setRealPreference(key: string, value: number): void;
			/**
			 * Set the value of the application preference key as string 
			 * type.
			 */
			public setStringPreference(key: string, value: string): void;
		}
	}
}