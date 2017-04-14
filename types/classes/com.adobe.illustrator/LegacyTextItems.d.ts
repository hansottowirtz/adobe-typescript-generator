/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class LegacyTextItems extends IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/**
			 * Create text frames from all legacy text items. The original 
			 * legacy text items will be deleted.
			 */
			public convertToNative(): boolean;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 */
			public getByName(nameParam: string): LegacyTextItem;
			/** Get the element in the collection at the provided index. */
			public index(idx: number): LegacyTextItem;
			/** Overriding this allows us to support for each...in */
			public nextNameIndex(idx: number): number;
			/** Overriding this allows us to support for each...in */
			public nextValue(index: number): any;
			public removeAll(): void;
		}
	}
}