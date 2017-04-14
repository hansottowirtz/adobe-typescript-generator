/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Documents extends IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/** a document */
			public add(documentColorSpace: DocumentColorSpace, width: number, height: number, numArtboards: number, artboardLayout: DocumentArtboardLayout, artboardSpacing: number, artboardRowsOrCols: number): Document;
			/** create a document from the preset */
			public addDocument(startupPreset: string, presetSettings: DocumentPreset): Document;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 */
			public getByName(nameParam: string): Document;
			/** Get the element in the collection at the provided index. */
			public index(idx: number): Document;
			/** Overriding this allows us to support for each...in */
			public nextNameIndex(idx: number): number;
			/** Overriding this allows us to support for each...in */
			public nextValue(index: number): any;
		}
	}
}