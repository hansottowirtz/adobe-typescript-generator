/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** PPD file information */
		class PPDFileInfo extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * the PostScript language level
			 * @type {string}
			 */
			public languageLevel: string;
			/**
			 * path specification for the PPD file
			 * @type {File}
			 */
			public PPDFilePath: File;
			/**
			 * list of color separation screens
			 * @type {any[]}
			 */
			public screenList: any[];
			/**
			 * list of color separation screen spot functions
			 * @type {any[]}
			 */
			public screenSpotFunctionList: any[];
		}
	}
}