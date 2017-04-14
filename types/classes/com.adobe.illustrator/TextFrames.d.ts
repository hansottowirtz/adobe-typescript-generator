/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class TextFrames extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/** create a point text frame item */
			public add(): Adobe.Illustrator.TextFrame;
			/** Create an area text frame item. */
			public areaText(textPath: PathItem, orientation: TextOrientation, baseFrame: TextFrame, postFix: boolean): Adobe.Illustrator.TextFrame;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 */
			public getByName(nameParam: string): Adobe.Illustrator.TextFrame;
			/** Get the element in the collection at the provided index. */
			public index(idx: number): Adobe.Illustrator.TextFrame;
			/** Overriding this allows us to support for each...in */
			public nextNameIndex(idx: number): number;
			/** Overriding this allows us to support for each...in */
			public nextValue(index: number): any;
			/** Create an on-path text frame item. */
			public pathText(textPath: PathItem, startTValue: number, endTValue: number, orientation: TextOrientation, baseFrame: TextFrame, postFix: boolean): Adobe.Illustrator.TextFrame;
			/** Create a point text frame item. */
			public pointText(anchor: any[], orientation: TextOrientation): Adobe.Illustrator.TextFrame;
			public removeAll(): void;
		}
	}
}