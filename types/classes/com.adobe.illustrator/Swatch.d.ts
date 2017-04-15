/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A color swatch. */
		class Swatch extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The color information of the swatch. */
			public color: Adobe.Illustrator.Color;
			/** The swatch's name. */
			public name: string;
			/** delete the object */
			public remove(): void;
		}
	}
}