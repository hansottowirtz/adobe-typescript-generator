/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** a PPD file */
		class PPDFile extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** the PPD model name */
			public name: string;
			/** the PPD file information */
			public PPDInfo: Adobe.Illustrator.PPDFileInfo;
		}
	}
}