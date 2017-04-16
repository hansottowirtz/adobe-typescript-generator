/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** paper size */
		class Paper extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** the paper name */
			public name: string;
			/** the paper information */
			public paperInfo: Adobe.Illustrator.PaperInfo;
		}
	}
}