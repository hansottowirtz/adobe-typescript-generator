/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class TextFrames extends IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/** create a point text frame item */
			public add(): TextFrame;
			/** Create an area text frame item. */
			public areaText(textPath: PathItem, orientation: TextOrientation, baseFrame: TextFrame, postFix: boolean): TextFrame;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 */
			public getByName(nameParam: string): TextFrame;
			/** Get the element in the collection at the provided index. */
			public index(idx: number): TextFrame;
			/** Overriding this allows us to support for each...in */
			public nextNameIndex(idx: number): number;
			/** Overriding this allows us to support for each...in */
			public nextValue(index: number): any;
			/** Create an on-path text frame item. */
			public pathText(textPath: PathItem, startTValue: number, endTValue: number, orientation: TextOrientation, baseFrame: TextFrame, postFix: boolean): TextFrame;
			/** Create a point text frame item. */
			public pointText(anchor: any[], orientation: TextOrientation): TextFrame;
			public removeAll(): void;
		}
	}
}