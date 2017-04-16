/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Dynamic object used to create data-driven graphics. */
		class Variable extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** the variable's type */
			public kind: Adobe.Illustrator.VariableKind;
			/** the name of this variable */
			public name: string;
			/** All the artwork in this document */
			public readonly pageItems: Adobe.Illustrator.PageItems;
			/** delete the object */
			public remove(): void;
		}
	}
}