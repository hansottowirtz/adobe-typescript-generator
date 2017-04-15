/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A pattern. */
		class Pattern extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The pattern's name. */
			public name: string;
			/** delete the object */
			public remove(): void;
		}
	}
}