/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Words extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/** create a word */
			public add(contents: string, relativeObject: any, insertionLocation: ElementPlacement): Adobe.Illustrator.TextRange;
			public addBefore(contents: string): Adobe.Illustrator.TextRange;
			/** Get the element in the collection at the provided index. */
			public index(idx: number): Adobe.Illustrator.TextRange;
			/** Overriding this allows us to support for each...in */
			public nextNameIndex(idx: number): number;
			/** Overriding this allows us to support for each...in */
			public nextValue(index: number): any;
			public removeAll(): void;
		}
	}
}