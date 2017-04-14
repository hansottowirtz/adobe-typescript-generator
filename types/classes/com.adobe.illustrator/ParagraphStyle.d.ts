/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ParagraphStyle extends IllustratorHostObject {
			/** The character properties for the text range. */
			public readonly characterAttributes: CharacterAttributes;
			/** The paragraph style's name. */
			public name: string;
			/** The paragraph properties for the text range. */
			public readonly paragraphAttributes: ParagraphAttributes;
			/** Apply the paragraph style to text object(s) */
			public applyTo(textItem: any, clearingOverrides: boolean): void;
			/** delete the object */
			public remove(): void;
		}
	}
}