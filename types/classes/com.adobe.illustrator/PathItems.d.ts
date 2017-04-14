/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PathItems extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/** create a path */
			public add(): Adobe.Illustrator.PathItem;
			/** Create an elliptical path item. */
			public ellipse(top: number, left: number, width: number, height: number, reversed: boolean, inscribed: boolean): Adobe.Illustrator.PathItem;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 */
			public getByName(nameParam: string): Adobe.Illustrator.PathItem;
			/** Get the element in the collection at the provided index. */
			public index(idx: number): Adobe.Illustrator.PathItem;
			/** Overriding this allows us to support for each...in */
			public nextNameIndex(idx: number): number;
			/** Overriding this allows us to support for each...in */
			public nextValue(index: number): any;
			/**
			 * Used to create a regular polygon path item. Not for path 
			 * item access.
			 */
			public polygon(centerX: number, centerY: number, radius: number, sides: number, reversed: boolean): Adobe.Illustrator.PathItem;
			/**
			 * Used to create a rectangular path item. Not for path item 
			 * access.
			 */
			public rectangle(top: number, left: number, width: number, height: number, reversed: boolean): Adobe.Illustrator.PathItem;
			public removeAll(): void;
			/**
			 * Used to create a rounded-corner rectangular path item. Not 
			 * for path item access.
			 */
			public roundedRectangle(top: number, left: number, width: number, height: number, horizontalRadius: number, verticalRadius: number, reversed: boolean): Adobe.Illustrator.PathItem;
			/**
			 * Used to create a star-shaped path item. Not for path item 
			 * access.
			 */
			public star(centerX: number, centerY: number, radius: number, innerRadius: number, points: number, reversed: boolean): Adobe.Illustrator.PathItem;
		}
	}
}