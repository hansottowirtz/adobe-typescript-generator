/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PPDFileInfo extends IllustratorHostObject {
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