/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Preferences for Illustrator */
		class Preferences extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** options to use when opening or placing a AutoCAD file */
			public readonly AutoCADFileOptions: Adobe.Illustrator.AutoCADFileOptions;
			/** options to use when opening or placing a PDF file */
			public readonly PDFFileOptions: Adobe.Illustrator.PDFFileOptions;
			/** options to use when opening or placing a Photoshop file */
			public readonly photoshopFileOptions: Adobe.Illustrator.PhotoshopFileOptions;
			/**
			 * retrieve the value of the application preference key as 
			 * boolean
			 * @param {string} key the preference key
			 */
			public getBooleanPreference(key: string): boolean;
			/**
			 * retrieve the value of the application preference key as 
			 * integer
			 * @param {string} key the preference key
			 */
			public getIntegerPreference(key: string): number;
			/**
			 * retrieve the value of the application preference key as real 
			 * number
			 * @param {string} key the preference key
			 */
			public getRealPreference(key: string): number;
			/**
			 * retrieve the value of the application preference key as 
			 * string type
			 * @param {string} key the preference key
			 */
			public getStringPreference(key: string): string;
			/**
			 * delete the application preference key
			 * @param {string} key the preference key
			 */
			public removePreference(key: string): void;
			/**
			 * set the value of the application preference key as boolean
			 * @param {string} key the preference key
			 * @param {boolean} value the boolean value of the preference 
			 * key
			 */
			public setBooleanPreference(key: string, value: boolean): void;
			/**
			 * set the value of the application preference key as integer
			 * @param {string} key the preference key
			 * @param {number} value the boolean value of the preference 
			 * key
			 */
			public setIntegerPreference(key: string, value: number): void;
			/**
			 * set the value of the application preference key as real 
			 * number
			 * @param {string} key the preference key
			 * @param {number} value the real value of the preference key
			 */
			public setRealPreference(key: string, value: number): void;
			/**
			 * set the value of the application preference key as string 
			 * type
			 * @param {string} key the preference key
			 * @param {string} value the string value of the preference key
			 */
			public setStringPreference(key: string, value: string): void;
		}
	}
}