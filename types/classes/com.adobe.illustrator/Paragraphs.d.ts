/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Paragraphs extends IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/** create a text art item */
			public add(contents: string, relativeObject: any, insertionLocation: ElementPlacement): TextRange;
			public addBefore(contents: string): TextRange;
			/** Get the element in the collection at the provided index. */
			public index(idx: number): TextRange;
			/** Overriding this allows us to support for each...in */
			public nextNameIndex(idx: number): number;
			/** Overriding this allows us to support for each...in */
			public nextValue(index: number): any;
			public removeAll(): void;
		}
	}
}