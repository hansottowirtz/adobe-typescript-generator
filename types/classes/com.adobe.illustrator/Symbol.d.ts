/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A symbol */
		class Symbol extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The symbol's name */
			public name: string;
			/** create a duplicate of the object */
			public duplicate(): Adobe.Illustrator.Symbol;
			/** delete the object */
			public remove(): void;
		}
	}
}