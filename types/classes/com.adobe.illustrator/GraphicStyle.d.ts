/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class GraphicStyle extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** The art style's name. */
			public name: string;
			/** Apply a brush or art style to object(s) */
			public applyTo(artItem: any): void;
			/** Merge an art style to object(s) current style(s) */
			public mergeTo(artItem: any): void;
			/** delete the object */
			public remove(): void;
		}
	}
}