/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** An installed font. */
		class TextFont extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The font's family name. */
			public readonly family: string;
			/** The font's full name. */
			public readonly name: string;
			/** The font's style name. */
			public readonly style: string;
		}
	}
}