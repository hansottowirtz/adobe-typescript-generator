/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Symbols extends IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/** create a symbol */
			public add(sourceArt: PageItem, registrationPoint: SymbolRegistrationPoint): Symbol;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 */
			public getByName(nameParam: string): Symbol;
			/** Get the element in the collection at the provided index. */
			public index(idx: number): Symbol;
			/** Overriding this allows us to support for each...in */
			public nextNameIndex(idx: number): number;
			/** Overriding this allows us to support for each...in */
			public nextValue(index: number): any;
			public removeAll(): void;
		}
	}
}