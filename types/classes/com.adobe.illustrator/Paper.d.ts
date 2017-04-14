/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Paper extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** the paper name */
			public name: string;
			/** the paper information */
			public paperInfo: Adobe.Illustrator.PaperInfo;
		}
	}
}