/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** PPD file information */
		class PPDFileInfo extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** the PostScript language level */
			public languageLevel: string;
			/** path specification for the PPD file */
			public PPDFilePath: File;
			/** list of color separation screens */
			public screenList: any[];
			/** list of color separation screen spot functions */
			public screenSpotFunctionList: any[];
		}
	}
}