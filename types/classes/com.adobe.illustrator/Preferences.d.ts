/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Preferences for Illustrator. */
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
			 * @param {string} key - The preference key.
			 */
			public getBooleanPreference(key: string): boolean;
			/**
			 * Retrieve the value of the application preference key as 
			 * integer.
			 * @param {string} key - The preference key.
			 */
			public getIntegerPreference(key: string): number;
			/**
			 * Retrieve the value of the application preference key as real 
			 * number.
			 * @param {string} key - The preference key.
			 */
			public getRealPreference(key: string): number;
			/**
			 * Retrieve the value of the application preference key as 
			 * string type.
			 * @param {string} key - The preference key.
			 */
			public getStringPreference(key: string): string;
			/**
			 * Delete the application preference key.
			 * @param {string} key - The preference key.
			 */
			public removePreference(key: string): void;
			/**
			 * Set the value of the application preference key as boolean.
			 * @param {string} key - The preference key.
			 * @param {boolean} value - The boolean value of the preference 
			 * key.
			 */
			public setBooleanPreference(key: string, value: boolean): void;
			/**
			 * Set the value of the application preference key as integer.
			 * @param {string} key - The preference key.
			 * @param {number} value - The boolean value of the preference 
			 * key.
			 */
			public setIntegerPreference(key: string, value: number): void;
			/**
			 * Set the value of the application preference key as real 
			 * number.
			 * @param {string} key - The preference key.
			 * @param {number} value - The real value of the preference 
			 * key.
			 */
			public setRealPreference(key: string, value: number): void;
			/**
			 * Set the value of the application preference key as string 
			 * type.
			 * @param {string} key - The preference key.
			 * @param {string} value - The string value of the preference 
			 * key.
			 */
			public setStringPreference(key: string, value: string): void;
		}
	}
}