/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ParagraphStyles extends IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/** create a named paragraph style */
			public add(name: string): ParagraphStyle;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 */
			public getByName(nameParam: string): ParagraphStyle;
			/** Get the element in the collection at the provided index. */
			public index(idx: number): ParagraphStyle;
			/** Overriding this allows us to support for each...in */
			public nextNameIndex(idx: number): number;
			/** Overriding this allows us to support for each...in */
			public nextValue(index: number): any;
			public removeAll(): void;
		}
	}
}