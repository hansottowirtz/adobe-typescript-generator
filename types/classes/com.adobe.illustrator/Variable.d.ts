/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Variable extends IllustratorHostObject {
			/** The variable's type. */
			public kind: VariableKind;
			/** The name of this variable. */
			public name: string;
			/** All the artwork in this document. */
			public readonly pageItems: PageItems;
			/** delete the object */
			public remove(): void;
		}
	}
}