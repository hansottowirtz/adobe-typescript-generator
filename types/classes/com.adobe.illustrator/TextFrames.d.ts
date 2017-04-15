/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class TextFrames extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/** create a point text frame item */
			public add(): Adobe.Illustrator.TextFrame;
			/**
			 * Create an area text frame item.
			 * @param {Adobe.Illustrator.PathItem} textPath - the path item 
			 * associated with the text frame
			 * @param {Adobe.Illustrator.TextOrientation} orientation - the 
			 * orientation of the text ( default: 
			 * TextOrientation.HORIZONTAL )
			 * @param {Adobe.Illustrator.TextFrame} baseFrame - the base 
			 * text frame if it has one
			 * @param {boolean} postFix - whether to postfix/prefix the new 
			 * text frame to the specified base text frame ( default: true 
			 * )
			 */
			public areaText(textPath: Adobe.Illustrator.PathItem, orientation: Adobe.Illustrator.TextOrientation, baseFrame: Adobe.Illustrator.TextFrame, postFix: boolean): Adobe.Illustrator.TextFrame;
			/**
			 * Get the first element in the collection with the provided 
			 * name.
			 * @param {string} nameParam - 
			 */
			public getByName(nameParam: string): Adobe.Illustrator.TextFrame;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx - 
			 */
			public index(idx: number): Adobe.Illustrator.TextFrame;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx - 
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index - 
			 */
			public nextValue(index: number): any;
			/**
			 * Create an on-path text frame item.
			 * @param {Adobe.Illustrator.PathItem} textPath - the path item 
			 * associated with the text frame
			 * @param {number} startTValue - the start position of text 
			 * along a path, as a value relative to the path's segments 
			 * (path text only) ( default: 0.0 )
			 * @param {number} endTValue - the end position of text along a 
			 * path, as a value relative to the path's segments (path text 
			 * only) ( default: 0.0 )
			 * @param {Adobe.Illustrator.TextOrientation} orientation - the 
			 * orientation of the text ( default: 
			 * TextOrientation.HORIZONTAL )
			 * @param {Adobe.Illustrator.TextFrame} baseFrame - the base 
			 * text frame if it has one
			 * @param {boolean} postFix - whether to postfix/prefix the new 
			 * text frame to the specified base text frame ( default: true 
			 * )
			 */
			public pathText(textPath: Adobe.Illustrator.PathItem, startTValue: number, endTValue: number, orientation: Adobe.Illustrator.TextOrientation, baseFrame: Adobe.Illustrator.TextFrame, postFix: boolean): Adobe.Illustrator.TextFrame;
			/**
			 * Create a point text frame item.
			 * @param {any[]} anchor - the position (coordinates) of the 
			 * anchor point
			 * @param {Adobe.Illustrator.TextOrientation} orientation - the 
			 * orientation of the text ( default: 
			 * TextOrientation.HORIZONTAL )
			 */
			public pointText(anchor: any[], orientation: Adobe.Illustrator.TextOrientation): Adobe.Illustrator.TextFrame;
			public removeAll(): void;
		}
	}
}