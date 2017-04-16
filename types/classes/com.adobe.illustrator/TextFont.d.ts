/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** An installed font */
		class TextFont extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** the font's family name */
			public readonly family: string;
			/** The font's full name */
			public readonly name: string;
			/** the font's style name */
			public readonly style: string;
		}
	}
}