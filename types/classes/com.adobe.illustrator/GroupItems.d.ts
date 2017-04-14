/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class GroupItems extends IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/** create a group item */
			public add(): GroupItem;
			/** create a group item from a vector graphics file */
			public createFromFile(imageFile: File): GroupItem;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 */
			public getByName(nameParam: string): GroupItem;
			/** Get the element in the collection at the provided index. */
			public index(idx: number): GroupItem;
			/** Overriding this allows us to support for each...in */
			public nextNameIndex(idx: number): number;
			/** Overriding this allows us to support for each...in */
			public nextValue(index: number): any;
			public removeAll(): void;
		}
	}
}