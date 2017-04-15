/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class Tag extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The tag's name. */
			public name: string;
			/** The data stored in this tag. */
			public value: string;
			/** delete the object */
			public remove(): void;
		}
	}
}