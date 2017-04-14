/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Pattern extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The pattern's name. */
			public name: string;
			/** delete the object */
			public remove(): void;
		}
	}
}