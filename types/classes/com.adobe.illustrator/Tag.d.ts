/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A tag associated with a piece of artwork */
		class Tag extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The tag's name */
			public name: string;
			/** the data stored in this tag */
			public value: string;
			/** delete the object */
			public remove(): void;
		}
	}
}